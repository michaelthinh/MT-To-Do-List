const ListItem = (props) => {
    const active = props.info.active === true;
    const toggleHandler = () => {
        props.onToggle(props.info.id);
    };
    return (
        <div className="p-4 flex justify-between">
            <div className="py-1">{props.info.content}</div>

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
