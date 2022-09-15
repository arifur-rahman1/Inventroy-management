import React, { useEffect, useState } from 'react';
import Shoe from './Shoe';

const Shorts = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item?category=Shoe')
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
             items.map(item=><Shoe
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