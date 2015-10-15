rand(Cast)
===========

## Team

- <img src="https://avatars2.githubusercontent.com/u/12876467?v=3&s=35">  [Antonio Voce](https://github.com/7091lapS)
- <img src="https://avatars2.githubusercontent.com/u/12625493?v=3&s=35">  [Emily Carson](https://github.com/emily-jane)
- <img src="https://avatars2.githubusercontent.com/u/11146599?v=3&s=35">  [Richard Geoghegan](https://github.com/richgeog)
- <img src="https://avatars2.githubusercontent.com/u/10670079?v=3&s=35">  [Sivan Patel](https://github.com/sivanpatel)
- <img src="https://avatars2.githubusercontent.com/u/12451318?v=3&s=35">  [Toby Clarke](https://github.com/Teeohbee)

## Description

Rand(Cast) is a podcast-discovery mobile app built in Ionic. The app was one of the final projects at Makers Academy in October 2015.
Rand(Cast) provides a quick and easy way to discover new podcast episodes based on the duration and categories selected by the user. The episodes can be listened and bookmarked within the app.

[Recorded demo](https://www.youtube.com/watch?v=CnNOxKSKrL8)

## Approach

* In order to learn the basics of Ionic we spiked a simple ionic app
* We researched a suitable podcast api
* We spiked a music playing app
* Built our desired mvp
* We implemented bookmarks
* We added test coverage and improved the look of the app

## Technologies

* Ionic Framework
* Angular.js
* Javascript
* Heroku
* Ruby
* Sinatra
* HTML/CSS
* Protractor Testing Framework
* Karma Testing Framework
* Audiosearch API

## Challenges

* Learning Ionic from scratch
* Difficulties with omniauth ajax requests led us to built our back end service with the Audiosear.ch SDK
* We split into 2 teams to get two different apis working
* Testing

## How to setup

````
$ git clone https://github.com/ShuflCast/randCast.git
$ cd randCast
$ npm install
$ bower install
$ ionic state restore
````

* To run in the browser `$ ionic serve`, Go to localhost:8100
* To run on ios `$ ionic run ios`
* To run on Android `$ ionic run android`
* The app can be installed on ios and android using the respective developer tools

## Testing
### Protractor
* Open terminal and run `$ ionic serve`
* Open a new tab in termianl and run `$ protractor protractor.config.js`

## v1.0

#### Our Approach

* As nobody in our team had used Ionic before we decided to spike a basic ionic app so we had a understanding of how Ionic worked and how we would need to use it for our app
* We spent sometime researching and choosing which Api would give us the broadest and most amount of podcasts availble to our app. We chose to use [Audiosear.ch](https://www.audiosear.ch/) as our Api as that gave us the best results we were lookig for
* We decided to spike a music playing app so that we could then understand how to set up an app to play ausion would work.
* At this stage we were happy with the research and spiking of test apps that we had completed so we began to move into our user stories
* We added test coverage

#### User Stories
````
As an avid podcast listener
So that I can discover new podcasts
I would like to be able to serach for a random selection of podcasts
````

````
As a person with limited interests
So that I can listen to something that interests me
I would like to be able to receive random podcasts based on my interests
````

````
As a person with limited time
So that I can make the most of my available time
I would like to be able to search for podcasts based on my available time
````

#### Challenges

* The audiosearch Api proved difficult to use, as its documentation was not very extensive
* We spent many days trying to overcome our lack of knowledge of testing with Ionic so we could test drive our app. We were unable to find a solution outright, so decided to carry on with the app and return to testing at a later date. We found out that we could use protractor to test our app and we added tests towards the end of the app being completed

## v2.0
#### Our Approach

* We decided to give the user the ability to add and save podcasts they thought were interesting and also podcasts where there time had been cut short to completed listening to them. For this feature we needed thought we would need to include a database, however after doing some research on the matter we found out we could simply use the devices local storage

#### User Stories
````
As a person with a vast interests
So that I can increase my interests and knowledge
I would like to be able to listen to a randomly selected podcast
````

````
As a person who uses many social media platforms
So that I can share and recommend podcasts I have enjoyed
I would like to be able to share these on other social media platforms
````

````
As a person who is searching for a podcast
So that I know if know there are no results found for my selection
I would like to be notified of this
````

````
As a person listening to a podcast
So that I can save the current podcast
I would like to be able to save the podcast I am listening too
````

````
As a person who has saved a podcast
So that I can return to it and continue to liten to it
I would like to be able to find all my saved podcasts in my bookmarks
````

````
As a person who has saved podcasts
So that I can delete saved podcasts I have finished with
I would like to be able to delete them from my bookmarks
````

````
As a person who likes more then 1 podcast in the results page
So that I can save these to listen to at a later date
I would like to be able to save the podcast to my bookmarks
````

#### Challenges

#### Future Features

* Episode download progress tracker - A tracker to tell the user that the epidode they have selected is loading
* Results searching progress tracker - A loading bar to tell the user that the results are being loaded and how much longer it has to complete that search
* Create a splash screen for the app - A splash screen for the app when it loads
* Add skip forward and backward buttons
