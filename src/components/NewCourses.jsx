import courses from "../courses";

import Rating from "./Rating";
import Modal from "./Modal";

import "linearicons/dist/web-font/style.css";

function NewCourses() {
  return (
    <>
      <section className='new-courses'>
        <div className='container'>
          <h2 className='title'>New Courses</h2>
          <div className='grid'>
            {courses.map((course) => (
              <div key={course.id} className='card'>
                {course.special && <span className='special'>special</span>}
                <img
                  className='card__image'
                  src={`/assets/${course.src}`}
                  alt={course.name}
                />
                <div className='card__body'>
                  <div className='card__info'>
                    <p className='card__category'>{course.category}</p>
                    <h4 className='card__title'>{course.name}</h4>
                  </div>
                  <div className='card__details'>
                    <div className='rating'>
                      {Rating(course.rating)} ({course.rating})
                    </div>
                    <div className='card__price'>
                      <span className='old-price'>${course.oldPrice}</span>
                      <span className='new-price'>${course.price}</span>
                    </div>
                  </div>
                </div>
                <Modal course={course} />
              </div>
            ))}
          </div>
          <button className='courses-btn'>load more</button>
        </div>
      </section>
    </>
  );
}

export default NewCourses;
