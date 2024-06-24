function Datos(props){
    return(
       
         <div className="Contenedor_Pokemon">
             {props.pokemons.map((datospokemons)=>(
             <div className="pokemon">
                 <h1>{datospokemons.nombre_pokemon}</h1>
                 <img src={datospokemons.img_pokemon} />
             </div>
             ))}
         </div>
    )
}
export default Datos;