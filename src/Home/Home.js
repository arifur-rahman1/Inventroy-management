import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="grid grid-cols-3 gap-3">
                {/* card one */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shirts</h2>
                        <div className="card-actions">
                            <Link to={'/shirt'} className="btn w-full max-w-xs">Check shirts</Link>
                        </div>
                    </div>
                </div>

                {/* card2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">T-shirts</h2>
                        <div className="card-actions">
                            <Link to={'/tshirt'} className="btn w-full max-w-xs">Check T-shirts</Link>
                        </div>
                    </div>
                </div>
                {/* card3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Pants</h2>
                        <div className="card-actions">
                            <Link to={'/pant'} className="btn w-full max-w-xs">Check Pants</Link>
                        </div>
                    </div>
                </div>
                {/* card4 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes</h2>
                        <div className="card-actions">
                            <Link to={'/shoes'} className="btn w-full max-w-xs">Check Shoes</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;