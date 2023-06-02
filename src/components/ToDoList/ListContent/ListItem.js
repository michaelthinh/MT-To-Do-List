const ListItem = () => {
    return (
        <div className="p-4 flex justify-between">
            <form id="#form" className="flex flex-wrap content-center gap-3">
                <input
                    name="checkbox"
                    id="checkbox"
                    type="checkbox"
                    value="false"
                />
                <label for="checkbox">Item context</label>
            </form>

            <button>Edit</button>
        </div>
    );
};

export default ListItem;
