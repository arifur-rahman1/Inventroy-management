import React from 'react';
import { Link } from 'react-router-dom';

const Shoe = ({ item, setItems, items }) => {
    const { _id, displayName, description, price, img } = item

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure You want to delete?');
        if (proceed) {
            const url = `https://inventory-management-server-r5m8mqh5v-arifur-rahman1.vercel.app/item/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(i => i._id !== id);
                    setItems(remaining);
                })
        }
    }

    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img style={{ height: "25vh" }} src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{displayName}</h2>
                        <p>{description}</p>
                        <p className='font-bold'>Price: ${price}</p>
                        <div className="card-actions justify-center">
                            <div>
                                <Link to={`/update/${_id}`}><button type="button" className="btn btn-danger">
                                    Update    </button></Link>
                            </div>
                            <div>
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(_id)}>
                                    DELETE    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shoe;