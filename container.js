class Container {
    constructor(x,y,width,height,options)
    {
    
        var options ={
    
            restitution : 1
        }
        {
        this.body = Bodies.rectangle (x,y,width,height,options);
        World.add(world,this.body);
        }
    }
    display()
    {
    var pos = this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
    
    }
    
    
    }