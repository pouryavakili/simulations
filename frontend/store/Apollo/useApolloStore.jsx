import {create} from "zustand";

const initialState = {
  valueDialog: {
    title: "",
    number_customer: 1,
    email_body: "",
  },
  apolloListItems: [
    {
        "title": "test",
        "number_customer": 1,
        "email_body": "test"
    },
]
};

// Define your Zustand store
export const useApolloStore = create((set) => ({
  ...initialState,
  valueDialog: initialState.valueDialog,
  apolloListItemsAdd : (value) => {
    set({ apolloListItems : [ ...useApolloStore.getState().apolloListItems , value ] });
  }
}));
