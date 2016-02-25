/**
 * Created by Simon on 18/02/2016.
 */


/*
    Initalize the template specific variables
 */
Template.Grid.onCreated(function(){
    Meteor.subscribe("letterGrid");
    var state = new ReactiveDict("Grid");
    this.state = state;
    this.collection = null;
    this.input = [];
});

Template.Grid.viewmodel({
    text: ''
});

Template.Grid.helpers({
    getLetters: function(){
        Template.instance().collection = LetterGrid.findOne();
        console.log(Template.instance().collection);
        return Template.instance().collection.grid;
    },
    textValidated: function(collection) {
        if (Template.instance().state && collection) {
            if ($.inArray(Template.instance().state.get("text"), collection) !== -1) {
                return "kk";
            }
            return null;
        }
    }
});

Template.Grid.events({
    'input .inputLookup': function (event, template) {
        Template.instance.input = $(event.target).val().split("");
        console.log(Template.instance().collection.grid);
        for(var i in Template.instance.input){
            for(var j in Template.instance().collection.grid){
                if(Template.instance().collection[j] === Template.instance.input[i]){
                    Template.instance().collection[j].selected = true;
                }
            }

        }
    }
});