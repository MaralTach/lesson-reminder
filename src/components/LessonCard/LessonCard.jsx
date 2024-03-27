import React, { useState } from 'react';
import { data } from "../../helper/data";


const LessonCard = () => {
    const [showImages, setShowImages] = useState(true);
    const[lessonCount, setLessonCount] = useState(6);

    const clearLessons = () => {
        setShowImages(false);
        setLessonCount(0);
    };

    const bringBackLessons = () => {
        setShowImages(true);
        setLessonCount(6);
    };
 
    return (
        <div>
            {/* Derslerin listesi */}
            <h2>{lessonCount} Lesson Today</h2>
            <div className="main-container">
                {showImages && data.map((item, index) => (
                    <div className="container" key={index}>
                        <div className="image-container">
                            <img src={item.image} alt="lesson" />
                        </div>
                        <div className="title">
                            <p><span>Lesson: </span>{item.name}</p>
                            <p><span>Hour:</span> {item.hour}</p>
                        </div>
                    </div>
                ))}
            </div>
            

            <div className='backClear'>
            {showImages ? (
                <button  onClick={clearLessons}>Clear List</button>
            ) : (
                <button  onClick={bringBackLessons}>Back to List</button>
            )}
            </div>
          
        </div>
    );
};

export default LessonCard;
