import React from 'react'
import styles from "./CarouselContent.module.scss";
import Image from "next/image";
const CarouselContent = ({imgSrc}) => {
  return (
    <div>
        <div className = {styles["imgContatiner"]}>
        <Image.default
            src={imgSrc}
            alt="Image"
            layout="responsive"
            objectFit="cover"
            draggable={false}
            width = "100"
            height = "58px"
            
          />
        </div>
    
        
    </div>
  )
}

export default CarouselContent