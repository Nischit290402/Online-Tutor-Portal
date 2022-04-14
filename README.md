# Online Tutor Portal
#### This is Course project for CS-258 , Group 2
"Online Tutor Portal" is a website, accessible to anyone with the internet. It provides an all in one solution to education. Tutors can register and teach; parents can search for suitable tutors for each course and enrol their children. The students can then attend classes, watch theory videos and discuss doubts on the forum.<br>
The project contains multiple features -
1. Course and Tutor Search
2. Course enrolment
3. Access Course Material
4. Attend Classes
5. Chat with anyone on the platform

For more information of Online-Tutor-Portal you can refer to following documents - <br>
Link for SRS: [SRS Document](/docs/Software_Requirements_Specification.pdf)  
Link for Design Document: [Design Document](/docs/Software_Design_Document.pdf)

This project is developed By Group 2:<br>
1. Bhore Parth Shirish (200001015)<br>
3. Mir Razee Mohideen (200001045)<br>
2. Nischit Hosamani (200001054)<br>
4. Nishchay Shroff (200001055)<hr>
      
### MANUAL  

The detailed Instruction manual can be found [here](/docs/Instruction_Manual.pdf).
<br><br>

# Steps To Install 

## Installing Requirements  
    NodeJS >= 16.13
    MongoDB >= 5.0
    NPM >=8.0

 <br ><br ><br > 

## STEP 1  (CLONING AND SETTING ENVIRONMENT VARIABLES)
    1. Clone this project on your local system.
    
    2. Create a .env file (in /server) similar to .env.example file and populate variables in it.
  
<br ><br ><br >
  
## STEP 2 ( CONNECTING TO MONGODB DATABASE)
    Simply input the value of CONNECTION-STRING as your MongoDB URI.
    The system will autmatically connect to the provided database and create all necessary tables and attributes.
      
    Note the above step is necessary to ensure database works on your system 
<br ><br ><br >

## STEP 3  ( STARTING NODE SERVER )  
### WINDOWS -- EVERYTHING IS AUTOMATED  

Both the Client and the Server needs to be running simultaneously for the portal to work properly.
<br>
<br>
To run react-client , run the following commands;
```
cd client/
npm install
npm start
```
To run Node server, run the following commands;
```
cd server/
npm install
node app.js
```

### Testing  

    Manual Testing was done on the product, by both developers and users.

Details of the Test cases and test reports are provided in the [this](/docs/testing/) folder.

----
      
## Contributions
Everyone is welcome to contribute code to Online-Tutor-Portal. If you want to contribute then follow these steps:
1. Preferred and easiest way is to fork this repository.
2. Follow the steps given in Steps To Install to clone from forked repo and set up the project.
3. Make changes to the project.
4. Always remember to pull before you commit.
5. Commit final changes to forked repository.
6. Create a pull request.
7. A collaborator will review the Pull Request and either ask you to make any refinements needed or merge it and change them ourselves.