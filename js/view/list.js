var TodoRow = Backbone.View.extend({
    tagName: 'li',

    className: 'todo-item',

    initialize: function(options) {
        this.projects   = options.projects;
        this.activities = options.activities;
        this.dates      = options.dates;
        this.allStatus  = options.allStatus;
},

    render: function() {
                // console.log(projects.get(this.model.get('project_id')).attributes.value);

       this.$el.append('<fieldset>');
        this.$el.append( '<label>' + this.model.get('activity_id') + '</label>' + '<br>' );
        this.$el.append( '<label>' + this.model.get('project_id') + '</label>'+ '&nbsp' + '&nbsp'  );
         this.$el.append( '<label>' + this.model.get('description') + '</label>'+ '<br>'  );
        this.$el.append( '<label>' + this.model.get('date') + '</label>'+ '<br>'  );
        return this;
    }

    
});



var TodoList = Backbone.View.extend({
    tagName: 'ul',

    className: 'todo-list',

    // listen to the collection for addition/deletion and re-render
    initialize: function(options) {
        this.allStatus  = options.allStatus;
        this.listenTo(this.allStatus, 'add', this.render);
        this.listenTo(this.allStatus, 'remove', this.render);
      
    },

    render: function() {
        var listItem,
            html = [];

        this.allStatus.each(function(todo) {
            listItem = new TodoRow({
                model: todo
            });
            html.push( listItem.render().el )
        });

        this.$el.html( html );

        return this;
    }
});