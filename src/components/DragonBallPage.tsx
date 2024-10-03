import { ItemContent } from './ItemContent';
import useItems from "../hooks/useItems";

const DragonBallPage = () => {
    const { items, nextPage, prevPage } = useItems();

    return (
        <>
            <header>
                <img src="/src/images/Dragon_Ball_(5).png" alt="img" />
            </header>
            <div className="containerm">
                {items.map((item) => (
                    <div className="card" key={item.id}>
                        <ItemContent item={item} />
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop:'40px' }}>
                <button onClick={prevPage}>
                    <span>Anterior</span>
                </button>
                <button onClick={nextPage}>
                    <span>Siguiente</span>
                </button>
            </div>
        </>
    );
};

export default DragonBallPage;
