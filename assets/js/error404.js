module.exports = function (port) {
  return `<html><body><h1>Not Found!</h1>
  <h2>HTTP 404 - Page not found!</h2>
  <h3>Please retry your request or go to the <a href='http://localhost:${port}/'>home page</a><h3>
  <img src='https://assets.prestashop2.com/sites/default/files/styles/blog_750x320/public/blog/2019/10/banner_error_404.jpg?itok=eAS4swln'>`
}