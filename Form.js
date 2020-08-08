class Form {
  constructor(){
      this.enter = createElement("h3", "ENTER YOUR NAME");
      this.input = createInput();
      this.button = createButton("PLAY");
      this.greeting = createElement("h3");      
      this.reset = createButton("RESET");  
      this.i1 = createElement("h2", "Press the up and right arrows to move");
      this.i2 = createElement("h2", "You go back to start if you hit a hurdle");
      this.i3 = createElement("h2", "Good Luck!!");
  }

  hide(){
      this.greeting.hide();
      this.input.hide();
      this.button.hide();
      this.enter.hide();
      this.i1.hide();
      this.i2.hide();
      this.i3.hide();
  }

  display(){
      var title = createElement("h1");
      title.html("HURDLES");
      title.position(570,0);
      
      this.enter.position(550,130);
      this.input.position(530,200);        
      this.button.position(600,240);
      this.reset.position(displayWidth-100,20);
      this.i1.position(500,300);
      this.i2.position(500,340);
      this.i3.position(500,380);

      this.button.mousePressed(()=>{
          this.enter.hide();
          this.input.hide();
          this.button.hide();

          player.name = this.input.value();
          playerCount+=1;
          player.index = playerCount;

          player.update();
          player.updateCount(playerCount);

         this.greeting.html("Welcome " + player.name);
         this.greeting.position(530,160);
      })

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
    })
  }
}