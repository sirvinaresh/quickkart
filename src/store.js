import { configureStore } from '@reduxjs/toolkit'
import  cartreducer from './slice/addtocart';

export const store = configureStore({
  reducer: {
    cart : cartreducer
},
})