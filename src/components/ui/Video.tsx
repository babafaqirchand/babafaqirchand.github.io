import './Video.css'

interface VideoProps {
    embed_url: string;
    title: string;
  }

const Video: React.FC<VideoProps> = ({embed_url, title}) => {
return(
    <div className="video-container">
        <h2 className="video-title">{title}</h2>
        <iframe 
        className="video-frame"
        width="560" 
        height="315" 
        src={embed_url} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen />
    </div>
)
};

export default Video;
