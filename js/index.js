/// <reference types="../@types/jquery" />;
const myData = {
  customers:[
        {
            "id": 1,
            "name": "Ahmed Ali"
        },
        {
            "id": 2,
            "name": "Aya Elsayed"
        },
        {
            "id": 3,
            "name": "Mina Adel"
        },
        {
            "id": 4,
            "name": "Sarah Reda"
        },
        {
            "id": 5,
            "name": "Abdulrahman Aldahshouri"
        },
        {
            "id": 6,
            "name": "Khaled Ali"
        },
        {
            "id": 7,
            "name": "Joya Gamal"
        },
        {
            "id": 8,
            "name": "Raid Reda"
        },
        {
            "id": 9,
            "name": "Ahmed Reda"
        },
        {
            "id": 10,
            "name": "Mohamed Sayed"
        }
    ],
    transactions: [
        {
            "id": 1,
            "customer_id": 1,
            "date": "2022-01-01",
            "amount": 1000
        },
        {
            "id": 2,
            "customer_id": 1,
            "date": "2022-01-02",
            "amount": 2000
        },
        {
            "id": 3,
            "customer_id": 2,
            "date": "2022-01-03",
            "amount": 550
        },
        {
            "id": 4,
            "customer_id": 2,
            "date": "2022-01-04",
            "amount": 500
        },
        {
            "id": 5,
            "customer_id": 3,
            "date": "2022-01-05",
            "amount": 1300
        },
        {
            "id": 6,
            "customer_id": 3,
            "date": "2022-01-06",
            "amount": 750
        },
        {
            "id": 7,
            "customer_id": 4,
            "date": "2022-01-07",
            "amount": 1250
        },
        {
            "id": 8,
            "customer_id": 4,
            "date": "2022-01-08",
            "amount": 1250
        },
        {
            "id": 9,
            "customer_id": 5,
            "date": "2022-01-09",
            "amount": 2500
        },
        {
            "id": 10,
            "customer_id": 5,
            "date": "2022-01-10",
            "amount": 2500
        },
        {
            "id": 11,
            "customer_id": 6,
            "date": "2022-01-11",
            "amount": 2500
        },
        {
            "id": 12,
            "customer_id": 6,
            "date": "2022-01-12",
            "amount": 2500
        },
        {
            "id": 13,
            "customer_id": 7,
            "date": "2022-01-13",
            "amount": 2500
        },
        {
            "id": 14,
            "customer_id": 7,
            "date": "2022-01-14",
            "amount": 875
        },
        {
            "id": 15,
            "customer_id": 8,
            "date": "2022-01-15",
            "amount": 520
        },
        {
          "id": 16,
          "customer_id": 8,
          "date": "2022-01-16",
          "amount": 1365
        },
        {
          "id": 17,
          "customer_id": 9,
          "date": "2022-01-17",
          "amount": 1255
        },
        {
          "id": 18,
          "customer_id": 9,
          "date": "2022-01-18",
          "amount": 3005
        },
        {
          "id": 19,
          "customer_id": 10,
          "date": "2022-01-19",
          "amount": 1500
        },
        {
          "id": 20,
          "customer_id": 10,
          "date": "2022-01-20",
          "amount": 365
        },
        {
          "id": 21,
          "customer_id": 1,
          "date": "2022-01-21",
          "amount": 4525
        },
        {
          "id": 22,
          "customer_id": 2,
          "date": "2022-01-22",
          "amount": 2375
        },
        {
          "id": 23,
          "customer_id": 3,
          "date": "2022-01-30",
          "amount": 1975
        },
        {
          "id": 24,
          "customer_id": 4,
          "date": "2022-01-29",
          "amount": 1475
        },
        {
          "id": 25,
          "customer_id": 5,
          "date": "2022-01-28",
          "amount": 1075
        },
        {
          "id": 26,
          "customer_id": 6,
          "date": "2022-01-27",
          "amount": 775
        },
  ],
};
// Get Total Amount
for (let i = 0; i < myData.customers.length; i++) {
  myData.customers[i].amount = 0;
  myData.customers[i].num = 0;
  for (let x = 0; x < myData.transactions.length; x++) {
    if (myData.customers[i].id == myData.transactions[x].customer_id) {
      myData.customers[i].amount += myData.transactions[x].amount;
      myData.customers[i].num += 1;
    }
  }
}
// Display
display(myData.customers);
function display(user) {
  let cartona = "";
  for (let i = 0; i < user.length; i++) {
    cartona += `<tr id=${user[i].id}>
              <td>${user[i].id}</td>
              <td>${user[i].name}</td>
              <td>${user[i].amount}</td>
              <td>${user[i].num}</td>
            </tr>`;
  }
  document.querySelector("#custData tbody").innerHTML = cartona;
}
// Filter By
let searchedItems;
// Name
document.getElementById("customerName").addEventListener("input", function (e) {
  searchedItems = [];
  for (let i = 0; i < myData.customers.length; i++) {
    if (
      myData.customers[i].name
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      searchedItems.push(myData.customers[i]);
    }
  }
  if (searchedItems.length == 0) {
    document.querySelector(
      "tbody"
    ).innerHTML = `<td class="fs-2" colspan="5">No Data To Show</td>`;
  } else {
    display(searchedItems);
  }
});
// Amount
document
  .getElementById("customerAmount")
  .addEventListener("input", function (e) {
    searchedItems = [];
    for (let i = 0; i < myData.customers.length; i++) {
      if (
        myData.customers[i].amount
          .toString()
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      ) {
        searchedItems.push(myData.customers[i]);
      }
    }
    if (searchedItems.length == 0) {
      document.querySelector(
        "tbody"
      ).innerHTML = `<td class="fs-2" colspan="5">No Data To Show</td>`;
    } else {
      display(searchedItems);
    }
  });
// Show Transaction Data & Graph
let graphItems = [];
$("#custData tbody").on("click", function (e) {
  displayTrans(e.target.parentElement.getAttribute("id"));
  let offset = $("#transData").offset().top;
  $("html,body").animate({ scrollTop: offset }, 1000);
  if (graphItems.length != 0) {
    myChart.destroy();
    graphItems = [];
  }
  for (let i = 0; i < myData.transactions.length; i++) {
    if (
      e.target.parentElement.getAttribute("id") ==
      myData.transactions[i].customer_id
    ) {
      graphItems.push(myData.transactions[i]);
    }
  }
  createChart(graphItems);
  document.querySelector(".chart").classList.remove("d-none");
});
// Display Transactions
function displayTrans(id) {
  let cartona = "";
  for (let i = 0; i < myData.transactions.length; i++) {
    if (myData.transactions[i].customer_id == id) {
      cartona += `<tr>
                <td>${myData.transactions[i].id}</td>
                <td>${myData.transactions[i].amount}</td>
                <td>${myData.transactions[i].date
                  .split("-")
                  .reverse()
                  .join("-")}</td>
              </tr>`;
    }
  }
  document.querySelector(
    "#transData"
  ).innerHTML = `<h1 class=" text-black mb-0">Customer (${id}) Details</h1>
        <article>
          <h4 class="my-3">Transactions Details</h4>
          <table class="table table-bordered border-black text-center">
            <thead>
              <tr>
                <th class="color-o">Id</th>
                <th class="color-o">Transaction Amount</th>
                <th class="color-o">Transaction Data</th>
              </tr>
            </thead>
            <tbody>${cartona}</tbody>
          </table>
        </article>`;
}
// Graph
let ctx = document.getElementById("myChart");
let myChart;
function createChart(data) {
  // Check Repeated Dates and get total amount
  const summedAmounts = new Map();
  data.forEach((row) => {
    if (summedAmounts.has(row.date)) {
      summedAmounts.set(row.date, summedAmounts.get(row.date) + row.amount);
    } else {
      summedAmounts.set(row.date, row.amount);
    }
  });
  const chartData = Array.from(summedAmounts, ([date, amount]) => ({
    date,
    amount,
  }));
  // Create the chart
  myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: chartData.map((row) => row.date),
      datasets: [
        {
          label: "Transaction Graph",
          data: chartData.map((row) => row.amount),
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
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}
