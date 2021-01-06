import api_instance from './index'

/**
 * Search and return a Repository Data
 * @param usarName the name of the user to be searched
 * @param repoName the name of the repository to be searched
 * @returns ...
 */
function call_repo(userName, repoName) {
  api_instance.get('repos/' + `${nome}` + `${repoName}`).then(console.log)
}

export default call_repo
