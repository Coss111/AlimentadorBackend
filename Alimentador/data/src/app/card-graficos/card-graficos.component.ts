// import { Component, OnInit } from '@angular/core';
// import { Chart, registerables } from 'chart.js';

// @Component({
//   selector: 'app-card-graficos',
//   templateUrl: './card-graficos.component.html',
//   styleUrls: ['./card-graficos.component.css']
// })
// export class CardGraficosComponent implements OnInit {

//   lineChart: Chart;

//   ngOnInit() {
//     // Registra los plugins necesarios para el gráfico
//     Chart.register(...registerables);

//     // Datos para el gráfico de líneas
//     const data = {
//       labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
//       datasets: [{
//         label: 'Datos',
//         data: [10, 15, 7, 12, 9, 14],
//         borderColor: 'rgb(75, 192, 192)',
//         fill: false
//       }]
//     };

//     // Configuración del gráfico
//     const config = {
//       type: 'line', // Especifica el tipo de gráfico como 'line'
//       data: data,
//       options: {
//         responsive: true,
//         scales: {
//           x: {
//             display: true,
//             title: {
//               display: true,
//               text: 'Meses'
//             }
//           },
//           y: {
//             display: true,
//             title: {
//               display: true,
//               text: 'Datos'
//             }
//           }
//         }
//       }
//     };

//     // Crea el gráfico de líneas
//     const canvas = document.getElementById('lineChart') as HTMLCanvasElement;
//     this.lineChart = new Chart(canvas, config);
//   }
// }
