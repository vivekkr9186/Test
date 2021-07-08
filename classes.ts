class Car1{
    engine:string;
    constructor(engine:string){
      this.engine=engine;
 }
 Display():void{
 console.log("Engine is "+ this.engine);
 }
 }
 var obj=new Car1("R15");
 console.log(obj.engine);
 console.log(obj.Display());