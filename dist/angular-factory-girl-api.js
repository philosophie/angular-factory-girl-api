(function() {
  angular.module('factory-girl-api', []);

}).call(this);

(function() {
  var slice = [].slice;

  angular.module('factory-girl-api').provider('FactoryGirl', function() {
    var baseUrl;
    baseUrl = '';
    this.baseUrl = function(url) {
      return baseUrl = url;
    };
    this.$get = ["$http", function($http) {
      return {
        create: function() {
          var args, attributes, last, name, traits;
          name = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          traits = [];
          attributes = {};
          if (!_.isEmpty(args)) {
            last = _.last(args);
            if (_.isPlainObject(last)) {
              traits = _.initial(args);
              attributes = last;
            } else {
              traits = args;
            }
          }
          return $http.post(baseUrl + "/factories/" + name, {
            factory: {
              traits: traits,
              attributes: attributes
            }
          });
        },
        clean: function() {
          return $http["delete"](baseUrl + "/database");
        }
      };
    }];
    return this;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItZmFjdG9yeS1naXJsLWFwaS9mYWN0b3J5LWdpcmwtYXBpLm1vZHVsZS5jb2ZmZWUiLCJhbmd1bGFyLWZhY3RvcnktZ2lybC1hcGkvZmFjdG9yeS1naXJsLWFwaS5tb2R1bGUuanMiLCJhbmd1bGFyLWZhY3RvcnktZ2lybC1hcGkvc2VydmljZXMvZmFjdG9yeS1naXJsLmNvZmZlZSIsImFuZ3VsYXItZmFjdG9yeS1naXJsLWFwaS9zZXJ2aWNlcy9mYWN0b3J5LWdpcmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxXQUFBO0VBQUEsUUFBUSxPQUFPLG9CQUFvQjs7R0NHaEMsS0FBSztBQUNSO0FDSkEsQ0FBQSxXQUFBO0VBQUEsSUFBQSxRQUFBLEdBQUE7O0VBQUEsUUFBUSxPQUFPLG9CQUNaLFNBQVMsZUFBZSxXQUFBO0lBQ3ZCLElBQUE7SUFBQSxVQUFVO0lBQ1YsS0FBQyxVQUFVLFNBQUMsS0FBRDtNQ0lULE9ESEEsVUFBVTs7SUFFWixLQUFDLGlCQUFPLFNBQUMsT0FBRDtNQ0lOLE9ESEE7UUFBQSxRQUFRLFdBQUE7VUFDTixJQUFBLE1BQUEsWUFBQSxNQUFBLE1BQUE7VUFETyxPQUFBLFVBQUEsSUFBTSxPQUFBLEtBQUEsVUFBQSxTQUFBLE1BQUEsS0FBQSxXQUFBLEtBQUE7VUFDYixTQUFTO1VBQ1QsYUFBYTtVQUViLElBQUEsQ0FBTyxFQUFFLFFBQVEsT0FBakI7WUFDRSxPQUFPLEVBQUUsS0FBSztZQUNkLElBQUcsRUFBRSxjQUFjLE9BQW5CO2NBQ0UsU0FBUyxFQUFFLFFBQVE7Y0FDbkIsYUFBYTttQkFGZjtjQUlFLFNBQVM7OztVQ1FYLE9ETkYsTUFBTSxLQUFRLFVBQVEsZ0JBQWEsTUFDakM7WUFBQSxTQUFTO2NBQUUsUUFBQTtjQUFRLFlBQUE7Ozs7UUFFdkIsT0FBTyxXQUFBO1VDV0gsT0RWRixNQUFNLFVBQVUsVUFBUTs7OztJQ2M1QixPRFpBOzs7R0NlRCxLQUFLO0FBQ1IiLCJmaWxlIjoiYW5ndWxhci1mYWN0b3J5LWdpcmwtYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2ZhY3RvcnktZ2lybC1hcGknLCBbXVxuIiwiKGZ1bmN0aW9uKCkge1xuICBhbmd1bGFyLm1vZHVsZSgnZmFjdG9yeS1naXJsLWFwaScsIFtdKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsImFuZ3VsYXIubW9kdWxlICdmYWN0b3J5LWdpcmwtYXBpJ1xuICAucHJvdmlkZXIgJ0ZhY3RvcnlHaXJsJywgLT5cbiAgICBiYXNlVXJsID0gJydcbiAgICBAYmFzZVVybCA9ICh1cmwpIC0+XG4gICAgICBiYXNlVXJsID0gdXJsXG5cbiAgICBAJGdldCA9ICgkaHR0cCkgLT5cbiAgICAgIGNyZWF0ZTogKG5hbWUsIGFyZ3MuLi4pIC0+XG4gICAgICAgIHRyYWl0cyA9IFtdXG4gICAgICAgIGF0dHJpYnV0ZXMgPSB7fVxuXG4gICAgICAgIHVubGVzcyBfLmlzRW1wdHkgYXJnc1xuICAgICAgICAgIGxhc3QgPSBfLmxhc3QgYXJnc1xuICAgICAgICAgIGlmIF8uaXNQbGFpbk9iamVjdCBsYXN0XG4gICAgICAgICAgICB0cmFpdHMgPSBfLmluaXRpYWwgYXJnc1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IGxhc3RcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB0cmFpdHMgPSBhcmdzXG5cbiAgICAgICAgJGh0dHAucG9zdCBcIiN7YmFzZVVybH0vZmFjdG9yaWVzLyN7bmFtZX1cIixcbiAgICAgICAgICBmYWN0b3J5OiB7IHRyYWl0cywgYXR0cmlidXRlcyB9XG5cbiAgICAgIGNsZWFuOiAtPlxuICAgICAgICAkaHR0cC5kZWxldGUgXCIje2Jhc2VVcmx9L2RhdGFiYXNlXCJcblxuICAgIEBcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIHNsaWNlID0gW10uc2xpY2U7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2ZhY3RvcnktZ2lybC1hcGknKS5wcm92aWRlcignRmFjdG9yeUdpcmwnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYmFzZVVybDtcbiAgICBiYXNlVXJsID0gJyc7XG4gICAgdGhpcy5iYXNlVXJsID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICByZXR1cm4gYmFzZVVybCA9IHVybDtcbiAgICB9O1xuICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uKCRodHRwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBhcmdzLCBhdHRyaWJ1dGVzLCBsYXN0LCBuYW1lLCB0cmFpdHM7XG4gICAgICAgICAgbmFtZSA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgICAgICAgIHRyYWl0cyA9IFtdO1xuICAgICAgICAgIGF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgICAgICBpZiAoIV8uaXNFbXB0eShhcmdzKSkge1xuICAgICAgICAgICAgbGFzdCA9IF8ubGFzdChhcmdzKTtcbiAgICAgICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QobGFzdCkpIHtcbiAgICAgICAgICAgICAgdHJhaXRzID0gXy5pbml0aWFsKGFyZ3MpO1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0gbGFzdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyYWl0cyA9IGFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KGJhc2VVcmwgKyBcIi9mYWN0b3JpZXMvXCIgKyBuYW1lLCB7XG4gICAgICAgICAgICBmYWN0b3J5OiB7XG4gICAgICAgICAgICAgIHRyYWl0czogdHJhaXRzLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJGh0dHBbXCJkZWxldGVcIl0oYmFzZVVybCArIFwiL2RhdGFiYXNlXCIpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9