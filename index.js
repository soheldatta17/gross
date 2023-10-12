const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); // Require body-parser

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Use bodyParser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Define a route to render the Pug template
app.get('/', (req, res) => {
    res.status(200).render('1.pug');
});

app.post('/execute', (req, res) => {
    let name = req.body.input_value1;
    let date = req.body.input_value2;
    let cost = req.body.input_value3;
    console.log(name);
    console.log(date);
    console.log(cost);
    var params = { content: 'success' }
    res.status(200).render('1.pug',params);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
