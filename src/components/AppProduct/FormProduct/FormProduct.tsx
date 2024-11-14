import React, { FC } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from '../../../hooks/useForm'

interface IPropsFormProduct {
    handleAddProduct: Function;
}

export const FormProduct :FC<IPropsFormProduct>= ({handleAddProduct}) => {

    const {handleChange, values, resetForm} = useForm({
        nombre: "",
        imagen: "",
        precio: 0
    })

    const handleSubitForm = () => {
        handleAddProduct(values);
        resetForm();
    }

  return (
    <div>
        <Form className='p-4 border rounded m-3'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type='text' name='nombre' placeholder='Ingrese un nombre' value={values.nombre} onChange={handleChange} ></Form.Control>
        </Form>

        <Form className='p-4 border rounded m-3'>
            <Form.Label>Imagen</Form.Label>
            <Form.Control type='text' name='imagen' placeholder='Ingrese una imagen' value={values.imagen} onChange={handleChange} ></Form.Control>
        </Form>

        <Form className='p-4 border rounded m-3'>
            <Form.Label>Precio</Form.Label>
            <Form.Control type='number' name='precio' placeholder='Ingrese imagen del producto' value={values.precio} onChange={handleChange} ></Form.Control>
        
            <div className='d-flex justifyy-content-center mt-4'>
                <Button variant='primary' onClick={handleSubitForm}>Enviar</Button>
            </div>
        
        </Form>

        

    </div>
  )
}
