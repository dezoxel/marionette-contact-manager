ContactManager.module('ContactsApp.List', function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Contact = Marionette.ItemView.extend({
    template: '#contact-list-item',
    tagName: 'tr',

    events: {
      'click': 'highlightName',
      'click a.js-show': 'showContact',
      'click button.js-remove': 'removeContact'
    },

    showContact: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.trigger('contact:show', this.model);
    },

    removeContact: function(e) {
      e.stopPropagation();
      this.trigger('contact:delete', this.model);
    },

    highlightName: function() {
      this.$el.toggleClass('warning');
    },
    remove: function() {
      var builtinRemove = Marionette.ItemView.prototype.remove;
      var self = this;

      this.$el.fadeOut(function() {
        builtinRemove.call(self);
      });
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