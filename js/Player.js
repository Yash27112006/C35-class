class Player{
    constructor(){

    }
    getCount(){
       var countRef = database.ref('playerCount')
       countRef.on("value",function(data){
           playerCount = data.val();
       })
    }
    updateCount(count){
       database.ref('/').update({
           playerCount : count
       })
    }
    update(name){
       var Playerindex = "Player"+playerCount;
       database.ref(Playerindex).set({
           name : name
       })
    }
}