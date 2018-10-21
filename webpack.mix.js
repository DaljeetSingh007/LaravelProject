let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications();
mix.js('resources/assets/js/app.js', 'public/js').sourceMaps().version();

mix.js('resources/assets/js/user-app.js', 'public/js/user-app.js').sourceMaps().version();
mix.js('resources/assets/js/role-app.js', 'public/js/role-app.js').sourceMaps().version();
mix.js('resources/assets/js/tutor-app.js', 'public/js/tutor-app.js').sourceMaps().version();
mix.js('resources/assets/js/student-app.js', 'public/js/student-app.js').sourceMaps().version();
mix.js('resources/assets/js/class-app.js', 'public/js/class-app.js').sourceMaps().version();
mix.js('resources/assets/js/student-class-app.js', 'public/js/student-class-app.js').sourceMaps().version();
mix.js('resources/assets/js/student-stream-app.js', 'public/js/student-stream-app.js').sourceMaps().version();
mix.js('resources/assets/js/tutor-class-app.js', 'public/js/tutor-class-app.js').sourceMaps().version();
mix.js('resources/assets/js/tutor-stream-app.js', 'public/js/tutor-stream-app.js').sourceMaps().version();

/**
 * Login Screens
 */
// FOR STYLES
mix.styles([
    'resources/assets/global/plugins/font-awesome/css/font-awesome.min.css',
    'resources/assets/global/plugins/simple-line-icons/simple-line-icons.min.css',
    'resources/assets/global/plugins/bootstrap/css/bootstrap.min.css',
    'resources/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
    'resources/assets/global/css/components.min.css',
    'resources/assets/global/css/plugins.min.css',
    'resources/assets/pages/css/login.min.css',
], 'public/css/login.css')
    .version();

// FOR JAVASCRIPT
mix.scripts([
    'resources/assets/global/plugins/jquery.min.js',
    'resources/assets/global/plugins/bootstrap/js/bootstrap.min.js',
    'resources/assets/global/plugins/js.cookie.min.js',
    'resources/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
    'resources/assets/global/plugins/jquery.blockui.min.js',
    'resources/assets/global/scripts/app.min.js',
], 'public/js/login.js')
    .sourceMaps()
    .version();

/**
 * Admin
 */
// FOR STYLES
mix.styles([
    'resources/assets/global/plugins/bootstrap/css/bootstrap.min.css',
    'resources/assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
    
    'resources/assets/global/css/components.min.css',
    'resources/assets/global/css/plugins.min.css',
    'resources/assets/layouts/layout/css/layout.min.css',
    'resources/assets/layouts/layout/css/themes/darkblue.min.css',
    'resources/assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',
    'resources/assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
    'resources/assets/global/plugins/bootstrap-summernote/summernote.css',
    'resources/assets/layouts/layout/css/custom.min.css',
    'resources/assets/global/plugins/animate/animate.css',
    'resources/assets/global/plugins/nprogress/nprogress.css',
    'public/css/simple-line-icons.min.css',
    'public/css/font-awesome.min.css',
], 'public/css/system.css')
.version();

// FOR JAVASCRIPT
mix.scripts([
    'resources/assets/global/plugins/jquery.min.js',
    'resources/assets/global/plugins/moment.min.js',
    'resources/assets/global/plugins/bootstrap/js/bootstrap.min.js',
    'resources/assets/global/plugins/js.cookie.min.js',
    'resources/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js',
    'resources/assets/global/plugins/jquery.blockui.min.js',
    'resources/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
    'resources/assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',
    'resources/assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
    'resources/assets/global/plugins/bootstrap-summernote/summernote.min.js',
    'resources/assets/global/plugins/counterup/jquery.waypoints.min.js',
    'resources/assets/global/plugins/counterup/jquery.counterup.min.js',
    'resources/assets/global/plugins/horizontal-timeline/horizontal-timeline.js',
    'resources/assets/global/scripts/app.min.js',
    'resources/assets/global/plugins/nprogress/nprogress.js',
    'resources/assets/layouts/layout/scripts/layout.min.js',
    'resources/assets/layouts/layout/scripts/demo.min.js',
], 'public/js/system.js')
.sourceMaps()
.version();