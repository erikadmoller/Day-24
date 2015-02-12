var PostFormView = Backbone.View.extend({

	initialize: function() {

		_.bindAll(
			this,
			'onSubmitClick'
			);


		this.$submit = this.$('#my-button');
		// this.$submit = this.$('#check-box');

		 this.$submit.on('click', this.onSubmitClick);

	},

	onSubmitClick: function() {
		this.model = new messageModel();
		
		this.model.set({
			message: this.$textInput.val()
		});

		this.model.save();
		var self = this;

		this.trigger('submit', this.model);
	}


});