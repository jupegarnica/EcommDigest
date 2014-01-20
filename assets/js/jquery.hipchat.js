(function ($) {

  // Creates an iframe with an embedded HipChat conversation window.
  //
  // Options:
  //   url        - The url to the room to embed; required
  //   container  - The container in which to insert the HipChat panel; required
  //   timezone   - The timezone to use in the embedded room; required
  //   welcome    - A welcome message to display when the room is joined; optional
  //   noframes   - Content to include when iframes are disabled in the browser; optional
  //   width      - The width of the iframe; defaults to 100%
  //   height     - The height of the iframe; defaults to 400px
  //   showButton - Whether to show a chat button that must be pressed before showing the chat room; defaults to true
  //   buttonTitle - The text to display on the button, if it is shown
  $.createHipChat = function (options) {
    if (options && options.url && options.container && options.timezone) {
      var $container = $(options.container);
      if ($container.length === 0) return;
      var params = {
        anonymous: true,
        timezone: options.timezone,
        minimal: true
      };
      if (options.welcome) {
        params.welcome_msg = options.welcome;
      }
      var url = options.url + (options.url.indexOf('?') > 0 ? '&' : '?') + $.param(params);
      if (url.indexOf('https://') !== 0) {
        url = 'https://' + url;
      }
      if(options.showButton !== false){
        options.showButton = true;
      }
      var w = options.width || '100%';
      var h = options.height || 400;
      var nf = (options.noframes || '');
      return {
        show: function () {
          $container.html('<iframe src="' + url + '" frameborder="' + 0 + '" width="' + w + '" height="' + h + '">' + nf + '</iframe>');
        }
      };
    }
  };

  $.fn.hipChatPanel = function (options) {
    options.container = this[0];
    var panel = $.createHipChat(options);
    if(options.showButton){
      this.html('<button class="show-hipchat ' + options.buttonClasses + '">' + (options.buttonTitle || 'Chat') + '</button>')
          .find('.show-hipchat').click(function (e) { panel.show(); });
    } else {
      panel.show();
    }
  };

}(jQuery));



$(function() {
  $('.hipchat').hipChatPanel({
    url: "https://www.hipchat.com/gkkYX0llH",
    timezone: "PST"
  });
});