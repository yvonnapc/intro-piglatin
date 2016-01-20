$( document ).ready(function() {
    $('#name').change(function(){
        $('#message').html($('#name').val());

var lowercase = $('input#name').val();
var anyString = lowercase.toLowerCase();
var wu1 = anyString.charCodeAt(0)-96;
var wu2 = anyString.charCodeAt(1)-96;
var strobe = anyString.charAt(0);
var dinosaur = anyString.substr(1);

if (wu1 === 1 || wu1 === 5 || wu1 === 9 || wu1 === 15 || wu1 ===21) {
$("#test").append(anyString + "ay");
}
// else {
// $("#test").append(anyString);
// }
//
if (wu1 === 2 || wu1 === 3 || wu1 === 4 || wu1 === 6 || wu1 ===7|| wu1 === 8 || wu1 === 10 || wu1 === 11 || wu1 === 12 || wu1 ===13 || wu1 ===14 || wu1 === 16 || wu1 === 17 || wu1 === 18 || wu1 ===19 || wu1 === 20 || wu1 === 22 || wu1 === 23 || wu1 === 24 || wu1 === 25 || wu1 === 26) {
$("#test").append(dinosaur + strobe +'ay');
}
// else {
// $("#test").append(anyString);
// }
// var wu1 = anyString.charAt(0);
// var wu2 = anyString.charAt(1);
// var wu3 = anyString.charAt(2);
// var wu4 = anyString.charAt(3);
// var wu5 = anyString.charAt(4);
// var wu6 = anyString.charAt(5);
// var wu7 = anyString.charAt(6);
// var wu8 = anyString.charAt(7);
// var wu9 = anyString.charAt(8);
// var wu10 = anyString.charAt(9);
// var wu11 = anyString.charAt(10);
// var wu12 = anyString.charAt(11);
// var wu13 = anyString.charAt(12);
// var wu14 = anyString.charAt(13);
// var wu15 = anyString.charAt(14);
// var turtle = ['a','e','i','o','u']
// var giraffe = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s', 't','v','w','x','y','z']
// console.log(han);

event.preventDefault();
});
});
