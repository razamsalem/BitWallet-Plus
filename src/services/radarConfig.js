export const data = {
    labels: [
      'Market Sentiment',
      'Volatility',
      'Transaction Volume',
      'Market Cap',
      'Mining Power',
      'Adoption',
      'Security'
    ],
    datasets: [
      {
        label: 'Last Month',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [70, 50, 80, 90, 60, 75, 85]
      },
      {
        label: 'This Month',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [40, 70, 60, 80, 50, 90, 75]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        ticks: {
          display: false
        }
      }
    }
  }
  