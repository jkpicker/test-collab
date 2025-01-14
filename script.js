const burgerBtn = document.querySelector('.burger__menu'),
burgerModalMenu = document.querySelector('.modal__burger_menu')

burgerBtn.addEventListener('click', () => {
  burgerModalMenu.classList.toggle('active')
	burgerBtn.classList.toggle('rotate')
})

// function logEx(fn){
// 	return function (...arg){
// 		console.log('start')
//     const result = fn(...arg)
// 		console.log('end')
// 		return result
//   }
// }


// function counter(){
// 	let count = 0
//   return function(){
//     count++
//     return count
//   }
// }

// const counterFn = counter()
// console.log(counterFn())
// console.log(counterFn())
// console.log(counterFn())
// console.log(counterFn())