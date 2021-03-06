'use strict';

describe('HeaderController', function () {
  beforeEach(module('mean'));

  var scope, HeaderController;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    HeaderController = $controller('HeaderController', {
      $scope: scope
    });
  }));

  it('should expose some global scope', function () {
    expect(scope.global).toBeTruthy();
  });
});
