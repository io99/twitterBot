//This will help you favorite tweets.Search for a #hashtag on twitter. Once done, scroll down to load 100-200 posts. Lastly, Open Developer
//developer tools in chrome and run the followig script

a = setInterval(function () {
  window.scrollTo(0,document.body.scrollHeight);
  $('.ProfileTweet-actionButton.js-actionButton.js-actionFavorite:visible').click();
}, 1000)

//To stop the script.

classInterval(a)
