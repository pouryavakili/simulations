import {create} from "zustand";

const initialState = {
  tweetsList: null,
};

// Define your Zustand store
export const useTwitterStore = create((set) => ({
  ...initialState,
  setTweetsItem : (value) => {
    set({ tweetsList :  value  });
  }
}));
