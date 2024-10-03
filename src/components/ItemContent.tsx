import { Item } from "../interfaces";

interface Props {
    item: Item;
}

export const ItemContent = ({ item }: Props) => {
    const { image, name, description } = item;

    return (
        <>
            <h4><b>{name}</b></h4>
            <img src={image} alt="Avatar" />
            <div className="container">
                <p>{description}</p>
            </div>
        </>
    );
};

export default ItemContent;
