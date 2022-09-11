import { useState } from 'react';
import React from 'react';
import axios from 'axios';
import {Sondage} from './Création_sondage/sondage';



function App() {
    return( 
      <>
        {Sondage()}
      </>
      
    );
}


export{App};
