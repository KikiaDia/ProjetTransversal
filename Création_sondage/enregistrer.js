import {choice_option} from './multiple_choice';
import axios from 'axios';
import {liste} from './details';



 const Enregistrer = () => {
    const input_value = document.getElementsByTagName("p");
    const test = document.getElementsByClassName("fatou");
    const remove = document.getElementsByClassName("remove");
    const ajout = document.getElementById("ajout");
    const enregistrer = document.getElementById("enregistrer");
    const paragraphe = document.getElementsByClassName('paragraphe');
    
    

    
    var intitule_question;
    
    if(input_value.length >= 1){
        test[0].remove();
        remove[0].remove();
        ajout.remove();
        enregistrer.remove(); 
    
        for(let i = 0; i < paragraphe.length; i++){
            intitule_question = input_value[i].innerHTML;
            if(liste.includes(intitule_question)){
                if((paragraphe[i].children)[1].className === 'choice'){
                    axios.post("http://localhost:8000/api_question/",
                    { 
                        intitule_question: intitule_question,
                        obligatoire: true,
                        nom_type: "Multiple choice"
                    }).then((response) => {
                        for(let h = 0; h < choice_option.length; h++){
                            let innerarray = choice_option[h].length;
                            
                            for(let l = 1; l < innerarray; l++){
                                
                                if(choice_option[h][0] === response.data.intitule_question){
                                    axios.post("http://localhost:8000/api_optionreponse/",
                                    { 
                                        intitule_option: choice_option[h][l],
                                        fk_question: response.data.id           
                                    });
                                }
                               
                                   
                                }
                            
                        }
                
                      });
                
                    
                    
                }
                else if((paragraphe[i].children)[1].className === 'check'){
                    axios.post("http://localhost:8000/api_question/",
                    { 
                        intitule_question: intitule_question,
                        obligatoire: true,
                        nom_type: "Checkbox"
                        
                    }).then((response) => {
                        for(let h = 0; h < choice_option.length; h++){
                            let innerarray = choice_option[h].length;
                            
                            for(let l = 1; l < innerarray; l++){
                                
                                if(choice_option[h][0] === response.data.intitule_question){
                                    axios.post("http://localhost:8000/api_optionreponse/",
                                    { 
                                        intitule_option: choice_option[h][l],
                                        fk_question: response.data.id           
                                    });
                                }
                               
                                   
                                }
                            
                        }
                
                      });
                }
                else{
                    axios.post("http://localhost:8000/api_question/",
                    { 
                        intitule_question: intitule_question,
                        obligatoire: true,
                        nom_type: "Zone de texte"
                        
                    });
                }
            
            }
            else{
                if((paragraphe[i].children)[1].className === 'choice'){
                    axios.post("http://localhost:8000/api_question/",
                    { 
                        intitule_question: intitule_question,
                        obligatoire: false,
                        nom_type: "Multiple choice"
                        
                    }).then((response) => {
                        for(let h = 0; h < choice_option.length; h++){
                            let innerarray = choice_option[h].length;
                            
                            for(let l = 1; l < innerarray; l++){
                                
                                if(choice_option[h][0] === response.data.intitule_question){
                                    axios.post("http://localhost:8000/api_optionreponse/",
                                    { 
                                        intitule_option: choice_option[h][l],
                                        fk_question: response.data.id           
                                    });
                                }
                               
                                   
                                }
                            
                        }
                
                      });
                }
                else if((paragraphe[i].children)[1].className === 'check'){
                    axios.post("http://localhost:8000/api_question/",
                    { 
                        intitule_question: intitule_question,
                        obligatoire: false,
                        nom_type: "Checkbox"
                        
                    }).then((response) => {
                        for(let h = 0; h < choice_option.length; h++){
                            let innerarray = choice_option[h].length;
                            
                            for(let l = 1; l < innerarray; l++){
                                
                                if(choice_option[h][0] === response.data.intitule_question){
                                    axios.post("http://localhost:8000/api_optionreponse/",
                                    { 
                                        intitule_option: choice_option[h][l],
                                        fk_question: response.data.id           
                                    });
                                }
                               
                                   
                                }
                            
                        }
                
                      });
                }
                else{
                    axios.post("http://localhost:8000/api_question/",
                    { 
                        intitule_question: intitule_question,
                        obligatoire: false,
                        nom_type: "Zone de texte"
                        
                    });
                }
            
            }
            
        }
        
        
        
    }


   
     
    
    
    
}
export{Enregistrer};
