import React from 'react';
import "./CSS/sondage.css";
import {multiple_choice} from './multiple_choice';
import {checkbox} from './checkbox';
import {required1} from './details';
import {zone_texte1,ajouter_zone} from './zone_texte';
import { FaAccessibleIcon,Fa500Px,FaAngellist } from "react-icons/fa";
import {Enregistrer} from "./enregistrer";









function Sondage(){
   
    return(
        <>
        <div id='faki'>
            <div id='test'>
            <div className='remove'>
                <button id='multiple_choice' className='type_question' onClick={multiple_choice}><FaAccessibleIcon/></button>
                <button className='type_question' onClick={zone_texte1}><Fa500Px/></button>
                <button className='type_question' onClick={checkbox}><FaAngellist/></button>
                <button id = "required"onClick={required1}>required</button>
                
            </div>
            <div className='question'>
                <input className='input'></input>
                <button >Zone de texte</button>
            </div>
            </div>
            <div id='ajout'>
                <button onClick={ajouter_zone}>Ajouter</button>
            </div>
            <button id = 'enregistrer'onClick={Enregistrer}>Enregistrer</button>
            
            
        </div>
        </>
    );
}

export{Sondage};