const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Youtube", "Amazon"],
    datasets: [
      {
        label: "My First Dataset",
        data: [1200, 1900, 3000, 3, 14],
        backgroundColor: [
          "rgb(255, 99,  132, 1)",
          "rgb(54, 162, 235, 1)",
          "rgb(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

const earning = document.getElementById("earning");

new Chart(earning, {
  type: "line",
  data: {
    labels: [
      "TV",
      "Fridge",
      "AC",
      "Green",
      "Iphone 12",
      "Smartphone",
      "Guitar",
    ],
    datasets: [
      {
        label: "Sells",
        data: [2100, 400, 1200, 1000, 800, 100],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
