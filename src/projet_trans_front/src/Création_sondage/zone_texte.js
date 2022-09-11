import {multiple_choice} from './multiple_choice';
import {checkbox} from './checkbox';
import {required1} from './details';






    var i = 0;
   
    
    
    /*const enregistrer = () => {
      const love1 = document.getElementsByClassName('love');
      const fatou1 = document.getElementsByClassName('fatou');
      if(love1[0].value != ""){
        const text1 = document.createElement("p");
        const test1 = document.getElementById("test");
        const input11 = document.createElement('input');
        const paragraphe1 = document.createElement("div");
  
        
        text1.innerHTML = love1[0].value;
        paragraphe1.appendChild(text1);
        paragraphe1.appendChild(input11);
        test1.replaceChild(paragraphe1,fatou1[0])
        alert(test1.innerHTML);
      }
      ;
   
    }*/
    
    
 
    
    /* if */
    const zone_texte1 = () => {
      const question4 = document.getElementsByClassName("question");
      const faki = document.getElementById('faki');
      const test = document.getElementById('test');
      const test2 = document.createElement('div');
      const question = document.createElement('div');
      const input = document.createElement('input');
      const button = document.createElement('button');
    
      /*Propriétés*/ 
      test2.className = 'question';
      question.className = 'question';
      input.className = 'input';
      button.innerHTML='Zone de texte';
    /* Ajout*/
      question.appendChild(input);
      question.appendChild(button);
      test2.appendChild(question);
    /* Replace*/
      test.replaceChild(test2,question4[0]);
      
    
    };
     
    const ajouter_zone = () => {
        i = i+1;
        const input41 = document.getElementsByClassName('input');
        const question2 = document.getElementsByClassName('question');
        const remove = document.getElementsByClassName('remove');
       
        /*1er if*/
        if(i>=1 && input41[0].value !== ""){
              /* definition des variables*/
         
            const faki = document.getElementById("faki");
            const test = document.getElementById("test");
            const question = document.createElement("div");
            const input = document.createElement('input');
            const input1 = document.createElement('input');
            const button = document.createElement('button');
            const required = document.createElement('button');
            const paragraphe = document.createElement("div");
            const text = document.createElement("p");
            const type = document.createElement("div");
            const icon = document.getElementsByClassName("type_question");
            const choice = icon[0].cloneNode(true);
            const zone = icon[1].cloneNode(true);
            const check = icon[2].cloneNode(true);
            
            

        
            /* definition des elements HTML*/
            
            
            button.innerHTML = 'Zone de Texte';
            input1.type = 'text';
            
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

            paragraphe.className = "paragraphe";

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
            


            text.innerHTML = input41[0].value;
            paragraphe.appendChild(text);
            paragraphe.appendChild(input1);
            test.replaceChild(paragraphe,question2[0]);
            remove[0].remove();
            
            
        
          
          
            
        
        }
        
       
       /**/
     
          
          


       
        
        
   
  }

  
  







export{ajouter_zone,zone_texte1};