"use strict";

function fetchUrls(urls) {
  let requests = urls.map(url => fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status} at ${response.url}`);
      }
      return response.text(); 
    })
  );

  return Promise.all(requests)
    .then(contents => contents.forEach((content, index) => {
      console.log(`Content from ${urls[index]}:`, content);
    }))
    .catch(error => {
      console.error('Ошибка при загрузке содержимого URL:', error);
    });
}

let urls = [
  'https://example.com',
  'https://learn.javascript.ru/promise-api#promise-all'
];

fetchUrls(urls);
