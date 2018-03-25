var DCookieManagement = function(cookiesFileName){
    this.fileManagement = require('fs');
    this.phantomCookies=null;//Original cookies from PhantomJS
    this.cookiesFileName=cookiesFileName;//set cookies file name
 
    DCookieManagement.prototype.loadCookies = function (cookies){
        this.phantomCookies = cookies;
    };
 
    DCookieManagement.prototype.saveCookies = function(coock){
        if(coock != null){
	      this.fileManagement.write(this.cookiesFileName, JSON.stringify(coock), "w");
		}
    };
    DCookieManagement.prototype.readCookies = function () {
        if(this.cookieFileExists())
            this.loadCookies(JSON.parse(this.fileManagement.read(this.cookiesFileName)));
    };
    DCookieManagement.prototype.cookieFileExists = function(){
        	if(this.fileManagement.size(cookiesFileName) != 0)
			return true;
		return false;
    };
    DCookieManagement.prototype.getCookies = function(){
        return this.phantomCookies;
    };
 
    DCookieManagement.prototype.removePreviousCookies = function(){
       this.fileManagement.write(cookiesFileName,'','w');
    };
 
};
 
exports.create = function(cookiesFileName){

    return new DCookieManagement(cookiesFileName);
};