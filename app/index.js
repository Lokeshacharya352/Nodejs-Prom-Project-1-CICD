const express = require('express');
const client = require('prom-client');
const app = express();
const PORT = process.env.PORT || 3000;

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const counter = new client.Counter({
    name: 'my_app_requests_total', 
    help: 'Total number of requests to my app'
});

app.get('/', (req, res) => {
    counter.inc(); // Increment the counter for each request
    res.send('Hello from NodeJS with Prometheus!');
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);

    const metrics = await client.register.metrics();

    res.end(metrics);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});