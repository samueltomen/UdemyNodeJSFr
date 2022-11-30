const express = require("express");
const app = express();
const PORT = 3000;

// Use permet de definir quel sont les midleware que nous voulons ajouter
app.use("/public", express.static("public"));
app.set("views", "./views");
app.set("view engine", "ejs");

// la method res render permet d'afficher du contenu .ejs à l'écran
app.get("/movies", (req, res) => {
  //   res.send("Bientot des films ici même");
  res.render("movies");
});

// app.get('/movies-details', (req,res)=>{
//     res.render('movies-details')

// })

// Attention à l'ordre des Routes
// La method send permet d'envoyer ce qui est contenue à l'interieur des () sur la page web designé
app.get("/movies/add", (req, res) => {
  res.render('add-movies');
});

//Permet de recuperer un id et le lier à une page
app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  res.send('movies-details');
});

app.get("/", (req, res) => {
  //   res.send("Hello world !");
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
