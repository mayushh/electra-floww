import React, { useEffect, useRef } from 'react';



const PopularChargerSec = (props) => {
    
    
  return (


    <div className="popular section my-20 mx-10" id="popular">
    <div className="container px-20">

        <h2 className="section__subtitle text-start text-2xl text-green-900 font-semibold">Best Choice</h2>
        <h2 className="section__title text-start text-5xl font-semibold">
            Popular Chargers<span>.</span>
        </h2>

        <div className=" swiper">
            <div className=" popularContain flex justify-around overflow-x-scroll ">


              {props.details.map((value, index)=>(
                
                <article className=" popular__card p-2 p-5 min-w-72">
                    <img src={value.image} alt="" className="popular__img rounded-xl h-auto" />
                    <div className="cardData" key={index}>
                        <h2 className="popular__price">{value.price}</h2>
                        <h3 className="popular__title">{value.chargertype}</h3>
                        <p className="popular__description">
                            {value.description}
                        </p>
                    </div>
                </article>
                ))}
                
            </div>
        </div>
    </div>
</div>

  )
}

export default PopularChargerSec