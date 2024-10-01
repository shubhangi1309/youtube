import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {  // here comes data structure in the picture here we will structure our CACHE
    },
    reducers: {
        cacheResults : (state, action) => {
            // {"ip" : ["iphone", "iphone11"]}
            // state = {...action.payload, ...state}; // this will merge payload and state
            state = Object.assign(state, action.payload);
        }
    }
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;


// CACHE: suppose we store search results this way it is an ARRAY []
// time complexity to search in ARRAY = O(n)
// array.indexOf(), array.includes()  = O(n) time complexity of both
//  [i, ip, iph, iphone]

// CACHE: suppose we store search results this way it is an object {}
// {
//     i: 
//     ip:
//     iph:
//     iphone:
// }
// the search complexity to search in an object/ MAP/ HASHMAP in JS we call it OBJECT to find a key in object is O(1)
//  O(1) is far better than O(n)

// new Map(); it is even more OPTIMISED than searching inside OBJECT  


// LRU CACHE LEAST recently used