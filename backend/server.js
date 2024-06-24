const express = require("express");
require('dotenv').config();
const cors = require("cors");
require("./config/db");
const session = require("express-session");
const passport = require("passport");
const GoogleUser = require("./models/googleSchema");
const OAuth2Strtegy = require("passport-google-oauth2").Strategy;


// connection()

const app = express();

app.use(cors({
    origin: process.env.ORIGIN,
    methods: [ "get", "put", "delete","update"],
    credentials: true
}))


// set-up session
app.use(session({
    secret: 'keyboard_cat1234567890',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  }));
// set-up Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new OAuth2Strtegy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL:  process.env.CALLBACKURL,
        scope: ["profile", "email "]
    },
    async (request, accessToken, refreshToken, profile, done) => {
        try {
            let user = await GoogleUser.findOne({googleId: profile.id})
            if(!user){
                user = new GoogleUser({
                    googleId: profile.id,
                    displayName: profile.displayName,
                    email: profile.email[0].value,
                    image: profile.photos[0].value
                });
                await user.save()
            }
            return done(null, user)
        } catch (error) {
            return done(error, null)
        }

      }

)
)

passport.serializeUser((user,done) => {
    done(null, user)
})

passport.deserializeUser((user,done) => {
    done(null, user)
})

// initial google oauth login
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"]}));
app.get("/auth/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/dashbord",
    failureRedirect: "http://localhost:3000/login"
}))


app.get("/login/sucess", async(req, res) => {
    if (req.user) {
        res.status(200).json({message: "User LoggedIn", user: req.user})
    } else {
        res.status(401).json({message: "User not Autorized"})
    }
})






app.listen(process.env.PORT, () => {
    console.log(`Server running on Port ${process.env.PORT}`)
})