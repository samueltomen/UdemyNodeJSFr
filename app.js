const express = require("express");
const app = express();
const PORT = 3000;
const bodyParser = require("body-parser");
// Use permet de definir quel sont les midleware que nous voulons ajouter
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", "./views");
app.set("view engine", "ejs");

// la method res render permet d'afficher du contenu .ejs à l'écran
app.get("/movies", (req, res) => {
  const title = "Film francais des 30 dernieres années ";
  const frenchMovies = [
    { title: `Le fabuleux destin d'amelie Poulain`, year: 2001 },
    { title: `Le fabuleux destin d'amelie Poulain`, year: 2101 },
    { title: `Le fabuleux destin d'amelie Poulain`, year: 2001 },
    { title: `Le fabuleux destin d'amelie La pute`, year: 2031 },
    { title: `Le fabuleux destin d'amelie Poulain`, year: 2020 },
    { title: `Le fabuleux destin d'amelie Poulain`, year: 2101 },
  ];
  res.render("movies", { movies: frenchMovies, title: title });
});

app.post("/movies", (req, res) => {
  console.log(req.body);
});

// app.get('/movies-details', (req,res)=>{
//     res.render('movies-details')

// })

// Attention à l'ordre des Routes
// La method send permet d'envoyer ce qui est contenue à l'interieur des () sur la page web designé
app.get("/movies/add", (req, res) => {
  res.render("add-movies");
});

//Permet de recuperer un id et le lier à une page
app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  res.render("movies-details", { movieId: id });
});

app.get("/", (req, res) => {
  //   res.send("Hello world !");
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
