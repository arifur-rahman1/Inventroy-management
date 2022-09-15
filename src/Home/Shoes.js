import React, { useEffect, useState } from 'react';
import Shoe from './Shoe';

const Shorts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://inventory-management-server-r5m8mqh5v-arifur-rahman1.vercel.app/item?category=Shoe')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
            <div className='my-16 flex justify-center'>
                <h1 className='font-bold text-2xl'>Available Items</h1>
            </div>
            <div className="ml-10 grid grid-cols-3 gap-4 ">
                {
                    items.map(item => <Shoe
                        items={items}
                        setItems={setItems}
                        key={items._id}
                        item={item}
                    ></Shoe>
                    )
                }
            </div>
        </>
    );
};

export default Shorts;