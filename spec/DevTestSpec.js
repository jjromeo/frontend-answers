//Exercise 1
describe('camelCase', function(){
  it("should be able to camelCase a string", function() {
    expect(camelCase('your soul is mine')).toEqual('yourSoulIsMine');
    expect(camelCase('Get over    here! ')).toEqual('getOverHere!');
  });
  
//Exercise 2

  it("should be able to camelCase a string directly", function() {
    expect(('your soul is mine').camelCase()).toEqual('yourSoulIsMine');
    expect(('Get over   here! ').camelCase()).toEqual('getOverHere!');
  });
});

//Exercise 3

describe('sum', function(){
  it("should be able to get the sum of some numbers", function(){
    expect(sum(1,2,3,4,5,6)).toEqual(21);
  });
});

//Exercise 4
describe('myMasterSum', function(){
  it("should be able to get the sum total of some numbers using reduce()", function(){
    expect(myMasterSum(1,2,3,4,5,6)).toEqual(21);
  });
});

//Exercise 6 
describe('Link\'s life', function(){
  it("should be able to get Links life using bind", function() {
    expect(LinksLife()).toEqual(100);
  });
})
