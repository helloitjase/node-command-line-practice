const axios = require('axios');

module.exports = {
  freeCodeCamp: async(req, res) => {
    try{
      let result = await axios.get('https://wind-bow.glitch.me/helix/streams?user_login=freecodcamp');  
      if (result.data.data.length === 0) {
        res.send(false);
      } else {
        res.send(true);
      }
    } catch(err) {
      res.send(err);
    }
  },
  reDirectChannel: (req, res) => {
    axios.get(`https://wind-bow.glitch.me/helix/users?login=${req.params.channel}`)
    .then((result) => {
      if (result.data.data.length === 0) {
        throw 'no streamer';
      } else {
        console.log('hit');
        let channel = result.data.data[0];
        res.redirect(`https://twitch.tv/${channel.login}`)
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    })
  },
  getChannelInfo: (req, res) => {
    let channel = req.params.channel;
    axios.get(`https://wind-bow.glitch.me/helix/streams?user_login=${channel}`) 
    .then((data) => {
      if (result.data.data.length === 0) {
      throw 'no information on stream'; 
      } else {
        res.send(result.data.data[0]);
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    })
  }
}