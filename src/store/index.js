import { configureStore } from "@reduxjs/toolkit";

import TodoSlice from "./todoSlice.js";

const store = configureStore({
    reducer: {
        todos: TodoSlice.reducer,
    },
});

export default store;
