import Section from '../components/ui/Section';
import satsangData from '../customizations/satsang.json';
import SatsangVideo from '../types/satsang';
import Carousel from '../components/ui/Carousel';

const Satsang: React.FC = () => {
    const videos: SatsangVideo[] = satsangData;
    
    return (
        <Section id='satsang'>
            <Carousel videos={videos} />
        </Section>
    )
};

export default Satsang;
