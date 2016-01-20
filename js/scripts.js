
$( document ).ready(function() {
    $('#name').change(function(){
        $('#message').html($('#name').val());

var lowercase = $('input#name').val();
var anyString = lowercase.toLowerCase();
var danger = anyString.charCodeAt(0)-96;

if (danger === 1 || danger === 5 || danger === 9 || danger === 15 || danger ===21) {
$("#test").append(anyString + "ay");
}
else {
$("#test").append(anyString);
}
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

// var display = edward.concat(raina,ian);
// a = document.createElement('div');
// a.setAttribute('id',display);
// document.body.appendChild(a);

event.preventDefault();
});
});
