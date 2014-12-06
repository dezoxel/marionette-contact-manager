ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Controller = {
    listContacts: function() {
      var contacts = ContactManager.request('contact:entities');

      var contactsView = new List.Contacts({
        collection: contacts
      });

      contactsView.on('itemview:contact:delete', function(itemView, model) {
        contacts.remove(model);
      });

      contactsView.on('itemview:contact:show', function(itemView, model) {
        ContactManager.ContactsApp.Show.Controller.showContact(model);
      })

      ContactManager.mainRegion.show(contactsView);
    }
  };
});