
/*import './Inscription.css';*/
 import { zone_texte1, ajouter_zone} from './zone_texte';
 import {checkbox} from './checkbox';
 import {required1} from './details';
 import $ from 'jquery';

 

    
  
    var choice_option = [];
    const ajouter_multiple = () =>{
     
      
      const fatou5 = document.getElementsByClassName('fatou'); /* question */
      const test = document.getElementById("test");
      const paragraphe = document.createElement("div");
      const text = document.createElement("p");
      const test_class = document.getElementsByClassName('test_class');
      const love = document.getElementsByClassName('love'); /*input*/
      const option_input1 = document.getElementsByClassName('option_input');
      const remove = document.getElementsByClassName('remove');

      const required = document.createElement('button');
      

     
  
      text.innerHTML = love[0].value;
      if(love[0].value !== "" && option_input1[0].value !== "" && option_input1[1].value !== ""){
        paragraphe.appendChild(text);

        const liste_option = [];
        liste_option.push(love[0].value);
        
  
        for (let j = 0; j < option_input1.length; j++){
            const div = document.createElement("div");
            const input = document.createElement("input");
            const label = document.createElement("label");
            input.type = "radio";
            div.className = "choice";
            label.innerHTML = option_input1[j].value;

            paragraphe.appendChild(div);
            div.appendChild(input);
            div.appendChild(label);

            liste_option.push(option_input1[j].value);
            
        }
        choice_option.push(liste_option);
        
        paragraphe.className = "paragraphe";

        test.replaceChild(paragraphe,fatou5[0]);
        
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
         input.className = 'love';
         question.className = 'fatou';
       
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
         const ajout_zone = document.getElementById('ajout_zone');
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

  const multiple_choice = () =>{

        const fatou = $(".fatou,.edited");
        
        
        const faki = document.getElementById('faki');
        const test = document.getElementById('test');
        const test1 = document.createElement('div');
        const test_class = document.createElement('div');
        const fatou1 = document.createElement('div');
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
        test1.className = 'fatou';
        test_class.className = 'test_class';
        fatou1.className = 'fatou';
        input2.className = 'love';
        button1.innerHTML = 'Multiple choice';
        option2.id = 'option';
        option_reponse.placeholder = 'Opion de reponse';
        option_reponse1.placeholder = 'Opion de reponse';
        option_reponse.className = 'option_input';
        option_reponse1.className = 'option_input';
        button_plus.innerHTML = "Plus d'option";
        button_plus.onclick = plus;
        button_ajouter.innerHTML = "Ajouter";
        button_ajouter.id = "ajout_zone";
        button_ajouter.onclick = ajouter_multiple;
  
  
      
      
        /* Ajout */
        div_ajouter.appendChild(button_ajouter);
        option2.appendChild(option_reponse);
        option2.appendChild(option_reponse1);
        
        fatou1.appendChild(input2);
        fatou1.appendChild(button1);
        test_class.appendChild(fatou1);
        test_class.appendChild(option2);
        test_class.appendChild(button_plus);
        test1.appendChild(test_class);

      
        /* Replace */
        test.replaceChild(test1,fatou[0]);
        faki.replaceChild(div_ajouter,ajout);
        
  
        
  
  
   
    
  
  }
  
  
  
export{multiple_choice, choice_option};
