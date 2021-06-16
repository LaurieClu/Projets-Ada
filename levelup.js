<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1> Recette Pates Carbonara </h1>
<br>
<p>Nombre d'ingredients requis :</p>
<p id="recette"></p>
<script>
let Ingredients = document.getElementById("recette");
var recette = ['Pates', 'Creme', 'Oeuf', 'Sel', 'Poivre', 'Lardon', 'Oignon'];
Ingredients.innerHTML = recette.length;
console.log(recette.length);
</script>
</body>
</html>