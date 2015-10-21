var express = require('express');
var serve = express();
serve.use(express.static(__dirname + '/web'));
serve.set('port', (process.env.PORT || 5555));
serve.listen(serve.get('port'), function () {
  console.log('Node app of LiveStreamingD is running at localhost:' + serve.get('port'));
});
