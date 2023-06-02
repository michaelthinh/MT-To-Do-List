import ListUI from "../UI/ListUI";
import ListInfo from "./ListInfo/ListInfo";
import ListContent from "./ListContent/ListContent";
import ListActions from "./ListActions/ListActions";
import { useState } from "react";

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
    const [list, setList] = useState(DUMMY_LIST);
    const getFilterHandler = (filter) => {
        if (filter === "active") {
            setList(DUMMY_LIST.filter((item) => item.status === "Active"));
        } else if (filter === "completed") {
            setList(DUMMY_LIST.filter((item) => item.status === "Completed"));
        } else {
            setList(DUMMY_LIST);
        }
    };
    return (
        <ListUI>
            <ListInfo onGetFilter={getFilterHandler} />
            <ListContent list={list} />
            <ListActions />
        </ListUI>
    );
};

export default List;
