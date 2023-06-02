import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/todoSlice";

const ListItem = (props) => {
    const dispatch = useDispatch();

    const active = props.info.active === true;
    const toggleHandler = () => {
        dispatch(todoActions.updateTodo(props.info.id));
    };
    const deleteHandler = () => {
        dispatch(todoActions.deleteTodo(props.info.id));
    };
    return (
        <div className="p-4 flex justify-between">
            <div className="py-1 flex flex-wrap gap-4">
                <button
                    className="flex justify-center content-center w-6 h-6 bg-red-600 rounded-sm"
                    onClick={deleteHandler}
                >
                    X
                </button>
                <div className="max-w-lg overflow-x-hidden">
                    {props.info.content}
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <div
                    className={`cursor-not-allowed w-32 text-center text-white px-4 py-1 rounded-md ${
                        active ? "bg-red-400" : "bg-green-400"
                    }`}
                >
                    {active ? "Active" : "Completed"}
                </div>
                <button
                    className="px-4 py-1 bg-blue-600 text-white rounded-md"
                    onClick={toggleHandler}
                >
                    Toggle
                </button>
            </div>
        </div>
    );
};

export default ListItem;
