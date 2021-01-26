function camelCase(word){
    words = word.split(RegExp('(?=[A-Z])'))
    words.map(line=>console.log(line))
}

camelCase('codigoDaMadrugadaAsOitoESeteBicho')