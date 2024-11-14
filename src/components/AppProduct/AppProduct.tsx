import React, { useState } from 'react'
import { Header } from './Header/Header'
import { FormProduct } from './FormProduct/FormProduct'
import { ListProduct } from './ListProducts/ListProduct';


interface ItemProduct {
    precio : number;
    imagen : string;
    nombre : string;
}

export const AppProduct = () => {

    const [products, setProducts] = useState<ItemProduct[]>([])
        
    const handleAddProduct = (newItem: ItemProduct) => {
        setProducts((prev) => [... prev, newItem])
    }


  return (
    <div>
        <Header></Header>
        <h2 className='text-center'>Formualrio</h2>
        <FormProduct handleAddProduct={handleAddProduct}></FormProduct>
        <h2 className='text-center'>Productos</h2>
        {
            products.length > 0 ?
            <ListProduct arrItems={products}></ListProduct> : <h3 className='text-center'>No hay productos</h3>
        }
    </div>
  )
}
