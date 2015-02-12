var AppView = Backbone.View.extend({

	el: '#todo-app',
	initialize: function() {

		_.bindAll(
			this,
			'onButtonClick',
			'onAddToCollection'
		);


		this.$textInput = $('#text-input');
		this.$todoList = $('#todo-list');
		var $button = $('#my-button');
		this.messagesCollection = new messagesCollection();

		$button.on('click', this.onButtonClick);
		this.messagesCollection.on('add', this.onAddToCollection);

	},

	render: function() {

	},

	onButtonClick: function() {

		this.listItem = new messageModel();
		console.log(this.listItem);

		this.listItem.set({ 

			message: this.$textInput.val()


		});

		this.messagesCollection.add(this.listItem);
		this.$textInput.val('');
	},

	onAddToCollection: function(listItem) {
		var newListView = new listView({model: listItem});
		console.log(newListView);
		console.log(this);
		this.$todoList.append(newListView.$el);
		
	}

});

