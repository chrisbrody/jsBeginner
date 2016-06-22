app.controller('stringCtrl', function($scope) {

	$scope.strings = {
		h1 : 'Strings',
		p1 : 'Since I am a cat I want to replace every instance of the word dog on the Internet with those blasted dogs. First go into your console and type in a few sentences that contain the word dog at least once. In JavaScript a bunch of letters, numbers, words or anything else is known as a String (as in a string of characters). Strings have to begin AND end with a quotation mark. Single \' or double " is fine, just make sure you use the same at the beginning as you do at the end.',
		img1 : 'img/strings.gif',
		p2 : 'See the nasty error message? Don\'t worry - you didn\'t break any laws. SyntaxError ILLEGAL is just the way it sounds when robots tell you that your program has a problem. The first two sentences had matching quotation marks at the beginning and end, but when I mixed single and double quotation marks it freaked out on me.',
		p3 : 'OK, to fix up one of these sentences (by replacing dog with our enhanced version) we have to first save the original sentence so that we can call it up later when we do our replacing magic. Notice how the string gets repeated in red when we type it into the console? This is because we haven\'t told it to save the sentence anywhere so it just gives it right back (or it gives us an Error back if we messed something up).'



	}

})