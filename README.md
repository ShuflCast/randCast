rand(Cast)
===========
[![Build Status]] [![Test Coverage]] [![Code Climate]]

## Team

- [Antonio Voce](https://github.com/7091lapS)
- [Emily Carson](https://github.com/emily-jane)
- [Richard Geoghegan](https://github.com/richgeog)
- [Sivan Patel](https://github.com/sivanpatel)
- [Toby Clarke](https://github.com/Teeohbee)

## Task

Create a mobile podcast app that allows users who are busy to search for podcasts that interest them and filter podcasts by duration. To have the ability to randomly select a podcast for the genre and duration selected and play this automatically.

## Our Approach

* Spiking a basic ionic app
* researching api's
* spiked a music playing app
* started mvp
* using local storage
* testing

## Technologies Used

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

* Ionic
* api auth for audiosearch
* split into 2 teams to get audioboom api working
* testing

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
* To TDD our app

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

* The audiosearch Api was proving difficult to use
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
