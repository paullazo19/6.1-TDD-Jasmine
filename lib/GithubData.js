function GithubData(){
  var githubData = this;

  githubData.getData = function(){

    $.getJSON("https://api.github.com/users/paullazo19", function(data){
      console.log(data.name,", ", data.login,", ", data.location,", ", data.email,", ", data.updated_at,", ", data.public_repos);
    })
  }
}
module.exports = GithubData;
