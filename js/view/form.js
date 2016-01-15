var StatusForm = Backbone.View.extend({
    tagName: 'form',

    className: 'user-input-form',

    events: {
        'submit': 'submit'
    },

    initialize:function(options) {
        this.projects   = options.projects;
        this.activities = options.activities;
        this.dates      = options.dates;
        this.allStatus  = options.allStatus;
    },

    render: function() {
        var html = [];
        this.$el.append('<fieldset>');

        this.chooseProject = new Select({
     
          className: 'project',

            data: this.projects,
            /**/
            settings: {
                title: 'Select a Project'
            }
        });
        html.push( this.chooseProject.render().el );

        this.chooseActivity = new Select({
          className: 'Activity',

            data: this.activities,
            /**/
            settings: {
                title: 'Select a Activity'
            }
        });
        html.push( this.chooseActivity.render().el );

        this.chooseDate = new Select({
            className: 'date',

            data: this.dates,
            /**/
            settings: {
                title: 'Select a Date'
            }
        });
        html.push( this.chooseDate.render().el );

        this.chooseDescription = new TextArea({

            className: 'text',

            settings: {
                title: 'Add a Description'
            }
        });
        html.push( this.chooseDescription.render().el );

        this.$el.append( html );
        this.$el.append( '<button class="submit" type="submit">Submit</button>' );
        this.$el.append('</fieldset>');

        return this;
    },
    submit: function(e) {
        e.preventDefault();

        this.allStatus.add({
            'project_id'  : this.projects.get(this.chooseProject.getValue()).attributes.value,
            'activity_id' : this.activities.get(this.chooseActivity.getValue()).attributes.value,
            'date'        : this.dates.get(this.chooseDate.getValue()).attributes.value,
            'description' : this.chooseDescription.getValue(),
        });

        console.log( this.allStatus );
    }
});