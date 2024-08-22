import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var data;

app.get("/", (req, res) =>{
    data = {
        title: "Home"
    }
    res.render("index.ejs", data);
});

app.get("/about", (req, res) =>{
    data = {
        title: "About Us"
    }
    res.render("about.ejs", data);
});


app.get("/locations", (req, res) =>{
    data = {
        title: "Locations"
    }
    res.render("locations.ejs", data);
});


app.get("/services", (req, res) =>{
    data = {
        title: "Pool Services"
    }
    res.render("services.ejs", data);
});

app.get("/contact", (req, res) =>{
    data = {
        title: "Contact Us"
    }
    res.render("contact.ejs", data);
});

app.get("/blog", (req, res) =>{
    data = {
        title: "Blog"
    }
    res.render("blog.ejs", data);
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}\n`)
})
