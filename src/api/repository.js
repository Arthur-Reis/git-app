import request from './interceptors'

/**
 * Search and return a Repository Data
 * @param usarName the name of the user to be searched
 * @param repoName the name of the repository to be searched
 * @returns ...
 */
function getRepository(userName, repoName) {
  request.get('repos/' + `${userName}` + `${repoName}`).then((r) => r)
}

export default getRepository
