# Project Title

## Overview

My app is designed to help teachers create and manage, teaching and lesson plans.

### Problem

Teachers in BC are not provided with any organizational resources to structure their lesson plans around. They are given a loose definition of what the teaching objectives are for each grade, and what competencies to observe. These "curriculum outlines" are not organized or grouped together by grade but rather by subject; making them a pain to aggregate, while building a teaching plan. There are no recomendations given on how to structure and organize a lesson plan; which is a point of difficulty for most new teachers.

### User Profile

My app is meant for use by teachers (teaching in BC, Canada). It's purpose is to provide a structure by which teachers can create and organize their lesson plans. It will also provide easy access to the "curriculum outilies" that pertain to the specific grade selected for their plan.

### Features

-   User accounts to allow for persisting plans.
-   Year, month, and day 'at-a-glance' views (YAAG, MAAG, and DAAG).
-   YAAG view includes:
    -   Canadian statutory holidays.
    -   ability to add professional development days.
    -   ability to divide into terms or semesters, as needed.
    -   ability to define 'Big Ideas' and 'Learning Metrics' for each portion of the year.
-   Repository for collected resources, and resource links:
    -   ability to link resources to a specific lesson, making them available through the DAAG page (ex. providing a link to a video resource from within a menu in the DAAG plan).
-   Ability to add text notes to a plan.

## Implementation

### Tech Stack

-   React
-   JavaScript
-   MySQL/Mongo DB
-   Express
-   Client libraries:
    -   react
    -   react-router
    -   react-big-calendar or react-calendar
    -   moment
    -   axios
-   Server libraries:
    -   express
    -   knex

### APIs

API to get all Canadian statutory holidays:
[Canadian Holidays API](https://canada-holidays.ca/api/v1/) - provides statutory holiday schedule on a Province basis - offers english and french holiday names

Google Gemini:
[Gemini AI](https://ai.google.dev/gemini-api/docs)

### Sitemap

Login <--> Create Account
|
V
Dashboard (year view) --> Edit Year
| | |
| | V
| | My Resources --> Add a Resource
| V
| My Month
V
My Day

### Mockups

\*Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

\*Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

### Endpoints

\*List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

-   JWT auth
    -   stored in cookies, with expiry of 24 hours.

## Roadmap

Sprint-1 (Aug 19th - Aug 25 )

-   Git repo and base file structure
-   create database
-   app navigation
-   server routing
-   Knex seeds and migrations
-   GET CalendarEvents endpoint
-   POST NewCalendarEvent endpoint
-   PUT EditCalendarEvent endpoint

Sprint-2 (Aug 26 - Sep 01)

-   create 'Header' component
-   create 'Dashboard' (year view) component
-   create 'MyMonth' page
-   create 'MyDay' page
-   page styling

Sprint-3 (Sep 02 - Sep 08th)

-   add Auth
-   'Login' page
-   'Create Account' page
-   POST NewUser endpoint
-   GET User endpoint
-   PUT EditUser endpoint

## Nice-to-haves

-   Darkmode
-   'My Week' view
-   Save multiple plans
-   Native app
-   Reuseable lesson plans
-   Accessibility
-   OAuth (Google)
