import request from './interceptors'

/**
 * Search and return an User Data
 * @param name the name of the user to be searched
 * @returns ...
 */
function call_user(name) {
  return request.get('search/users?q=' + `${name}` + '+in:user').then(({ data }) => {
    //console.log(data)
    return data
  })
}

export default call_user
