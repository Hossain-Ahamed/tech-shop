//          route with express

const express = require('express');
const path = require('path');
const mysql = require('mysql');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
var session = require("express-session");
const bodyParser = require("body-parser");
const ejs = require('ejs');



const app = express();
// const host = 127.0.0.1
const port = process.env.PORT || 5003;

//      for connect mysql database

const db = mysql.createConnection({

    host : 'localhost',
    user : 'root',
    password : '',
    database : 'tech-shop'
});

db.connect((err) =>{
    if(err){
        console.log(err);
    }else{
        console.log("database connected...")
    }
});

// sendFile will go here
// Require static assets from public folder

app.use(express.static(path.join(__dirname, 'public')));
//parse url  encoded bodies as sent by html form
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.set('view engine','ejs');

// initialize express-session to allow us track the logged-in user across sessions.
app.use(
    session({
      key: "user_sid",
      secret: "iamgreatpersonhello",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 600000*10000,
      },
    })
  );


// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  res.clearCookie("Admin");
    if (req.cookies.user_sid && !req.session.user) {
      res.clearCookie("user_sid");
      res.clearCookie("Email")
    }
    next();
  });
   

  // middleware function to check for logged-in users
  var sessionChecker = (req, res, next) => {
    console.log(req.session.user && req.cookies.user_sid);
    if (req.session.user && req.cookies.user_sid) {
      res.redirect("/profile");
    } else {
      next();
    }
 
  };
  var adminsessionChecker = (req, res, next) => {
    const check = req.cookies.Admin
    if(check === undefined){
      res.redirect('/admin');
    }else{
    console.log(check);

    db.query('SELECT * FROM admin WHERE Admin_Name =?',[check], (err,result) =>{
    
      if(err){
          console.log(err);
      }
      if(check == result[0]['Admin_Name']){
        
        
        next();
      }else{
        res.redirect('/admin');
      }

    })
  }
    
 
  };



//      to locate index.html route



app.get('/', function(req, res) {
  res.clearCookie("Admin");
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.get('/login',sessionChecker, function(req, res) {
  // res.sendFile(path.join(__dirname, './public/SignInLogIn.ejs'));
  res.render('pages/SignInLogIn',{reso : "",
  reso1 : ""});
});


// app.get('/contact', function(req, res) {
  //   res.sendFile(path.join(__dirname, './public/Contact.html'));
  // });


  app.get('/admin', function(req, res) {
    res.sendFile(path.join(__dirname, './public/adminlogin.html'));
  });


  app.get('/AdminProfile',adminsessionChecker, function(req, res) {
    res.sendFile(path.join(__dirname, './public/adminProfile.html'));
    
  });
  app.get('/AdminShowCase',adminsessionChecker, function(req, res) {
    res.sendFile(path.join(__dirname, './public/adminShowCase.html'));
    
  });



  app.get('/profile',function(req, res) {
  if (req.session.user && req.cookies.user_sid) {
    // res.sendFile(path.join(__dirname, './public/profile.html'));
    const email = req.cookies.Email;
    console.log(email);

    db.query('SELECT * FROM user WHERE Email = ?',[email], (err,result) =>{
    
      if(err){
          console.log(err);
      }

      console.log(result);

      res.render('pages/profile', {result : result[0]});


    })

    
    
  } else {
    res.redirect("/login");
  }

  
});






//                  login form added


app.post('/login' , function async(req, res){
    const userName = req.body.Username;
    const Email = (req.body.email).toLowerCase();
    const password = req.body.password;

    //db.query('SELECT * FROM user WHERE email = ?',[Email], async(err,result) =>{
    db.query('SELECT Password FROM user WHERE User_Name =? and Email = ?',[userName,Email], async(err,result) =>{
    
        if(err){
            console.log(err);
        }
        console.log(result);
    
       // using hash password compare

       if(result.length > 0){
        const test = await bcrypt.compare(password, result[0]['Password']);
            console.log(test);
            if(test){
                console.log(req.body);
                res.cookie("Email", Email);       
                req.session.user = Email;
                res.redirect('/profile');  
            }
       }
       else{
        const reso ="user not register";
        // res.render('pages/SignInLogIn',{reso : reso, reso1 : ""})
        return res.render('pages/SignInLogIn',{reso : reso, reso1 : ""});
       }

       
    });
  
});
app.post('/adminlogin' , function async(req, res){
    const userName = req.body.UserName;
    const Email = (req.body.Email).toLowerCase();
    const password = req.body.password;

    //db.query('SELECT * FROM user WHERE email = ?',[Email], async(err,result) =>{
    db.query('SELECT Admin_Password FROM admin WHERE Admin_Name =? and Admin_Email = ?',[userName,Email], async(err,result) =>{
    
        if(err){
            console.log(err);
        }
        console.log(result);
    
       // using hash password compare

       if(result.length > 0){
        // const test = await bcrypt.compare(password, result[0]['Password']);
        //     console.log(test);
            if(result[0]['Admin_Password'] == password){
                console.log(req.body);
                res.cookie("Admin",userName);
                res.redirect('/adminProfile');   
            }
       }
       else{
        const reso ="user not register";
        // res.render('pages/SignInLogIn',{reso : reso, reso1 : ""})
        return res.render('pages/SignInLogIn',{reso : reso, reso1 : ""});
       }

       
    });
  
});


//      check register form



app.post('/register' , function (req, res){

    const user_name = req.body.Username;
    const email = (req.body.email).toLowerCase();
    const password = req.body.password;
    const c_password = req.body.c_password;
    


    db.query('SELECT * FROM `user` WHERE Email = ?',[email], async(err,result) =>{

        if(err){
            console.log(err);
        }

        if(result.length>0){
          return res.render('pages/SignInLogIn',{reso1 : "Already used E-mail" , reso : ""});
            
        }
        else if(password !== c_password){

          return res.render('pages/SignInLogIn',{reso1 : "Password Not Same", reso : ""});
            
        }
        else if(password.length < 8){

          res.render('pages/SignInLogIn',{reso1 : "Password length must be more than 8", reso : ""});

        }else{

//          hash password

        let hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword);

        db.query('INSERT INTO user SET ?',{User_Name: user_name, Email: email, Password: hashPassword}, (err,result) =>{

            if(err){
                console.log(err);
            }
            console.log(result);
        });

        console.log(req.body);
        req.session.user = email;
        res.cookie("Email", email);
        res.redirect('/profile');
    }
    } )

    
});

app.post('/signout', function (req, res) {
    
      res.clearCookie("user_sid");
      res.clearCookie("Email");
      res.redirect('/');
    
  });
app.post('/adminSignOut', function (req, res) {
      res.clearCookie("Admin");
      res.redirect('/');
    
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);