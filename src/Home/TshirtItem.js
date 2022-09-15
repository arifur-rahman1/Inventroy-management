import React from 'react';

const TshirtItem = ({item}) => {
    const { displayName, description, price, img } = item
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img  style={{height:"25vh"}} src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{displayName}</h2>
                        <p>{description}</p>
                        <p className='font-bold'>Price: ${price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TshirtItem;