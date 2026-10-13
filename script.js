const API_URL = "http://localhost:8081/api/jobs";

fetch(API_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Backend connection failed");
    }
    return response.json();
  })
  .then(jobs => {
    const container = document.getElementById("job-list");

    container.innerHTML = "";

    jobs.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";
      card.textContent = job;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error:", error);
    const container = document.getElementById("job-list");
    if (container) {
      container.textContent = "Unable to load jobs. Please check backend.";
    }
  });