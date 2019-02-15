var request = require('request-promise'); // "Request" library

function get() {


    var client_id = process.env.SPOTIFY_CLIENT_ID; // Your client id
    var client_secret = process.env.SPOTIFY_CLIENT_SECRET; // Your secret

    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      form: {
        grant_type: 'client_credentials'
      },
      json: true
    };
    return request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        return body.access_token;
      }
    });

}

module.exports.get = get;
