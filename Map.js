const input = [
    '3',
    '1 tanaka 49',
    '1 suzuki 50',
    '2 tanaka'
]

let hash = {}

const Q = Number(input.shift())

for(let i = 0; i < input.length; i++) {
    let temp = input[i].split(' ')
    if(temp[0] === "1") {
        hash = {...hash, [temp[1]]: temp[2]}
        continue
    }
    if(temp[0] === "2") {
        console.log(hash[[temp[1]]])
        continue
    }
}