angular.module 'factory-girl-api'
  .provider 'FactoryGirl', ->
    baseUrl = ''
    @baseUrl = (url) ->
      baseUrl = url

    @$get = ($q) ->
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

        $.ajax "#{baseUrl}/factories",
          data:
            factory: { name, traits, attributes }
          dataType: 'json'
          method: 'POST'

      setup: ->
        $.ajax "#{baseUrl}/database",
          dataType: 'json'
          method: 'POST'

      teardown: ->
        $.ajax "#{baseUrl}/database",
          dataType: 'json'
          method: 'DELETE'

    @
