/**
 * Created by skerber on 18.02.2016.
 */
LetterGrid = new Meteor.Collection("letterGrid");
if(LetterGrid.find({}) === null){
    LetterGrid.insert({
        grid :
            {"a":false, "b":false, "c":false, "d":false, "e":false, "f":false, "g":false, "h":false, "i":false, "j":false,
            "k":false, "l":false, "m":false, "n":false, "o":false, "p":false}
    });
}
