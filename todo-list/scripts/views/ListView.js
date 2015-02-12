var listView = Backbone.View.extend({

	tagName: 'li',

	initialize: function(options) {

		_.bindAll(
		this,
		'onStrikeThrough'
		);

		this.$checkbox = $('#check-box');
		var Template = _.template($('#list-view').html());
		this.$el.append(Template(this.model.attributes))
		
	},

	onStrikeThrough: function(){
		$(this.$el).css("text-decoration", "line-through");
	},

	// onModelChanged: function() {
	// 	this.$el.toggleClass('strike-text');
	// }


});

