import { useDispatch } from "react-redux";
import { todoActions } from "../../../store/todoSlice";

import getDate from "../../../utils/getDate";
import useGetTime from "../../../hooks/use-getTime";

const ListInfo = (props) => {
    const date = getDate();
    const { time } = useGetTime();

    const dispatch = useDispatch();

    const filterHandler = (e) => {
        const filter = e.target.id;
        dispatch(todoActions.sortByFilter(filter));
    };
    return (
        <div className="border-b-2 border-[#7a4b4b] p-4 ">
            <div className="flex flex-wrap justify-between content-center">
                <div>
                    <div>{time}</div>
                    <div>{date}</div>
                </div>
                <div className="actions flex flex-wrap gap-5 content-center">
                    <button
                        className="hover:text-[#ff1ed2]"
                        id="all"
                        onClick={filterHandler}
                    >
                        All
                    </button>
                    <button
                        className="hover:text-[#ff1ed2]"
                        id="active"
                        onClick={filterHandler}
                    >
                        Active
                    </button>
                    <button
                        className="hover:text-[#ff1ed2]"
                        id="completed"
                        onClick={filterHandler}
                    >
                        Completed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListInfo;
