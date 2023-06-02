import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: "todos",
    initialState: {
        items: [],
        filteredItems: [],
    },
    reducers: {
        addTodo(state, action) {
            const newTodo = action.payload;
            state.items.push({
                id: newTodo.id,
                content: newTodo.name,
                active: newTodo.active,
            });
            state.filteredItems = state.items;
        },
        updateTodo(state, action) {
            const idFound = action.payload;
            state.items.filter((item) => {
                if (item.id === idFound) {
                    item.active = !item.active;
                }
                return item;
            });
            state.filteredItems = state.items;
        },
        sortByFilter(state, actions) {
            const filterData = actions.payload;
            if (filterData === "active") {
                console.log("active");
                state.filteredItems = state.items.filter(
                    (item) => item.active === true
                );
            } else if (filterData === "completed") {
                console.log("complete");
                state.filteredItems = state.items.filter(
                    (item) => item.active === false
                );
            } else {
                state.filteredItems = state.items;
            }
        },
    },
});

export const todoActions = TodoSlice.actions;

export default TodoSlice;
