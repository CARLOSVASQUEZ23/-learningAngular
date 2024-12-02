// function addNumber( a:number, b:number ){
//     return (a + b)
// }

// const result: number = addNumber(1,25)

// //Ahora en una funcion de flecha

// const addNumbers = (a:number, b:number):number => {
//     return a + b 
// }
// const otroResultado = addNumbers(500, 500);



// const resltadoMulti: number = multiply(5);

// console.log(otroResultado);
// console.log(resltadoMulti);
// console.log(result);


// const multiply = (firstnumber:number, secondNumber?:number, base:number = 10):number => {
//     return firstnumber * base;
// }

//ejemplo #2

interface Character {
    name: string,
    hp: number,
    showHp: () => void
}

const healCharacter = (character: Character, amount:number) =>{
    character.hp += amount;
}

const strider = {
    name: 'Carlos',
    hp: 60,
    showHp(){
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healCharacter(strider, 50)
strider.showHp()

export{}