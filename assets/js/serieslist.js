const moment = require('moment');

module.exports = function (series) {
  const header=`<!DOCTYPE html><html>  <head>    <title>Dealer's Choice</title><link rel="stylesheet" href="styles.css" /></head><body>`
  const heading = '<h1> Best TV Series of the Past 25 Years!</h1><main>';
  const newRow = `<div class="row">`;
  const endRow = '</div>';
  const newCol = `<div class="col"><div class="ent">`;
  const endCol = `</div></div>`;
  const footer = '</main></body></html>';
  const newLink = '<a href=/series/';
  const endLink = '</a>';

  const partOne = header + heading + newRow + newCol + 'ID' + endCol + 
     newCol + 'Title' + endCol + newCol + 'Tomato' + endCol +
     newCol + 'Premiered' + endCol + newCol + 'Network' + endCol +
     newCol + 'Summary' + endCol + endRow

  const body = series.map( c => newRow + newCol + c.id + endCol + 
    newCol + newLink + c.id + '>' + c.title + endLink + endCol + newCol + c.tomato + endCol + 
    newCol + c.premier + endCol + newCol + c.network + endCol +
    newCol + c.summary + endCol +
    endRow).join('')

  return partOne + body + footer
}
