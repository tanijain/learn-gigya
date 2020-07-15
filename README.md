# learn-gigya
Automated test environment for gigya flows

Steps to run the application on your local machine.

1. Install the node into your local machine from this link : https://nodejs.org/en/download/

2. Clone the Local_development branch to any folder.

3. Open CMD Terminal.

4. Navigate to the directory where repository is cloned using "cd" command.

5. In CMD Terminal type following commands:
    a. npm install
    b. npm start
   
6. Open your browser of choice and type localhost:8080.

7. You are greeted by a index page with links to Application 1, Application 2 and OIDC Flow.

8. By default it is using the travelsite API Key.

9. To make the website point to your development site API Key follow the steps below.
    a. Open the source code 
    b. Navigate to application1/index.html and update your site key instead of the default one.
    c. Similarly you can proceed with Application 2 as well.
 
10. Application 2 is the exact copy of the application 1, just created to test out the SSO flow. 
