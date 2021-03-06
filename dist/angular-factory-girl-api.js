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
    this.$get = ["$q", function($q) {
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
          return $.ajax(baseUrl + "/factories", {
            data: {
              factory: {
                name: name,
                traits: traits,
                attributes: attributes
              }
            },
            dataType: 'json',
            method: 'POST'
          });
        },
        setup: function() {
          return $.ajax(baseUrl + "/database", {
            dataType: 'json',
            method: 'POST'
          });
        },
        teardown: function() {
          return $.ajax(baseUrl + "/database", {
            dataType: 'json',
            method: 'DELETE'
          });
        }
      };
    }];
    return this;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ3VsYXItZmFjdG9yeS1naXJsLWFwaS9mYWN0b3J5LWdpcmwtYXBpLm1vZHVsZS5jb2ZmZWUiLCJhbmd1bGFyLWZhY3RvcnktZ2lybC1hcGkvZmFjdG9yeS1naXJsLWFwaS5tb2R1bGUuanMiLCJhbmd1bGFyLWZhY3RvcnktZ2lybC1hcGkvc2VydmljZXMvZmFjdG9yeS1naXJsLmNvZmZlZSIsImFuZ3VsYXItZmFjdG9yeS1naXJsLWFwaS9zZXJ2aWNlcy9mYWN0b3J5LWdpcmwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQSxXQUFBO0VBQUEsUUFBUSxPQUFPLG9CQUFvQjs7R0NHaEMsS0FBSztBQUNSO0FDSkEsQ0FBQSxXQUFBO0VBQUEsSUFBQSxRQUFBLEdBQUE7O0VBQUEsUUFBUSxPQUFPLG9CQUNaLFNBQVMsZUFBZSxXQUFBO0lBQ3ZCLElBQUE7SUFBQSxVQUFVO0lBQ1YsS0FBQyxVQUFVLFNBQUMsS0FBRDtNQ0lULE9ESEEsVUFBVTs7SUFFWixLQUFDLGNBQU8sU0FBQyxJQUFEO01DSU4sT0RIQTtRQUFBLFFBQVEsV0FBQTtVQUNOLElBQUEsTUFBQSxZQUFBLE1BQUEsTUFBQTtVQURPLE9BQUEsVUFBQSxJQUFNLE9BQUEsS0FBQSxVQUFBLFNBQUEsTUFBQSxLQUFBLFdBQUEsS0FBQTtVQUNiLFNBQVM7VUFDVCxhQUFhO1VBRWIsSUFBQSxDQUFPLEVBQUUsUUFBUSxPQUFqQjtZQUNFLE9BQU8sRUFBRSxLQUFLO1lBQ2QsSUFBRyxFQUFFLGNBQWMsT0FBbkI7Y0FDRSxTQUFTLEVBQUUsUUFBUTtjQUNuQixhQUFhO21CQUZmO2NBSUUsU0FBUzs7O1VDUVgsT0RORixFQUFFLEtBQVEsVUFBUSxjQUNoQjtZQUFBLE1BQ0U7Y0FBQSxTQUFTO2dCQUFFLE1BQUE7Z0JBQU0sUUFBQTtnQkFBUSxZQUFBOzs7WUFDM0IsVUFBVTtZQUNWLFFBQVE7OztRQUVaLE9BQU8sV0FBQTtVQ2FILE9EWkYsRUFBRSxLQUFRLFVBQVEsYUFDaEI7WUFBQSxVQUFVO1lBQ1YsUUFBUTs7O1FBRVosVUFBVSxXQUFBO1VDY04sT0RiRixFQUFFLEtBQVEsVUFBUSxhQUNoQjtZQUFBLFVBQVU7WUFDVixRQUFROzs7OztJQ2tCZCxPRGhCQTs7O0dDbUJELEtBQUs7QUFDUiIsImZpbGUiOiJhbmd1bGFyLWZhY3RvcnktZ2lybC1hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnZmFjdG9yeS1naXJsLWFwaScsIFtdXG4iLCIoZnVuY3Rpb24oKSB7XG4gIGFuZ3VsYXIubW9kdWxlKCdmYWN0b3J5LWdpcmwtYXBpJywgW10pO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiYW5ndWxhci5tb2R1bGUgJ2ZhY3RvcnktZ2lybC1hcGknXG4gIC5wcm92aWRlciAnRmFjdG9yeUdpcmwnLCAtPlxuICAgIGJhc2VVcmwgPSAnJ1xuICAgIEBiYXNlVXJsID0gKHVybCkgLT5cbiAgICAgIGJhc2VVcmwgPSB1cmxcblxuICAgIEAkZ2V0ID0gKCRxKSAtPlxuICAgICAgY3JlYXRlOiAobmFtZSwgYXJncy4uLikgLT5cbiAgICAgICAgdHJhaXRzID0gW11cbiAgICAgICAgYXR0cmlidXRlcyA9IHt9XG5cbiAgICAgICAgdW5sZXNzIF8uaXNFbXB0eSBhcmdzXG4gICAgICAgICAgbGFzdCA9IF8ubGFzdCBhcmdzXG4gICAgICAgICAgaWYgXy5pc1BsYWluT2JqZWN0IGxhc3RcbiAgICAgICAgICAgIHRyYWl0cyA9IF8uaW5pdGlhbCBhcmdzXG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gbGFzdFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRyYWl0cyA9IGFyZ3NcblxuICAgICAgICAkLmFqYXggXCIje2Jhc2VVcmx9L2ZhY3Rvcmllc1wiLFxuICAgICAgICAgIGRhdGE6XG4gICAgICAgICAgICBmYWN0b3J5OiB7IG5hbWUsIHRyYWl0cywgYXR0cmlidXRlcyB9XG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG5cbiAgICAgIHNldHVwOiAtPlxuICAgICAgICAkLmFqYXggXCIje2Jhc2VVcmx9L2RhdGFiYXNlXCIsXG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG5cbiAgICAgIHRlYXJkb3duOiAtPlxuICAgICAgICAkLmFqYXggXCIje2Jhc2VVcmx9L2RhdGFiYXNlXCIsXG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJ1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURSdcblxuICAgIEBcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIHNsaWNlID0gW10uc2xpY2U7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2ZhY3RvcnktZ2lybC1hcGknKS5wcm92aWRlcignRmFjdG9yeUdpcmwnLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgYmFzZVVybDtcbiAgICBiYXNlVXJsID0gJyc7XG4gICAgdGhpcy5iYXNlVXJsID0gZnVuY3Rpb24odXJsKSB7XG4gICAgICByZXR1cm4gYmFzZVVybCA9IHVybDtcbiAgICB9O1xuICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uKCRxKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBhcmdzLCBhdHRyaWJ1dGVzLCBsYXN0LCBuYW1lLCB0cmFpdHM7XG4gICAgICAgICAgbmFtZSA9IGFyZ3VtZW50c1swXSwgYXJncyA9IDIgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdO1xuICAgICAgICAgIHRyYWl0cyA9IFtdO1xuICAgICAgICAgIGF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgICAgICBpZiAoIV8uaXNFbXB0eShhcmdzKSkge1xuICAgICAgICAgICAgbGFzdCA9IF8ubGFzdChhcmdzKTtcbiAgICAgICAgICAgIGlmIChfLmlzUGxhaW5PYmplY3QobGFzdCkpIHtcbiAgICAgICAgICAgICAgdHJhaXRzID0gXy5pbml0aWFsKGFyZ3MpO1xuICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0gbGFzdDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyYWl0cyA9IGFyZ3M7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAkLmFqYXgoYmFzZVVybCArIFwiL2ZhY3Rvcmllc1wiLCB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIGZhY3Rvcnk6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIHRyYWl0czogdHJhaXRzLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXR1cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICQuYWpheChiYXNlVXJsICsgXCIvZGF0YWJhc2VcIiwge1xuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRlYXJkb3duOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gJC5hamF4KGJhc2VVcmwgKyBcIi9kYXRhYmFzZVwiLCB7XG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG59KS5jYWxsKHRoaXMpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9