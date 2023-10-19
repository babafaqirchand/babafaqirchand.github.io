import React, { useState, useCallback } from 'react';
import RssObject from '../../types/rssfeed';
import { Link } from 'react-router-dom';
import rssFeedJSON from './RssFeed.json';
import propertiesJSON from '../../customizations/siteproperties.json';
import SiteProperties from '../../types/siteproperties';
import Header from './Header';
import './BlogFeed.css';

const properties = propertiesJSON as SiteProperties;
const feedData: RssObject = rssFeedJSON as RssObject;

const BlogFeed: React.FC = () => {
  const [displayedEntries, setDisplayedEntries] = useState(5);

  const showMoreEntries = useCallback(() => {
    setDisplayedEntries(prev => prev + 5);
  }, []);
  
  return (
    <div>
      <Header title={feedData?.title} subtitle="Recent Posts" />
      <div className="contentcontainer">
        <div className="textcontainer">
          {feedData?.entries.slice(0, displayedEntries).map((entry, index) => (
            <div key={index} className="blogtext mb-16 lg:md-24">
              <Link to={entry.link} className="text-xl font-bold">Read this post on {feedData.generator}</Link>
              <h1 dangerouslySetInnerHTML={{ __html: entry.title}} />
              <h2 dangerouslySetInnerHTML={{ __html: entry.description}} />
              <div dangerouslySetInnerHTML={{ __html: entry['content:encoded'] }} />
            </div>
          ))}
          {displayedEntries < feedData?.entries.length ? (
            <button onClick={showMoreEntries}>
              Show more
            </button>
          ) : (
            <a href={properties.substackUrl} target="_blank" rel="noopener noreferrer">
              <button>
                Read this blog on {feedData?.generator}
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogFeed;
