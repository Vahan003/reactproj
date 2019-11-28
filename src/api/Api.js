const fetchArticles = function (callback) { // fetch all articles
    return fetch(
      "https://5d9b4390686ed000144d1ed9.mockapi.io/js/base3",
      {
        method: "GET"
      }
    )
      .then(function (response) {
        return response.json().then(function (data) {
          return callback(data);
        });
      })
      .catch(function (err) {
        console.log("Error", err);
      });
  }
  
  const fetchBloggers = function (callback) {
    return fetch(
      "https://5d9b4390686ed000144d1ed9.mockapi.io/js/base2",
      {
        method: "GET"
      }
    )
      .then(function (response) {
        return response.json().then(function (data) {
          return callback(data);
        });
      })
      .catch(function (err) {
        console.log("Error", err);
      });
  }
  const Login = function(callback,user) {
    fetch('https://it-blog-posts.herokuapp.com/api/people/login',
    {   
        method:"POST",
        body: JSON.stringify(user),
        headers: {
          'content-type': 'application/json'
          }
    }).then(response => {
        if(response.status === 200)
            return response.json();
    }).then(data => callback(data))
}

  class ApiFunc {
     constructor(){
         this.getUser= fetchBloggers;
         this.getPost= fetchArticles;
         this.postLogin = Login;
     }
  }

 const Api= new ApiFunc();
 export default Api;