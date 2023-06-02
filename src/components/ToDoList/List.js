import ListUI from "../UI/ListUI";
import ListInfo from "./ListInfo/ListInfo";
import ListContent from "./ListContent/ListContent";
import ListActions from "./ListActions/ListActions";

const List = (props) => {
    return (
        <ListUI>
            <ListInfo />
            <ListContent />
            <ListActions />
        </ListUI>
    );
};

export default List;
