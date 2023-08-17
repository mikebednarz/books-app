import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: { value: [] },
  reducers: {
    addBook: (state, action) => {
      let addBook = true;
      state.value.forEach((book) => {
        if (book.id === action.payload.id) {
          addBook = false;
        }
      })
      if (addBook) state.value.push(action.payload);
    },

    deleteBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload.id); 
    },

    updateTitle: (state, action) => {  
      state.value.forEach((book) => {
        if (book.id === action.payload.id) {
          book.title = action.payload.title;
        }
      })
    },

    updateAuthor: (state, action) => {
      state.value.forEach((book) => {
        if (book.id === action.payload.id) {
          book.author = action.payload.author;
        }
      })
    },

    updateDescription: (state, action) => {
      state.value.forEach((book) => {
        if (book.id === action.payload.id) {
          book.description = action.payload.description;
        }
      })
    },

    updateRenderOrderByAdded: (state) => {
      state.value.sort((a, b) => {
        const orderIDA = a.orderID
        const orderIDB = b.orderID

        if (orderIDA < orderIDB) {
          return - 1;
        }
        if (orderIDA > orderIDB) {
          return 1;
        }
        return 0;
      })
    },

    updateRenderOrderByTitleA: (state) => {
      state.value.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
          return - 1;
        }
        if (titleB > titleA) {
          return 1;
        }
        return 0;
      })
    },

    updateRenderOrderByTitleD: (state) => {
      state.value.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA > titleB) {
          return -1;
        }
        if (titleB < titleA) {
          return 1;
        }
        return 0;
      })
    }
  }
});

export const { addBook, deleteBook, updateTitle, updateAuthor, updateDescription, updateRenderOrderByAdded, updateRenderOrderByTitleA, updateRenderOrderByTitleD } = bookSlice.actions;
export default bookSlice.reducer;