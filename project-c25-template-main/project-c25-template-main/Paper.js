class paper{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = loadImage("paper.png");
        this.body=Bodies.rectangle(this.x,this.y,this.height,this.width,options);
        World.add(world,this.body);
    }


 display()
 {

    var paperpos=this.body.position;
        push()
            translate(paperpos.x, paperpos.y);	
            //strokeWeight(4);
			//stroke("black");
            
            imageMode(CENTER);
			image(this.image, 0, 0, this.width, this.height);
		pop()
    
    }
}