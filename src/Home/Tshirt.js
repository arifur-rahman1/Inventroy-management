import React, { useEffect, useState } from 'react';
import TshirtItem from './TshirtItem';

const Tshirt = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item?category=T-Shirt')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
        <div className='my-16 flex justify-center'>
        <h1 className='font-bold text-2xl'>Available Items</h1>
        </div>
        <div className="ml-10 grid grid-cols-3 ">
           {
            items.map(item=><TshirtItem
            key={items._id}
            item={item}
            ></TshirtItem>
            )
           }
        </div>
       </>
    );
};

export default Tshirt;