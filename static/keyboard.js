
var Q_KEY = document.getElementById('Q_KEY')
var W_KEY = document.getElementById('W_KEY')
var E_KEY = document.getElementById('E_KEY')
var R_KEY = document.getElementById('R_KEY')
var question = document.getElementById('question').value
var T_KEY = document.getElementById('T_KEY')
var tracker = 0 // To track keyboard input
var Y_KEY = document.getElementById('Y_KEY')
var answer = document.getElementById('answer')
var lenAnswer = document.getElementById('lenAnswer').value
var printConsole = document.getElementById('test')




function keyboard() {
        
        Q_KEY.addEventListener("click", function() {
            if (tracker < lenAnswer) {
                answer.value += "Q"
                tracker++
            }
           
        })
        W_KEY.addEventListener("click", function() {
            if (tracker < lenAnswer) {
                answer.value += "W"
                tracker++
            }

        })
        E_KEY.addEventListener("click", function() {
            if (tracker < lenAnswer) {
                answer.value += "E"
                tracker++
            }
        })
        R_KEY.addEventListener("click", function() {
             if (tracker < lenAnswer) {
                answer.value += "R"
                tracker++
            }
        })
        T_KEY.addEventListener("click", function() {
             if (tracker < lenAnswer) {
                answer.value += "T"
                tracker++
            }
        })
        Y_KEY.addEventListener("click", function() {
             if (tracker < lenAnswer) {
                answer.value += "Y"
                tracker++
            }
        }) 
}

function game() {
    var submit = document.getElementById('submit')
    var guess = 7
    let choosenWord = []
    submit.addEventListener("click", function () {
        if (question == answer.value) {
             console.log("You Win")
        }
        else {
            let i = 0
            var array = Array.from(answer.value)
            while (i < lenAnswer) {
                choosenWord += array[i]
                console.log(choosenWord)
                i++
            }
            


        }
    })
    

}


 
  




printConsole.addEventListener("click", function() {
    console.log(lenAnswer)
    console.log("Tracker keyboard: ", tracker)
    console.log(question)
})

keyboard()
game()

