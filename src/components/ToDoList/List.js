import ListUI from "../UI/ListUI";
import ListInfo from "./ListInfo/ListInfo";
import ListContent from "./ListContent/ListContent";
import ListActions from "./ListActions/ListActions";

const DUMMY_LIST = [
    {
        id: "td1",
        content: "To do 1",
        status: "Active",
    },
    {
        id: "td2",
        content: "To do 2",
        status: "Completed",
    },
];

const List = (props) => {
    return (
        <ListUI>
            <ListInfo />
            <ListContent list={DUMMY_LIST} />
            <ListActions />
        </ListUI>
    );
};

export default List;
