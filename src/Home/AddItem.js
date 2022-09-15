import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,event) => {
        const { name, description,price,img } = data;
        const items = {
            displayName: name,
            description:description,
            price:price,
            category: event.target.accountType.value,
            img:img
            
          };
        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(items)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);

            })
    }
    return (
        <div>
           <div className='w-full mt-36 flex items-center flex-col '>
           <div>
                <h1 className='font-bold text-xl mb-5'>Add Product</h1>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                <input className="input input-bordered w-full max-w-xs mb-3" placeholder='Enter product name' {...register("name", { required: true, maxLength: 20 })} /></div>
                <div className="form-control w-full max-w-xs">
                <input className="input input-bordered w-full max-w-xs mb-3" placeholder='Enter description' {...register("description")} /></div>
                <div className="form-control w-full max-w-xs">
                <input className="input input-bordered w-full max-w-xs mb-3" placeholder='Enter price' type="number" {...register("price")} /></div>
                <div className="form-control w-full max-w-xs mb-3">
                <select
                    name="accountType"
                    className=" input bg-white input-bordered"
                    {...register("accountType", {
                      required: {
                        value: true,
                        message: "*Account Type Required",
                      },
                    })}
                  >
                    <option value=" ">Category</option>
                    <option value="Shirt">Shirt</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Pant">Pant</option>
                    <option value="Shoe">Shoe</option>
                  </select></div>
                <div className="form-control w-full max-w-xs">
                <input className="input input-bordered w-full max-w-xs mb-3" placeholder='Photo URL' type="text" {...register("img")} /></div>
                <input className='btn  w-full max-w-xs' type="submit" value={'Register'} />
            </form>
        </div>
        </div>
    );
};

export default AddItem;