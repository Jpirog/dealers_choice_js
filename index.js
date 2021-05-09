const path=require('path')
const morgan=require('morgan');
const express = require('express');
const seriesData = require('./assets/js/seriesData.js');
const app = express();
const seriesList = require('./assets/js/seriesList.js');
//const postDetails = require('./views/postDetails.js');
const error404 = require('./assets/js/error404.js')

app.use(morgan(':date[iso] :method :url (:remote-addr) :status :res[content-length] - :response-time ms and total time - :total-time ms'));
app.use(express.static('assets'))


app.get('/', (req, res, next) => {
  const series = seriesData.list();
  console.log(series);
  res.send(seriesList(series));
})

// app.get('/posts/:id', (req, res) => {
//   const id = req.params.id;
//   const post = postBank.find(id);
//   res.send(postDetails(post));
// });

app.get('*', (req, res) => {
  res.status(404);
  res.send(error404(PORT));
});

const PORT = 1337;

app.listen(PORT, () => {
  process.stdout.write(`App listening on port ${PORT}\n`)
});
