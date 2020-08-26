class Slingshot{
    constructor(body1, point2){
        var options = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = point2
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
        
    }

    display(){
        if(this.slingshot.bodyA!=null){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
   fly(){
       this.slingshot.bodyA = null
   }
   attach(body){
    this.slingshot.bodyA = body;
    }
}

