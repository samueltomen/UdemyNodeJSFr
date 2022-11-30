const express = require("express");
const app = express();
const PORT = 3000;

// Use permet de definir quel sont les midleware que nous voulons ajouter
app.use('/public',express.static('public'))

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/movies", (req, res) => {
  res.send("Bientot des films ici même");
});

// Attention à l'ordre des Routes
app.get("/movies/add", (req, res) => {
  res.send(`Prochainement un formulaire d'ajout de film`);
});

//Permet de recuperer un id et le lier à une page
app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Film n° ${id}`);
});

app.get("/", (req, res) => {
//   res.send("Hello world !");
  res.render('index')
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
