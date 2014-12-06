ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Controller = {
    listContacts: function() {
      var contacts = ContactManager.request('contact:entities');

      var contactsView = new List.Contacts({
        collection: contacts
      });

      contactsView.on('itemview:contact:delete', function(childView, model) {
        contacts.remove(model);
      });

      ContactManager.mainRegion.show(contactsView);
    }
  };
});