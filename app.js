//get the bar chart element
const barChart = document.querySelector(".bar_chart");

//function to fetch bar chart data
async function fetchBarData() {
  const data = await fetch("./data.json").then((res) => res.json());

  const today = new Date().getDay();

  const html = data
    .map(
      (dat, i) => `<div class="bar_container">
          <p class='tooltip'>$${dat.amount}</p>
          <div class="bar ${today === i ? "today" : ""}" style="height:${
        dat.amount * 3
      }px;"></div>
          <p class="fade-text fs-200">${dat.day}</p>
        </div>`
    )
    .join("");

  barChart.innerHTML = html;

  const bars = document.querySelectorAll(".bar_container");

  console.log(bars);

  bars.forEach((elem) => {
    console.log(elem.firstElementChild);
    elem.addEventListener("mouseover", () => {
      elem.style.opacity = 0.8
      elem.firstElementChild.classList.add("show");
    });
    elem.addEventListener("mouseout", () => {
      elem.style.opacity = 1
      elem.firstElementChild.classList.remove("show");
    });
  });
}

fetchBarData();
