var phase1 = {
  run: function () {
    
    // Find all sources in the room containing "Spawn1"
    var sourceObjectArray = Game.spawns["Spawn1"].room.find(FIND_SOURCES);

    // sort the array closest - furthest away
    for (let source of sourceObjectArray) {
      source.range = Game.spawns["Spawn1"].pos.getRangeTo(source);
    }
    var sortedSourceArray = sourceObjectArray.sort(function (a, b) {
      return b.range - a.range;
    });

    // Loop over each source, spawning and assigning workers
    for (const source of sortedSourceArray) {
        
      // spawn a harvester if one does not exist
        Game.spawns["Spawn1"].spawnCreep(
          [WORK, CARRY, MOVE, MOVE],
          "Harvester_" + sortedSourceArray.indexOf(source),
          {
            memory: {
              assigned_source: source.id,
              role: "harvester",
              current_task: "harvest",
            },
          }
        );
      
      //spawn workers A + B if they don't exist
      if (Game.creeps.hasOwnProperty("Worker_" + sortedSourceArray.indexOf(source) + "_A") != true) {
        Game.spawns["Spawn1"].spawnCreep(
          [WORK, CARRY, MOVE, MOVE],
          "Worker_" + sortedSourceArray.indexOf(source) + "_A",
          {
            memory: {
              assigned_source: source.id,
              role: "worker",
              current_task: "harvest",
            },
          }
        );
        
        Game.spawns["Spawn1"].spawnCreep(
          [WORK, CARRY, MOVE, MOVE],
          "Worker_" + sortedSourceArray.indexOf(source) + "_B",
          {
            memory: {
              assigned_source: source.id,
              role: "worker",
              current_task: "harvest",
            },
          }
        );
      }    
    }
  },
};

module.exports = phase1;
