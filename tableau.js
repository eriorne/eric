//Exercice1:trier le tableau par ordre croissant

const tab = [2, 5, 9, 7, 10, 15, 30]
tab.sort(
    (a, b) => a - b
)
console.log(tab)


//Exercice2:trier les paires et les impaires
tab.sort(
    (a, b) => a % 2 - b % 2
)
console.log(tab)
