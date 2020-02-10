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


Router.route('/PR', function () {
  this.render('PR');
});

Router.route('/WH', function () {
  this.render('WH');
});

Router.route('/OP', function () {
  this.render('OP');
});

Router.route('/CO', function () {
  this.render('CO');
});