import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerse website is an online platform that facilitates
                    buying and sellling of products or services over the internet. It
                    serves as the virtual marketplace where businesses and individuals can
                    showcase their products, interact with customers, and conduct 
                    transactions without the need for a physical presence. E-commerse 
                    websites have gained immense popularity due to their convenient
                    accessebility, and the global reach they offer.
                </p>
                <p>
                    E-commerse websites typically display products or services a detailed 
                    descriptions, images, prices, and any available variations
                    (e.g., sizes, colors). Each product usually has its own dedicated
                    with relevant information.
                </p>
            </div>
    </div>
  )
}

export default DescriptionBox