function run() {
    const factUrl = 'https://facts-by-api-ninjas.p.rapidapi.com/v1/facts';
    const factElement = document.getElementById('fact');
    const getFactButton = document.getElementById('get-joke-btn');

    getFactButton.addEventListener('click', () => {
      fetch(factUrl, {
        headers: {
          "x-rapidapi-key": "5e937b4952msh0cd60cae124352dp1bd119jsna9ca7300a732",
          "x-rapidapi-host": "facts-by-api-ninjas.p.rapidapi.com"
        }
      })
      .then(response => response.json())
      .then(data => {
        factElement.innerText = data[0].fact;
      })
      .catch(error => {
        console.log(error);
      });
    });
  }

  run();
