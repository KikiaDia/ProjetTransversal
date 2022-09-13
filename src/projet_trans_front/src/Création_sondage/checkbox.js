/*import './Inscription.css';*/
import { zone_texte1, ajouter_zone} from './zone_texte';
import {multiple_choice,choice_option} from './multiple_choice';
import {required1} from './required';


 

   const ajouter_checkbox = () =>{
     const question5 = document.getElementsByClassName('question');
     const test = document.getElementById("test");
     const paragraphe = document.createElement("div");
     const text = document.createElement("p");
     const test_class = document.getElementsByClassName('test_class');
     const input41 = document.getElementsByClassName('input');
     const option_input1 = document.getElementsByClassName('option_input');
     const remove = document.getElementsByClassName('remove');

     const required = document.createElement('button');
    
 
     text.innerHTML = input41[0].value;
     if(input41[0].value !== "" && option_input1[0].value !== "" && option_input1[1].value !== ""){
       paragraphe.appendChild(text);

       const liste_option = [];
       liste_option.push(input41[0].value);
 
       for (let j = 0; j < option_input1.length; j++){
           const div = document.createElement("div");
           const input = document.createElement("input");
           const label = document.createElement("label");

           input.type = "checkbox";
           div.className = "check";
           label.innerHTML = option_input1[j].value;
           paragraphe.appendChild(div);
           div.appendChild(input);
           div.appendChild(label);

           liste_option.push(option_input1[j].value);
           
       }

       paragraphe.className = "paragraphe";

       choice_option.push(liste_option);
       test.replaceChild(paragraphe,question5[0]);
       
        /*  Ajout de zone de texte*/
        /*zone_texte2();*/
        
        
        
        const question = document.createElement("div");
        const input = document.createElement('input');
        
        const button = document.createElement('button');
        
        
        const type = document.createElement("div");
      
        const icon = document.getElementsByClassName("type_question");
        const choice = icon[0].cloneNode(true);
        const zone = icon[1].cloneNode(true);
        const check = icon[2].cloneNode(true);
        
        

    
        /* definition des elements HTML*/
        
        
        button.innerHTML = 'Zone de Texte';
        
        type.className = 'remove'
        input.className = 'input';
        question.className = 'question';
      
        choice.onclick = multiple_choice;
        choice.className = 'type_question';
        check.onclick = checkbox;
        check.className = 'type_question';
        zone.className = 'type_question';
       
        zone.onclick = zone_texte1;
    
        required.innerHTML = 'required';
        required.id = 'required';
        required.onclick = required1;
        /* CSS */
      

        /* ajout des éléments et suppression */    
        type.appendChild(choice);
        type.appendChild(zone);
        type.appendChild(check);
        type.appendChild(required);
        test.appendChild(type);
        test.appendChild(question);
    
        question.appendChild(input);
        question.appendChild(button);
        const ajout_zone = document.getElementById('ajout_check');
        ajout_zone.removeAttribute("onclick");
        ajout_zone.onclick = ajouter_zone;

        remove[0].remove();
        


        
      
     
     }
    
   }
 
 
 
 
   
   
   
 const plus = () =>{
   const option = document.getElementById('option');
   const option_input = document.createElement('input');
   
   option_input.placeholder = 'Option de réponse';
   option_input.className = 'option_input';

   option.appendChild(option_input);

 }

 const checkbox = () =>{
   const question = document.getElementsByClassName("question");

   const faki = document.getElementById('faki');
   const test = document.getElementById('test');
   const test1 = document.createElement('div');
   const test_class = document.createElement('div');
   const question1 = document.createElement('div');
   const input2 =  document.createElement('input');
   const button1 = document.createElement('button');
   const option2 = document.createElement('div');
   const option_reponse = document.createElement('input');
   const option_reponse1 = document.createElement('input');
   const button_plus = document.createElement('button');
   const div_ajouter = document.createElement('div');
   const button_ajouter = document.createElement('button');
   const ajout = document.getElementById('ajout');

  
   
 
   /*Propriétés*/
   div_ajouter.id = "ajout";
   test1.className = 'question';
   test_class.className = 'test_class';
   question1.className = 'question';
   input2.className = 'input';
   button1.innerHTML = 'Checkbox';
   option2.id = 'option';
   option_reponse.placeholder = 'Opion de reponse';
   option_reponse1.placeholder = 'Opion de reponse';
   option_reponse.className = 'option_input';
   option_reponse1.className = 'option_input';
   button_plus.innerHTML = "Plus d'option";
   button_plus.onclick = plus;
   button_plus.id = 'plus_options';
   button_ajouter.innerHTML = "Ajouter";
   button_ajouter.id = "ajout_check";
   button_ajouter.onclick = ajouter_checkbox;
   
  
  
 
   /* Ajout */
   div_ajouter.appendChild(button_ajouter);
   option2.appendChild(option_reponse);
   option2.appendChild(option_reponse1);
   question1.appendChild(input2);
   question1.appendChild(button1);
   test_class.appendChild(question1);
   test_class.appendChild(option2);
   test_class.appendChild(button_plus);
   test1.appendChild(test_class);
 
   /* Replace */
   test.replaceChild(test1,question[0]);
   faki.replaceChild(div_ajouter,ajout);
   
 
 }
 
 
 
export{checkbox};
