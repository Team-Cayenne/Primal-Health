# Primal-Health: "Reconnect With Your Roots!"

Contributers:
Allie Diorio, Andy Nguyen, Austin Pakola, Cheryl Casas, Yuriy Kuptsov

Architect: Allie Diorio
UI Manager: Andy Nguyen
Project Manager: Cheryl Casas

## Introduction
This project was a 1 week sprint in which our team attempted to complete a MVP for Rachel, the COO of Primal Health.  Primal Health's request was an E-commerce site, focusing on biodynamically produced meal plan delivery subsciptions with an additional Nutrition and Health education resource.  Due to the short time constraints, our teams focus was on the profit revenue streaming component of the application, the food delivery aspect and its corresponding user story.

## Application Purpose
-The application allows users to access convienient and delicious meal kits through home delivery. The kits come complete with all you would need, gauranteeing the ingredients are organic, holistic high quality products sourced from vendors using biodynamic practices. Additionally, the application also has an educational aspect, providing users with access to inhouse nutritionist.
-Primal Health was born out of a passionate desire to expose and engage local communities to a healthy lifestlye and community with local purveyors and health professionals.

## Tech Stack
-JavaScript, React, Node, Firebase, Webpack, CSS, Styled Components, Jest, Axios, Babel, Express, Spoonacular API, Edamam API, React Router, Logo Design, Trello
## Video Demo

![test](http://g.recordit.co/eQaylv7G4v.gif)
## Technical Challenges (Anticipated and Unexpected)
-Within a short time frame, we were all individually committed to learning new methods and techniques affecting the entire project.  Firebase, figma, styled components, react router were programs or methods we agreed to use.  Each required research and were implemented successfully over the course of 6 days.  Additionally, the size of the project was very large.  The client asked for multiple features including a sub app within the main app.  We scaled the project into phases so we could meet realistic expectations within the allotted time.
## Technical Achievements
-Led by our UI Manager, Andy Nguyen, we fully utilized figma to create the blueprint of our application which consists of 18 complex frames.  Using it as a base, we achieved a beautiful design for the application that met the client's criteria. For the front end build, it was easy to coordinate frames amongst the team with uniform designs.  Additionally, he led the team in recreating that blueprint in our application offering assistance, taking on components and conducting regular reviews of the entire application to ensure everything was uniform.
-Yuriy Kuptsov created our logo, aptly named "Eve".  It's simple and beautiful design exemplifies the nature of the applications focus on a healthy lifestyle.
-Led by our Architect, Allie Diorio, we successfully implemented a RESTful application, with the ability to store and retrieve new data. Building out the architecture within Firebase posed many challenges and required research.  However, deployment was achieved within the first day, in addition to environment setup.  The ETL process from the data files we created was completed shortly after deployment.  Authentication was challenging, but it was achieved and implemented within the application login and signup.
-Organized by our Project Manager, Cheryl Casas, the concurrent frontend and backend setup was timed well, and allowed an easier transition to building the application within the short timeframe.  With the use of Agile Methodology, daily standups were held at a minimum of once per day and a very detailed and illustrative ticketing system was implemented through Trello. Additionally, after reviewing the blueprint and considering the size of the requested order, the project was broken down into phases for realistic and successful delivery.
-Austin Pakola and Allie Diorio oversaw the git workflow.  Each pull request, review approval and merge was done as a group with either party present.  Their expertise was crucial in resolving our merge conflicts and repo transitions.
-All team members collaboratively tackled React.  We each had a hand in either writing dynamic or static coding and styling.  Consisting of 18 components with alot of overlap, our resulting API is the greatest achievement.  Our colloborative teamwork, communication and assistance to each other made this possible.  It would not have been possible without the collective effort of the team, and it is one I am very proud to have been a part of.-Cheryl Casas, Project Manager


## How does the app work?
-When a new user visits the Primal Health app, they are greeted with a landing page that includes a login for current users.  To navigate the page, we used React Router.  Clicking on the login button will allow the user to log in through either the google link or by entering their information directly.  They can then view their stored information, which is held in Firebase under their user profile.  For a new user, they can start their process by selecting their preferred plan.  Once a selection is made, a call is made to the Spoonacular API, which pulls meal choices and is stored as a state. For our state management, we used React useContext.  From there, the user is brought to their signup screen, where they can enter their information manually or using a Google login.  This will store it in our database.  If a user is already an existing customer, they will not be permitted to move forward.  That information is also saved as a state variable.  The user will then move forward through the shipping, credit card and selecting the meal options pages.  Their information is stored as a state at this point.  The meal selections are pulling from the state from the previous preferred meal plan.  Additionally, on this page special products are available through a call to the API.  The data for our suppliers and their products were created on an excel file and processed in our database through ETL.  The various states set throughout these pages appear on the "Review Order" page and once the submit button is clicked, that information is sent to the database and stored.  The user is then directed back to the landing page and can navigate the options included in the header.  The "Account" page is rendering the stored information on the user from the database.  The "Health & Nutrition" section includes a link to embedded health videos.  The "Recipies" section includes the available meals per preference that were set earlier, and upon clicking one a call is made to the Spoonacular API to return the recipe card modal.  A nested modal representing the nutritional information is available on the recipe card through another API call.  The "Suppliers" section includes all our supplier information by making a call to our database.  Upon clicking on the supplier badge, a modal pops up with a brief description of the supplier and a specialty product you can buy outside of the plan.  A link is included in this page which brings the user to some embedded live feeds and supplier intro videos.


## Required Research & Insights
-Firebase, React Routes, Figma, useContext, Spoonacular API, User Authentication, Jest, Biodynamic Standards and Practices, Styled Components,


## Non MVP Tickets?
-The nutritional portion of the site was not planned to be included in our first phase, however, we did add the visuals to build off of.


