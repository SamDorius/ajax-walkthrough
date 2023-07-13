import mountainSongs from './mountain.json' assert { type: "json" };

//NOTE: It may help to view/transform the JSON through a formatter

//1. Log an array of the keys of the main object in the JSON file
let arr = [];
for (let key in mountainSongs)
{
    arr.push(key)
}
console.log(arr)

//2. Get the title of the first track in the data
console.log(mountainSongs.results[0].trackName)

//3. Get all the artists present in the data
for (let i = 0; i < mountainSongs.results.length; i++)
{
    console.log(mountainSongs.results[i].artistName)
}
