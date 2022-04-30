# Primal-Health: "Reconnect With Your Roots!"

## Contributers:
- Architect: Allie Diorio, https://github.com/alliediorio
- UI Manager: Andy Nguyen, https://github.com/andynguyenh
- Austin Pakola: https://github.com/Pak-Attack
- Project Manager:  Cheryl Casas, https://github.com/Cherylcc227
- Yuriy Kuptsov: https://github.com/MSVyk

## Introduction
This project was a 1 week sprint in which our team attempted to complete a MVP for Rachel, the COO of Primal Health.  Primal Health's request was an E-commerce site, focusing on biodynamically produced meal plan delivery subsciptions with an additional Nutrition and Health education resource.  Due to the short time constraints, our teams focus was on the profit revenue streaming component of the application, the food delivery aspect and its corresponding user story.

## Application Purpose
-The application allows users to access convienient and delicious meal kits through home delivery. The kits come complete with all you would need, gauranteeing the ingredients are organic, holistic high quality products sourced from vendors using biodynamic practices. Additionally, the application also has an educational aspect, providing users with access to inhouse nutritionist.
-Primal Health was born out of a passionate desire to expose and engage local communities to a healthy lifestlye and community with local purveyors and health professionals.

## Tech Stack
-JavaScript, React, Node, Firebase, Webpack, CSS, Styled Components, Axios, Babel, Express, Spoonacular API, React Router, Logo Design (Eve), Trello

![0AF95113-2D53-4895-A61C-A33D1D3EC5A1_4_5005_c](https://user-images.githubusercontent.com/84425240/160262500-1bb32766-ba1f-405e-93b0-3b7238f384b4.jpeg)![517DD816-C2E0-477F-91E0-4093B07884C6_4_5005_c](https://user-images.githubusercontent.com/84425240/160262341-cc31b28d-8fbe-42d1-8e13-965c8a5bc41a.jpeg)![158F7AA9-36F9-4C14-8016-BD981E726D3F_4_5005_c](https://user-images.githubusercontent.com/84425240/160262356-c7f8d47e-a4e5-44de-9f08-a8049905434d.jpeg)![95583001-0CCC-4F8F-B06A-4555D02FA25B_4_5005_c](https://user-images.githubusercontent.com/84425240/160262359-812a364e-1530-4f36-bede-22102fc8c628.jpeg)![F25C4CED-2A46-404D-B7E4-2B69061B165A_4_5005_c](https://user-images.githubusercontent.com/84425240/160262366-ded79f23-16f4-42d7-9db2-0788a8af04fc.jpeg)![0EBA9878-9C20-4AAF-B498-EADEC186CB8E_4_5005_c](https://user-images.githubusercontent.com/84425240/160262369-057dc8fa-94a3-4f54-8948-d573d89fd6dd.jpeg)![4B345CC4-392E-4DBF-B013-4AAA0FDCAE4D_4_5005_c](https://user-images.githubusercontent.com/84425240/160262391-3d23d67f-572b-4fea-956f-86aea021ef20.jpeg)![398DF3EA-1757-42A3-B065-BEA1D6171D93_4_5005_c](https://user-images.githubusercontent.com/84425240/160262502-03773361-d21b-433c-87ef-9275d160ec27.jpeg)![3C99FF49-7A7B-41E9-AFA2-09876B09C127_4_5005_c](https://user-images.githubusercontent.com/84425240/160262507-3fa38f83-5d49-49c7-bb9d-a7c85ea2d103.jpeg)![EAC051D8-3A8F-4D73-9CCB-88A801AF0564_4_5005_c](https://user-images.githubusercontent.com/84425240/160262511-3b8730d4-d904-470e-866a-f0c2079ab064.jpeg)![B7E53939-DF8E-4690-A2CB-E761AA33F07E_4_5005_c](https://user-images.githubusercontent.com/84425240/160262513-51aeffb2-e788-4b8d-88c6-51ae2f637e3c.jpeg)![0D44EF41-758F-4B5A-B866-6F3769838492_4_5005_c](https://user-images.githubusercontent.com/84425240/160262514-3f867fdf-aca6-402b-ad89-e57686dd58fa.jpeg)


## GIF Demos Of User Story Per Frame, Figma Blueprint, Firebase Schema and Trello Workspace
### Demo of an existing customer login into the site.  Since the cached google login is not saved on the site, a popup error appears stating that user is not recognized in the application's database.  However, the manually saved user information is recognized and retrieved from the database, dynamically rendering the user's account information.
![Existing User Signin](http://g.recordit.co/9kUZulACJH.gif)

### Demo of a new customer signup.  Throughout each frame, the user's personal information and preferences are saved and stored in the database once the order is completed.  In the gif below, a new user starts by adding their meal preference, their portion size and number of meals per week.  The meal preference displayed is based on the "Whole 30" diet. From there, the user is taken to the signup screen
![Preferences to signup](http://g.recordit.co/e2InHeKj7y.gif)

### The gif below shows an attempt for a current user to sign in, resulting in a popup error recognizing the user already exists. A new user's information is entered and stored in the database, allowing them to move forward to the shipping information page.
![Signup to shipping](http://g.recordit.co/RB9c3x9RMP.gif)

### The gif below is the entry of shipping information for the new user.  Notice, the preferences that were selected earlier are stored as a state using React useContext, and is rendered on the right portion of this screen.  The next frame is collecting the user's payment information.
![Shipping to Credit Card](http://g.recordit.co/eDQKIGEHJa.gif)

### The gif below collects the user's credit card information and then leads to the "Select Your Meals" page.
![Credit Card to Select Meals](http://g.recordit.co/yr1sGnqlFj.gif)

### The gif below enables the user to select their meals (up to their number of meals previously selected), and any additional specialty items they may want.  The meals and items are stored as React state and rendered to the right of the screen.  Additionally, the price updates per additional specialty item. The user is now taken to the "Review Order" page.
![Meals to Review your order](http://g.recordit.co/EHHofV1o4N.gif)

### The gif below dynamically renders the states previously stored in the previous frames.  Upon clicking the "Submit" button, the information is posted to the database.  The user is now routed to the shipping progress bar, indicating the order has been placed.
![Review to Confirm](http://g.recordit.co/ZEUyfuglV0.gif)

### The gif below routes the user to the shipping progress bar, indicating the order has been placed. Notice that within this frames, the progress bar on the top portion renders green as the user progresses.
![Confirm to shipping bar](http://g.recordit.co/AKX9JoUCu3.gif)

### The gif below takes the user back to the "Home" page once the transaction and shipping have been confirmed.
![Shipping bar to home page](http://g.recordit.co/9kgA6NAymJ.gif)

### The gif below shows the newly created user information dynamically rendering under their account information.
![Home page to User](http://g.recordit.co/gGvxtr0Qko.gif)

### The gif below features the "Nutrition & Health" section, which shows nutritionist information and embedded exercise videos * These videos are representative of the health videos that would be displayed to promote healthy lifestyle for this demonstrative project, please view the Fairuse Disclaimer below*   
![User to Health&Nutrition&Video](http://g.recordit.co/xywt696xjP.gif)

### The gif below features the "Recipe" section which shows each meal as per the user's preferred meal plan.  Upon clicking each meal's recipe card and nutritional information per serving is available through a modal popup. The modal information is retrieved from a post request to the Spoonacular API.
![Nutritional to Recipe](http://g.recordit.co/tgtWliDiwq.gif)

### The gif below features the "Supplier" section which shows suppliers of the products used in the meal kits.  Supplier information and their specialized item is available through a modal popup.  The modal information is retrieved from a get request from the database. The page also includes a link that features live feed and informational videos * These videos are representative of the supplier's products used in this demonstrative project, please view the Fairuse Disclaimer below*   
![Recipe to Suppliers](http://g.recordit.co/XvGyN9wgo1.gif)

### Figma Blueprint
![499D46E5-60F3-43D6-A74C-7E0D7E507050](https://user-images.githubusercontent.com/84425240/160262848-97d319f5-9fbd-49c8-8417-8561ee93520a.jpeg)

### Firebase Schema
![DFF8F834-B0F6-4ADE-84D4-99673429ED94](https://user-images.githubusercontent.com/84425240/160262853-1d4ae21e-6672-4dad-9072-c094772a304e.jpeg)

### Trello Workspace
![Trello](http://g.recordit.co/1g4eXkoC9c.gif)

## Technical Challenges (Anticipated and Unexpected)
-Within a short time frame, we were all individually committed to learning new methods and techniques affecting the entire project.  Firebase, figma, styled components, react router were programs or methods we agreed to use.  Each required research and were implemented successfully over the course of 6 days.  Additionally, the size of the project was very large.  The client asked for multiple features including a sub app within the main app.  We scaled the project into phases so we could meet realistic expectations within the allotted time.
## Technical Achievements
-Led by our UI Team, Andy Nguyen and Yuriy Kuptsov, we fully utilized figma to create the blueprint of our application which consists of 18 complex frames.  Using it as a base, we achieved a beautiful design for the application that met the client's criteria. For the front end build, it was easy to coordinate frames amongst the team with uniform designs. Additionally, Andy led the team in recreating that blueprint in our application offering assistance, taking on components and conducting regular reviews of the entire application to ensure everything was uniform.
-Yuriy created our logo, aptly named "Eve". Additionaly, Yuriy have contributed in design of pages and created a global progress bar, which indicates the process of ordering meal. It's simple and beautiful design exemplifies the nature of the applications focus on a healthy lifestyle.
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

## INSTALLATION INSTRUCTIONS:

- Exectue 'npm install' to install all of the above dependencies and development dependencies for this repo.
- Execute 'npm run build' and 'npm run watch' to allow for transpilation with updating on each save.
- Execute 'npm run start' to the Express server connection to the app.


### *DISCLAIMER & FAIRUSE STATEMENT:*
*This application may contain copyrighted material, the use of which may not have been specifically authorized by the copyright owner.  This material is available in relation to a school related project in an effort to demonstrate the Software Engineering technical and practical skills in the creation of an E-Commerce website.  Visuals and videos have been used that were not easily duplicated in the creation of the project.*

*This should constitute a "fair use" of any such copyrighted material (referenced and provided for in section 107 of the US Copyright Law)*

*If you wish to use any copyrighted material from this application for purpose of your own that go beyond "fair use", you must obtain expressed permission from the copyright owner.*

