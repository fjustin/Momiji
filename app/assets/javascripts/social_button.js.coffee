ready = ->
# Google
loadGoogleSDK()
gapi.plusone.go()

# Twitter
loadTwitterSDK()
bindTwitterEventHandlers() unless twttr_events_bound

# Hatena
loadHatenaSDK()

# Pocket
loadPocketSDK()

# For turbolinks
$(document).ready(ready)
$(document).on('page:load', ready)



# ----------------------------------------- #
# Twitter
# ----------------------------------------- #

twttr_events_bound = false

bindTwitterEventHandlers = ->
  $(document).on 'page:load', renderTweetButtons
  twttr_events_bound = true

renderTweetButtons = ->
  $('.twitter-share-button').each ->
    button = $(this)
    button.attr('data-url', document.location.href) unless button.data('url')?
    button.attr('data-text', document.title) unless button.data('text')?
  twttr.widgets.load()

loadTwitterSDK = ->
  $.getScript("//platform.twitter.com/widgets.js")


# ----------------------------------------- #
# Google
# ----------------------------------------- #

loadGoogleSDK = ->
  $.getScript("https://apis.google.com/js/plusone.js")

# ----------------------------------------- #
# Hatena
# ----------------------------------------- #

loadHatenaSDK = ->
  $.getScript("//b.st-hatena.com/js/bookmark_button_wo_al.js")

# ----------------------------------------- #
# Pocket
# ----------------------------------------- #

loadPocketSDK = ->
  $.getScript("https://widgets.getpocket.com/v1/j/btn.js?v=1")
