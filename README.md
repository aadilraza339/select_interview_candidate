# select_interview_candidate
The task for Backend dev:

Use expressjs with mongodb or mysql for this. You need design database tables yourself based on the question.

We have two entities “candidate” and “test_score”
candidate has properties name, email address
Every candidate has to give 3 tests like “first_round”, “second_round” , “third_round” and scoring for every test is done out of 10. 

Now using expressjs, only need to create api to do the following
Insert a candidate into database
Assign score for a candidate based on the test
Api to get highest scoring candidate and average scores per round for all candidates


## HOW TO **RUN** 🏃‍ PROJECT <br>
``git clone https://github.com/aadilraza339/selection_interview_candidate.git``<br>
``cd selection_interview_candidate``<br>
``npm install``<br>
``config your .env`` <br>
import dump.sql in your **MySql DB** <br>
``nodemon index.js``
<br>

### I used these things to make this project. <br>
``Express``  ``knex`` ``mysql``
<br>
These are the endpoints Below you Can run them using postman, here is the link for download <a href="https://www.postman.com/downloads/">click here</a>
 <br>
 ```javascript
 //Insert a candidate into database
router.post('/insertCan', userControllers.inser_candidat);
payload = {
    "username":"node"  , 
    "email":"node@gmail.com"
}
// Assign score for a candidate based on the test
router.post('/insertScore', userControllers.inser_score);
payload = {
    "second_round": 7,
    "third_round" : 8,
    "user_id_score":3
}
// Api to get highest scoring candidate and average scores per round for all candidates
router.get('/Score', userControllers.get_score);
```  
<br>

### HAPPY CODE LIFE

