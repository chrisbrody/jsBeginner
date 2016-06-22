app.controller('introCtrl', function($scope) {
	
	$scope.intro = {
		h1 : 'JavaScript for Humans',
		h2 : 'An Introduction to JavaScript',
		img1 : 'img/humans.jpg',
		p1 : 'JavaScript is a programming language or, in other words, a means by which a computer is instructed to do things. Just the same as one controls humans with hisses and meows, one controls computers with statements written in a programming language. All web browsers understand JavaScript and you can take advantage of that to make web pages do crazy things!',
		p2 : 'JavaScript started as a way to make web pages more interactive. Nowadays JavaScript runs in more places than just web browsers — it runs on web servers, phones and even robots!'
	}
	$scope.contents = {
		title : 'Table of Contents',
		sections : [
			{ 
				title : 'The Console',
			    href  : '#console'
			},
			{ 
				title : 'Strings', 
			    href  : '#strings'
			},
			{ 
				title : 'Values and Variables',
				href  : '#variables'
			},
			{ 
				title : 'Using Functions',
				href  : '#usingfunctions'
			},
			{ 
				title : 'Creating Functions',
				href  : '#newfunctions'
			},
			{ 
				title : 'Loops',
				href  : '#loops'
			},
			{ 
				title : 'Arrays',
				href  : '#arrays'
			},
			{ 
				title : 'Objects',
				href  : '#objects'
			}
		],
		h2 : 'Don\'t be a scaredy-cat',
		img1 : 'img/humans.jpg',
		p1 : 'You will always land on your feet — even when programming! Unlike pawing over a glass of water on your laptop, nothing in these tutorials will damage your computer in any way, even if you mistype a command or click the wrong button. Like cats, computer programmers make mistakes all time: misspelling things, forgetting quotes or brackets, and being forgetful of how basic functions (and yarn, lasers) work. Programmers care more about making it work eventually rather than trying to make it work the very first time. The best way to learn is by making mistakes!'
	}



})