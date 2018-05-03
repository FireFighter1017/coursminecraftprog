var temp

function calculerPrix(item, prix, p1, p2, p3) {
    var sep = ":"
    item = p1 + sep + p2 + sep + p3 + sep + item 
    return item + sep + prix
}

resultat = calculerPrix("pomme")
console.log(resultat)
console.log(Date.now())


