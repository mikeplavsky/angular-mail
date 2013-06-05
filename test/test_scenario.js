describe( 'app', function() {

  it( "has two buttons", function() {

    browser().navigateTo( "/" );
    expect(element(':button').count()).toEqual(2);

  })

  it( "one button has focus", function() {
  
    browser().navigateTo("/");
  
  })

})
