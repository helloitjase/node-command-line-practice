module.exports = {
  timeStamp: function(req, res) {
    let currDate = req.params.date_string; 
    let date = new Date(currDate);
    let utc = date.getTime();
    if (isNaN(utc)) {
      res.send(JSON.stringify({error: "Invalid Date"}))
    } else {
      let struct = {unix: utc, utc: date.toUTCString()}
      res.send(JSON.stringify(struct));
    }
  },
  emptyDate: function(req, res) {
    let currDate = new Date();
    res.send(JSON.stringify({unix: currDate.getTime(), utc: currDate.toUTCString()}))
  }
}