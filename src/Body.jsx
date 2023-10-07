import './Body.css';

import React from 'react';
import Product3 from './image/product-3.jpg';
import Product4 from './image/product-4.jpg';
import Product7 from './image/product-7.jpg';
import ProductSingle2 from './image/product-single-2.jpg'
import BannerImg01 from './image/banner_img_01.jpg'
import BannerImg02 from './image/banner_img_02.jpg'
import BannerImg03 from './image/banner_img_03.jpg'
import CategoryImg01 from './image/category_img_01.jpg'
import CategoryImg03 from './image/category_img_03.jpg'

const Body = (props) => {
    const imagesTab = [{src:ProductSingle2}, {src:BannerImg01}, {src:BannerImg02}, {src:BannerImg03}, {src:CategoryImg01}, {src:CategoryImg03}];
    return (
        <div className='corps'>
            <h2>All products</h2>
            <div className='boite1'>
                {imagesTab.map((image, index) => (
                <div className='sous-boite' key={index}>
                    <img src={image.src} alt='Image'/>
                    <div className='images'>
                        <img src={Product3} alt='Image'/>
                        <img src={Product4} alt='Image'/>
                        <img src={Product7} alt='Image'/>
                    </div>
                    <p>Price : 15000 Ar</p>
                    <p>Stock : 9</p>
                    <button>Add to card</button>
                </div>
                ))}
            </div>
            <div className='boite2'>
                <h2>Filter</h2>
                <p>Price min : <input type='text' placeholder='text'/></p>
                <p>Price max : <input type='text' placeholder='text'/></p>
                <button type='submit'>Search</button>
            </div>
        </div>
    );
};

export default Body;