(function() {
    var readyStateCheckInterval = setInterval(function() {
      if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        var navigationTab = ".notification-center .tabnav .float-right"
        $(navigationTab).append('<a href="#mute_notifications" class="btn btn-sm mute_closed">Mute closed issues</a>')
        $(navigationTab).append('<a href="#mute_notifications" class="btn btn-sm mute_merged" style="margin-left: 3px;">Mute merged PRs</a>')

        $(".mute_merged").click(function() {
          $(".type-icon-state-merged").parent().siblings().find(".mute button").click()
        });

        $(".mute_closed").click(function() {
          $(".type-icon-state-closed").parent().siblings().find(".mute button").click()
        });
      }
    }, 10);
})();
