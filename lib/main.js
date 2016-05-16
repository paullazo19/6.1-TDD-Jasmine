$ = require("jquery");

var GithubData = require("../lib/GithubData.js");

// `https://api.github.com/users/<username>`

$(function(){
  // Code here!

  var githubData = new GithubData();
  githubData.getData();
});
