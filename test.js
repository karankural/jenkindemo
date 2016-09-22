
// casper.test.begin("first jenkin test",0,function Suite(test){
//   casper.start("https://www.google.com",function() {
//     casper.test.assertTitle('Google',"URL matched")
//     casper.echo("The title of the page is : "+casper.getTitle());
//   }).run(function(){
//     casper.test.done();
//   });
// });
casper.test.begin("first jenkin test",0,function Suite(test){
  casper.start("https://www.google.com",function() {
    casper.test.assertTitle('Google',"URL matched")
    casper.echo("The title of the page is : "+casper.getTitle());
  });
  casper.run(function(){
    test.done();
  })
});
