import './body.html';
import { Template } from 'meteor/templating';

Router.route('/', function () {
  this.render('signin');
});

Router.route('/DashBoard', function () {
  this.render('navbar');
});

Router.route('/LM', function () {
  this.render('LM');
});
