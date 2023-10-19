import Section from '../components/ui/Section';
import satsangData from '../customizations/satsang.json';
import SatsangVideo from '../types/satsang';
import Video from '../components/ui/Video';

const Satsang: React.FC = () => {
    const satsang: SatsangVideo = satsangData[0];
    
    return (
        <Section id='satsang'>
            <Video embed_url={satsang.embed_url} />
        </Section>
    )
};

export default Satsang;
