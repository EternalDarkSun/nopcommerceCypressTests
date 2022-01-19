## Preconditions and how to run the project: 

1. Install Node.js v15.11.0 or above 
2. Install Cypress v9.2.1 or above 
3. Clone this project to your machine: 
```bash
git clone https://github.com/EternalDarkSun/nopcommerceCypressTests
```
4. cd into the cloned repo 
```bash
cd nopcommerceCypressTests
```
5. install the node_modules
```bash
npm install
```
6. Run the following command to start the tests: 
```bash
npm run cy:run  
```


## Reports and data manipulation: 

When you run the tests in the terminal, you will have default results diplayed in the output.

You can find screen video recordings of your previous test run in in the: cypress/videos. 

If any errors occur, or any test fails, you can see screenshots in the: cypress/screenshots. 

In case you need to change or update some test data, you can do it in the: cypress/loginDetails.json
