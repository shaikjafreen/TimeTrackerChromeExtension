document.addEventListener("DOMContentLoaded", async () => {
  try {
    const res = await fetch("http://localhost:5000/report");
    const data = await res.json();
    const reportDiv = document.getElementById("report");

    reportDiv.innerHTML = `
      <p>Productive Time: ${data.productive} sec</p>
      <p>Unproductive Time: ${data.unproductive} sec</p>
      <p>Neutral Time: ${data.neutral} sec</p>
      <h3>By Domain:</h3>
      <ul>
        ${Object.entries(data.perDomain).map(([domain, time]) =>
          `<li>${domain}: ${time} sec</li>`
        ).join("")}
      </ul>
    `;
  } catch (err) {
    console.error("Error loading report:", err);
    document.getElementById("report").innerText = "Failed to load report.";
  }
});
