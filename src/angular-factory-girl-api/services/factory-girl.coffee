angular.module 'factory-girl-api'
  .provider 'FactoryGirl', ->
    baseUrl = ''
    @baseUrl = (url) ->
      baseUrl = url

    @$get = ($http) ->
      create: (name, args...) ->
        traits = []
        attributes = {}

        unless _.isEmpty args
          last = _.last args
          if _.isPlainObject last
            traits = _.initial args
            attributes = last
          else
            traits = args

        $http.post "#{baseUrl}/factories/#{name}",
          factory: { traits, attributes }

      clean: ->
        $http.delete "#{baseUrl}/database"

    @
