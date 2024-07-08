import Carousel from 'react-bootstrap/Carousel'; 
  
function Carrusel(props) { 

// Quiza algún día hacer una condicional para separar en 2 arrays los pokemons de día,
// Con los que frecuentan la noche

//   const DatosPokemons=props.info_pokemons
//   console.log(DatosPokemons)

//   const PokeDía=[]
//   const PokeNoche=[]

//   if(DatosPokemons.tiempo==="Día"){
//     PokeDía.push(DatosPokemons.nombre_pokemon)
//   }else{
//     PokeNoche.push(DatosPokemons)
//   }
//   console.log('Día',PokeDía)

    return ( 
    
    <div style={{ display: 'block', width: 700, padding: '0px',margin:'0px' }}> 
       
       <h1 style={{borderStyle:'groove',borderColor:'gold'}}>
        Pokemonos
        </h1>
        
        <Carousel style={{width:'400px',backgroundImage:`url("https://i.pinimg.com/originals/91/0d/0b/910d0b0efeaccf9543398633d6c223f6.jpg")`,
            backgroundRepeat:'no-repeat',backgroundPosition:'center' ,margin:'0 auto'}}> 
        
            {props.info_pokemons.map((datospokemons)=>( 
            <Carousel.Item key={datospokemons.nombre_pokemon} interval={3000} > 
            <img style={{margin:'0px',padding:'0px'}}
                className="d-block w-100"
                src={datospokemons.img_pokemon}
                alt='pokemon dentro de la lista'
            /> 
            <Carousel.Caption style={{color:'black',textTransform:'capitalize',margin:'15px',backgroundColor: 'rgb(250 250 250 / 50%)',}}> 
                <h3 style={{margin:'0px'}}>{(datospokemons.nombre_pokemon)}</h3> 
            </Carousel.Caption>  
            </Carousel.Item> ))}
        </Carousel> 

        <Carousel style={{width:'400px',backgroundImage:`url("https://img.freepik.com/fotos-premium/paisaje-anime-campo-nubes_900775-9778.jpg")`,
            backgroundRepeat:'no-repeat',backgroundPosition:'center' ,margin:'0 auto'}}> 
        
            {props.info_pokemons.map((datospokemons)=>(  
            <Carousel.Item key={datospokemons.nombre_pokemon} interval={3000} > 
            <img style={{margin:'20px',padding:'0px'}}
                className="d-block w-100"
                src={datospokemons.img_pokemon}
                alt='pokemon dentro de la lista'
            /> 
            <Carousel.Caption style={{color:'black',textTransform:'capitalize',margin:'15px',backgroundColor: 'rgb(250 250 250 / 50%)',}}> 
                <h3 style={{margin:'0px'}}>{(datospokemons.nombre_pokemon)}</h3> 
            </Carousel.Caption>  
            </Carousel.Item> ))}
        </Carousel> 
      
    </div> 
  ); 
}

export default Carrusel