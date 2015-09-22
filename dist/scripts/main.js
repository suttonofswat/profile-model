var user = new UserModel();
var App = Backbone.Router.extend({
	routes: {
		'': 'profile',
		'edit': 'edit'
	},
	profile: function() {
		$('.page').hide();
		$('#profile').show();
	},
	edit: function() {
		$('.page').hide();
		$('#edit').show();
		$('#name').val(user.get('name'));
		$('#inputEmail3').val(user.get('email'));
		$('#role').val(user.get('role'));
	}
});

var app = new App();
Backbone.history.start();
	

$('.form-horizontal').submit(function(e){
	e.preventDefault();

	var newName = $('#name').val();
	var newEmail = $('#inputEmail3').val();
	var newRole = $('#role').val();


	user.set({name: newName, email: newEmail, role: newRole});
	console.log(newName);
	console.log(newEmail);
	console.log(newRole);

	$('.profile-usertitle-name').text(user.get('name'));
	$('.navbar-right .dropdown a').text(user.get('name'));
	$('.profile-usertitle-job').text(user.get('role'));
});