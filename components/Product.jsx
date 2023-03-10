import React, { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import { StarIcon } from '@heroicons/react/solid';

const MAX_RATING = 5;
const MIN_RATING = 1;
const poundGBP = Intl.NumberFormat('en-GB',{
    style: 'currency',
    currency: 'GBP',
});

const Product = ({ id, title, price, description, category, image }) => {
    const [rating,setRating] = useState(null);
    const [hasPrime,setHasPrime] = useState(null);

    useEffect(() => {
        setRating(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
        setHasPrime(Math.random() < 0.5);
    },[]);
    
    return (
        <div className='relative flex flex-col m-5 p-10 bg-white z-30'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

            <Image src={image} alt={title} width={200} height={200} objectFit='contain' />

            <h4 className='my-3'>{title}</h4>

            <div className='flex'>
                {/* 這個寫法學起來 */}
                {Array(rating)?.fill()?.map((_,index) => {
                    return (
                        <StarIcon key={index} className='h-5 text-yellow-500'/>
                    )
                })}
            </div>

            <p className='text-xs my-2 line-clamp-2'>{description}</p>

            <div className='mt-5'>
                {poundGBP.format(price)}
            </div>

            {hasPrime && (
                <div className='flex items-center space-x-2 '>
                    <img src="https://links.papareact.com/fdw" alt="" className='w-12' />
                    <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
                </div>
            )}

            <button className='mt-auto button'>Add to Basket</button>
        </div>
    )
}

export default Product;