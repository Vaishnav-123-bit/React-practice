import { useState } from "react";
import {FaStar} from "react-icons/fa";
import './styles.css'
export default function StarRating({ noOfStars=5 }) {
    const[rating,setRating]=useState(0);
    const[hover,setHover]=useState(0)

    function handleClick(getCurrentId){
        setRating(getCurrentId)
    }

    function handleMouseMove(getCurrentId){
        setHover(getCurrentId)

    }

    function handleMouseLeave(){
        setHover(rating)

    }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index+=1
        return <FaStar
        className={index <= (hover || rating)?"active":"inactive"}
        key={index}
        onClick={()=>handleClick(index)}
        onMouseMove={()=>handleMouseMove(index)}
        onMouseLeave={()=>handleMouseLeave()}
         />;
      })}
    </div>
  );
}
