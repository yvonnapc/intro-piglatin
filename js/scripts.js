$( document ).ready(function() {
    $('#name').change(function(){
        $('#message').html($('#name').val());

var lowercase = $('input#name').val();
var anyString = lowercase.toLowerCase();
var wu1 = anyString.charCodeAt(0)-96;
var wu2 = anyString.charCodeAt(1)-96;
var strobe = anyString.charAt(0);
var dinosaur = anyString.substr(1);
var purple = anyString.substr(2);
var little = anyString.charAt(1);
var consonants = [2,3,4,6,7,8,10,11,12,13,14,16,17,18,19,20,22,23,24,25,26]
var vowels = [1,5,9,15,21]

if (vowels.includes(wu1)){
  $("#test").append(anyString + "ay");
}
else { ((consonants.includes(wu1)) && (vowels.includes(wu2)))
  $("#test").append(dinosaur + strobe +'ay');
}
if (consonants.includes(wu1 && wu2)){
  $("#test").append(dinosaur + strobe +'ay');;
}
// $("#test").append(dinosaur + strobe +'ay');
// }
//
// if wu1 === array33
// $("#test").append(purple + strobe +'ay');
// }
// else {
// $("#test").append(anyString);
// }

// console.log(han);

event.preventDefault();
});
});
