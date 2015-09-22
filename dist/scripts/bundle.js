(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$.get('http://tiyfe.herokuapp.com/collections/leslie-user', function (response) {
	$('#name').val(response[0].name);
	$('#inputEmail3').val(response[0].email);
	$('#role').val(response[0].role);
	$('.profile-usertitle-name').text(response[0].name);
	$('.navbar-right .dropdown .dropdown-toggle').text(response[0].name);
	$('.profile-usertitle-job').text(response[0].name);
}, 'json');

var user = new UserModel();
var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		'edit': 'edit'
	},
	profile: function profile() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function edit() {
		$('.page').hide();
		$('#edit').show();
	}
});

var app = new App();
Backbone.history.start();

$('.form-horizontal').submit(function (e) {
	e.preventDefault();

	var newName = $('#name').val();
	var newEmail = $('#inputEmail3').val();
	var newRole = $('#role').val();

	user.set({ name: newName, email: newEmail, role: newRole });

	$.post('http://tiyfe.herokuapp.com/collections/leslie-user', { name: newName, email: newEmail, role: newRole }, 'json');
});

user.on('change', function () {
	$('.profile-usertitle-name').text(user.get('name'));
	$('.navbar-right .dropdown .dropdown-toggle').text(user.get('name'));
	$('.profile-usertitle-job').text(user.get('role'));
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map