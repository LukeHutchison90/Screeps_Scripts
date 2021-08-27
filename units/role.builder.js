var roleBuilder = {

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
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length){
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE){
                    creep.moveTo(targets[0]);
                }
            }
        }
	}
};

module.exports = roleBuilder;