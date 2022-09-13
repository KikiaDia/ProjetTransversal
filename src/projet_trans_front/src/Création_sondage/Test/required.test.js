import React from 'react';
import { render,fireEvent } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import {Sondage} from '../sondage';
import {liste} from '../required';

it("La question est ajoutée dans la liste obligatoire si le button required est cliqué", () => {
    render(<Sondage/>);
    const question = document.getElementsByClassName('input');
    question[0].value = 'Quelle est votre nom ?';
    const btn_required = document.getElementById('required');
    fireEvent.click(btn_required);
    expect(liste).toContain('Quelle est votre nom ?');
});