// const skill: string[] = ['bash', 'Counter', 'healing' ];



interface Character {
    name: string;
    hp:number;
    skills: string[];
    hometown?: string;
}

const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'Counter'],
}

strider.hometown = 'Cañadas'

console.table(strider);


export {}