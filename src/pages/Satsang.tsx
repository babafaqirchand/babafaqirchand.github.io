import Section from '../components/ui/Section';
import satsangData from '../customizations/satsang.json';
import Video from '../components/ui/Video';

const Satsang: React.FC = () => {
    return (
        <Section id='satsang'>
            {satsangData.map((satsang, index) => (
                <Video key={index} title={satsang.title} embed_url={satsang.embed_url} />
            ))}
        </Section>
    )
};

export default Satsang;
