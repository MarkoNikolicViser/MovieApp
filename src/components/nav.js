import React, {useEffect, useContext,useRef} from 'react'
import Loupe from '../images/loupe.svg'
import Calendar from '../images/calendar.svg'
import Home from '../images/home.svg'
import Clapper from '../images/clapperboard.svg'
import Tv from '../images/television.svg'
import Plus from '../images/plus.svg'
import {MovieContext} from './context'



const Nav=()=>{

    const{togle, togle2,togle3, togle4}=useContext(MovieContext)
    const[togleValue, setTogleValue]=togle;
    const[togleValue2, setTogleValue2]=togle2;
    const[togleValue3, setTogleValue3]=togle3;
    const[togleValue4, setTogleValue4]=togle4;

    
    const LoupeRef=useRef(null);
    const CalendarRef=useRef(null);
    const SerijaRef=useRef(null);
    const FilmRef=useRef(null);

    const On=()=>{
        if(togleValue===false)
        setTogleValue(true)
        else{
            setTogleValue(false)
        }
    }

    const On2=()=>{
        if(togleValue2===false)
        setTogleValue2(true)
        else{
            setTogleValue2(false)
        }
    }

    useEffect(() => {
        if(togleValue===true)
        LoupeRef.current.style.display="block";
        else{
            LoupeRef.current.style.display="none";
        }
    }, [togleValue])
    
    useEffect(() => {
        if(togleValue2===true)
        CalendarRef.current.style.display="block";
        else{
            CalendarRef.current.style.display="none";
        }
    }, [togleValue2])


    const Serija=()=>{
        if(togleValue3===true)
        setTogleValue3(false)
        else{
           setTogleValue3(true);
        }
    }
    const Film=()=>{
        if(togleValue4===true)
        setTogleValue4(false)
        else{
           setTogleValue4(true);
        }
    }
    useEffect(() => {
        if(togleValue3===true){
        SerijaRef.current.style.display="block";
        FilmRef.current.style.display="none";
        }
        else{
        SerijaRef.current.style.display="none";
        }
        
    }, [togleValue3])

    useEffect(() => {
        if(togleValue4===true){
        FilmRef.current.style.display="block";
        SerijaRef.current.style.display="none";
        }
        else{
        FilmRef.current.style.display="none";
        }
        
    }, [togleValue4])

    return(
            <nav>
                <ul>
                    <li>
                        <hr ref={LoupeRef} />
                        <img onClick={On} src={Loupe} alt=""/>
                    </li>
                    <li>
                        <hr className="kuca"/>
                        <img src={Home} alt=""/>
                    </li>
                    <li>
                        <hr  ref={CalendarRef}/>
                        <img onClick={On2} src={Calendar} alt=""/>
                    </li>
                    <li>
                        <hr ref={SerijaRef}/>
                        <img src={Tv} onClick={Serija} alt=""/>
                    </li>
                    <li>
                        <hr ref={FilmRef}/>
                        <img src={Clapper} onClick={Film} alt=""/>
                    </li>
                    <li>
                        <hr/>
                        <img src={Plus} alt=""/>
                    </li>
                </ul>
            </nav>
    )
}
export default Nav;