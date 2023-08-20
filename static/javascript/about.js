
function updateCGPAMeter(cgpa) {
    const maxCGPA = 10;
  
    const progressPercentage = (cgpa / maxCGPA) * 100;
  
 
    const progressBar = document.getElementById('cgpa-meter');
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.setAttribute('aria-valuenow', cgpa);
  

    const cgpaText = document.getElementById('cgpa-meter-text');
    cgpaText.textContent = `CGPA: ${cgpa.toFixed(1)}/10.0`;
  }
  
 
  function simulateCGPAUpdate() {
    const sampleCGPA = 8.4; 
    updateCGPAMeter(sampleCGPA);
  }
  

  window.addEventListener('load', simulateCGPAUpdate);
  


  function updateperMeter(cgpa) {
 
    const maxCGPA = 100;
    const progressPercentage = (cgpa / maxCGPA) * 100;
  
    
    const progressBar12 = document.getElementById('percent12-meter');
    progressBar12.style.width = `${progressPercentage}%`;
    progressBar12.setAttribute('aria-valuenow', cgpa);
  

    const cgpaText = document.getElementById('percent12-meter-text');
    cgpaText.textContent = `PERCENTAGE: ${cgpa.toFixed(1)}/100.0`;
  }
  
 
  function simulateperUpdate() {
    const sampleCGPA = 67.2;
    updateperMeter(sampleCGPA);
    console.log('simulateperUpdate function called.'); 
  }
  
  
  window.addEventListener('load', simulateperUpdate);


  function updateperMeter(cgpa) {
    
    const maxCGPA = 100;
    const progressPercentage = (cgpa / maxCGPA) * 100;
  
 
    const progressBar12 = document.getElementById('percent12-meter');
    progressBar12.style.width = `${progressPercentage}%`;
    progressBar12.setAttribute('aria-valuenow', cgpa);
  
  
    const cgpaText12 = document.getElementById('percent12-meter-text');
    cgpaText12.textContent = `PERCENTAGE: ${cgpa.toFixed(2)}/100.0`;
  }
  

  function updateper10Meter(percentage) {
    const maxPercentage = 100;
    const progressPercentage10 = (percentage / maxPercentage) * 100;
  

    const progressBar10 = document.getElementById('percent10-meter');
    progressBar10.style.width = `${progressPercentage10}%`;
    progressBar10.setAttribute('aria-valuenow', percentage);
  
   
    const percentageText10 = document.getElementById('percent10-meter-text');
    percentageText10.textContent = `PERCENTAGE: ${percentage.toFixed(2)}/100.0`;
  }
  
  function simulateper10Update() {
    const samplePercentage10 = 83.80; 
    updateper10Meter(samplePercentage10);
    console.log('simulateper10Update function called.');
  }
  
  window.addEventListener('load', simulateperUpdate);

  window.addEventListener('load', simulateper10Update);
  