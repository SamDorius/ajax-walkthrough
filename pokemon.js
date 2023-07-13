import axios from 'axios';

let pokeButton = document.getElementById("get-pokemon")
pokeButton.addEventListener("click", () =>
{
    let amount = document.getElementById("num-pokemon").value

    let url = 'https://pokeapi.co/api/v2/pokemon?limit=' + amount

    axios.get(url)
    .then((response) =>
    {
        let pokemonList = ""
        let pokmeonNameUl = document.getElementById("pokemon-list")
        pokmeonNameUl.innerHTML = ''
        for (let i = 0; i < response.data.results.length; i++)
        {
            let newListItem = document.createElement("li")
            newListItem.innerHTML = response.data.results[i].name
            pokmeonNameUl.appendChild(newListItem)
        }
    })
    .catch((error) =>
    {
        console.log(error)
    })
})