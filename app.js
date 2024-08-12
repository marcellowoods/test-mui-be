const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/db');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
