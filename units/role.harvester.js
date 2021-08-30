var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        /**
         * Replacing "current_task" memory field with a 
           boolean "harvest" field, as harvesters are mono-task
        **/
        if(creep.store.getUsedCapacity() == 0){creep.memory.current_task = 'harvest'}
        if(creep.store.getFreeCapacity() == 0){creep.memory.current_task = 'haul'}
        

	    if(creep.memory.current_task == 'harvest') {
            // replace value with route to assigned source id when implemented
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

module.exports = roleHarvester;