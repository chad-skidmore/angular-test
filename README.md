angular-test
============

This is my first attempt at working with Angular.js after using Backbone.js for some projects. I used Yeoman to get the initial angular scaffolding setup as well as to manage various dependencies etc.

To use just clone the repo and then run 


	npm install -d
	
to get the various required node modules loaded. You should then be able to run
	
	grunt server
	
from the main repo root director to fire up the included basic web server. This should also launch your web browser pointed to http://localhost:9000

The first issue I've run into is with the angular $resource service I setup to hit an external API which returns a simple array of names. In using the Chrome web inspector I see that the data is returned as expected but never renders. I suspect this is due to the call by asynchronous and when the page renders there is no data to show. Shortly after the page renders the data is returned from the API but the page never re-renders again.

The Angular docs state pretty clearly in the tutorial that this should happen automagically via the angular data binding but so far it's never worked for me.