import Section from '../components/ui/Section';
import satsangData from '../customizations/satsang.json';
import SatsangVideo from '../types/satsang';
import Carousel from '../components/ui/Carousel';
import sitepropertiesJSON from '../customizations/siteproperties.json';
import SiteProperties from '../types/siteproperties';
import Video from '../components/ui/Video';

const Satsang: React.FC = () => {
    const videos: SatsangVideo[] = satsangData;
    const useCarousel: boolean = (sitepropertiesJSON as SiteProperties).useCarousel;
    
    // If useCarousel, use Carousel component, else map videos to Video components
    return (
        <Section id='satsang'>
            {useCarousel ? (
                <Carousel videos={videos} />
            ) : (
                videos.map((video, index) => (
                    <div className="mt-8 mb-8">
                        <Video key={index} title={video.title} embed_url={video.embed_url} />
                    </div>
                ))
            )}
        </Section>
    )
};

export default Satsang;
