import fs from 'fs';
import { extract } from '@extractus/feed-extractor'

// Read JSON file
const sitedata = JSON.parse(fs.readFileSync('src/customizations/siteproperties.json', 'utf8'));
const feedUrl = sitedata.substackUrl + '/feed';

// Set custom header
const customHeaders = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,fr;q=0.8",
    "Cache-Control": "max-age=0",
    "If-None-Match": "W/\"10440-rG0SP/kJLlfEPzOgFwvF8vEAENQ\"",
    "Sec-Ch-Ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
    "Sec-Ch-Ua-Mobile": "?1",
    "Sec-Ch-Ua-Platform": "\"Android\"",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
};

// Fetch the RSS feed
async function fetchRssFeed() {
  try {
    // Fetch the RSS feed
    const feedData = await extract(feedUrl, {
        useISODateFormat: false,
        getExtraEntryFields: (feedEntry) => { 
          return { 'content:encoded': feedEntry['content:encoded'] || '' };
        }
      }, {
        headers: customHeaders
      }
    );

    // Verify that the fetched data is a valid Javascript object
    if (!feedData || typeof feedData !== 'object') {
      throw new Error('Invalid RSS feed data');
    }

    // Remove the top-level published field
    delete feedData.published;
    
    // Convert the Javascript object to JSON and save as a UI component
    fs.writeFileSync('src/components/ui/RssFeed.json', JSON.stringify(feedData, null, 2));

    console.log('RSS feed saved successfully!');
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
  }
}

fetchRssFeed();
