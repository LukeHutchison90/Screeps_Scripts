var roleHarvester = require('role.harvester');
var roleWorker = require('role.worker');
var phase1 = require('phase1');

module.exports.loop = function () {
    
    phase1.run()

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'worker') {
            roleWorker.run(creep);
        }
    }
}