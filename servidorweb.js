const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    // Servir el archivo index.html
    if (req.url === "/" || req.url === "/index.html") {
        fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "text/plain");
                res.end("Error al cargar la página");
                return;
            }
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        });
    } else {
        // Si se solicita otro recurso, devolver 404
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/plain");
        res.end("Página no encontrada");
    }
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});

