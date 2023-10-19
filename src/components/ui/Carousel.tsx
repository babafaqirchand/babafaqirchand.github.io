import { useState } from 'react';
import SatsangVideo from '../../types/satsang';
import Video from './Video';
import './Carousel.css';

interface CarouselProps {
  videos: SatsangVideo[];
}

const Carousel: React.FC<CarouselProps> = ({ videos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  const goToNextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="carousel-container" role="list">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          role="listitem"
          aria-hidden={index !== currentIndex}
        >
          {index === currentIndex || index === (currentIndex + 1) % videos.length ? (
            <Video embed_url={video.embed_url} title={video.title} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ))}
      <button
        className="carousel-nav carousel-prev"
        onClick={goToPrevVideo}
        aria-label="Previous Video"
      >
        Prev
      </button>
      <button
        className="carousel-nav carousel-next"
        onClick={goToNextVideo}
        aria-label="Next Video"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
