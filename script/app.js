const btns = document.querySelectorAll(".btn")
const count = document.querySelector(".count")

let sum = 0 

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList
        if(styles.contains("increase")){
            sum++
        } else   if(styles.contains("decrease")){
            sum--
        } else {
            sum = 0
        }
        if(sum < 0){
            count.style.color = 'red'
        }
        if(sum === 0){
            count.style.color = 'black'
        }
        if(sum > 0){
            count.style.color = 'green'
        }
        count.textContent = sum
    })

})


