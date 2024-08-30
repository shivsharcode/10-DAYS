const Http = require('http')

const server = Http.createServer( (req, res)=>{
    res.statusCode = 200 ;
    res.setHeader('Content-Type', 'text/plain') ;
    res.end('Shivam Mini Robo Working') ;

} );

const PORT = 3000 ;

server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}/`) ;
});