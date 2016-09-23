
// casper.test.begin("first jenkin test",0,function Suite(test){
//   casper.start("https://www.google.com",function() {
//     casper.test.assertTitle('Google',"URL matched")
//     casper.echo("The title of the page is : "+casper.getTitle());
//   }).run(function(){
//     casper.test.done();
//   });
// });


casper.test.begin("first jenkin test",0,function Suite(test){

  casper.start("https://www.google.co.in",function() {
    casper.viewport(1280,1024);
    casper.test.assertTitle('Google',"URL matched")
    casper.echo("The title of the page is : "+casper.getTitle());
    casper.capture("screenshots/"+Date.now()+".png")
  });
  casper.then(function(){
    this.echo("testing firsst jenkins project");
  })
  casper.run(function(){
    test.done();
  })
});
