class Shape{
    Area:Number;
    constructor(a:Number)
    {
     this.Area=a;
    }
    }
    class Circle extends Shape{
    Display():void{
    console.log("Area of the circle"+this.Area);
    }
    }
    var ob=new Circle(2);
    ob.Display();