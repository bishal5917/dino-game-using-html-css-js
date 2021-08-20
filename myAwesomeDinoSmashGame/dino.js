// console.log("lets try making some game")

//initializing our score variable
let Yscore = 0

//initializing our time count variables
let timecount = 0

// handling key pressed in javascript
document.onkeydown = function (key) {
    let space = key.keyCode
    // console.log(space)
    let cactus = document.getElementById('cimg')
    if (space == 13) {
        function countdown() {
            timecount += 1
            let showcount = document.getElementById('timecount')
            // let seconds=mydate.getSeconds()
            showcount.innerHTML = `Time Count : ${timecount}`
            cactus.style.animation = "cacmove 3s linear infinite"
        }
        //updating the timecount every second
        setInterval(() => {
            countdown()
        }, 1000);

        setTimeout(() => {
            alert(`Game Over, Your Score was ${Yscore}`)
            window.location.reload()
        }, 100000);

    }
    if (space == 32) {
        // console.log("jump command given")
        let jump = document.getElementById("dimg")
        jump.style.animation = "jumpdino 0.1s linear"
        setTimeout(() => {
            jump.style.animation = "none"
        }, 800);

        //getting dinosaur offset values
        let doffsetleft = jump.offsetLeft
        // console.log(doffsetleft)
        let doffsettop = jump.offsetTop
        // console.log(doffsettop)

        //getting cactus offset values
        let coffsetleft = cactus.offsetLeft
        // console.log(coffsetleft)
        let coffsettop = cactus.offsetTop
        // console.log(coffsettop)

        diffa = Math.abs(doffsetleft - coffsetleft)
        // diffb=Math.abs()

        if (diffa < 100) {
            Yscore += 5
            // cactus.style.animation-duration = "cactus.style.animation-duration+1"
            let yourscore = document.getElementById("score")
            yourscore.innerHTML = `Score : ${Yscore}`
            console.log("scored")
            console.log(Yscore)
        }
    }

}


