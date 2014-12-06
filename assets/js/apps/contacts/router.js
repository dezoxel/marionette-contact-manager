ContactManager.module('ContactsApp', function(ContactsApp, ContactManager, Backbone, Marionette, $, _) {
  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'contacts': 'listContacts',
      'contacts/:id': 'showContact'
    }
  });

  var API = {
    listContacts: function() {
      ContactManager.ContactsApp.List.Controller.listContacts();
    },

    showContact: function(id) {
      ContactManager.ContactsApp.Show.Controller.showContact(id);
    }
  };

  ContactManager.on('contacts:list', function() {
    ContactManager.navigateTo('contacts');
    API.listContacts();
  });

  ContactManager.on('contact:show', function(id) {
    ContactManager.navigateTo('contacts/' + id);
    API.showContact(id);
  });

  ContactManager.addInitializer(function() {
    new ContactsApp.Router({
      controller: API
    });
  });
});