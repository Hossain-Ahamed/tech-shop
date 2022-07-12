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

    // host : 'localhost',
    // user : 'root',
    // password : '',
    // database : 'tech-shop'
    host : 'bjn9yajxknszeuvhgczi-mysql.services.clever-cloud.com',
    user : 'uve5k169sb891uxy',
    password : 'SzDHDl2UNNEWJwgOFQxe',
    database : 'bjn9yajxknszeuvhgczi'
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
  // res.clearCookie("Admin");
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
  var cartsessionChecker = (req, res, next) => {
    console.log(req.session.user && req.cookies.user_sid);
    if (req.session.user && req.cookies.user_sid) {
      next();
    } else {
      res.render('pages/SignInLogIn',{reso : "",
    reso1 : ""});
    }
 
  };

  var adminsessionChecker = (req, res, next) => {
    const check = req.cookies.Admin;
    const pass = req.body.password;
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
app.get('/cart',cartsessionChecker, function(req, res) {
  // res.sendFile(path.join(__dirname, './public/SignInLogIn.ejs'));
  res.render('pages/cart',{massage : ""});
});
app.get('/adminOrderCheck',adminsessionChecker, function(req, res) {
  // res.sendFile(path.join(__dirname, './public/SignInLogIn.ejs'));
  res.render('pages/adminOrderConfirm',{result : ""});
});

app.get('/detailView', function(req, res) {
  // res.sendFile(path.join(__dirname, './public/SignInLogIn.ejs'));
  // res.render('pages/detailView' ,{result_price : "", result_availability : ""});
  const url = req.url;
  const split_url=url.split("/");

  const phone_code =split_url[8];

  console.log(split_url[8]);
  console.log(req.url);
  db.query('SELECT * FROM pricelist WHERE phoneCode = ?',[phone_code], (err,result) =>{

    if(err){
        console.log(err);
    }
    if(result.length >0 ){
      res.render('pages/detailView',{result_price : result[0]['price'], result_availability : result[0]['availability']});
    }else{
      res.render('pages/detailView',{result_price : "", result_availability : ""});
      
    }

  })
});


app.get('/ShowCase', function(req, res) {
  res.sendFile(path.join(__dirname, './public/ShowCase.html'));
  // res.render('pages/detailView');
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
  app.get('/adminShowCase',adminsessionChecker, function(req, res) {
    res.sendFile(path.join(__dirname, './public/adminShowCase.html'));
    
  });



  app.get('/profile',function(req, res) {
  if (req.session.user && req.cookies.user_sid) {
    // res.sendFile(path.join(__dirname, './public/profile.html'));
    const email = req.cookies.Email;
    const name = req.cookies.Name;
    console.log(email);

    db.query('SELECT * FROM `Order_Item` where Email =?',[email],(err, result)=>{
      if(err){
        console.log(err);
    }
    console.log(result);
  
    res.render('pages/profile',{result : result, email : email, name :name});
      
    })

    
    
  } else {
    res.redirect("/login");
  }

  
});

app.post('/cancel', function (req,res){
  const orderID = req.body.orderID;
  const Email = req.body.email;
  const phone_name = req.body.phone_name;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const status = req.body.status;
  const email = req.cookies.Email;
    const name = req.cookies.Name;
    console.log(email);

  db.query('DELETE FROM `Order_Item` WHERE `Order_Item`.`orderId` =?' ,[orderID] , (err , result)=>{
    if(err){
      console.log(err);
    }
  })
  db.query('SELECT * FROM `Order_Item` where Email =?',[email],(err, result)=>{
    if(err){
      console.log(err);
  }
  console.log(result);

  res.render('pages/profile',{result : result, email : email, name :name});
    
  })

})






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
                res.cookie("Name",userName);     
                req.session.user = Email;
                res.redirect('/profile');  
            }else{
              return res.render('pages/SignInLogIn',{reso : "password didn't match", reso1 : ""});
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
            }else{
              res.redirect('/admin');
            }
       }
       else{
        const reso ="user not register";
        // res.render('pages/SignInLogIn',{reso : reso, reso1 : ""})
       res.redirect('/');
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


app.post('/priceList' , function(req,res){

    const phone_code = req.body.phone_code;
    const price = req.body.price;
    const availability = req.body.availability;
    const url = req.url;
    db.query('SELECT * FROM pricelist WHERE phoneCode = ?',[phone_code], (err,result) =>{

      if(err){
          console.log(err);
      }
      if(result.length == 0){
          db.query('INSERT INTO `pricelist` SET ? ', {phoneCode : phone_code , availability: availability, price : price}, (err,result)=>{
            if(err){
              console.log(err);
          }

          })
          res.redirect('back');
      }else{
        db.query('UPDATE `pricelist` SET `availability`= ? ,`price`= ?  WHERE phoneCode = ?' , [availability,price,phone_code],(err, result)=>{
          if(err){
            console.log(err);
        }
        })
        res.redirect('back');

      }

    })
});

app.post('/order',function (req,res){

  const email = req.cookies.Email;
  const phone_code = req.body.phone_name;
  const quantity = req.body.phone_count;
  const price = (req.body.phone_price)*quantity;
  const status = req.body.order_status;

  db.query('INSERT INTO `Order_Item` SET ?',{Email : email , Phone_code : phone_code , Quantity : quantity , Price : price, Status :status }, (err , result) =>{
    if(err){
      console.log(err);
  }
  return res.render('pages/cart',{massage : "Order Succesfully Added we will contact you letter through Email "})
  });
  // res.send("Order Succesfully Added we will contact you letter through Email");
  // res.redirect('back');
});

app.post('/adminOrderCheck', function (req,res){

  db.query('SELECT * FROM `Order_Item` order by `orderId` DESC',(err, result)=>{
    if(err){
      console.log(err);
  }
  console.log(result);

  res.render('pages/adminOrderConfirm',{result : result});
    
  })
});


app.post('/update',function (req,res){

  const orderID = req.body.orderID;
  const Email = req.body.email;
  const phone_name = req.body.phone_name;
  const quantity = req.body.quantity;
  const price = req.body.price;
  const status = req.body.status;

  db.query('UPDATE `Order_Item` SET Status= ? WHERE orderId = ?' ,[status,orderID] , (err , result)=>{
    if(err){
      console.log(err);
    }
  })
  // res.redirect(');
  // res.redirect('/adminOrderCheck')
  db.query('SELECT * FROM `Order_Item` order by `orderId` DESC',(err, result)=>{
    if(err){
      console.log(err);
  }
  console.log(result);

  res.render('pages/adminOrderConfirm',{result : result});
    
  })
  

})




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