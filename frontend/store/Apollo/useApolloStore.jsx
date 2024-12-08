import {create} from "zustand";

const initialState = {
  valueDialog: {
    title: "",
    number_customer: 1,
    email_body: "",
  },
  apolloListItems: []
};

// Define your Zustand store
export const useApolloStore = create((set) => ({
  ...initialState,
  valueDialog: initialState.valueDialog,
  apolloListItemsAdd : (value) => {
    console.log(value);
    console.log(...useApolloStore.getState().apolloListItems);
    
    set({ apolloListItems : [ ...useApolloStore.getState().apolloListItems , value ] });
    
  }
}));
