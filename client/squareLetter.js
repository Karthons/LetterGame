/**
 * Created by Simon on 18/02/2016.
 */
Template.squareLetter.onCreated(function(){
    this.selected = false;
});

Template.squareLetter.onRendered(function(){
    this.selected = false;
});

Template.squareLetter.helpers({
    getValue: function(lettersObject){

    },
    test: function(a) {
        console.log(a);
    },
    selected:function(){
     return Template.instance().selected;
    }
});