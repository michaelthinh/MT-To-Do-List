import ListItem from "./ListItem";

const ListContent = (props) => {
    const list = props.list;
    const toggleHandler = (id) => {
        props.onToggle(id);
    };
    return (
        <div>
            {list.map((item) => (
                <ListItem key={item.id} info={item} onToggle={toggleHandler} />
            ))}
        </div>
    );
};

export default ListContent;
