import api_instance from './index'

/**
 * Search and return an User Data
 * @param name the name of the user to be searched
 * @returns ...
 */
function call_user(name) {
  const a = api_instance.get('users/' + `${name}`).then(console.log)
  return a
}

export default call_user
