/* 
    Author: Mert Nerukuc
    @knyttneve
*/

(function($) {
  $.fn.colorfulTab = function(options) {
    var ID = $(this);
    var settings = $.extend({
      theme: '',
      backgroundImage: false,
      overlayColor: "#000",
      overlayOpacity: ".6"
    }, options);
    return this.each(function() {
      ID.addClass(settings.theme);
      var activeTab = ID.find(".colorful-tab-menu-item.active");
      var tabMenuItems = ID.find(".colorful-tab-menu-item");
      var tabContents = ID.find(".colorful-tab-content");
      var menuItemClick = ID.find(".colorful-tab-menu-item a");

      function hex2rgb(hex, opacity) {
        var h = hex.replace('#', '');
        h = h.match(new RegExp('(.{' + h.length / 3 + '})', 'g'));
        for (var i = 0; i < h.length; i++)
          h[i] = parseInt(h[i].length == 1 ? h[i] + h[i] : h[i], 16);
        if (typeof opacity != 'undefined') h.push(opacity);
        return '' + h.join(',') + '';
      }
      if (!settings.backgroundImage == true) {
        var activeTabColor = activeTab.attr("tab-color");
        ID.css("background", activeTabColor);
      } else {
        ID.addClass("colorful-tab-background-image")
        var activeTabBg = activeTab.attr("tab-background");
        ID.css("background", "linear-gradient( rgba(" + hex2rgb(settings.overlayColor, settings.overlayOpacity) + "), rgba(" + hex2rgb(settings.overlayColor, settings.overlayOpacity) + ") ),url(" + activeTabBg + ")");
      }
      $(menuItemClick).click(function(e) {
        var activeTabId = $(this).attr("href");
        var activeTabText = $(this).text();
        var menuItem = $(this).parent();
        if (!menuItem.hasClass("active")) {
          tabMenuItems.removeClass("active");
          menuItem.addClass("active");
          tabContents.removeClass("active");
          $(activeTabId).addClass("active");
          ID.attr("active-tab", activeTabText);
          ID.addClass("active");
          if (!settings.backgroundImage == true) {
            var tabColor = menuItem.attr("tab-color");
            ID.css("background", tabColor);
          } else {
             var tabImage = menuItem.attr("tab-background");
   ID.css("background", "linear-gradient( rgba(" + hex2rgb(settings.overlayColor, settings.overlayOpacity) + "), rgba(" + hex2rgb(settings.overlayColor, settings.overlayOpacity) + ") ),url(" + tabImage + ")");
          }
          setTimeout(function() {
            ID.removeClass("active");
          }, 800);
        }
        e.preventDefault();
      });

    });
  };
})(jQuery);
