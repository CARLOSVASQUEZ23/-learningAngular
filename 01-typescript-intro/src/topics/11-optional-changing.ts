

export interface Passanger{
    name: string;
    children?: string[]
}

const passenger1: Passanger = {
    name: 'Carlos'
};

const passenger2: Passanger = {
    name: 'Julisa',
    children: ['Damaris','Sury']
}


const printChildren = (passager: Passanger) => {

    const {name} = passager
    const howManyChildren = passager.children?.length || 0;
    console.log(`${name} tiene ${howManyChildren} hijos`);
}

printChildren(passenger1);
printChildren(passenger2);