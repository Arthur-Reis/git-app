import request from './interceptors'

/**
 * Search and return an User Data
 * @param name the name of the user to be searched
 * @returns ...
 */
function getUserData(name, page) {
  return request
    .get('search/users?q=' + `${name}` + '+in:user&page=' + `${page}` + '&per_page=10')
    .then(({ data }) => {
      return data
    })
}

//example URL
//https://api.github.com/search/users?q=rocketSeat+in:user%27&page=1&per_page=10
export default getUserData
