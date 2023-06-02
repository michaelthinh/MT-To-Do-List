import ListUI from "../UI/ListUI";
import ListInfo from "./ListInfo/ListInfo";
import ListContent from "./ListContent/ListContent";
import ListActions from "./ListActions/ListActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todoSlice";

const List = () => {
    const dispatch = useDispatch();

    const todosListRendered = useSelector((state) => state.todos.filteredItems);

    const getFilterHandler = (filter) => {
        dispatch(todoActions.sortByFilter(filter));
    };
    const toggleHandler = (id) => {
        dispatch(todoActions.updateTodo(id));
    };
    return (
        <ListUI>
            <ListInfo onGetFilter={getFilterHandler} />
            <ListContent list={todosListRendered} onToggle={toggleHandler} />
            <ListActions />
        </ListUI>
    );
};

export default List;
