export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Bitcoin Price',
        backgroundColor: '#c1d8f0',
        data: [30000, 32000, 31000, 33000, 34000, 32000, 35000],
      },
      {
        label: 'Transaction Volume',
        backgroundColor: '#E6676B',
        data: [20000, 22000, 21000, 24000, 23000, 22000, 25000],
      },
      {
        label: 'Mining Power',
        backgroundColor: '#ffcc00',
        data: [15000, 16000, 18000, 17000, 19000, 20000, 19000],
      },
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false
  }
  