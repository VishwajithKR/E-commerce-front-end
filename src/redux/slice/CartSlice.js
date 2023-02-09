import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    TotalAmount: 0,
    TotalQuantity: 0,
    userDetails: [],


    
}
const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const NewItem = action.payload
            const ExistingItem = state.cartItems.find(item => item.id === NewItem.id);

            state.TotalQuantity++

            if (!ExistingItem) {
                state.cartItems.push({
                    id: NewItem.id,
                    productName: NewItem.productName,
                    imgUrl: NewItem.imgUrl,
                    price: NewItem.price,
                    quantity: 1,
                    totalPrice: NewItem.price
                })
            } else {
                ExistingItem.quantity++;
                ExistingItem.totalPrice = Number(ExistingItem.totalPrice) + Number(NewItem.price)
            }
            state.TotalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)
            }, 0

            )

        },

        deleteItem: (state, action) => {
            const id = action.payload
            const ExistingItem = state.cartItems.find(item => item.id === id)

            if (ExistingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.TotalQuantity = state.TotalQuantity - ExistingItem.quantity
            }

            state.TotalAmount = state.cartItems.reduce((total, item) => {
                return total + Number(item.price) * Number(item.quantity)

            }, 0)

        },

        Address: (state, action) => {
            const data = action.payload
            state.userDetails.push(data)
        },


        Logout: (state, action) => {
            state.userDetails = []
            state.cartItems = []
            state.TotalAmount = 0
            state.TotalQuantity = 0
        },



    }
});

export const cartActions = CartSlice.actions

export default CartSlice.reducer