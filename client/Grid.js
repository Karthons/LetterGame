/**
 * Created by Simon on 18/02/2016.
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
        if(Template.instance().collection !== undefined){
            Template.instance().collection = _.map(Template.instance().collection.grid, function(val,key){return {letter: key, selected: val}})
            return Template.instance().collection;
        }
        else{
            return [];
        }
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
        console.log(Template.instance().collection);
        for(var i in Template.instance.input){
            for(var j in Template.instance().collection){
                if(Template.instance().collection[j].letter === Template.instance.input[i]){
                    Template.instance().collection[j].selected = true;s
                }
            }

        }
    }
});