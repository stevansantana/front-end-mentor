async function getDate() {
    const response = await fetch("data.json");
    const data = await response.json();

    const dayList = [];
    const amountList = [];

    for (let i = 0; i < data.length; i++) {
        dayList[i] = data[i].day;
        amountList[i] = data[i].amount;
    }

    return { dayList, amountList };
}

getDate().then(({ dayList, amountList }) => {
    const maxAmount = Math.max(...amountList);

    const xValues = dayList;
    const yValues = amountList;

    const backgroundColors = yValues.map(amount => amount === maxAmount ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)');
    const hoverBackgroundColors = yValues.map(amount => amount === maxAmount ? 'hsla(186, 34%, 60%, 0.8)' : 'hsla(10, 79%, 65%, 0.8)');

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: backgroundColors,
                hoverBackgroundColor: hoverBackgroundColors,
                borderWidth: 0,
                data: yValues
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,

            legend: {
                display: false
            },
            title: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                    },
                    gridLines: {
                        display: false
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: 'hsl(28, 10%, 53%)',
                        fontFamily: 'DM Sans',
                        autoSkip: false,
                        maxRotation: 0,
                        minRotation: 0
                    },
                    gridLines: {
                        display: false
                    }
                }]
            },
            elements: {
                rectangle: {
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,0)',
                    borderWidth: 0,
                    borderRadius: 5
                }
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        let label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] || '';
                        label = '$' + label;

                        return label;
                    }
                }
            }
        }
    });
});
