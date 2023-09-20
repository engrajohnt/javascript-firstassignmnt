function convert(name, weightKg) {
    // Convert  (1 kg = 2.20462 pounds)
    const weightPounds = weightKg * 2.20462;
  
    
    const message = `kindly take note ${name}, your weight is ${weightPounds.toFixed(2)} pounds.`;
  
    //  message alert
    alert(message);
  
    
    return message;
  }
  
  // user input name and weight in kg
  const userName = prompt("Welcome to Engrjohntega code:Please kindly enter your name:");
  const userWeightKg = parseFloat(prompt(" Enter your weight in kg here:"));
  

  convert(userName, userWeightKg);
  