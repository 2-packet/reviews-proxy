require('newrelic');
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/:id/summary', (req, res) => {
  const {id} = req.params;
  axios.get(`/${id}/summary`)
  .then(response => {
    res.status(200).send(response.data);
  })
  .catch(error => {
    res.status(500).send();
  })
});

app.get('/:id/reviews', (req, res) => {
  const {id} = req.params;
  axios.get(`/${id}/reviews`)
  .then(response => {
    res.status(200).send(response.data);
  })
  .catch(error => {
    res.status(500).send();
  })
});

app.listen(3000, () => {
  console.log('Open Table proxy server listening on port 3000!');
});
