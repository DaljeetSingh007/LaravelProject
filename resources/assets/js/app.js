
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


/*
|----------------------------------------------------------------------
| Glorious Clock
|----------------------------------------------------------------------
*/
const GloriousTimeTicker = require('./components/common/GloriousTimeTicker.vue');
Vue.component('glorious-time-ticker', GloriousTimeTicker);

/*
|----------------------------------------------------------------------
| User Module
|----------------------------------------------------------------------
*/
const MasterUser = require('./components/users/Master.vue');
Vue.component('users', MasterUser);

/*
|----------------------------------------------------------------------
| Role Module
|----------------------------------------------------------------------
*/
const MasterRole = require('./components/roles/Master.vue');
Vue.component('roles', MasterRole);

/*
|----------------------------------------------------------------------
| Tutor Module
|----------------------------------------------------------------------
*/
const TutorRole = require('./components/tutors/Master.vue');
Vue.component('tutors', TutorRole);

/*
|----------------------------------------------------------------------
| Student Module
|----------------------------------------------------------------------
*/
const StudentRole = require('./components/students/Master.vue');
Vue.component('students', StudentRole);

/*
|----------------------------------------------------------------------
| Class Module
|----------------------------------------------------------------------
*/
const ClassRole = require('./components/classes/Master.vue');
Vue.component('classes', ClassRole);

/*
|----------------------------------------------------------------------
| Student Classes Module
|----------------------------------------------------------------------
*/
const StudentClass = require('./components/student-classes/Master.vue');
Vue.component('student-classes', StudentClass);

/*
|----------------------------------------------------------------------
| Student Stream
|----------------------------------------------------------------------
*/
const StudentStream = require('./components/student-classes/Stream.vue');
Vue.component('student-stream', StudentStream);

/*
|----------------------------------------------------------------------
| Tutor Classes Module
|----------------------------------------------------------------------
*/
const TutorClass = require('./components/tutor-classes/Master.vue');
Vue.component('tutor-classes', TutorClass);

/*
|----------------------------------------------------------------------
| Tutor Stream
|----------------------------------------------------------------------
*/
const TutorStream = require('./components/tutor-classes/Stream.vue');
Vue.component('tutor-stream', TutorStream);
