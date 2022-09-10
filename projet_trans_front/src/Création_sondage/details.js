var liste = [];


const required1 = () =>{
    const obligatoire = document.getElementsByClassName("love");
    liste.push(obligatoire[0].value);
    
}

export{required1,liste};