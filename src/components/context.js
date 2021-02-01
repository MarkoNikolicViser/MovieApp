import React,{createContext, useState,useEffect} from 'react'

export const MovieContext=createContext();

export const MovieProvider=props=>{

    const[input,setInput]=useState("");
    const[inputYear,setInputYear]=useState("");
    const[query, setQuery]=useState(
      {
        title:"action",
        year:"",
        type:""
      }
    );
    const[movies,setMovies]=useState([]);
    const[togle, setTogle]=useState(false); /// togle za pretragu po naslovu
    const[togle2, setTogle2]=useState(false); /// togle za pretragu po godini
    const[togle3, setTogle3]=useState(false); /// togle za seriju
    const[togle4, setTogle4]=useState(false); /// togle za film

    const API_KEY="228ed6f5";
    
  

    const GetData=async()=>{
      const response=await(await fetch(`https://www.omdbapi.com/?s=${query.title}&y=${query.year}&type=${query.type}&apikey=${API_KEY}`).catch(ErrHandler)).json();
        if(response.code &&response.code==400){
        return;
        }
        else{
          setMovies(response.Search);
        }
    }

    const ErrHandler=(err)=>{
      let resp=new Response(
        JSON.stringify({
          code:400,
          message:"Error"
        })
      );
      return resp;
    }

    useEffect(()=>{
    GetData();
    },[query])
    
   return <MovieContext.Provider value={{query:[query,setQuery],
     movies:[movies,setMovies],
     input:[input,setInput],
     inputYear:[inputYear,setInputYear],
    togle:[togle,setTogle],
    togle2:[togle2,setTogle2],
    togle3:[togle3,setTogle3],
    togle4:[togle4,setTogle4],
    }}>{props.children}</MovieContext.Provider>
}
