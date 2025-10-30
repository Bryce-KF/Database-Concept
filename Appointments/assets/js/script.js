
const apiUrl = "https://my-hospital-api.onrender.com/api/appointments";

async function loadAppointments() {
  const res = await fetch(apiUrl);
  const data = await res.json();

  const table = document.getElementById("appointments");
  table.innerHTML = "";
  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.PatientName}</td>
      <td>${row.PSex}</td>
      <td>${row.PAge}</td>
      <td>${row.InsuranceName}</td>
      <td>${row.DoctorName}</td>
      <td>${row.Specialization}</td>
      <td>${row.Date}</td>
      <td>${row.Time}</td>
    `;
    table.appendChild(tr);
  });
}

loadAppointments();

