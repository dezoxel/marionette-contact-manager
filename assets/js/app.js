var ContactManager = new Marionette.Application();

ContactManager.addRegions({
  mainRegion: '#main-region'
});

ContactManager.getCurrentRoute = function() {
  return Backbone.history.fragment;
};

ContactManager.navigateTo = function(route, options) {
  options || (options = {});
  Backbone.history.navigate(route, options);
};

ContactManager.on('initialize:after', function() {
  if (Backbone.history) {
    Backbone.history.start();

    if (this.getCurrentRoute() === '') {
      ContactManager.trigger('contacts:list');
    }
  }
});
