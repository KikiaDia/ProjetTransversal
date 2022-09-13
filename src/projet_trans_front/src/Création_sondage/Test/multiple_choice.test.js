import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import {Sondage} from '../sondage';


it("Afficher Multiple choice si le button est cliqué", () => {
    render(<Sondage />);
    const btn_choice = screen.getByTestId("multiple_choice");
    fireEvent.click( btn_choice);
    const text = screen.getByText(/Multiple Choice/i);
    expect(text).toBeInTheDocument();
});

it("Obtenir les valeurs entrées en input si on clique sur ajouter de type multiple choice",() => {
    render(<Sondage />);
    const btn_choice = screen.getByTestId("multiple_choice");
    fireEvent.click( btn_choice);
    
    const question = document.getElementsByClassName('input');
    const option_input = document.getElementsByClassName('option_input');
    /* Valeur à mettre dans les option réponses et question pour voir s'ils sont dans les HTML tag après avoir cliqué au button ajouter*/
    question[0].value = 'Cochez la bonne réponse';
    option_input[0].value = 'A';
    option_input[1].value = 'B';
    const another_option_input = option_input[2]; 

    const button_ajouter = document.getElementById("ajout_multiple");
    fireEvent.click( button_ajouter);


    const input = document.getElementsByTagName("input");
    const label = document.getElementsByTagName("label");
    const question_text = document.getElementsByTagName("p");
    
    expect(input[0]).toHaveAttribute("type", "radio");
    expect(question_text[0].innerHTML).toBe("Cochez la bonne réponse");
    expect(label[0].innerHTML).toBe("A");
    expect(label[1].innerHTML).toBe("B");
    expect(another_option_input).toBeUndefined(); /* Pour montrer qu'on ne peut mettre que deux options*/
});

it("Ajouter plus de 2 options de réponse avec le click du button plus", () =>{
    render(<Sondage />);
    const btn_choice = screen.getByTestId("multiple_choice");
    fireEvent.click( btn_choice);
    
    const question = document.getElementsByClassName('input');
    const option_input = document.getElementsByClassName('option_input');
    /* Valeur à mettre dans les option réponses et question pour voir s'ils sont dans les HTML tag après avoir cliqué au button ajouter*/
    question[0].value = 'Cochez la bonne réponse';
    option_input[0].value = 'A';
    option_input[1].value = 'B';

    /*Ajouter plusieurs options avec la fonction plus d'option de réponse*/
    const plus_option = document.getElementById('plus_option');
    fireEvent.click(plus_option);
    option_input[2].value = 'C';


    const button_ajouter = document.getElementById("ajout_multiple");
    fireEvent.click( button_ajouter);


    const input = document.getElementsByTagName("input");
    const label = document.getElementsByTagName("label");
    const question_text = document.getElementsByTagName("p");
    
    expect(input[0]).toHaveAttribute("type", "radio");
    expect(question_text[0].innerHTML).toBe("Cochez la bonne réponse");
    expect(label[0].innerHTML).toBe("A");
    expect(label[1].innerHTML).toBe("B");
    expect(label[2].innerHTML).toBe("C");
});

it("Rien ne se passe s'il n'y a pas de question et d'option de réponse en cliquant le button ajouter de type multiple choice", () =>{
    render(<Sondage />);
    const btn_choice = screen.getByTestId("multiple_choice");
    fireEvent.click( btn_choice);
    
    const question = document.getElementsByClassName('input');
    const option_input = document.getElementsByClassName('option_input');
    /* Valeur à mettre dans les option réponses et question pour voir s'ils sont dans les HTML tag après avoir cliqué au button ajouter*/
    question[0].value = '';
    option_input[0].value = '';
    option_input[1].value = '';


    const button_ajouter = document.getElementById("ajout_multiple");
    fireEvent.click( button_ajouter);


    const input = document.getElementsByClassName("paragraphe");
    const question_text = document.getElementsByTagName("p");
    const label = document.getElementsByTagName("label");
    
    expect(input[0]).toBeUndefined();
    expect(question_text[0]).toBeUndefined();
    expect(label[0]).toBeUndefined();
});



