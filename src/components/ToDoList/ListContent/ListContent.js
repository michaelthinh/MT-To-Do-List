import ListItem from "./ListItem";

const ListContent = (props) => {
    const list = props.list;
    console.log(list);
    const toggleHandler = (id) => {
        props.onToggle(id);
    };
    return (
        <div>
            {list.length === 0 && (
                <div className="py-5 text-center">
                    <p>Don't have anything to do? Add one now!</p>
                </div>
            )}
            {list &&
                list.map((item) => (
                    <ListItem
                        key={item.id}
                        info={item}
                        onToggle={toggleHandler}
                    />
                ))}
        </div>
    );
};

export default ListContent;
