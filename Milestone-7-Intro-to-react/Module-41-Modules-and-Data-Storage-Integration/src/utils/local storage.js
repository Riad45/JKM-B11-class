
const getCartFromLocalStorage=()=>{
    const cartString = localStorage.getItem('cart');
    if(cartString){
        const cartInfoInParse = JSON.parse(cartString);

        return cartInfoInParse;
    }

    return [];
}

const setCartToLocalStorage = (cart)=>{

    localStorage.setItem('cart', JSON.stringify(cart))
}

const addNewItemToCart = (id)=>{
    const cart = getCartFromLocalStorage();
    cart.push(id);
    setCartToLocalStorage(cart);
}

export default {getCartFromLocalStorage, addNewItemToCart};