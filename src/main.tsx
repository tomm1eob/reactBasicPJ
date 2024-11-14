import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormComponent } from './components/FormComponent/FormComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProduct } from './components/AppProduct/AppProduct';
import { ComponentUseEffect } from './components/ComponentUseEffect/ComponentUseEffect';
import ComponentCounter from './components/ComponentCounter/ComponentCounter';
import MiPrimerComponent from './components/MiPrimerComponent/MiPrimerComponent';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FormComponent></FormComponent> 
        <ComponentUseEffect></ComponentUseEffect>
        <ComponentCounter></ComponentCounter>
        <MiPrimerComponent text="¡Hola, mundo!" color="blue" fontSize={2}></MiPrimerComponent>
    */}

    <AppProduct></AppProduct>
    
  </StrictMode>,
)
