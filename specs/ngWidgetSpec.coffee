describe 'ngWidget', () ->
  ngWidgetProvider = null;

  beforeEach () ->
    mockModule = angular.module 'fake', () ->

    mockModule.config (WidgetProvider) ->
      ngWidgetProvider = WidgetProvider

    module 'ngWidget', 'fake'
    inject () ->

  describe 'Defaults', () ->
    it 'should have defaults', () ->
      expect(true).to.be.true
