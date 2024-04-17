/* eslint-disable react/prop-types */

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignal, faList } from '@fortawesome/free-solid-svg-icons';
import { faClock, faHeart } from '@fortawesome/free-regular-svg-icons';
import Rating from './Rating';




function Modal({course}) {
    const [isPreferred, setIsPreferred] = useState(false);
    const [wishlist, setWishlist] = useState(false);
    const addToWishlist = () => {
        setIsPreferred(!isPreferred);
        setWishlist(!wishlist);
    }


  return (
    <div className="modal">
                                <h3 className="modal__title">{course.name}</h3>
                                <div className='rating'>
                                    {Rating(course.rating)} ({course.rating})
                                </div>
                                <p className='modal__description'>{course.description}</p>
                                <div className="modal__details">
                                    
                                    <div className="modal__element">
                                        <span className="icon"><FontAwesomeIcon icon={faSignal} /></span>
                                        {course.level}
                                    </div>
                                    <div className="modal__element">
                                        <span className='icon'><FontAwesomeIcon icon={faList} /></span>
                                        {course.lectures} Lectures
                                    </div>
                                    <div className="modal__element">
                                        <span className='icon'><FontAwesomeIcon icon={faClock} /></span>
                                        {course.hours} hours
                                    </div>

                                </div>

                                <button className="modal__button">Preview this course</button>

                                <div className="modal__info">

                                    <div className={isPreferred ? 'wishlist actived' : 'wishlist'} onClick={addToWishlist}>
                                        <span className="wishlist__icon">
                                            <FontAwesomeIcon icon={faHeart} className="modal__icon"/>
                                        </span>
                                        <span className="wishlist__text">{wishlist ? 'Added to Wishlist' : 'Add to Wishlist'}</span>
                                    </div>
                                    <div className="modal__price">
                                        <span className="old-price">${course.oldPrice}</span>
                                        <span className="new-price">${course.price}</span>
                                    </div>
                                </div>
                                

                            </div>
  )
}

export default Modal