var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        /**
         * Stripped out worker logic, as Harvesters are effectively mono-task        
        **/
            var source = Game.getObjectById(creep.memory.assigned_source)
            if(creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        
	}
};

module.exports = roleHarvester;