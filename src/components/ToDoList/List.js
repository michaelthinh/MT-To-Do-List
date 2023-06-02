import ListUI from "../UI/ListUI";
import ListInfo from "./ListInfo/ListInfo";
import ListContent from "./ListContent/ListContent";
import ListActions from "./ListActions/ListActions";
import { useReducer } from "react";

const DUMMY_LIST = [
    {
        id: "td1",
        content: "To do 1",
        active: true,
    },
    {
        id: "td2",
        content: "To do 2",
        active: false,
    },
];

const initialTodos = {
    list: DUMMY_LIST,
    renderedList: DUMMY_LIST,
    filter: "all",
};

const listReducer = (state, actions) => {
    if (actions.type === "CHANGE_FILTER") {
        if (actions.value !== "all") {
            return {
                list: state.list,
                renderedList: state.list.filter(
                    (item) => item.active === (actions.value === "active")
                ),
                filter: actions.value,
            };
        } else {
            return {
                list: state.list,
                renderedList: state.list,
                filter: actions.value,
            };
        }
    }
    if (actions.type === "TOGGLE_ACTIVE") {
        const newList = state.list.filter((item) => {
            if (item.id === actions.value) {
                console.log("new item:", item.active);
                item.active = !item.active;
                console.log("new item:", item.active);
            }

            return item;
        });

        let newRenderedList = [];
        if (state.filter === "all") {
            console.log("ALL");
            newRenderedList = newList;
        } else {
            newRenderedList = newList.filter(
                (item) => item.active === (state.filter === "active")
            );
            console.log(newRenderedList);
        }
        return {
            list: newList,
            renderedList: newRenderedList,
            filter: state.filter,
        };
    }
    return initialTodos;
};

const List = () => {
    const [todos, dispatch] = useReducer(listReducer, initialTodos);
    const getFilterHandler = (filter) => {
        dispatch({ type: "CHANGE_FILTER", value: filter });
    };
    const toggleHandler = (id) => {
        console.log(id);
        dispatch({ type: "TOGGLE_ACTIVE", value: id });
    };
    return (
        <ListUI>
            <ListInfo onGetFilter={getFilterHandler} />
            <ListContent list={todos.renderedList} onToggle={toggleHandler} />
            <ListActions />
        </ListUI>
    );
};

export default List;
