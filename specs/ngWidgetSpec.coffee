describe 'ngWidget', () ->
  ngWidgetProvider = null;

  beforeEach () ->
    mockModule = angular.module 'fake', () ->

    mockModule.config (WidgetProvider) ->
      ngWidgetProvider = WidgetProvider

    module 'ngWidget', 'fake'
    inject () ->

  describe 'Defaults', () ->
    it 'should have function to override defaults', () ->
      expect(ngWidgetProvider.setDefaults).to.be.a 'function'

      defaults = ngWidgetProvider.setDefaults()
      
      expect(defaults).to.be.a 'object'
