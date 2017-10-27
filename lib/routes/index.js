/**
* @author Quyen Nguyen Huu
* @module routes
* @name  index.js
*/
"user strict";

let router = require('express').Router();
let Ctrl = require('../controllers').Main;

// Public routes
router.route('/courses/:courseCode').get(Ctrl.renderCoursePage);

module.exports = router;
