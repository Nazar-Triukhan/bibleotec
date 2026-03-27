import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart');


// const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [{
//     label: 'Temperature',
//     data: [12, 14, 16, 18, 20, 22, 24],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };

// const config = {
//   type: 'line',
//   data: data,
//   options: {}
// };


// const labels = Utils.months({count: 7});

// hamowork
// const chartData = {
//   labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
//   datasets: [
//     {
//       label: "Продажі за останній місяць",
//       data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
//       backgroundColor: "#2196f3",
//       borderColor: "#2196f3",
//       borderWidth: 1,
//     },
//   ],
// };
// const salesChart = new Chart();


// const config = {
//   type: 'line',
//   data: chartData,
// };
// const myChart = new Chart(
//   document.getElementById('myChart'),
//   config
// );



import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
    <div class="modal">
        <p class="p">
            дякую за підписку
        </p>
    </div>
`)

instance.show()

const btnRef = document.querySelector('.btn')
btnRef.addEventListener('click',() => {
    instance.show()
})

window.addEventListener('keydown',(e) => {
    if(e.key === 'Escape'){
instance.close()
    }
})