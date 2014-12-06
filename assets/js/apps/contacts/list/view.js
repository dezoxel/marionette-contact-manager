ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Contact = Marionette.ItemView.extend({
    template: '#contact-list-item',
    tagName: 'tr',

    events: {
      'click': 'highlightName'
    },

    highlightName: function() {
      this.$el.toggleClass('warning');
    }
  });

  List.Contacts = Marionette.CompositeView.extend({
    itemView: List.Contact,
    tagName: 'table',
    className: 'table table-hover',
    template: '#contacts-list',
    itemViewContainer: 'tbody'
  });
});