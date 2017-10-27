let FEATURE_HOST_API = 'http://127.0.0.1:7001';
let axios = require('axios');

module.exports = {
  renderCoursePage : renderCoursePage
};

/**
* @name renderCoursePage
* @description
* Render course page.
*
* @param  {object} req HTTP request
* @param  {object} res HTTP response
*/
function renderCoursePage(req, res) {
  let access_token = req.user.access_token;
  let _configs = {
    method : 'post',
    url : FEATURE_HOST_API + '/api/courses/' + req.params.courseCode,
    headers: {'Authorization': 'Bearer ' + access_token}
  };

  axios(_configs)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.status(500).send(error);
  });
}
