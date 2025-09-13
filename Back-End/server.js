const app = require('./app');
const port = 3001;
const hostname = '127.0.0.1';
const server = app.listen(port, hostname, () => {
    console.log(`Server is running on port ${server.address().port}`);
});
