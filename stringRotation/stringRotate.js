const isRotation = (a, b) => {
    str = b + b
    if (a.length === b.length && str.includes(a)) return true
    return false
}

console.log("É uma rotação: " + isRotation('abcde', 'cdeab'))