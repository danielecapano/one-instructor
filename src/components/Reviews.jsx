import { useState, useEffect } from "react";
import dataReviews from "../dataReviews"
import Slide from "./Slide";


dataReviews

function Reviews() {
    const [active, setActive] = useState(0);
    const prevRewiew = () => {
        setActive((prevValue) => {
            if (prevValue === 0) {
                return dataReviews.length - 1;
            } else {
                return prevValue - 1;
            }
        });
    };
    const nextRewiew = () => {
        setActive((prevValue) => {
            if (prevValue === dataReviews.length - 1) {
                return 0;
            } else {
                return prevValue + 1;
            }
        });
    };

    const isActive = (index) => {
        return setActive(index);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
          setActive((prevValue) => {
            if (prevValue + 1 === dataReviews.length) {
              return 0;
            } else {
              return prevValue + 1;
            }
          });
        }, 4000);
        //Elimina timout prima prima di attivare il prossimo
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [active]);
  return (
    <section className="reviews">
        <div className="container-small">
            <h2 className="title">What Students Say</h2>
            <div className="review__buttons">
                <button className="prev-button" onClick={prevRewiew}><span className="lnr lnr-arrow-left"></span></button>
                <div className="reviews__avatar">
                    {dataReviews.map((review, index) => (
                        <div className={active === index ? "review__avatar-item active" : "review__avatar-item"} key={review.id} onClick={() => isActive(index)}>
                            <img src={`src/assets/${review.img}`} alt={`avatar${review.id}`} />
                            </div>
                    ))}
                </div>
                <button className="next-button" onClick={nextRewiew}><span className="lnr lnr-arrow-right"></span></button>

            </div>
            <div className="review__slider">
                {dataReviews.map((review, index ) => {
                
                    let positionClass = "";
                    if (index === active) {
                    positionClass = "active";
                    } else if (
                    active === index + 1 ||
                    (active === 0 && index === dataReviews.length - 1)
                    ) {
                    positionClass = "prev";
                    } else {
                    positionClass = "next";
                    }
                    return (
                    <Slide key={review.id} {...review} classes={positionClass} />
                    );
                })}
            </div>
        </div>

    </section>
  )
}

export default Reviews