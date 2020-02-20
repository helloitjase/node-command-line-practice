const dns = require('dns');
let count = 0;
let shortUrls = {

}
module.exports = {
  new: function(req, res) {
    let currCount = count;
    dns.lookup(req.body.url, (err) => {
      if (err) {
        res.send({error: "invalid URL"});
      } else {
        shortUrls[currCount] = req.body.url;
        count++;
        res.send(`localhost:3000/shortner/api/shorturl/${currCount}`);
      }
    })
 },
 useShort: function(req, res) {
   let id = req.params.id;
   if (shortUrls[id] !== undefined) {
     let url = 'http://' + shortUrls[id];
     res.redirect(url);
   } else {
     res.sendStatus(500);
   }  
 }
}