import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import {Sondage} from '../sondage';


it("Afficher zone de texte si le button est cliqué", () => {
    render(<Sondage />);
    const btn_zone_text = screen.getByTestId("zone_texte");
    fireEvent.click( btn_zone_text);
    const text = screen.getByText(/Zone de texte/i);
    expect(text).toBeInTheDocument();
});

it("Obtenir les valeurs entrées en input si on clique sur ajouter de type zone de texte",() => {
    render(<Sondage />);
    const btn_zone = screen.getByTestId("zone_texte");
    fireEvent.click( btn_zone);
    
    const question = document.getElementsByClassName('input');
    
    /* Valeur à mettre dans la question pour voir s'ils sont dans les HTML tag après avoir cliqué au button ajouter*/
    question[0].value = 'Quelle est votre couleur préférée ?';

    const button_ajouter = screen.getByTestId("ajouter_zone");
    fireEvent.click( button_ajouter);


    const input = document.getElementsByTagName("input");
    const label = document.getElementsByTagName("label");
    const question_text = document.getElementsByTagName("p");
    
    expect(input[0]).toHaveAttribute("type", "text");
    expect(question_text[0].innerHTML).toBe("Quelle est votre couleur préférée ?");
    expect(label[0]).toBeUndefined();
    
});

it("Rien ne se passe s'il n'y a pas de question en cliquant le button ajouter de type zone de texte",() => {
    render(<Sondage />);
    const btn_zone = screen.getByTestId("zone_texte");
    fireEvent.click( btn_zone);
    
    const question = document.getElementsByClassName('input');
    
    /* Valeur à mettre dans la question pour voir s'ils sont dans les HTML tag après avoir cliqué au button ajouter*/
    question[0].value = '';

    const button_ajouter = screen.getByTestId("ajouter_zone");
    fireEvent.click( button_ajouter);


    const input = document.getElementsByClassName("paragraphe");
    const question_text = document.getElementsByTagName("p");
    
    expect(input[0]).toBeUndefined();
    expect(question_text[0]).toBeUndefined();
   
    
});