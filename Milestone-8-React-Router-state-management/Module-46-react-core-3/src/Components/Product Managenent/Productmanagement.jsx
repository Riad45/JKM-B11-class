import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const Productmanagement = () => {

    const [products , setProducts] = useState([]);

    const handleProducts = (product)=>{
        const newProducts =[...products ,product];
        setProducts(newProducts);
    }
    return (
        <div>

            <ProductForm handleProducts={handleProducts} ></ProductForm>
            <ProductTable products={products} ></ProductTable>
            
        </div>
    );
};

export default Productmanagement;