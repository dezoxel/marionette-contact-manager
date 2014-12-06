ContactManager.module('ContactsApp', function(ContactsApp, ContactManager, Backbone, Marionette, $, _) {
  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'contacts': 'listContacts'
    }
  });

  var API = {
    listContacts: function() {
      ContactManager.ContactsApp.List.Controller.listContacts();
    }
  };

  ContactManager.on('contacts:list', function() {
    ContactManager.navigateTo('contacts');
    API.listContacts();
  });

  ContactManager.addInitializer(function() {
    new ContactsApp.Router({
      controller: API
    });
  });
});