const ListItem = (props) => {
    const active = props.info.status === "Active";
    return (
        <div className="p-4 flex justify-between">
            <div className="py-1">{props.info.content}</div>

            <div className="flex flex-wrap gap-4">
                <div
                    className={`w-32 text-center text-white px-4 py-1 rounded-md ${
                        active ? "bg-red-400" : "bg-green-400"
                    }`}
                >
                    {props.info.status}
                </div>
                <button className="px-4 py-1 bg-blue-600 text-white rounded-md">
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ListItem;
