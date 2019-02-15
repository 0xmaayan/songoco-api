var request = require('request-promise'); // "Request" library
const {google} = require('googleapis');

const Token = require('./getToken');

function all(req, res){
  // use the access token to access the Spotify Web API
   const { term } = req.params;
   const { token } = req.body;

   var options = {
     url: `https://api.spotify.com/v1/search?q=track:${term}&type=track&limit=20`,
     headers: {
       'Authorization': 'Bearer ' + token
      },
      json: true
    };

   return request.get(options, function(error, response, body) {
     if(error){
      if(response.statusCode === 401 && response.message === "The access token expired"){
         Token.get();
      }
     }
      res.send(body);
    });
}

function track(req, res){

  const { token } = req.body;
  const { id } = req.params

  var options = {
    url: `https://api.spotify.com/v1/tracks/${id}`,
    headers: {
      'Authorization': 'Bearer ' + token
    },
    json: true
  };

  return request.get(options, function(error, response, body) {
    res.send(body);
  });
}

function video(req, res){

  const { q } = req.body

  youtubeV3 = google.youtube( { version: 'v3', auth: process.env.YOUTUBE_AUTH } );

  return new Promise(( resolve ,reject )=>{
    youtubeV3.search.list({
      part: 'snippet',
      q: q,
      type: 'video',
      maxResults: 1,
    }, (err,response, body) => {
      resolve(res.send(response.data));
      reject(res.send(err));
    });
  });

}

module.exports = { all, track, video };
