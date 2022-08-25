# Lost in Translation

Lost in Translation is a simple web service for translating words and text into American Sign Language. Available on [Heroku](https://glacial-scrubland-70507.herokuapp.com/).

Addendum (25.08.22): Genuinely completely forgot to integrate the Heroku API. Getting to it for the next assignment.

## Description

The site allows a user to log in with a username and to translate phrases under 40 characters into American Sign Language. The state management of the current user and their translations are handled through Redux, and all users and their respective translations recorded in the current session are stored in session storage. This was done as a replacement for a proper database and API.

NB: This project was originally made and developed in GitLab. Should you want to view the rest of the commit history then it is available [here](https://gitlab.com/oddbjornborg/lost-in-translation). The GitLab repository is now outdated.

## Background

This project was created as part of the Noroff Accelerate course. It's purpose was to learn and demonstrate a basic level of understanding of React development, as well as other web-development technologies like Redux.

## Installation

There's no need to install anything, simply visit the site on [Heroku](https://glacial-scrubland-70507.herokuapp.com/).

Should you want to run the site locally, simply download the repo and run npm install in the root folder. From there you can use a service like Live Server to host the site yourself.

## Usage

Log in to access the translation service.

Click the logo on the left side of the header to navigate to the translation page. Write some text and either click the Translate button or hit enter to translate.

Click your name on the right side of the header to navigate to the profile page. Displays your last ten translations and contains buttons to both log out and clear your translation history.
