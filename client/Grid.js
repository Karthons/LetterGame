/**
 * Created by Simon on 18/02/2016.
 */


/*
    Initalize the template specific variables
 */
Template.Grid.onCreated(function(){
    this.subscribe("letterGrid");
    var state = new ReactiveDict("Grid");
    this.state = state;
    this.input = [];
});

Template.Grid.viewmodel({
    text: ''
});

Template.Grid.helpers({
    getLetters: function(){
        return LetterGrid._collection.find().fetch();
    },
    textValidated: function(collection) {
        if (Template.instance().state && collection) {
            if ($.inArray(Template.instance().state.get("text"), collection) !== -1) {
                return "kk";
            }
            return null;
        }
    },
    loadingReady: function(){
        //add selected false on the local mongo db
        if(Template.instance().subscriptionsReady()){
            LetterGrid._collection.update({},{$set: {selected:false}}, {multi:true});
            return true;
        }
            return false;
    }
});

Template.Grid.events({
    'input .inputLookup': function (event, template) {
        if(keyIsValid){

        }else{

        }


        LetterGrid._collection.update({selected:true}, {$set: {selected:false}}, {multi:true});
        var input = $(event.target).val();
        var inputArray = input.split("");
        var result = 0;


        for(var i in inputArray){
             result = matchGrid(inputArray[i],LetterGrid);
        }

        if(result === 0){
            if(Template.instance().lastInput === input.substring(0,Template.instance().lastInput.length)){
                for(var i in  Template.instance().lastInput){
                    result = matchGrid(Template.instance().lastInput[i],LetterGrid);
                }
            }
        }else{
            Template.instance().lastInput = inputArray;
        }
    }
});

function Square(letter, selected){
    this.letter = letter;
    if(!selected){
        this.selected = false;
    }else{
        this.selected = selected;
    }
}

/*
    @param input
    @param LetterGrid collection
    @return amount of changes row (0 or 1)
 */
function matchGrid(input,collection){
        return collection._collection.update({letter: input
            , selected:false}, {$set: {selected:true}});
    return result;
}