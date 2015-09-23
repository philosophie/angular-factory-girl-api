describe 'FactoryGirl', ->
  beforeEach ->
    angular.module 'test.factory-girl-api.config', []
      .config (FactoryGirlProvider) ->
        FactoryGirlProvider.baseUrl 'BASE_URL'

    module 'factory-girl-api', 'test.factory-girl-api.config'

  beforeEach inject (@FactoryGirl) ->

  beforeEach ->
    $.mockjaxSettings.logging = false

  afterEach ->
    expect($.mockjax.unmockedAjaxCalls().length).toBe 0
    $.mockjax.clear()

  describe '.create', ->
    it 'makes a POST request to the factory route', ->
      params =
        factory:
          name: 'widget'
          traits: []
          attributes: {}

      $.mockjax
        url: 'BASE_URL/factories'
        type: 'POST'
        responseText:
          widget: {}
      @FactoryGirl.create 'widget'
      expect($.mockjax.mockedAjaxCalls().length).toBe 1

  describe '.setup', ->
    it 'makes a POST request to the database route', ->
      $.mockjax
        url: 'BASE_URL/database'
        type: 'POST'
        responseText: {}
      @FactoryGirl.setup()
      expect($.mockjax.mockedAjaxCalls().length).toBe 1

  describe '.teardown', ->
    it 'makes a DELETE request to the database route', ->
      $.mockjax
        url: 'BASE_URL/database'
        type: 'DELETE'
        responseText: {}
      @FactoryGirl.teardown()
      expect($.mockjax.mockedAjaxCalls().length).toBe 1
