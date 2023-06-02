import ListUI from "../UI/ListUI";
import ListInfo from "./ListInfo/ListInfo";
import ListContent from "./ListContent/ListContent";
import ListActions from "./ListActions/ListActions";
import { useSelector } from "react-redux";

const List = () => {
    const todosListRendered = useSelector((state) => state.todos.filteredItems);

    return (
        <ListUI>
            <ListInfo />
            <ListContent list={todosListRendered} />
            <ListActions />
        </ListUI>
    );
};

export default List;
