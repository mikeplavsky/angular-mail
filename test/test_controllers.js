describe( "Karma", function() {

  it( "to work correctly", function() {
  
    var a = 12;
    var b = a;

    expect(a).toBe(b);
    expect(a).not.toBe(null);

  });

  it( "sounds very cool", function() {
  
    expect(12).toBe(12);
    expect(12).toBe(12);

  });

}); 

describe( "SomeController:", function() {

  it( "initializes scope", function() {
    
    var scope = {};
    SomeController(scope);

    expect(scope.message.text).toContain( "nothing" );

    scope.clickUnfocused();
    expect(scope.message.text).toContain( "Unfocused" );

    scope.clickFocused();
    expect(scope.message.text).toContain( "Focused" );

  });

});
