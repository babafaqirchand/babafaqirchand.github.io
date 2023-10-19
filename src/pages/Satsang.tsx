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
            <Carousel videos={videos} />
        </Section>
    )
};

export default Satsang;
