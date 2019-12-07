const fetchArticles = function(callback) {
  // fetch all articles
  return fetch("https://5d9b4390686ed000144d1ed9.mockapi.io/js/base3", {
    method: "GET"
  })
    .then(function(response) {
      return response.json().then(function(data) {
        return callback(data);
      });
    })
    .catch(function(err) {
      console.log("Error", err);
    });
};

const fetchBloggers = function(callback) {
  return fetch("https://5d9b4390686ed000144d1ed9.mockapi.io/js/base2", {
    method: "GET"
  })
    .then(function(response) {
      return response.json().then(function(data) {
        return callback(data);
      });
    })
    .catch(function(err) {
      console.log("Error", err);
    });
};
const postForm = function(callback, user, url) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => {
      if (response.status === 200 || response.status === 201) return response.json();
    })
    .then(data => callback(data));
};
const putForm = function(callback, user, url) {
  fetch(url, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => {
      if (response.status === 200 || response.status === 201) return response.json();
    })
    .then(data => callback(data));
};
const deleteForm = function(callback, url) {
  fetch(url, {
    method: "DELETE"
  })
    .then(response => {
      if (response.status === 200 || response.status === 201) return response.json();
    })
    .then(data => callback(data));
};

const getForm = function(callback, url) {
  fetch(url)
    .then(response => {
      if (response.status === 200) return response.json();
    })
    .then(data => callback(data));
};

class ApiFunc {
  constructor() {
    this.getUser = fetchBloggers;
    this.getPost = fetchArticles;
    this.postForm = postForm;
    this.getForm = getForm;
    this.putForm = putForm;
    this.deleteForm = deleteForm;
  }
}

const Api = new ApiFunc();
export default Api;
