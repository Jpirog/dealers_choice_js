const moment = require('moment');

module.exports = function (series) {
  //series = [{name:'Ozark', id: 1, upvotes: 10, date:'2000-01-01'}];
  console.log("IN SERIES LIST", series)
  //series.forEach(c => console.log("---",c))
  return `<!DOCTYPE html>
  <html>  <head>    <title>Wizard News</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="/logo.png"/>Wizard News</header>
      ${series.map(c => `
        <div class='news-item'>
          <p>
            <span class="news-position">${c.id}. ▲</span><a href="/posts/${c.id}">${c.title}</a>
            <small>(by ${c.name})</small>
          </p>
          <small class="news-info">
            ${c.upvotes} upvotes | ${moment(c.date).fromNow()}
          </small>
        </div>`
      ).join('')}
    </div>
  </body>
</html>`;
}
