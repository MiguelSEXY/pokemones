import Datos from './Datos.jsx'
import './App.css'

function App() {
const pokemons=[
  {
    nombre_pokemon:"Bulbasaur",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    nombre_pokemon:"Gastly",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  },
  {
    nombre_pokemon:"raichu",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
    nombre_pokemon:"staryu",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
  },
  {
    nombre_pokemon:"squirtle",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    nombre_pokemon:"chimchar",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png"
  },
]
  return (
    <Datos pokemons={pokemons}/>
    
  )
}

export default App
