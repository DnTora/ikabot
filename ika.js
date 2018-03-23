var casper = require('casper').create({   
    userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
    pageSettings: {
      loadImages:  true,         // The WebPage instance used by Casper will
      loadPlugins: false         // use these settings
    }
});

// print out all the messages in the headless browser context
casper.on('remote.message', function(message) {
    this.echo('remote message caught: ' + message);
});
casper.on("page.error", function(msg, trace) {
     this.echo("Error: " + msg, "ERROR");
});
var clear;
var url = "http://il.ikariam.gameforge.com/index.php?logout=1&result=mistake";

casper.start(url, function() {
    console.log("page loaded");
	console.log(this.getCurrentUrl());
  	 casper.waitForSelector('form#loginForm', function() {
	this.fill('form#loginForm',{
		'uni_url':          's16-il.ikariam.gameforge.com',
        'name':             'apocalypse 7',
        'password':         'a123s123'		
	},true);
	 });
	
 
});
casper.then(function(){
	console.log(this.getCurrentUrl());
	casper.waitForSelector('#js_worldMapLink a',function(){
	this.click('#js_worldMapLink a');
	});
	
});
casper.then(function(){
	console.log(this.getCurrentUrl());
	 casper.waitForSelector('form[name="navInputForm"]', function() {	
	this.fillSelectors('form[name="navInputForm"]',{
		'input[name="xcoord"]': '53',
		'input[name="ycoord"]': '47'
	 },true);
	 });
	

});
casper.then(function(){
	console.log(this.getCurrentUrl());
	this.capture('textws.png');
			
});
casper.then(function(){
	this.wait(20000, function(){
	this.evaluate(function(){
		
		document.querySelector('.linkIslandMarked').click();
		
	});
	});
});
casper.then(function(){
	console.log("here:" + this.getCurrentUrl());
});
casper.then(function(){
	console.log(this.getCurrentUrl());
		url = this.getCurrentUrl();
		
	clear = this.evaluate(function(){
		if(document.getElementById('js_cityLocation0Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation0Link').click();
			return true;
		}
		else{
		if(document.getElementById('js_cityLocation1Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			ajaxHandlerCall($('#js_cityLocation1Link')[0].href);
			return false;
		}
			
		else{
		if(document.getElementById('js_cityLocation2Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation2Link').click();
			return true;
		}
			
		else{
		if(document.getElementById('js_cityLocation3Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation3Link').click();
			return true;
		}
			
		else{
		if(document.getElementById('js_cityLocation4Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation4Link').click();
			return true;
		}
		
		else{
		if(document.getElementById('js_cityLocation5Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation5Link').click();
			return true;
		}
		
		else{
		if(document.getElementById('js_cityLocation6Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation6Link').click();
			return true;
		}
			
		else{
		if(document.getElementById('js_cityLocation7Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation7Link').click();
			return true;
		}
			
		else{
		if(document.getElementById('js_cityLocation8Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation8Link').click();
			return true;
		}
			
		if(document.getElementById('js_cityLocation9Link').title.length== 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation9Link').click();
			return true;
		}
			
		else{
		if(document.getElementById('js_cityLocation10Link').title.length.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation10Link').click();
			return true;
		}
			else{
		if(document.getElementById('js_cityLocation11Link').title.length.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation11Link').click();
			return true;
		}
			
			
		else{
		if(document.getElementById('js_cityLocation12Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation12Link').click();
			return true;
		}
			
		else{
		if(document.getElementById('js_cityLocation13Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation13Link').click();
			return true;
		}
			
		else{
		if(document.getElementById('js_cityLocation14Link').title.length== 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation14Link').click();
			return true;
		}
			
		else{
		if(document.getElementById('js_cityLocation15Link').title.length == 'האם אתה רוצה להתיישב כאן?'.length){
			document.getElementById('js_cityLocation15Link').click();
			return true;
		}
			
		else{
		return false;
		}
		}
		}
		}
		}
		}
		}
		 }
		   }
		  }
		 }
		}
	   }
	  }
	}
								
	});
	
});

	casper.then(function(){
			this.wait(20000, function(){
			console.log(this.getCurrentUrl());
             this.capture('where.png');
			console.log(clear);
			
      
		casper.waitForSelector('#colonizeBtn',function(){
			this.click('#colonizeBtn',{},true);			
			});
	
	   
			});
			
	});
	casper.then(function(){
		this.wait(20000, function(){
	this.capture('finally.png');	
		});
	});
	
	
casper.run();
