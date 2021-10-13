# Project Overview
The challenge for this project was to create a "full stack" application from scratch the included Node.js, Postgres, Express, and EJS.  

## Project Description
My project idea was to create a Wine Inventory application that would allow wine enthusiusts and collectors to track their collections, whether big or small. I wanted to make it easy to use with a simple, functional, and clean interface.  

## Project Links
My Production Application:  https://bd-wineapp.herokuapp.com/ 

My GitHub Repo:  https://github.com/bdeblaeydeere/wineinventory 

Bootstrap:  https://getbootstrap.com/

Bootswatch: https://bootswatch.com/ (Free themes for Bootstrap)

My wireframes:  https://wireframe.cc/pro/pp/86c98ff51481379

Basic data model: https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Wine%20Inventory%20App.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Fbdeblaeydeere%2Fwineinventory%2Fmain%2FWine%2520Inventory%2520App.drawio

## Wireframes
![image](https://user-images.githubusercontent.com/80486373/137138482-8b3fb5c5-953f-4614-b8b4-6d8ad5f0bc4d.png)
![image](https://user-images.githubusercontent.com/80486373/137138524-352441c7-2c5e-4353-a12d-69be2cd333cf.png)
![image](https://user-images.githubusercontent.com/80486373/137138548-1e2dd8ce-e65e-4e9f-94a2-02e7a7eccb31.png)


### MVP Deliverables
To meet MVP requirements I used a data model focused on Wines as the primary table and four supporting tables that I would join as they provided data for information that would have been redundant in the primary wine table.  They were Countries, Producers, Sellers, and Notes.  I did one to Many joins from the Countries, Producers, and Sellers table to the Wines table.  Since a Wine can have many different smells and flavors the Notes and Wines table had a many-to-many relationship and join table established.

For the views I stuck with the concepts of Index, Show, New, and Edit.  I followed the CRUD model with seven actions to support the application 
<img width="1114" alt="image" src="https://user-images.githubusercontent.com/80486373/137141871-51727286-7a58-4617-a611-24c177b61da7.png">
<img width="812" alt="image" src="https://user-images.githubusercontent.com/80486373/137145451-9a4fe69d-4dc0-4156-b8e1-518afa2154c7.png">


### Post MVP Deliverables
For the non-MVP extras there were a few areas I wanted to focus on.  The first was an admin type "configuration" area where the user could easily add or delete items from the supporting tables of Countries, Producers, Sellers, and Wine Notes.  I intentionally did not include 'update' functionality because these tables contained only ID and Name fields.  It was easier to delete and recreate any entries that needed typos fixed.

I implemented a simple, yet elegant Bootstrap theme called "Lux" from Bootswatch.com that was easy to implement.  I added some elements like cards for my Configuration page, a common header for all pages, and simple navigation workflow.

Things I didn't get to that I would like to enhance on future deployments:
 - Allow user to add or remove columns to the index page
 - Toggle the ASC/DESC sort on the columns of the index page
 - Search functionality
 - Dashboard with widgets showing breakdowns of wines by color, country, producer, rating, etc.
 - Allow user to upload or link to a picture of the wine bottle for reference

### User stories
	1. As a user I want an interface so that I can see all of my wine inventory in one screen
	2. As a user I want to see details of a single wine so that I can see all the details of the wine
	3. As a user I want to be able to edit the details of my wine from details view, so that I can make adjustments as necessary.
	4. As a user I want to be able to delete a wine from my inventory so that I can keep my cellar inventory current
	5. As a user I want to be able to input my rating of the wine on a 0-5 scale in increments of .1
	6. As a user I want to be able to add new wines to my inventory.
	7. As a user I want to be able to add or delete producers so that I can give myself  more options
	8. As a user I want to be able to add or delete sellers so that I can give myself  more options
	9. As a user I want to be able to add or delete producers so that I can give myself more options
	10. As a user I want to be able to add or delete tasting notes so that I can give myself  more options
	11. As a user I want to be able to add or delete countries so that I can give myself  more options


## Time Frames
Day 1 - get all items installed (express, postgres, sequelize, etc) and validate
Day 2- get index controller, route, and index.ejs created and working
Day 3 & 4 - finish all remaining controllers, introduce basic Bootstrap/Bootswatch theme
Day 5 - start App Configuration function for table maintenance, expand Bootswatch theme and design
Day 6 - complete App Configuration, refine theme, tweak pages for layout consistency, production deployment on Heroku 
Day 7 - complete ReadMe.md, tweak any last minute things and perform final Production deploy.

## Additional Libraries
None outside of what was required for MVP

## Code Snippet
Two areas of the code I was pleased with myself on working through was the Tasting Notes controller for the Edit area and the consolidated App Configuration page.

Wines.js Controller - Edit Route

What made this challenging was that if two or more notes were selected the req.body would have the notes as an Array.  For one note it would be a single value, and for no selected notes nothing would be returned.  So the logic on how to handle and update the joins table for the many-to-many relationship was tricky.
![image](https://user-images.githubusercontent.com/80486373/137146791-e4c3671b-fbf3-4551-9fcb-f9378ce2caec.png)

Single page App Configuration Page

Rather than creating separate pages for all of these functions to extend the selection options to the user when adding a wine, I wanted a simple experience.  My routes table for config.js was unique from what I had worked with in that it had multiple POST and DELETE routes and only one GET route.
<img width="730" alt="image" src="https://user-images.githubusercontent.com/80486373/137147698-284b6ba7-23b2-43ef-aae9-038b82296212.png">
![image](https://user-images.githubusercontent.com/80486373/137148235-448f6e0e-cd6b-422f-9c1f-486a6eb7d78d.png)


## Issues and Resolutions
My two issues that I needed assistance on were getting the EDIT view with PUT method in the Wines controller working due to the many-to-many relationship and using checkboxes.  The other was understanding the right approach on the App Configuration backend and how I would need to setup the routes file to acheive my goal.
