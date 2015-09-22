describe 'FactoryGirl', ->
  beforeEach ->
    angular.module 'test.factory-girl-api.config', []
      .config (FactoryGirlProvider) ->
        FactoryGirlProvider.baseUrl 'BASE_URL'

    module 'factory-girl-api', 'test.factory-girl-api.config'

  beforeEach inject (@$httpBackend, @FactoryGirl) ->

  afterEach ->
    @$httpBackend.verifyNoOutstandingExpectation()
    @$httpBackend.verifyNoOutstandingRequest()

  describe '.create', ->
    it 'makes a POST request to the factory route', ->
      @$httpBackend.expectPOST('BASE_URL/factories/widget')
        .respond widget: {}
      @FactoryGirl.create 'widget'
      @$httpBackend.flush()

  describe '.clean', ->
    it 'makes a DELETE request to the database route', ->
      @$httpBackend.expectDELETE('BASE_URL/database')
        .respond {}
      @FactoryGirl.clean()
      @$httpBackend.flush()
