import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'

const url='https://pokeapi.co/api/v2/pokemon?limit=151'
const headers={
    // "Cache-control":"no-cache"
}

const clientSide = () => {
    const [pokemons,setPokemons]=useState([])

   useEffect(() => {
     const fetchData=async()=>{
      const res= await axios.get(url,{headers})
      const promises=res.data.results.map((pokemon)=>{
            return axios.get(pokemon.url,{headers})
        })
        
        const responses=await Promise.all(promises)

        const pokeData= responses.map((res)=>{
            return {
                name: res.data.name,
                imgUrl: res.data.sprites.front_default,
            }
        })
            //  console.log(pokeData);
            setPokemons(pokeData)
     } 
   
     fetchData() 
  
   }, [])
  

    console.log(pokemons);

  return pokemons.map((pokemon)=>{
     return <div key={pokemon.name}>
                  <h2>{pokemon?.name}</h2>
                 <img src={pokemon.imgUrl} />
                  <hr/>
            </div>

  })
}

export default clientSide;