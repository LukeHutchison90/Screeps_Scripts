var roadBuilder = {
   run: function(){
       let roadsFinished = false;
       // check the set game phase and that the roads are not planned
       if(Memory.game_phase == 1 && roadsFinished == false){
           // grab an array of POS objects for each source in the room
           let sources = Game.spawns["Spawn1"].room.find(FIND_SOURCES);
           // for each of those sources
           for(source in sources){
               // map the route from the 'spawn' to the resource
               // then for each set of co-ords on the route
               // place a construction site for "roads"
               
           }
       }
   }
}

module.exports = roadBuilder;