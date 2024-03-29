class Form{
    constructor(){
        this.input = createInput().attribute("placeHolder","enter your character");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing Game");
        title.position(displayWidth/2-50, displayHeight/4-100);
       
        this.input.position(displayWidth/2-40, displayHeight/3);
        
        this.button.position(displayWidth/2+20, displayHeight/2-60);
        
          this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
          playerCount++;
          player.index=playerCount;
          player.updateCount(playerCount)
          player.name=this.input.value()
          player.update();
          this.greeting.html("Hello " + player.name)
          this.greeting.position(displayWidth/2-40, displayHeight/3);
        });
        }
    hide(){
        this.input.hide();
        this.button.hide(); 
        this.greeting.hide();
    }   
}