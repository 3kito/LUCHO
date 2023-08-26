

function FizzBuzz() {

    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(i + ' FizzBuzz')
        }
        else if(i % 3 === 0 ){
            console.log(i + ' fizz')
        }else if(i % 5 === 0){
            console.log(i + ' buzz')
        }else{
            console.log(i)
        }
         
    }
}

FizzBuzz()


 

window.addEventListener('scroll', function(){
    console.log(numero)
})



let numero = 5 + 6


const boton = document.querySelector('.btn-menu')

boton.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
});



 