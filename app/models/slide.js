import DS from 'ember-data';

var Slide = DS.Model.extend({
	title: DS.attr( 'string' ),
	copy: DS.attr( 'string' ),
	image: DS.attr( 'string' ),
	html: DS.attr( 'string' ),
	bgImage: DS.attr( 'string' ),
	bullets: DS.attr( 'array' ),
	subcopy: DS.attr( 'string' ),
	isWhite: DS.attr( 'boolean', {defaultValue: false} ),
});

Slide.reopenClass({
	FIXTURES: [
		{ 
			id: 1, 
			title: 'Atomic Ember Development: Or how I learned to stop worrying and love Web Components', 
			copy: 'Martin Pratt - Everywhere Digital',
			bgImage: 'imgs/1.jpg',
			isWhite:true
		},
		{ 
			id: 2,
			bgImage: 'imgs/2.jpg'
		},
		{ 
			id: 3,
			bgImage: 'imgs/3.png'
		},
		{ 
			id: 4,
			bgImage: 'imgs/4.jpg'
		},
		{ 
			id: 5, 
			title: 'What are Web components?', 
			bullets: [
				"A new way of building for the web",
				"A collection of web (W3C) standards for devs",
				"Encapsulated bundles HTML / CSS / JS."
			]
		},
		{ 
			id: 6, 
			title: 'What are Web components?', 
			bullets: [
				"HTML Templates - chunks of markup",
				"Shadow DOM -  DOM & Style encapsulation",
				"Custom Elements - Create new or expand on existing HTML elements",
				"HTML Imports - sharing the love"
			],
			subcopy: '(Liberally plundered from <a href="https://www.youtube.com/watch?v=fqULJBBEVQE">Eric Bidelmans Google I/O 2013 presentation</a>)'
		},
		{ 
			id: 7, 
			title: 'Templates',
			copy:'These are small chunks of markup which can be used at will',
			image:'',
			bullets: [
				"Use HTML / Markup directly on the DOM",
				"Hidden from the document (just shows your custom element)",
				"Parsed not Rendered, so script tags are not run, images not loaded, until we say so",
			],
			subcopy: '(Liberally plundered from <a href="https://www.youtube.com/watch?v=fqULJBBEVQE">Eric Bidelmans Google I/O 2013 presentation</a>)'
		},
		{ 
			id: 8, 
			title: 'Shadow DOM',
			copy:'Shadow DOM provides Markup Encapsulation and Style Boundaries for custom elements. This is something browser vendors have been using for ages;',
			image:'',
			html:'<input type="date"></input>',
			subcopy: '(Liberally plundered from <a href="https://www.youtube.com/watch?v=fqULJBBEVQE">Eric Bidelmans Google I/O 2013 presentation</a>)'
		},
		{ 
			id: 9, 
			title: 'Custom HTML elements',
			bullets: [
				"We can register new HTML elements with the browser, e.g.  <ember-london>",
				"Use them like any standard DOM elements, e.g. <ember-london></ember-london>",
				"Extend existing HTML elements",
			],
			subcopy: '(Liberally plundered from <a href="https://www.youtube.com/watch?v=fqULJBBEVQE">Eric Bidelmans Google I/O 2013 presentation</a>)'
		},
		{ 
			id: 10, 
			title: 'HTML Imports',
			copy:'Import custom HTML elements for use in our website, e.g. <link rel=”import” href=”ember-london.html”>',
			subcopy: '(Liberally plundered from <a href="https://www.youtube.com/watch?v=fqULJBBEVQE">Eric Bidelmans Google I/O 2013 presentation</a>)'
		},
		{ 
			id: 11, 
			title: 'Support for Web Components',
			copy:'100% support using Platform.js / Polymer framework',
			image: 'imgs/support.png',
			subcopy: '(Liberally plundered from <a href="https://www.youtube.com/watch?v=fqULJBBEVQE">Eric Bidelmans Google I/O 2013 presentation</a>)'
		},
		{ 
			id: 12, 
			title: 'How does this relate to Ember Components?',
			bullets: [
				'Ember Components are based on the W3C Web Component standards',
				'Easy to translate Ember Components to Web Components',
				'Handlebars templates instead of HTML / CSS',
				'Component controller instead of inline JS'
			],
			
		},
		{ 
			id: 13, 
			title: 'What the *&$% is Atomic design?',
			image: 'imgs/atomic-design.png',
			subcopy: 'Ref - <a href="http://bradfrostweb.com/">Brad Frost</a> / <a href="http://Patternlab.io/">Patternlab.io</a>'	
		},
		{ 
			id: 14, 
			title: 'Atomic design is a way of structuring your design / code into reusable components (wink wink, nudge nudge)',
			subcopy: 'Ref - <a href="http://bradfrostweb.com/">Brad Frost</a> / <a href="http://Patternlab.io/">Patternlab.io</a>'		
		},
		{ 
			id: 15,
			copy:'“We’re not designing pages, we’re designing systems of components.— Stephen Hay”',
			image: 'imgs/atomic-design.png',
			subcopy: 'Ref - <a href="http://bradfrostweb.com/">Brad Frost</a> / <a href="http://Patternlab.io/">Patternlab.io</a>'		
		},
		{ 
			id: 16, 
			title: 'Atoms',
			copy:'The building blocks of a website; E.g. Buttons, Text, Labels, Inputs etc',
			html:'<label>Input Label<input type="text" placeholder="Inputs and other form elements go inside..."></label>',
			subcopy: 'Ref - <a href="http://bradfrostweb.com/">Brad Frost</a> / <a href="http://Patternlab.io/">Patternlab.io</a>'		
		},
		{ 
			id: 17, 
			title: 'Molecules',
			copy:'Collections of atoms, bonded together and designed for reuse! E.g. Search bar',
			image: '',
			html:'<div class="row collapse"><div class="small-10 columns"><input type="text" placeholder="Inputs and other form elements go inside..."></div><div class="small-2 columns"><a href="#" class="button postfix">Go</a></div></div>',
			subcopy: 'Ref - <a href="http://bradfrostweb.com/">Brad Frost</a> / <a href="http://Patternlab.io/">Patternlab.io</a>'		
		},
		{ 
			id: 18, 
			title: 'Organisms',
			copy:'A collection of molecules joined together to create a distinct section of an interface. E.g. Navigation',
			image: '',
			html:'<div class="row collapse navigation"><div class="small-3 columns"><h3>AWESOMELOGO</h3></div><div class="small-5 columns"><a href="#" class="button tiny">Button 1</a> <a href="#" class="button tiny">Button 2</a> <a href="#" class="button tiny">Button 3</a>  <a href="#" class="button tiny">Button 4</a> </div><div class="small-3 columns "><input type="text" placeholder="Search"></div><div class="small-1 columns"><a href="#" class="button postfix">Go</a></div></div></div>',

			subcopy: 'Ref - <a href="http://bradfrostweb.com/">Brad Frost</a> / <a href="http://Patternlab.io/">Patternlab.io</a>'
		},
		{ 
			id: 19, 
			title: 'Application',
			copy:'Atoms, Molecules and Organisms are combined to together to form the website application.',
			image: '',
			bullets: [
				'This can be thought of as traditional TEMPLATES',
				'However I prefer to think about them as more as STATES'
			],
			subcopy: 'Ref - <a href="http://bradfrostweb.com/">Brad Frost</a> / <a href="http://Patternlab.io/">Patternlab.io</a>'		
		},
		{ 
			id: 20, 
			bgImage:'imgs/lego.jpg'
		},
		{ 
			id: 21, 
			title: 'This presentation is made of Atomic Ember Components',
			bullets: [
				'Slide organism',
				'Footer molecule',
				'next / prev button molecules',
				'Bullets molecule',
				'Title atom',
				'Bullet atom',
				'Image atom',
				'Copy atom'
			],
		},
		{ 
			id: 22, 
			title: 'Thoughts on programming with Atomic Design in Ember',
			bullets: [
				'Routes used to control which components are visible',
				'Use controllers primarily as classes NOT pages',
				'Ember Components as reusable modules',
				'Encapsulation / Events',
				'Helpers are your friend',			
			],
		},
		{ 
			id: 23, 
			title: 'Encapsulation / Events',
			bullets: [
				'Components shouldn’t require knowledge about their parents',
				'Trigger events in parent controller by sending out events',
				'If they require variables (or even functions) these are be passed in via handlebars'
			],
		},
		{ 
			id: 24, 
			title: 'Thank you for your time!',
			copy: 'Heres some useful links:',
			html: '<ul><li><a href="http://Patternlab.io/">Patternlab.io</a></li> <li><a href="http://bradfrostweb.com/blog/post/atomic-web-design/?utm_source=Responsive+Design+Weekly&utm_campaign=e1e01ede0b-Responsive_Design_Weekly_72&utm_medium=email&utm_term=0_df65b6d7c8-e1e01ede0b-58982433">Brad Frost - Atomic Design</a></li> <li><a href="http://www.polymer-project.org/">Polymer (Web Component Framework)</a></li> <li><a href="https://www.youtube.com/watch?v=fqULJBBEVQE">Eric Bidelmans Google I/O 2013 presentation - Intro to Web Components</a> </li> <li><a href="https://www.youtube.com/watch?v=8OJ7ih8EE7s">Eric Bidelmans Google I/O 2014 presentation - Polymer</a></li></ul>'
		},

	]
});

export default Slide;