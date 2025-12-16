import React from 'react';

const ProductForm = ({handleProducts}) => {

    const handdleProductSubmit = e=>{
        e.preventDefault();
        const productName = e.target.name.value;
        const productPrice = e.target.price.value;
        const productQuntity = e.target.quntity.value;

        console.log(productName,productPrice,productQuntity);

        const newProduct = {
            productName,
            productPrice,
            productQuntity
        }

        handleProducts(newProduct);

    }
    return (
        <div>
            <h3>Add new Product</h3>

            <form onSubmit={handdleProductSubmit}>
                <input type="text" name="name" placeholder='Product name' />
                <br />
                <input type="number" name="price" placeholder='Product price' />
                <br />
                <input type="number" name="quntity" placeholder='Product quntity' />
                <br />
                <input type="submit" value="submit" />
            </form>
            
        </div>
    );
};

export default ProductForm;