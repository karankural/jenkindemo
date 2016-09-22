var casper = require('casper').create();

casper.start("https://www.google.com",function() {
  casper.echo("The title of the page is : "+casper.getTitle());
})
casper.run();
