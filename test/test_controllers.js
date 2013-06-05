describe('NamesListCtrl', function () {

  var scope, ctrl, mockBackend;

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){

    mockBackend = _$httpBackend_;
    mockBackend.expectGET( "http://server/names?filter=none" ).
      respond(['Brad','Shyam']);
    
    scope = $rootScope.$new();
    ctrl = $controller(NamesListCtrl, {$scope: scope});
  
  }));

  it( "should fetch from server on load", function() {
  
    expect(scope.names).toBeUndefined();
    mockBackend.flush();

    expect(scope.names).toEqual(['Brad','Shyam']);

  });

})


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
