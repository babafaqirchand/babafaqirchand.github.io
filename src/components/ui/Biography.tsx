import React from 'react';
import './Biography.css';

type BiographyProp = {
    img: string;
    alt: string;
    bio: string;
};

const Biography: React.FC<BiographyProp> = ({ img, alt, bio }) => {
    return(
        <div className="textcontainer overflow-auto">
            <img src={img} alt={alt} className="w-full md:w-1/2 h-auto mb-6 md:mb-0 md:mr-6 float-left" />
            <p className="text-xl" dangerouslySetInnerHTML={{ __html: bio }}></p>
        </div>
    );
}

export default Biography;
