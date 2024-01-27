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
    "Cookie": "ab_testing_id=%22cb2f0b40-ebc2-4014-b839-a6f629c9998f%22; ajs_anonymous_id=%2254d4d15d-248d-4f2b-a7e5-322802067eba%22; ajs_anonymous_id=%2254d4d15d-248d-4f2b-a7e5-322802067eba%22; experiment_test_experiment_v4_run2=control; experiment_test_experiment_v4=control; _gcl_au=1.1.1257664747.1705374868; intro_popup_last_hidden_at=2024-01-16T03:14:29.634Z; __cf_bm=0Z6DjGYaH.HWyumsD4jN3txVo0YZpph9bxeUroqNrEc-1706368899-1-Abk6nDj46gludi1VbALZJumy1brHkVCIjscPYSytsjJQ6HLMXllZN4WSRXxu/O6KnsxVmejgsgytHa+2qbJTwVA=; visit_id=%7B%22id%22%3A%221de9beb9-b195-4023-a23f-7f55393be06a%22%2C%22timestamp%22%3A%222024-01-27T15%3A21%3A39.904Z%22%7D; AWSALBTG=Zy7zRf+7F1dVfHcj3X3vURpp/VTflh94eTeCa973p8Mhf2WLZFiBBk+wDsY/4MhxtIXTiLQEBhD6n+xNfqETvlhtjBOtUu57C03PJqz02bfLpYbBKjgnJIvUxMZcAADeTp7iVfxiekeKJRN1r0b/tFgz+1Mk/WVYlmMoeJG8uYYN; AWSALBTGCORS=Zy7zRf+7F1dVfHcj3X3vURpp/VTflh94eTeCa973p8Mhf2WLZFiBBk+wDsY/4MhxtIXTiLQEBhD6n+xNfqETvlhtjBOtUu57C03PJqz02bfLpYbBKjgnJIvUxMZcAADeTp7iVfxiekeKJRN1r0b/tFgz+1Mk/WVYlmMoeJG8uYYN; _dd_s=rum=0&expire=1706369800779",
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
