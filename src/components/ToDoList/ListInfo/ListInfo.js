import getDate from "../../utils/getDate";
import useGetTime from "../../hooks/use-getTime";

const ListInfo = (props) => {
    const date = getDate();
    const { time } = useGetTime();
    const classActive = "text-[#ff1ed2]";
    return (
        <div className="border-b-2 border-[#7a4b4b] p-4 ">
            <div className="flex flex-wrap justify-between content-center">
                <div>
                    <div>{time}</div>
                    <div>{date}</div>
                </div>
                <div className="flex flex-wrap gap-5 content-center">
                    <button className={classActive}>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
};

export default ListInfo;
