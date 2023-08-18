// const data = [1,2, "hello", [4,5,6], false, undefined, [9,1,1], ['1', '2' , 10]]
// const onlyArr = []
// data.forEach((arr)=>{
//   if(Array.isArray(arr)){
//   onlyArr.push(arr)
//   }
// })
// let sum=0
// let sum2=0
// onlyArr.forEach((arr)=>{
//   for (let i=0;i<3;i++)if(typeof arr[i]==='number')sum+=arr[i]
// })
// for (let i=0;i<data.length;i++){
//   if(Array.isArray(data[i])){
//   for (let j=0;j<data[i].length;j++){
//     if(typeof data[i][j]=='number'){
//       sum2+=data[i][j]
//     }
//   }
// }
// }
// console.log(sum,sum2)
// const movies = [
//   {
//     name: "Titanic",
//     year: 1998,
//     rate: 3,
//   },
//   {
//     name: "Avatar",
//     year: 2022,
//     rate: 9,
//   },
//   {
//     name: "Baron 2",
//     year: 2023,
//     rate: 5,
//   },
//   {
//     name: "Sipider Man",
//     year: 2021,
//     rate: 4,
//   },
//   {
//     name: "Jon Uik",
//     year: 2014,
//     rate: 4,
//   },
//   {
//     name: "Who am I ?",
//     year: 2018,
//     rate: 8,
//   },
//   {
//     name: "Counter",
//     year: 2020,
//     rate: 6,
//   },
//   {
//     name: "Ozodlik",
//     year: 2022,
//     rate: 10,
//   },
// ];

// let newMovies=[]

// movies.forEach((movie)=>{
//   if(movie.rate>5){
//     newMovies.push(movie)
//   }
// })
// console.log(newMovies)

// const filter=movies.filter((movie)=>{
//   return movie.rate>=4&&movie.rate<=8
// })
// console.log(filter)

// let result = [...movies].sort((a,b)=>{
//   return a.rate-b.rate
// })
// console.log(result)
// let timer = document.getElementById('timer').textContent

// setInterval(() => {

// }, 1000);
// console.log(timer)

// let counter = 0
// const interval = setInterval(() => {
//     counter++

//     const title = document.querySelector("#title")
//     title.textContent = counter
//     if (counter == 5) {
//         clearInterval(interval)
//     }
// } , 1000)

///===>MODAL<====///
const showModalBtn = document.querySelector('#show-modal-btn')
const closeModalBtn = document.querySelector('#close-btn')

const  modal=document.getElementById('modal');
const overlay =document.getElementById('overlay') 

function showFunction() {
  modal.classList.remove("modal-hidden");
  overlay.classList.remove('overlay-hidden')
}
function closeFunction() {
  modal.classList.add("modal-hidden");
  overlay.classList.add('overlay-hidden')
} 

