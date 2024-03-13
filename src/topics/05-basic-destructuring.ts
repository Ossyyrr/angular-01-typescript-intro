

interface Details {
    autor: String;
    year: number;
    details: {
        song: String;
        album: String;
    }
}

const audioPlayer: Details = {
    autor: 'John',
    year: 2020,
    details: {
        song: 'Song 1',
        album: 'Album 1'
    }
}


// Destructuring
const { autor, year, details: { song, album } } = audioPlayer;
console.log(autor);
console.log(year);
console.log(song);
console.log(album);




// Destructuring arrays
const characters: String[] = ['John', 'Pepe', 'Maria', 'Lucas'];
const [, , maria,] = characters;
console.log(maria);

export { }