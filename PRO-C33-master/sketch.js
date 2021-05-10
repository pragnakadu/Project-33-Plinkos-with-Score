var Engine = Matter.Engine ,
      World = Matter.World ,
      Events = Matter.Events,
      Bodies = Matter.Bodies ;
 
//var engine ,world

var divisionHeight=300;
var score = 0 
var particle
var Turn = 0

var ground 
var particles = [particle];
var plinkos = [];
var divisions = [];



var gameState = "start"

function setup() {

  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, 300));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    

    
}
 


function draw() {
  background("black");
  

  textSize(  40)
  fill("yellow")
  text("Score : "+score,20,30);

  //text between divisions
  textSize(20)
  text("500",25,600)
  text("500",110,600)
  text("500",185,600)
  text("500",265,600)

  text("100",340,600)
  text("100",420,600)
  text("100",500,600)
  text("200",580,600)    
  text("200",660,600)
  text("200",750,600)

  Engine.update(engine);

  ground.display()

  
  if ( gameState ==="end") {
     console.log(gameState)
     background("black");
     fill("red");
     textSize(100);
     text("Game Over", 200, 400);
  
 } 

 for (var i = 0; i < plinkos.length; i++) {
     
   plinkos[i].display();
                                        }
                                          

    if (particle!=null) {

        particle.display()

       if(particle.body.position.y>760) {

       if (particle.body.position.x <300)
         {
           score = score+500
           particle  = null
           if(Turn>= 5)gameState = "end"


    }      
   

   else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( Turn>= 5) gameState ="end";

                    
              }

    else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( Turn>= 5)  gameState ="end";

              }      
              
        }
    }
      
  
 for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
                                         }

   

}



function mousePressed(){
   if(gameState!== "end"){   
      Turn++;
      particle = new Particle(mouseX , 10 , 10 , 10)
   }
}