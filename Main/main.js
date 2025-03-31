const xValues = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
        label:"Label 1",
        data: [1000,2000,7000,2400,2334,9222,6433],
        borderColor: "#F9BA33",
        backgroundColor: "#F9BA33",
        fill: false
    }, { 
        label:"Label 2",
        data: [1600,3444,1700,1900,1222,2700,4000,9000,6000,11111],
        borderColor: "#7381c4",
        backgroundColor: "#7381c4",

        fill: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 20,
                boxHeight: 20,
                usePointStyle: true,
                padding: 15,
                font: {
                    size: 12,
                },
                backgroundColor:'borderColor',
                color: '#333'
            }
        }
    }
}
});