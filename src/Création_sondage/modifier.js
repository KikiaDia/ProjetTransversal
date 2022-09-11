import $ from 'jquery';
import { zone_texte1, ajouter_zone} from './zone_texte';
import {checkbox} from './checkbox';
import {required1} from './details';
import {multiple_choice} from './multiple_choice';





const multiple_choice1 = ()=>{

}
const modifier = ()=>{
    $(document).ready(function(){
   
    $(".paragraphe").click(function(){
        $(this).hide('fast',function(){
            const text = $(this).text();
            /*const text = document.createElement('p');*/
            const test = document.getElementById("test");
            const required = document.createElement('button');
            const question = document.createElement("div");
            const input = document.createElement('input');
            
            const button = document.createElement('button');
            const button4 = document.createElement('button');
            
            const type = document.createElement("div");
            const div = document.createElement("div");
          
            const icon = document.getElementsByClassName("type_question");
            const choice = icon[0].cloneNode(true);
            const zone = icon[1].cloneNode(true);
            const check = icon[2].cloneNode(true);
            
            
            input.value = text;
        
            /* definition des elements HTML*/
            
            
            button.innerHTML = 'Zone de Texte';
            button4.innerHTML = 'Annuler';
            button4.id = 'annuler';
            
            type.className = 'remove1'
            input.className = 'love1';
            question.className = 'fatou1';
          
            choice.onclick = multiple_choice;
            choice.className = 'type_question';
            check.onclick = checkbox;
            check.className = 'type_question';
            zone.className = 'type_question';

            div.className = 'edited';
           
            zone.onclick = zone_texte1;
            
            required.innerHTML = 'required';
            required.id = 'required1';
            required.onclick = required1;
            /* CSS */
          
   
            /* ajout des éléments et suppression */    
            type.appendChild(choice);
            type.appendChild(zone);
            type.appendChild(check);
            type.appendChild(required);
            div.appendChild(type);
            div.appendChild(question);
            div.appendChild(button4);
            question.appendChild(input);
            question.appendChild(button);
            
           
            
            
   
           
            $(this).replaceWith(div);
            
        });
     

        });
    });


} 

export{modifier};