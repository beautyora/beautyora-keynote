const http = require('http'), fs = require('fs'), path = require('path');
const root = __dirname, types = { '.html': 'text/html; charset=utf-8', '.svg': 'image/svg+xml', '.js': 'text/javascript' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(root, path.normalize(p));
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (e, d) => { if (e) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); res.end(d); });
}).listen(5176, '127.0.0.1', () => console.log('http://127.0.0.1:5173'));
