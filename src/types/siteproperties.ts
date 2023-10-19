import SocialProfiles from './socialprofiles';
import HeroImage from './hero';
  
interface Robots {
    index: boolean;
    follow: boolean;
}

interface SiteProperties {
    url: string;
    title: string;
    author: string;
    shortDescription: string;
    longDescription: string;
    keywords: string[];
    heroImage: HeroImage;
    socialCards: string[];
    favicon: string;
    robots: Robots;
    substackUrl: string;
    socialProfiles: SocialProfiles;
    useCarousel: boolean;
}

export default SiteProperties;