import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const PORT = 3000
const OUT_DIR = path.join(__dirname, 'out')

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.pdf': 'application/pdf'
}

const server = http.createServer((req, res) => {
  let filePath = path.join(OUT_DIR, req.url === '/' ? 'index.html' : req.url)
  
  // Security: prevent directory traversal
  if (!filePath.startsWith(OUT_DIR)) {
    res.writeHead(403)
    res.end('Forbidden')
    return
  }

  const ext = path.extname(filePath).toLowerCase()
  const contentType = MIME_TYPES[ext] || 'application/octet-stream'

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Try index.html for directories
        filePath = path.join(OUT_DIR, req.url, 'index.html')
        fs.readFile(filePath, (err2, content2) => {
          if (err2) {
            res.writeHead(404)
            res.end('File not found')
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end(content2, 'utf-8')
          }
        })
      } else {
        res.writeHead(500)
        res.end('Server error: ' + err.code)
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    }
  })
})

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`)
  console.log(`📁 Serving files from: ${OUT_DIR}`)
  console.log(`\n✅ Open your browser and visit:`)
  console.log(`   http://localhost:${PORT}/`)
  console.log(`\nPress Ctrl+C to stop the server`)
})
