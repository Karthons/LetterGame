/**
 * Created by Simon on 18/02/2016.
 */

Template.Grid.onCreated(function(){
    Meteor.subscribe("letterGrid");
});

Template.Grid.helper({
    squareLetter: function(){
        
    }
});