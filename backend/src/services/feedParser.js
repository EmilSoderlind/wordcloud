const Parser = require('rss-parser')

const fetchRssFeed = async (feedUrl) => {
  const parser = new Parser()
  const feed = await parser.parseURL(feedUrl)

  return feed
}

module.exports = {
  fetchRssFeed
}
