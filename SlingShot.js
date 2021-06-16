class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB ;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
     
    fly(){
        // to release the bird from the sling, when the mouse is Dragged and released (NULL-- EMPTY)
        this.sling.bodyA= null;
    }

    display(){
        if( this.sling.bodyA){
         var pointA = this.sling.bodyA.position;
         var pointB = this.pointB;
           strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
        }
        
    }
    
}