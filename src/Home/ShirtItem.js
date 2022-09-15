import React, { useEffect, useState } from 'react';
import ShirtList from './ShirtList';

const ShirtItem = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item?category=Shirt')
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
            items.map(item=><ShirtList
            key={items._id}
            item={item}
            ></ShirtList>
            )
           }
        </div>
      </>
    );
};

export default ShirtItem;