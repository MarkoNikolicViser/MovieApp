import React,{useContext,useEffect,useRef} from 'react'
import Nav from './nav'
import {MovieContext} from './context'
import Kartice from './homekartice'
import { ErrorBoundary } from './ErrorBoundery'

const Home=()=>{
    const{movies, togle,togle2, togle3, togle4, query, input, inputYear}=useContext(MovieContext);
    const[moviesValue,setMoviesValue]=movies;
    const[togleValue,setTogleValue]=togle;
    const[togleValue2,setTogleValue2]=togle2;
    const[togleValue3,setTogleValue3]=togle3;
    const[togleValue4,setTogleValue4]=togle4;
    const[inputValue,setInputValue]=input;
    const[inputYearValue,setInputYearValue]=inputYear;
    const[queryValue,setQueryValue]=query;


    const unosNaslova=useRef(null);
    const unosGodine=useRef(null);
    const unosSerije=useRef(null);
    const unosFilma=useRef(null);
    const Dugme=useRef(null);

  const InputHandler=(e)=>{

       setInputValue(e.target.value);
  }
  const InputYearHandler=(e)=>{
      setInputYearValue(e.target.value);
  }
  const SubmitHandler=(e)=>{
    e.preventDefault();
    
    if(typeof(inputValue) === 'undefined'||inputValue===""||inputValue===null)
    {
         alert("Sorry we dont have that movie in our database")
            setInputValue(""); 
    }        
            else
            {
                    if(togleValue3===true)
                setQueryValue({
                    title:inputValue,
                    year:inputYearValue,
                    type: "series"
                });
                else if(togleValue4===true)
                setQueryValue({
                    title:inputValue,
                    year:inputYearValue,
                    type: "movie"
                });
                else{
                    setQueryValue({
                        title:inputValue,
                        year:inputYearValue,
                        type: ""
                    });
                }
            }
            setInputValue("");
            setInputYearValue("");
        }


    useEffect(()=>{

     if(togleValue===true)
     {
         unosNaslova.current.style.transition="opacity 0.3s ease";
         unosNaslova.current.style.opacity="0.8"
         Dugme.current.style.transition="opacity 0.3s ease";
         Dugme.current.style.opacity="0.8"
         if(togleValue2===true){
         unosGodine.current.style.transition="opacity 0.3s ease";
         unosGodine.current.style.opacity="0.8"
         }
         else{
            unosGodine.current.style.opacity="0"
         }
         if(togleValue3===true){
            unosSerije.current.style.transition="opacity 0.3s ease";
         unosSerije.current.style.opacity="0.8"
       setTogleValue4(false)
         }
         else{
            unosSerije.current.style.opacity="0"
         }
         if(togleValue4===true){
            unosFilma.current.style.transition="opacity 0.3s ease";
            unosFilma.current.style.opacity="0.8"
          setTogleValue3(false)
            }
            else{
                unosFilma.current.style.opacity="0"
            }
     }
     else{
        unosNaslova.current.style.opacity="0"
        unosGodine.current.style.opacity="0"
        Dugme.current.style.opacity="0"
        unosSerije.current.style.opacity="0"
        unosFilma.current.style.opacity="0"
     }


    },[togleValue,togleValue2,togleValue3,togleValue4])


    const StrangerT=()=>{
        setQueryValue({
            title:"Stranger Things",
            year:inputYearValue,
            type: ""
        });
    }


    return(
        <>
        <form onSubmit={SubmitHandler}>
           <input value={inputValue} ref={unosNaslova} onChange={InputHandler}  className="pretraga-naslov" type="text" placeholder="Title"/>
           <input maxLength="4" value={inputYearValue} ref={unosGodine} onChange={InputYearHandler} type="text" className="pretraga-godinama" placeholder="year"/>
           <h1 ref={unosSerije} className="serija">TVShow</h1>
           <h1 ref={unosFilma} className="film">Movie</h1>
           <button ref={Dugme}>Search</button>
           </form>
        <div className="wrapper">
            <Nav/>
            <div className="home">
                <div className="prazan-div"/>
                <div className="naslov">
                    <div className="naslov1">
                    <h1>Stranger things</h1>
                    </div>
                    <p className="paragraf">When a young boy vanishes, a small town
                        uncovers a mystery involving secret
                        experiments, terrifying supernatural
                        and strange little girl.
                    </p>
                    <div className="dugmici">
                        <div onClick={StrangerT} className="play">
                        &#9658; Play
                        </div>
                        <a href="https://www.imdb.com/title/tt4574334/">
                        <div className="more-info">
                            More Info
                        </div>
                        </a>
                    </div>
                </div>
                <div className="pozadina">

                </div>
                </div>


        </div>
        <div className="kartice">
                    {moviesValue.map((movie)=>
                   (
                      <ErrorBoundary>
                       <Kartice movie={movie} key={Math.random()*1000}/>
                       </ErrorBoundary>

                   )
                    )}
                </div>
        </>
    )
                          
}
export default Home;