// your code here
function getRepositories()
{
  let username = document.getElementById('username').value;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/'+username+'/repos');
  req.send();

}
function showRepositories()
{
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
  .map(
    r =>
      '<li>' +
      r.name +
      '<a href="'+r.html_url+'">+'r.html_url+'</a><br>' +

      ' - <a href="#" data-repo="' +
      r.name +
      '" onclick="getCommits(this)">Get Commits</a></li>'
  )
  .join('')}</ul>`;
  console.log(repoList);
  document.getElementById('repositories').innerHTML = repoList;
}
function getCommits(el)
{
  const name = el.dataset.repo;
  const username = document.getElementById('username').value;

  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', 'https://api.github.com/repos/'+username+'/' + name + '/commits');
  req.send();
}
function displayCommits() {
  const commits = JSON.parse(this.responseText);
  console.log(commits);
  // const commitsList = `<ul>${commits
  //   .map(
  //     commit =>
  //       '<li><strong>' +
  //       commit.author.login +
  //       '</strong> - ' +
  //       commit.commit.message +
  //       '</li>'
  //   )
  //   .join('')}</ul>`;
  // document.getElementById('details').innerHTML = commitsList;
}
