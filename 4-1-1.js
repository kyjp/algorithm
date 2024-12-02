const kuku = () => {
    for(let i = 1; i <= 9; i++) {
        console.log(`${i}の段`)
        for(let j = 1; j <= 9; j++) {
            console.log(i * j)
        }
    }
}
kuku()