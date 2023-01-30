# RSS Wordcloud

Web application that make it quick and easy to dynamically create a wordcloud from any given RSS-feed link.

## Quick overview

To start the WORDCLOUD application one must run the frontend and the backend on the same machine.

### Backend

Responsible for parsing provided RSS-feed URL and count word occurrences to be used in the wordcloud.

#### Get started 🚀

```
cd backend
npm ci
npm run start
```

#### Run tests

```
cd backend
npm ci
npm run test
```

### Frontend

User interface in which the user submits a valid RSS-feed URL, requests word occurrences from the backend and displays wordcloud.

#### Get started 🚀

```
cd frontend
npm ci
npm run start
```

Open [localhost:3000](http://localhost:3000/) to start cloudify your RSS-feeds! ☁️😃

## Example RSS-feeds

- SVT Nyheter: [https://www.svt.se/nyheter/rss.xml](https://www.svt.se/nyheter/rss.xml)
- Dagens Nyheter [https://www.dn.se/rss/](https://www.dn.se/rss/)
- Svenska Kraftnät nyheter [https://www.svk.se/Api/RSSFeed/GetNewsByCategory/Allm%C3%A4nnanyheter](https://www.svk.se/Api/RSSFeed/GetNewsByCategory/Allm%C3%A4nnanyheter)
- BBC News [http://feeds.bbci.co.uk/news/rss.xml](http://feeds.bbci.co.uk/news/rss.xml)


## Screendumps

![Screenshot 2023-01-30 at 21 42 15](https://user-images.githubusercontent.com/12121992/215591215-38789e3b-4983-41ff-a27e-51a89e2d0a8b.png)

![Screenshot 2023-01-30 at 21 42 30](https://user-images.githubusercontent.com/12121992/215591246-6901383b-acbc-41e7-b33c-e11404a70204.png)
