app.controller('variableCtrl', function($scope) {

	$scope.variables = {
		h1 : 'Values and Variables',
		p1 : 'Values are the simplest components in JavaScript. 1 is a value, true is a value, "hello" is a value, function() {} is a value, the list goes on! There are a handful of different types of values in JavaScript but we don\'t need to go over them all right away — you will learn them naturally the more you code!',
		p2 : 'To store values we use things called variables. The word \'variable\' means \'can change\' and is used because variables can store many different types of values and can change their value many times. They are pretty much like mailboxes. We put something in a variable, like our sentence, and then give the variable an address that we can use to look up the sentence later. In real life mailboxes have to have PO Box numbers but in JavaScript you usually just use lowercase letters or numbers without any spaces.',
		img1 : 'img/variables.gif',
		p3 : 'var is shorthand for variable and the = means store the thing on the right-hand side in the thing on the left-hand side. Also as you can see, now that we are storing our sentence in a variable the console doesn\'t just return our sentence right away, but instead gives us undefined which means there was nothing to return.',
		p4 : 'If you simply type a variable name into the console it will print out the value stored in that variable. A note about variables is that by default they go away when you switch to a different page. If I were to hit the Refresh button in Chrome, for example, my dogSentence variable would get wiped and it would be like it never existed. But don\'t worry about this too much for now — you can just hit the up or down arrows on your keyboard while in the console to go through everything you\'ve entered in recently.'
	}





})