const http = require('http');

const hostname = '0.0.0.0';
const {PORT = '3001'} = process.env;

let cachedPostUrl = null;

const respond = (res, statusCode, contentType, body) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', contentType);
  res.end(`${body}\n`);
};

const server = http.createServer((req, res) => {
  const url = decodeURI(req.url).replace(/\+/g, ' ');
  console.log(`${req.method} ${url}`);
  switch (req.method) {
    case 'GET':
      respond(res, 200, 'application/json', cachedPostUrl);
      break;
    case 'POST':
      cachedPostUrl = url;
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
