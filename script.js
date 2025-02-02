// Replace this URL with your published Google Sheets CSV link
const sheetURL = "https://docs.google.com/spreadsheets/d/e/your-sheet-id/pub?output=csv";

fetch(sheetURL)
  .then(response => response.text())
  .then(data => {
    const rows = data.split("\n"); // Split rows by newline
    const tableBody = document.querySelector("#sheetData tbody");

    rows.forEach((row, index) => {
      if (index === 0) return; // Skip header row
      const columns = row.split(","); // Split columns by comma
      const tr = document.createElement("tr");

      columns.forEach(column => {
        const td = document.createElement("td");
        td.textContent = column.trim();
        tr.appendChild(td);
      });

      tableBody.appendChild(tr);
    });
  })
  .catch(error => console.error("Error fetching data:", error));