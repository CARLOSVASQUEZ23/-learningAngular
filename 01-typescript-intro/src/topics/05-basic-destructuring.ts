interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string
    year: number
}



 const audioPlayer: AudioPlayer ={
     audioVolume: 90,
     songDuration: 120,
     song: 'Mariposa Traicionera',
     details:{
         author: 'Mana',
         year: 2001
     }
 }


//Constantes
 const {audioVolume} = audioPlayer;
 const {songDuration} = audioPlayer;
 const {details:{
     author,
     year
 }} = audioPlayer;


//Consola
 console.log(`Volumen de la música ${audioVolume}`);
 console.log(`Duración de la canción ${songDuration}`);
 console.log(`El autor de la canción es ${author} y el año estrenado fue en ${year}`)

// const [ a, b, No = 'No hay personaje']: string[] = ['Jutao', 'Navia']
// console.log(`Personaje del Genshing ${a}` );


export {}