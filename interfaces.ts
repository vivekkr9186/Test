interface Iperson{
    firstName:string;
    lastName:string;
    sayHello:()=>string
    }
    var customer:Iperson={
    firstName:"Tom",
    lastName:"Moddy",
    sayHello():string { return "Hi i am here"}
    }
    console.log("---customer---");
    console.log(customer.firstName);
    console.log(customer.lastName);
    console.log(customer.sayHello());