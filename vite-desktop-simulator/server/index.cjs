const express = require('express');
const dotenv = require('dotenv');
const request = require('request');

const port = 3000

dotenv.config()

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

var app = express();

const cors = require('cors')
app.use(cors({ origin: 'http://localhost:5173' }))


var access_token = '';

var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

app.get('/auth/login', (req, res) => {
  var scope = "streaming user-read-email user-read-private user-modify-playback-state user-read-playback-state"

  var state = generateRandomString(16);

  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: "http://127.0.0.1:3000/auth/callback",
    state: state
  })

  res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
});

app.get('/auth/callback', (req, res) => {

  var code = req.query.code;

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: "http://127.0.0.1:3000/auth/callback",
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };


  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
// in /auth/callback success:
access_token = body.access_token;
res.redirect('http://127.0.0.1:5173/desktop');
    } else {
      console.log('Spotify error:', body) // add this
      res.status(400).json({ error: body })
    }
  });
})


app.get('/auth/token', (req, res) => {
  res.json({ access_token: access_token });
});



app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1:${port}`)
})
