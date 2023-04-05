import React ,{createContext,useState}from 'react'
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);


//import { PRODUCTS } from '../products';

const getDefaultCart = () => {
  let cart={}
  for(let i=1;i<PRODUCTS.length + 1;i++){
    cart[i]=0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart())
    const addToCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const updateCartItemCount=(newAmount,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]: newAmount}))
    }
    const contextValue={cartItems,addToCart,removeFromCart}
    
    //console.log(cartItems);
    return  (
      <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
    )
}
