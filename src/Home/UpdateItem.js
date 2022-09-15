import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();
    const hanldeUpdate = (event) => {
        event.preventDefault();
        const displayName = event.target.displayName.value
        const description = event.target.description.value
        const price = event.target.price.value
        const updatedItem = { displayName, description, price }
        const url = `https://inventory-management-server-r5m8mqh5v-arifur-rahman1.vercel.app/item/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    }
    return (
        <div className='flex justify-center mt-36'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <form onSubmit={hanldeUpdate}>
                        <input type="text" name="displayName" placeholder='Updated name' className="input input-bordered w-full max-w-xs mb-3" />
                        <input type="text" name="description" placeholder='Updated discription' className="input input-bordered w-full max-w-xs mb-3" />
                        <input type="number" name="price" placeholder='Updated Price' className="input input-bordered w-full max-w-xs mb-3" />
                        <input type="submit" value={"Update Product"} className="btn input-bordered w-full max-w-xs mb-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;