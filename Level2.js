class Level2{
    constructor(){
       this.plunger1 = new Plunger(width/3-80,height+10)
       this.plunger2 = new Plunger(width/2,20)
       this.plunger3 = new Plunger(width/1.5+15,height+10)
    
        
    }
    display() {
        this.plunger1.display(true)
        this.plunger2.display(false)
        this.plunger3.display(true)
    }
    remove() {
        this.plunger1.remove()
        this.plunger2.remove()
        this.plunger3.remove()
    }
    checkCollision2() {
        if (Matter.SAT.collides(ball.body,this.plunger1.body).collided) {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:79,y:-6})  
          }
          if (Matter.SAT.collides(ball.body,this.plunger2.body).collided) {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:6})  
          }
          if (Matter.SAT.collides(ball.body,this.plunger3.body).collided) {
            Matter.Body.applyForce(ball.body,ball.body.position,{x:79,y:-6})  
          }
    }
    
}