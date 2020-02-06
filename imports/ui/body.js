import './body.html';
import { Template } from 'meteor/templating';

Router.route('/', function () {
  this.render('signin');
});