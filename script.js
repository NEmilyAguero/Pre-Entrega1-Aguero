function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseInt(document.getElementById('years').value);
    const resultsDiv = document.getElementById('results');
    let result = principal;
  
    resultsDiv.innerHTML = '';
  
    for (let i = 1; i <= years; i++) {
      const interest = result * (rate / 100);
      result += interest;
      resultsDiv.innerHTML += `<p>Year ${i}: $${result.toFixed(2)}</p>`;
    }
  }
  