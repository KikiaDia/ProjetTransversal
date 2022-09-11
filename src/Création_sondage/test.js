import $ from 'jquery';

var choice_option = [];
const plus = () =>{
  const option = document.getElementById('option');
  const option_input = document.createElement('input');
  
  option_input.placeholder = 'Option de réponse';
  option_input.className = 'option_input';

  option.appendChild(option_input);

}
const multiple_choice = () =>{
  $('#multiple_choice').click(function(){
   const question = ($(this).parent()).next();
   
   const faki = document.getElementById('faki');
   
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
   question.replaceWith(test1);
   faki.replaceChild(div_ajouter,ajout);
   
     /* ajouter_multiple*/
   button_ajouter.onclick = function(){
    
    
    const test = document.getElementById("test");
    const paragraphe = document.createElement("div");
    const text = document.createElement("p");
    const input = (question.children(".love"));
    const option_input1 = document.getElementsByClassName('option_input');
    const remove = ($(this).parent());

    const required = document.createElement('button');

    text.innerHTML = input;
    alert(input);

    if(input.value !== "" && option_input1[0].value !== "" && option_input1[1].value !== ""){
      paragraphe.appendChild(text);

      const liste_option = [];
      liste_option.push(input.value);

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

    question.replaceWith(paragraphe); 
   }
   }
   /* Fin ajouter_multiple*/


  });
};


























export{multiple_choice};