describe('phoneList', function () {
  var compile, rootScope;

  beforeEach(module('phoneList'));

  beforeEach(inject(function($compile, $rootScope) {
    compile = $compile, // 用于创建指令的实例
    rootScope = $rootScope // 用于创建指令的作用域
  }));

  describe('PhoneListController', function () {
    it('should create a phones model with 3 phones', inject(function () {
      var scope = rootScope.$new();
      var element = compile('<phone-list></phone-list>')(scope);
      // scope.$digest();
      var compiledElementScope = element.isolateScope();
      expect(compiledElementScope.phones.length).toBe(3);
    }));
  });
});