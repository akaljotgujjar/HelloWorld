class HelloWorld {

    constructor(public firstName: string, public lastName: string) {

    }

    sayHello() {
        console.log("Hello World!" + "My name is " + this.firstName + " " + this.lastName);
    }
} // end of class HelloWorld 

const myHelloInstance = new HelloWorld("Akaljot", "Gujjar");

myHelloInstance.sayHello();
