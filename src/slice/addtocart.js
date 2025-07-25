import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  value: 0,
  price: 0,
  gst: 0,
  tamt: 0,
  dis: 0,
  pamt: 0,
  items: [],
};

export const addtocart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, actions) => {
      const exits = state.items.find((item) => item.id === actions.payload.id);
      if (!exits) {
        state.value += 1;
        state.items = [...state.items, actions.payload];
        state.price += parseInt(actions.payload.price);
        state.gst = (0.18 * state.price).toFixed(2);
        state.tamt = parseInt(state.gst) + parseInt(state.price);
        state.dis = (0.1 * state.tamt).toFixed(2);
        state.pamt = (state.tamt - state.dis).toFixed(2);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    remove: (state, actions) => {
      state.value -= 1;
      state.items = state.items.filter((i) => i.id !== actions.payload.id);
      state.price -= parseInt(actions.payload.price);
      state.gst = (0.18 * state.price).toFixed(2);
      state.tamt = parseInt(state.gst) + parseInt(state.price);
      state.dis = (0.1 * state.tamt).toFixed(2);
      state.pamt = (state.tamt - state.dis).toFixed(2);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { add, remove } = addtocart.actions;

export default addtocart.reducer;
