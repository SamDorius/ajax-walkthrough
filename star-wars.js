import axios from 'axios';

let episodeNum = Math.ceil(Math.random() * 6)

axios.get('https://swapi.dev/api/films/' + episodeNum + '/') 
.then((response) => 
{
    //console.log(response.data)
    document.getElementById("star-wars-movie").innerHTML = response.data.title
})
.catch((error) => 
{
    console.log(error)
})