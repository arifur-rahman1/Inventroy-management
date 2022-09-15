import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    return (
        <div>

            <div className="grid grid-cols-3 gap-3">
                {/* card one */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://static.fibre2fashion.com/MemberResources/LeadResources/1/2021/5/Seller/21194119/Images/21194119_0_men-s-shirts.jpg" alt="Shoes" className="rounded-xl" />
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
                        <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/11/Tshirt-design.jpg?auto=format&q=60&w=2060&h=1158.75&fit=crop&crop=faces" alt="Shoes" className="rounded-xl" />
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
                        <img src="https://media.istockphoto.com/photos/background-of-many-jeans-pants-picture-id1126212782?k=20&m=1126212782&s=612x612&w=0&h=2xhx-n7Sgx90uBUS3Otx8kfi1Ktq-fzeZOZ8g5uWEAQ=" alt="Shoes" className="rounded-xl" />
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
                        <img src="https://www.pngmart.com/files/21/Adidas-Shoes-PNG-Isolated-File.png" alt="Shoes" className="rounded-xl" />
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