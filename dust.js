class Dust{
constructor(x,y,w,h)
{
    var options={
        isStatic:true
        }
    this.x=x;
    this.y=y;
    this.w=w,
    this.h=h
    this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
    this.image=loadImage("sprites/dustbingreen.png");
    World.add(world, this.body);

}
display (){
    imageMode (RADIUS);
    image (this.image,this.body.position.x,this.body.position.y,this.w,this.h);
}}