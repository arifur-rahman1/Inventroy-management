import React, { useEffect, useState } from 'react';
import PantItem from './PantItem';
const Pant = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item?category=Pant')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
            <div className='my-16 flex justify-center'>
                <h1 className='font-bold text-2xl'>Available Items</h1>
            </div>
            <div className="ml-10 grid grid-cols-3 gap-4">
                {
                    items.map(item => <PantItem
                        items={items}
                        setItems={setItems}
                        key={items._id}
                        item={item}
                    ></PantItem>
                    )
                }
            </div>
        </>
    );
};

export default Pant;