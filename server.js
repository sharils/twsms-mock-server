const http = require('http');

const hostname = '0.0.0.0';
const {PORT = '3000'} = process.env;

let cachedPostUrl = null;

const respond = (res, statusCode, contentType, body) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', contentType);
  res.end(`${body}\n`);
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`)
  switch (req.method) {
    case 'GET':
      respond(res, 200, 'application/json', JSON.stringify(cachedPostUrl));
      break;
    case 'POST':
      cachedPostUrl = req.url;
      respond(
        res,
        200,
        'text/xml',
        '<smsResp><code>12345</code><text>Success</text><msgid>123456789</msgid></smsResp>',
      );
      break;
  }
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
