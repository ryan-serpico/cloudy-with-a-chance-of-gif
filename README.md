# Week 1
Week one of work on Cloudy with a Chance of GIF features the [Open Weather Map](http://openweathermap.org/) and [Giphy](http://giphy.com) APIs functioning, albeit not together. User input, which comes in the form of a user typing in a city, is working properly. When a user types in Portland, for example, the two dots that represent temperature and humidity changes according to the data from Open Weather Map. It is only meant to display that the Open Weather Map data is still flowing and won't be present in the end product.

I am satisfied with the progress I have made so far. This week I need to figure out how to have the Open Weather Map API speak to the Giphy API by passing the weather description into a variable that Giphy can query. I also need to figure out what happens when Open Weather Map doesn't have data on the city queried. Having search suggestions under the search bar would also be a great addition.

## Tutorials and resources
- [Daniel Shiffman uses the Giphy API for the first time](https://youtu.be/mj8_w11MvH8).
-  [Daniel Shiffman explains how to use the Open Weather Map API](https://www.youtube.com/watch?v=ecT42O6I_WI).
- [Open Weather Map API documentation](https://openweathermap.org/api).
- [Giphy API Github page](https://github.com/Giphy/GiphyAPI).
- [p5.js](https://p5js.org).

# Week 2 release notes

Visual changes in week two can be summed up in one word: Subtraction. I continue to be unsuccessful when it comes to getting Open Weather Map to talk to the Giphy API, but I think that I'm getting closer to figuring it out.

## What happened this week
- Fixed the bug where two Gifs would be displayed instead of just one when I had the Giphy returning Gifs after I hardcoded the Giphy query. The issue was that I was calling both p5.js and p5.mn.js, when all I needed was one. I found this with the network tool in Chrome web tools.
- Identified what could have become a major problem further down the line in that according to p5.js's documenation, the setup() function should only be called once. Changed the first instance of setup to preload().
- Before I got into trying to figure out how to replace spaces in a string such as in "partly cloudy" with a + sign, I went to the "&q=" variable to see if I could get it to work with the spaces there, such as with "&q=partly cloudy". I tried, and it worked, so I decided that could not be the issue that was screwing with things.
- Using the network tool I mentioned earlier, it seems as though I may have found the issue that is inhibiting me from getting things working. It seems as though that the Giphy API runs its search right as the page loads, before the user has time to type in their search. I think if I can figure out how to force the Giphy API to wait for input, I can get this thing running. I have documented what I'm talking about and can send a screenshot to you in an email after you grade this, professor McAdams.
- Just to show you that things are still working without you having to oepn up network in the chrome web tools, which I have become best friends with, I have kept the alert that tells the current weather description for the center entered.
- To preserve sanity, I have included the noLoop() function in this version so that the alert doesn't go on forever.
- To cap off what I deleted, I commented out the circles that display the temperature and humidity. I know that the weather information is working right now.

I fear that if I don't get this figured out by Sunday night, I may just scrap all of the js I have so far and try something else. Thankfully, in my research I came across a web app someone created online that is essentially what I'm trying to do with weather and Gifs. He used AJAX, however, which I have barely any understanding of. He thankfully put his work on [Github](https://github.com/jeffersonlam/weathery), so I may be able to work with what he had and reverse engineer it.

**If for some reason, GitHub still isn't playing well with the APIs, [here is a link to my site with a live version](http://serpico-lab.com/cloudy-with-a-chance-of-gif/)**. 
