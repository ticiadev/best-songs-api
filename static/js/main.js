//get band/song on index.ejs
/*
document.querySelector("button").addEventListener("click", getBestSong)

async function getBestSong(){
    const bandName = document.querySelector("input").value
    try{
        const res = await fetch(`https://emo-band-songs-api.herokuapp.com/api/${bandName}`)
        const data = await res.json()

        console.log(data)
        document.querySelector("h2").innerText = data.song
    }catch(error){
        console.log(error)
    }
}*/

// document.querySelector("form").addEventListener("submit", testInput)
document.addEventListener("submit", getBestSong)

function testInput(e){
    e.preventDefault()
    console.log("Input submitted")
    const bandName = document.querySelector("input").value
    console.log(bandName)
    document.querySelector("h2").innerText = bandName
}

async function getBestSong(e){
    e.preventDefault()
    const bandName = document.querySelector("input").value
    console.log(bandName)
    try{
        const res = await fetch(`http://localhost:8000/api/${bandName}`)
        const data = await res.json()

        console.log("form submitted")
        console.log(data)
        document.querySelector("h2").innerText = `${data["band"]} - ${data["song"]}`
    }catch(error){
        console.log(error)
    }
}
