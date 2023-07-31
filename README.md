# An easy-to-customize website to honor your family guru and promote your books

This website, created by Promptly Technologies, LLC, is designed for easy customization and free hosting on Github Pages. It is built with Typescript, React, and TailwindCSS, and it uses Github Actions in combination with some custom Node.js scripting to automatically build and deploy the site every time you make a change.

## Customizing the site

Most customization is done from the `src/customizations` folder. This folder contains JSON files that define the content of the site. You can edit these files directly on Github and save your changes. 

For example, to change the text of the headers, you would edit the "title" and "subtitle" fields in `headers.json`. 

Or to change the text or images in the biography sections, edit the "img" and "bio" fields in`biographies.json`. (Note that the "img" field should be the path to an image file in the `public` folder. You can add your own new images to this folder if you want to use them on the site.)

To add new books, add a new object to the list in the `books.json` file. The new object must go inside the square brackets `[]` and must be separated from the other objects by a comma `,`. The new object must have the following fields:

```
{
      "title": "Your Title Here",
      "author": "Your Author Here",
      "description" : "Your Description Here",
      "detail_page_url": "https://archive.org/details/your-book-slug-here",
      "cover_url": "images/books/your-image-filename-here.jpg",
      "pdf_url": "https://archive.org/download/your-book-slug-here/your-pdf-file-name-here.pdf",
      "language": "Hindi or English here"
}
```

Do yourself a favor and don't upload filenames to archive.org that have spaces in them, okay? Just use hyphens or underscores instead. To get the pdf link from archive.org, you can navigate to `https://archive.org/download/your-book-slug-here`, find the pdf file in the file list, right-click, and select "Copy Link Address". 

For the cover, I recommend you upload a cover image to the `public/images/books` folder and then use the path to that image as the value for the "cover_url" field. Note that this should be a relative filepath with `public` as the root folder. For example, if you upload a file named `my-book-cover.jpg` to the `public/images/books` folder, the value for the "cover_url" field should be `images/books/my-book-cover.jpg`. You *could* use a cover from archive.org, but their thumbnails are super small and low-resolution, so it won't look as good.

When you edit files, make sure to save your changes, and within a few minutes, your changes should be reflected on the live site. (Note: if you've waited a few minutes and you don't see your changes, try pressing CTRL + F5 to clear the cache and refresh the page.)

Note that blog posts will get scraped every night at midnight or any time you make changes to the site. So if you put a new post on Substack, it may not be reflected until the next day. If you want to force a refresh, you can go to the "Actions" tab on Github and click the "Run workflow" button. (Note that you will need to be logged in to Github to do this.)

## Using a custom domain

If you want to use a custom domain instead of the default 'https://babafaqirchand.github.io', it's a bit complicated. Here's the rundown on what you need to do:

1. Register a domain name with a domain manager like Godaddy or Domain.com. If you already have a domain you've been using for another website, restore the default DNS settings.
2. Add the domain under your **user** "Settings > Pages" on Github. (Not to be confused with your **repo** "Settings > Pages"!)
3. Follow Github's instructions to verify your domain. This will involve going back to your domain manager and creating a DNS record. Here's how I did that on the domain management service I used, Domain.com:
   - Click to "Manage" the domain.
   - Go to "Advanced > DNS & Nameservers" on the menu bar.
   - Go to "DNS Records" tab.
   - Click "Add DNS Record".
   - Set "Type" to "TXT", "Time to Live" to half an hour, and "Name" and "Content" to the values provided by Github.
   - Click "Add DNS".
   - Wait 15–30 minutes for the DNS changes to propagate, then go back to Github "Settings > Pages" and click the button to finish verification.
4. As long as we're here, we'll also edit the DNS records to point them to Github's servers:
   - Delete all existing "CNAME" records and any "A" records named "@". (You should leave all other "A" records alone. Only delete the ones named "@".)
   - Create four new records of type "A", named "@". Each record's value/content should be one of the four Github Pages IP addresses: "185.199.108.153", "185.199.109.153", "185.199.110.153", "185.199.111.153". Set "Time to Live" to half an hour. You should have an "A" record for each IP address.
   - Create one record of type "CNAME", named "www", with your custom domain (e.g., *example.com*, with no "http://" prefix) as its value/content. Set "Time to Live" to half an hour.
5. In your 'babafaqirchand.github.io' repo on Github, you will now go to the **repo** "Settings > Pages" (not to be confused with the **user** settings you changed in a previous step!) and add your domain.
6. At first, you'll probably see a message that verification of your domain failed. You'll need to wait at least a couple of ours for your DNS changes to propagate, maybe even a full day. Then refresh this page, and you should see "DNS check successful" under the custom domain field.
7. Click the check box to "Enforce HTTPS". (If the DNS check passed but the box isn't clickable,  Github may not have issued your site an SSL certificate yet. Take and break for a few hours and then come back and try again. If it still doesn't work, try removing and re-adding your domain.)

Additionally, to use a custom domain, you will need to update the "url" field in `siteproperties.json` to your prefixed custom domain (e.g., "https://babafaqirchand.com"). (The automatic build process will propagate this to other files as needed, so you shouldn't need to manually change this anywhere else.)