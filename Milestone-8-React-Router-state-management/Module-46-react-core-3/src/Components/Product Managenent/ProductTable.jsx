import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>

            <table>
                <thead>
                   <tr>
                     <th>No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quntity</th>
                    <th>Sub-Total</th>
                   </tr>
                </thead>

                <tbody>

                    {products.map((product, index) => 
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{product.productName} </td>
                            <td>{product.productPrice} </td>
                            <td>{product.productQuntity} </td>
                            <td>{product.productPrice*product.productQuntity} </td>
                           
                        </tr>
                    )}

                </tbody>
            </table>
            
        </div>
    );
};

export default ProductTable;