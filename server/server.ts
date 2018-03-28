const express = require('express');
const routes = require('./routes.ts');
const app = express();
const port = process.env.PORT || 8000;

app.use('/api', routes);

app.listen(port, (err) => {
  err
    ? console.log('Cannot connect ...', err)
    : console.log('Connected! Server is listening on port ' + port);
});

