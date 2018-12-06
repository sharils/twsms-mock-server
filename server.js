const http = require('http');

const hostname = '0.0.0.0';
const {PORT = '3000'} = process.env;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');
  res.end(
    '<smsResp><code>12345</code><text>Success</text><msgid>123456789</msgid></smsResp>\n',
  );
});

server.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});
