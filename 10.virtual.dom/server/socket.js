const { Server } = require('ws');

const sockserver = new Server({ port: 443 });
sockserver.on('connection', (ws) => {
   console.log('New client connected!');
   ws.on('close', () => console.log('Client has disconnected!'));
});

setInterval(() => {
   sockserver.clients.forEach((client) => {
    const ids = [
        { id: 1 , count: Math.floor(Math.random() * 100) },
        { id: 2 , count: Math.floor(Math.random() * 200) },
        { id: 3 , count: Math.floor(Math.random() * 300) },
    ]
       const data = JSON.stringify(ids);
       client.send(data);
   });
}, 2000);
