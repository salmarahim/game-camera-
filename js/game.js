class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        if(gameState === 0){
            player=new Player()
       var playercountRef=await database.ref("playerCount").once("value")
       if(playercountRef.exists()){
           playerCount=playercountRef.val()
           player.getcount();
       }
          form = new Form()
          form.display();
         
          
         
        }
      car1=createSprite(100,200,50,50);

      car2=createSprite(300,200,50,50);

      car3=createSprite(500,200,50,50);

      car4=createSprite(700,200,50,50);

      cars=[car1,car2,car3,car4]

   

      }

      play(){
        form.hide()  
        //textSize(30)
        //text('the game has begun',200,200)
         
        Player.getplayerinfo()

        if(allPlayers!==undefined){
         var index=0
         var x=0
         var y=0


        //var yPos=200
        for(var plr in allPlayers){
            index++;
            x+=200;
            
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;

           if(index===player.index){
            // fill("red")
            cars[index-1].shapeColor="red"
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
           }else{
            // fill("black") 
            cars[index-1].shapeColor="black"
           }

        //yPos=yPos+50
        //textSize(20)
        //text(allPlayers[plr].name+":"+allPlayers[plr].distance,250,yPos)
        
        }
        }
if(keyDown(UP_ARROW)){
player.distance=player.distance+50
player.update()


}
       




drawSprites();
      }
      
}