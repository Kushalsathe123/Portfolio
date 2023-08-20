// Link the JavaScript file in the "about.html" page

// Function to update the CGPA meter
function updateCGPAMeter(cgpa) {
    // Set the maximum CGPA value (assuming 8.4 is the maximum CGPA)
    const maxCGPA = 10;
  
    // Calculate the progress percentage based on the entered CGPA
    const progressPercentage = (cgpa / maxCGPA) * 100;
  
    // Update the value of the CGPA meter progress bar
    const progressBar = document.getElementById('cgpa-meter');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', cgpa);
  
    // Update the CGPA text
    const cgpaText = document.getElementById('cgpa-meter-text');
    cgpaText.textContent = `CGPA: ${cgpa.toFixed(1)}/10.0`;
  }
  
  // Function to simulate updating the CGPA meter with a sample CGPA value
  // Replace this with the actual CGPA obtained from the user input or database
  function simulateCGPAUpdate() {
    const sampleCGPA = 8.4; // Replace with the actual CGPA value
    updateCGPAMeter(sampleCGPA);
  }
  
  // Call the function to update the CGPA meter on page load
  window.addEventListener('load', simulateCGPAUpdate);
  


  function updateperMeter(cgpa) {
    // Function name corrected to "updateperMeter"
    const maxCGPA = 100;
    const progressPercentage = (cgpa / maxCGPA) * 100;
  
    // Update the value of the 12th percentage meter progress bar
    const progressBar12 = document.getElementById('percent12-meter');
    progressBar12.style.width = `${progressPercentage}%`;
    progressBar12.setAttribute('aria-valuenow', cgpa);
  
    // Update the 12th percentage text
    const cgpaText = document.getElementById('percent12-meter-text');
    cgpaText.textContent = `PERCENTAGE: ${cgpa.toFixed(1)}/100.0`;
  }
  
  // Function name corrected to "simulateperUpdate"
  function simulateperUpdate() {
    const sampleCGPA = 67.2; // Replace with the actual CGPA value
    updateperMeter(sampleCGPA);
    console.log('simulateperUpdate function called.'); // Add this line for debugging
  }
  
  // Call the function to update the 12th percentage meter on page load
  window.addEventListener('load', simulateperUpdate);


  function updateperMeter(cgpa) {
    // Function name corrected to "updateperMeter"
    const maxCGPA = 100;
    const progressPercentage = (cgpa / maxCGPA) * 100;
  
    // Update the value of the 12th percentage meter progress bar
    const progressBar12 = document.getElementById('percent12-meter');
    progressBar12.style.width = `${progressPercentage}%`;
    progressBar12.setAttribute('aria-valuenow', cgpa);
  
    // Update the 12th percentage text
    const cgpaText12 = document.getElementById('percent12-meter-text');
    cgpaText12.textContent = `PERCENTAGE: ${cgpa.toFixed(2)}/100.0`;
  }
  
  // Function to update the 10th percentage meter
  function updateper10Meter(percentage) {
    const maxPercentage = 100;
    const progressPercentage10 = (percentage / maxPercentage) * 100;
  
    // Update the value of the 10th percentage meter progress bar
    const progressBar10 = document.getElementById('percent10-meter');
    progressBar10.style.width = `${progressPercentage10}%`;
    progressBar10.setAttribute('aria-valuenow', percentage);
  
    // Update the 10th percentage text
    const percentageText10 = document.getElementById('percent10-meter-text');
    percentageText10.textContent = `PERCENTAGE: ${percentage.toFixed(2)}/100.0`;
  }
  
  // Function to simulate updating the 10th percentage meter with a sample percentage value
  // Replace this with the actual percentage value (83.80) obtained from the user input or database
  function simulateper10Update() {
    const samplePercentage10 = 83.80; // Replace with the actual percentage value
    updateper10Meter(samplePercentage10);
    console.log('simulateper10Update function called.'); // Add this line for debugging
  }
  
  // Call the function to update the 12th percentage meter on page load
  window.addEventListener('load', simulateperUpdate);
  // Call the function to update the 10th percentage meter on page load
  window.addEventListener('load', simulateper10Update);
  