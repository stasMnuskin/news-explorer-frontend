// const mainUrl = "http://localhost:3000";
const mainUrl = "https://api.stasnews.students.nomoreparties.sbs";

class MainApi {
  constructor(baseUrl, headers) {
    this._baseUrl = baseUrl;
    this.headers = headers;
    this.costumeFetch = this.costumeFetch.bind(this);
  }

  costumeFetch(url, headers) {
    return fetch(url, headers).then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(`Error! ${res.statusText}`);
    });
  }

  logIn({ email, password }) {
    return this.costumeFetch(`${this._baseUrl}/signin`, {
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
    })
      .then((user) => {
        if (user) {
          return user;
        } else {
          throw new Error("User Not Found!");
        }
      })
      .catch((err) => {
        console.log("err = ", err);
      });
  }

  register({ email, password, name }) {
    return this.costumeFetch(`${this._baseUrl}/signup`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((user) => {
      if (user) {
        return user;
      } else {
        throw new Error("Email Already Taken!");
      }
    });
  }

  getUserInfo() {
    return this.costumeFetch(`${this._baseUrl}/users/me`, {
      headers: this.headers,
      body: JSON.stringify(),
    }).then((res) => {
      return res;
    });
  }

  getArticles() {
    return this.costumeFetch(`${this._baseUrl}/articles`, {
      method: "GET",
      headers: this.headers,
    });
  }

  saveArticle(article, key) {
    return this.costumeFetch(`${this._baseUrl}/articles`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        keyword: key,
        image: article.urlToImage,
        title: article.title,
        text: article.description,
        date: article.publishedAt,
        source: article.source.name,
        link: article.url,
      }),
    });
  }

  deleteArticle(articleId) {
    return this.costumeFetch(`${this._baseUrl}/articles/${articleId}`, {
      headers: this.headers,
      method: "DELETE",
    });
  }
}

export const mainApi = new MainApi(mainUrl, {
  Authorization: `Bearer ${localStorage.jwt}`,
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
});
