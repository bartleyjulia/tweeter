/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {


  function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('tweet');
    // adds image data to header
    let image = $('<img>').addClass('avatar');
    image.attr('src', tweet["user"]["avatars"]["small"]);
    let header = $('<header>').addClass('clearfix');
    header.append(image);
    // adds handle data to header
    let handler = $('<text>').addClass('handler');
    handler.text(tweet["user"]["handle"]);
    header.append(handler);
    // adds name data to header
    let name = $('<text>').addClass('name');
    name.text(tweet["user"]["name"]);
    header.append(name);
    //adds header items to article
    $tweet.append(header);
    //adds tweet data to content
    let tweetWords = $('<text>').addClass('tweetcontent');
    tweetWords.text( tweet["content"]["text"]);
    let tweetText = $('<content>');
    tweetText.append(tweetWords);
    //adds content to article
    $tweet.append(tweetText);
    //adds date to footer
    let timeData = $('<text>').addClass('datetweeted');
    timeData.text(tweet["created_at"]);
    let footer = $('<footer>').addClass('clearfix');
    footer.append(timeData);
    //adds counter to footer
    let buttons = $('<div>').addClass('flags');
    let flag = $('<i>').addClass("fas fa-flag");
    let retweet = $('<i>').addClass("fas fa-retweet");
    let heart = $('<i>').addClass("fas fa-heart");
    buttons.append(flag);
    buttons.append(retweet);
    buttons.append(heart);
    //adds buttons to footer
    footer.append(buttons);
    //adds footer to article
    $tweet.append(footer);

    return $tweet;
  }


  function renderTweets(tweets) {
    let $section = $('<section>').addClass('tweets-container');
    // loops through tweets
    for ( let user of tweets) {
      // calls createTweetElement for each tweet
      let tweetarticle = createTweetElement(user);
      // takes return value and appends it to the tweets container
      $section.prepend(tweetarticle);
    }
    return $section;
  }


  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(moreTweets) {
        let $allTweets = renderTweets(moreTweets);
        $('#tweets-container').append($allTweets);
      }
    });
  }


  $('#tweets-container').on('submit', function (event){
    event.preventDefault();
    let tweetText = $(this).children().find('textarea').val();
    if (tweetText.length > 140) {
      alert("Your tweet is longer than 140 characters");
    }
    if (tweetText.length <= 0) {
      alert("Tweet text invalid");
    }
    let newTweet = $('#tweets-container form').serialize();
    console.log(newTweet);

    $.post('/tweets', newTweet).done(function(res) {

      $('.tweets-container').prepend(createTweetElement(res.tweet));
    });
  });

  loadTweets();
});