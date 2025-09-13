const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    res.statusCode = 200;
    res.end('ok');
    return;
  }
  res.statusCode = 200;
  res.end('hello from ploy');
});

server.listen(port, () => {
  console.log(`listening on :${port}`);
});
