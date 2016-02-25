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
    getLetter: function(lettersObject){
        return lettersObject[0];
    },
    test: function(a) {
        console.log(a);
    },
    selected:function(){
     return Template.instance().selected;
    },
    isTrue: function(boolean){
    if(boolean === true){
        return true
    }else
        return false;
    }
});