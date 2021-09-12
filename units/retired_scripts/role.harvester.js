var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.store.getUsedCapacity() == 0){creep.memory.current_task = 'harvest'}
        if(creep.store.getFreeCapacity() == 0){creep.memory.current_task = 'haul'}
        
        /**
         * Making Use of an if statement for worker logic, as Harvesters are effectively mono-task        
        **/

	    if(creep.memory.current_task == 'harvest') {
            // replace value with route to assigned source id when implemented
            var source = Game.getObjectById(creep.memory.assigned_source)
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

module.exports = roleHarvester;