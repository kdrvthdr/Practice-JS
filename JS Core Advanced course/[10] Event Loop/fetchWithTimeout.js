"use strict";

function fetchWithTimeout(url, timeout) {
  return new Promise((resolve, reject) => {
    let didTimeout = false;

    const timer = setTimeout(() => {
      didTimeout = true;
      reject(new Error('Request timed out'));
    }, timeout);

    fetch(url)
      .then(response => {
        if (didTimeout) return;
        clearTimeout(timer); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (!didTimeout) {
          resolve(data);
        }
      })
      .catch(error => {
        if (!didTimeout) {
          clearTimeout(timer); 
          reject(error);
        }
      });
  });
}


fetchWithTimeout('https://api.github.com/users/cat', 5000)
  .then(data => console.log('Fetched data:', data))
  .catch(error => console.error('Error:', error));


  fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 1000)
  .then(data => console.log('Fetched data:', data))
  .catch(error => console.error('Error:', error));