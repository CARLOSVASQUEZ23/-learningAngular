
export class Person{
    public firstName: string;
    public lastName: string;
    public address: string;

    constructor (name: string, lastName: string, address:string){
        this.firstName = name
        this.lastName = lastName
        this.address = address
    }
}

// export class Hero extends Person{

//      constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//      ){
//         super(realName, 'NY')
//      }
// }

export class Hero{
    

    constructor(
       public alterEgo: string,
       public age: number,
       public realName: string,
       public person: Person,
    ){
    }
}

const person = new Person('Tony', 'Starck', 'Ny')
const iroman = new Hero ('Iroman', 45, 'Tony', person)

console.log(iroman);

