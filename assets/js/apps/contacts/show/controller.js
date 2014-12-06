ContactManager.module('ContactsApp.Show', function(Show, ContactsManager, Backbone, Marionette, $, _) {
  Show.Controller = {
    showContact: function(model) {
      var contactView = new Show.Contact({
        model: model
      });

      ContactManager.mainRegion.show(contactView);
    }
  }
});