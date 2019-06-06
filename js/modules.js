export const _$ = document.querySelector.bind(document);
export const _$$ = document.querySelectorAll.bind(document);





//prepare GET method for the request to a url
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () { 
    callback(this.responseText) 
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getChatData(url, callback) {
  getJSON(url, res => callback(JSON.parse(res)));
}

























