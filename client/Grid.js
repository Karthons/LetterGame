/**
 * Created by Simon on 18/02/2016.
 */

Template.Grid.onCreated(function(){
    Meteor.subscribe("letterGrid");
});
Template.Grid.viewmodel({
    text: ''
});


Template.Grid.helpers({
    getLetters: function(){
        Template.instance().collection = LetterGrid.findOne();
        if(Template.instance().collection !== undefined){
            return Template.instance().collection.grid;
        }
        else{
            return null;
        }
    },
    textValidated: function() {
        if(Template.instance().state){
            console.log(Template.instance().state.get("text"));
            console.log(Template.instance().collection);
            if($.inArray(Template.instance().state.get("text"), Template.instance().collection)){
                return "kk";
            }
        }
        return null;
    }
});