/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  function createTweetElement(data) {
    // adds image data to header
    let image = $('<img>').addClass('avatar');
    image.attr('src', data["user"]["avatars"]["small"]);
    let header = $('<header>').addClass('clearfix');
    header.append(image);
    // adds handle data to header
    let handler = $('<text>').addClass('handler');
    handler.text(data["user"]["handle"]);
    header.append(handler);
    // adds name data to header
    let name = $('<text>').addClass('name');
    name.text(data["user"]["name"]);
    header.append(name);
    //adds header items to article
    let article = $('<article>');
    article.append(header);
    //adds tweet data to content
    let tweetWords = $('<text>').addClass('tweetcontent');
    tweetWords.text( data["content"]["text"]);
    let tweetText = $('<content>');
    tweetText.append(tweetWords);
    //adds content to article
    article.append(tweetText);
    //adds date to footer
    let timeData = $('<text>').addClass('datetweeted');
    timeData.text(data["created_at"]);
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
    console.log(buttons.html());
    //adds buttons to footer
    footer.append(buttons);
    console.log(footer.html());
    //adds footer to article
    article.append(footer);

    let section = $('<section>').addClass('tweets-container');
    section.append(article);

    return section;

  }


  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet);
  // to see what it looks like
  $('#tweets-container').append($tweet);
  // to add it to the page so we can make sure it's got all the right elements, classes, etc.



});
