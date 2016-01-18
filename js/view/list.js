var TodoRow = Backbone.View.extend({
    tagName: 'li',

    className: 'list-group-item ',

    initialize: function(options) {
        this.projects   = options.projects;
        this.activities = options.activities;
        this.dates      = options.dates;
        this.allStatus  = options.allStatus;
},

    render: function() {
                // console.log(projects.get(this.model.get('project_id')).attributes.value);

       // this.$el.append('<fieldset>');
       //  this.$el.append( '<label>' + this.model.get('activity_id') + '</label>' + '<br>' );
       //  this.$el.append( '<label>' + this.model.get('project_id') + '</label>'+ '&nbsp' + '&nbsp'  );
       //   this.$el.append( '<label>' + this.model.get('description') + '</label>'+ '<br>'  );
       //  this.$el.append( '<label>' + this.model.get('date') + '</label>'+ '<br>'  );
       //  return this;
       
var tmp= _.template("<table class='table'><tr><td class ='dat'><%= date_new %></td><td class ='stat'><%= status %></td><td class ='act'><%= activity_name %></td></tr><tr><td class ='tod'><%= today_date %></td><td></td><td class ='pro'><%= project_name %></td></tr></table>" );
           
var date=new Date();
           var date_new    = "End of Day: " + this.model.get('date'),
           today_date      = "Posted on: " + new Date().toJSON().slice(0,10),
           project_name    = "Project is " + this.model.get('project_id'),
           activity_name   = "Activity is " + this.model.get('activity_id'),
           status          = this.model.get('description');

           this.complied   =   tmp({date_new:date_new,project_name:project_name,activity_name:activity_name,status:status,today_date :today_date });
           this.$el.append(this.complied );
    return this;
    }

    
});



var TodoList = Backbone.View.extend({
    tagName: 'ul',

    className: 'todo-list',
    // document.getElementsByClassName('todo-list')[0].classList.add('jumbotron'); 

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
     // document.getElementsByClassName('todo-list')[0].classList.add('jumbotron'); 
});