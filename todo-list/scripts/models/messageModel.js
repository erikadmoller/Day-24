var messageModel = Backbone.Model.extend({

	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/emoller',

	defaults: {

		message: null,

	},

	// idAttribute: 'message',
	// validate: function(attrs) {
	// 	if(!attrs.message) return 'Please enter a to do item';
	// }

});