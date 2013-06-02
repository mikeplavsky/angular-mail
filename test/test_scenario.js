describe( 'app', function() {

  it( "has two buttons", function() {

    browser().navigateTo( "/" );
    expect(element(':button').count()).toEqual(2);

  })

  it( "one button has focus", function() {
  
    browser().navigateTo("/");

    expect(element("#focused-btn").count()).toEqual(1);
    expect(element("#focused-btn").focused()).toEqual(1);
  
  })

})
