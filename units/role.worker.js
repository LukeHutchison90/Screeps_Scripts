var roleWorker = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.store.getUsedCapacity() == 0){creep.memory.harvest = true}
        if(creep.store.getFreeCapacity() == 0){creep.memory.harvest = false}
        
	    if(creep.memory.harvest == true) {
            var source = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
	}
};

module.exports = roleWorker;