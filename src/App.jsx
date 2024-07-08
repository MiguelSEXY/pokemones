import Datos from './Datos.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselPoke from './components/Carousel.jsx'
import Carrusel from './components/Carousel.jsx'

 function App() {
const pokemons=[
  {
    nombre_pokemon:"Bulbasaur",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    tiempo:'Día'
  },
  {
    nombre_pokemon:"Gastly",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    tiempo:'Noche'
  },
  {
    nombre_pokemon:"raichu",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    tiempo:'Día'
  },
  {
    nombre_pokemon:"staryu",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    tiempo:'Día'
  },
  {
    nombre_pokemon:"squirtle",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    tiempo:'Día'
  },
  {
    nombre_pokemon:"chimchar",
    img_pokemon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    tiempo:'Día'
  },
]
  return (
    <Carrusel info_pokemons={pokemons}/>
  )
}

export default App
