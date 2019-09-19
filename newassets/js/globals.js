let _g = {
    //SITE GLOBALS
    protocol : "http",
    host : "localhost",
    port : "5500",
    getUrl : function () { return this.protocol + "://"+ this.host + (this.port === "80" ? "/" : ":"+ this.port +"/")},
    debug : true
    //USER PREFERENCES
};