var roleWorker = {
  /** @param {Creep} creep **/
  run: function (creep) {

    // variable to hold a filtered array of structtures that are not full of energy
    let energyRefillArray = creep.room.find(FIND_MY_STRUCTURES, {
        filter: (structure) => {
          return (
            (structure.structureType == STRUCTURE_EXTENSION ||
              structure.structureType == STRUCTURE_SPAWN) &&
            structure.store.getFreeCapacity() != 0
          );
        },
      });

    // current WIP construction sites array
    let constructionSites = creep.room.find(FIND_MY_CONSTRUCTION_SITES);

    // refill creep if needed
    if (creep.store.getUsedCapacity() == 0) {
      creep.memory.current_task = "collect";
    }
    // then decide on a job
    else {
      
      if (energyRefillArray.length > 0) {
        // P1, refill storage
        creep.memory.current_task = "deposit";
      } else if (constructionSites.length > 0) {
        // P2, if something needs built, build it
        creep.memory.current_task = "build";
      } else {
        // P3, use energy to upgrade the room controller
        creep.memory.current_task = "upgrade";
      }
    }

    //then perform the job
    switch (creep.memory.current_task) {
      case "collect":
        // The resource should be at the feet of the partnered Harvester
        var source =
          Game.creeps["Harvester_" + creep.memory.assigned_source].pos;
        if (creep.pickup(source) == ERR_NOT_IN_RANGE) {
          creep.moveTo(source);
        }
        break;
      case "deposit":
        if (
          creep.transfer(energyRefillArray[0], RESOURCE_ENERGY) ==
          ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(energyRefillArray[0]);
        }
        break;
      case "build":
        if (creep.build(constructionSites[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(constructionSites[0]);
        }
        break;
      case "upgrade":
        if (
          creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE
        ) {
          creep.moveTo(creep.room.controller);
        }
        break;
      default:
        console.log("Misallocated worker ...");
    }
  },
};

module.exports = roleWorker;
