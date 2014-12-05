ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Contact = Marionette.ItemView.extend({
    template: '#contact-list-item',
    tagName: 'li'
  });

  List.Contacts = Marionette.CollectionView.extend({
    itemView: List.Contact,
    tagName: 'ul'
  });
});