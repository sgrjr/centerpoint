/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
require('./flatpickr');
require('../../node_modules/perfect-scrollbar/dist/perfect-scrollbar');
require('../../node_modules/popper.js/dist/popper');
require('./vendor.bundle.base.js');
require('./Chart.min.js');
require('./off-canvas.js');
require('./hoverable-collapse.js');
require('./template.js');
require('./todolist.js');
require('./dashboard.js');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Main');

	const choices = new Choices('[data-trigger]',
	{
	searchEnabled: false
        });

