//buttons and counter text
console.log('Hello');
let counting = document.querySelector('#counter')
const btn = document.querySelectorAll('.btn')

//initialize the count variable 
let count = 0

btn.forEach((btn) => {
btn.addEventListener('click', (e) =>{
    const styles = e.currentTarget.classList

    if(styles.contains('increase')){
        count++;
    }else if (styles.contains('decrease')){
        count--;
    } else {
        count = 0;
    }

    if(count > 0){
        counting.style.color = 'green'
    }
    if(count < 0){
        counting.style.color = 'red'
    }
    counting.textContent = count
})
})
