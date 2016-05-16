describe("Github Data Spec", function(){
  var GithubData = require("../lib/GithubData.js");
  var githubData;

  beforeEach(function(){
    githubData = new GithubData();
  });

  //empty by default test

  it("requests data from URL", function(){
    spyOn(githubData, "getData");
    githubData.getData("https://api.github.com/users/paullazo19");
    expect(githubData.getData).toHaveBeenCalledWith("https://api.github.com/users/paullazo19")
  });



})
