describe 'ngWidget', ->
  testDirectiveObject = null
  ngWidgetProvider = null
  mockModule = null
  defaults = null

  beforeEach ->
    mockModule = angular.module 'fake', ->

    mockModule.config (WidgetProvider) ->
      ngWidgetProvider = WidgetProvider

    mockModule.directive 'mockDirective', (Widget)->
      testDirectiveObject = new Widget()
      testDirectiveObject

    module 'ngWidget', 'fake'
    inject ->
  describe 'Defaults', ->
    it 'should have function to override defaults', ->
      expect(ngWidgetProvider.setDefaults).to.be.a 'function'

      defaults = ngWidgetProvider.setDefaults()

    it 'shoud have a defaults object', ->
      expect(defaults).to.be.a 'object'

    it 'should have a transclude property equal to false', ->
      expect(defaults.transclude).to.equal false

    it 'should have a restrict property equal to EA', ->
      expect(defaults.restrict).to.equal 'EA'

    it 'should have a replace property equal to false', ->
      expect(defaults.replace).to.equal false

    it 'should have a scope property equal to false', ->
      expect(defaults.scope).to.equal false

    it 'should have a default template', ->
      expect(defaults.template).to.be.a 'string'

# Test the Directive's scope
  describe 'Scope Options', ->
    $compile = null
    $rootScope = null

    beforeEach inject (_$compile_, _$rootScope_)->
      $compile = _$compile_
      $rootScope = _$rootScope_

    it 'should allow you options to the scope', ->
      element = $compile '<mock-directive></mock-directive>'
      element $rootScope
      do $rootScope.$digest

      expect(testDirectiveObject).to.be.an 'object'
