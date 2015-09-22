$.get(
            'http://tiyfe.herokuapp.com/collections/leslie-user',
            function(response){
            	$('#name').val(response[0].name);
				$('#inputEmail3').val(response[0].email);
				$('#role').val(response[0].role);
				$('.profile-usertitle-name').text(response[0].name);
				$('.navbar-right .dropdown .dropdown-toggle').text(response[0].name);
				$('.profile-usertitle-job').text(response[0].name);
            	},
                  
            'json'
     	
        );


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
	
	$.post(

			'http://tiyfe.herokuapp.com/collections/leslie-user',
			{name: newName, email: newEmail, role: newRole},

			'json'

		);
	

	
});

user.on('change', function() {
  	$('.profile-usertitle-name').text(user.get('name'));
	$('.navbar-right .dropdown .dropdown-toggle').text(user.get('name'));
	$('.profile-usertitle-job').text(user.get('role'));
 });