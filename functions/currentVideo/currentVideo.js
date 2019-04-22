/* eslint-disable */
const fetch = require('node-fetch')
const querystring = require('querystring')

const REQUEST_PARAMS = querystring.stringify({
  part: 'snippet',
  channelId: 'UCC_RiXv7ZIiFeTXIvnJmNIQ',
  maxResults: 1,
  order: 'date',
  type: 'video',
  key: process.env.YOUTUBE_API_KEY
})
const REQUEST_URL = `https://www.googleapis.com/youtube/v3/search?${REQUEST_PARAMS}`

exports.handler = async function(event, context) {
  try {
    const response = await fetch(REQUEST_URL, {
      headers: { Accept: 'application/json' }
    })

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: data.items[0].id.videoId
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
