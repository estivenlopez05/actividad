let priceOfArticle = prompt("ingrese el valor de articulo")

let priceDiscount = parseFloat(priceOfArticle) * 0.2

priceOfArticle = priceOfArticle - priceDiscount

let priceWithIva = priceOfArticle * 1.15

alert("el precio total es: "+ priceWithIva)