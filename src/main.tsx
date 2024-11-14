import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { FormComponent } from './components/FormComponent/FormComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProduct } from './components/AppProduct/AppProduct';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <FormComponent></FormComponent> */}

    <AppProduct></AppProduct>
    
  </StrictMode>,
)
