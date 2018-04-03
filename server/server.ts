const express = require('express');
const routes = require('./routes.ts');
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
  extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, (err) => {
  err
    ? console.log('Cannot connect ...', err)
    : console.log('Connected! Server is listening on port ' + port);
});

