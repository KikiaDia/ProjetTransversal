import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import {Sondage} from '../sondage';


test("Afficher checkbox si le button est cliqué", () => {
    render(<Sondage />);
    const btn_check = screen.getByTestId("checkbox");
    fireEvent.click( btn_check);
    const text = screen.getByText(/checkbox/i);
    expect(text).toBeInTheDocument();
});

it("Obtenir les valeurs entrées en input si on clique sur ajouter de type checkbox",() => {
    render(<Sondage />);
    const btn_check = screen.getByTestId("checkbox");
    fireEvent.click( btn_check);
    
    const question = document.getElementsByClassName('input');
    const option_input = document.getElementsByClassName('option_input');
    /* Valeur à mettre dans les option réponses et question pour voir s'ils sont dans les HTML tag après avoir cliqué au button ajouter*/
    question[0].value = 'Choisissez votre pointure';
    option_input[0].value = '37';
    option_input[1].value = '40';
    const another_option_input = option_input[2];
 


    const button_ajouter = document.getElementById("ajout_check");
    fireEvent.click( button_ajouter);


    const input = document.getElementsByTagName("input");
    const label = document.getElementsByTagName("label");
    const question_text = document.getElementsByTagName("p");
    
    expect(input[0]).toHaveAttribute("type", "checkbox");
    expect(question_text[0].innerHTML).toBe("Choisissez votre pointure");
    expect(label[0].innerHTML).toBe("37");
    expect(label[1].innerHTML).toBe("40");
    expect(another_option_input).toBeUndefined(); /* Pour montrer qu'on ne peut mettre que deux options*/
});

it("Ajouter plus de 2 options de réponse avec le click du button plus", () =>{
    render(<Sondage />);
    const btn_check = screen.getByTestId("checkbox");
    fireEvent.click( btn_check);
    
    const question = document.getElementsByClassName('input');
    const option_input = document.getElementsByClassName('option_input');
    /* Valeur à mettre dans les option réponses et question pour voir s'ils sont dans les HTML tag après avoir cliqué au button ajouter*/
    question[0].value = 'Choisissez votre pointure';
    option_input[0].value = '37';
    option_input[1].value = '40';

    /*Ajouter plusieurs options avec la fonction plus d'option de réponse*/
    const plus_option = document.getElementById('plus_options');
    fireEvent.click(plus_option);
    option_input[2].value = '29';
 


    const button_ajouter = document.getElementById("ajout_check");
    fireEvent.click( button_ajouter);


    const input = document.getElementsByTagName("input");
    const label = document.getElementsByTagName("label");
    const question_text = document.getElementsByTagName("p");
    
    expect(input[0]).toHaveAttribute("type", "checkbox");
    expect(question_text[0].innerHTML).toBe("Choisissez votre pointure");
    expect(label[0].innerHTML).toBe("37");
    expect(label[1].innerHTML).toBe("40");
    expect(label[2].innerHTML).toBe("29");
   
});

it("Rien ne se passe s'il n'y a pas de question et d'option de réponse en cliquant le button ajouter de type multiple choice", () =>{
    render(<Sondage />);
    const btn_check = screen.getByTestId("checkbox");
    fireEvent.click( btn_check);
    
    const question = document.getElementsByClassName('input');
    const option_input = document.getElementsByClassName('option_input');
    /* Valeur à mettre dans les option réponses et question pour voir s'ils sont dans les HTML tag après avoir cliqué au button ajouter*/
    question[0].value = '';
    option_input[0].value = '';
    option_input[1].value = '';
 


    const button_ajouter = document.getElementById("ajout_check");
    fireEvent.click( button_ajouter);
    
    const input = document.getElementsByClassName("paragraphe");
    const question_text = document.getElementsByTagName("p");
    const label = document.getElementsByTagName("label");
    
    expect(input[0]).toBeUndefined();
    expect(question_text[0]).toBeUndefined();
    expect(label[0]).toBeUndefined();
   
});