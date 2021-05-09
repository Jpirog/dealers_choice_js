module.exports = function (c, port) {
  const moment = require('moment');

  if (Object.entries(c).length === 0) {
    return `Hello - the article you selected was not found. Please select another one.`;
  }

  const header = `<!DOCTYPE html><html>  <head>    <title>Dealer's Choice</title><link rel="stylesheet" href="/styles.css" /></head><body>`
  const heading = `<h1> Best TV Series of the Past 25 Years! - ${c.title}</h1><main>`;
  const footer = `</main><footer><h3>Return to the  <a href='http://localhost:${port}/'>series list</a><h3></footer></body></html>`
  const newRow = `<div class="row">`;
  const endRow = '</div>';
  const newCol = `<div class="col"><div class="ent">`;
  const endCol = `</div></div>`;

  const partOne = header + heading + newRow + 
    newCol + 'Title' + endCol + newCol + 'Details' + endCol + endRow

  const body = newRow + 
    newCol + `<strong>` + c.title +`</strong><small> (${c.network})<br>Tomato rank: ${c.tomato} - as of ${moment(c.date).fromNow()}</small>` + endCol + newCol + c.content + endCol + endRow
    
  return partOne + body + footer
};