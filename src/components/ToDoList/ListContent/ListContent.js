import ListItem from "./ListItem";

const ListContent = (props) => {
    const list = props.list;
    return (
        <div>
            {list.map((item) => (
                <ListItem key={item.id} info={item} />
            ))}
        </div>
    );
};

export default ListContent;
