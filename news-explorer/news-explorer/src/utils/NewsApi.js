class NewsApi {
  constructor({ apiKey, baseUrl, headers }) {
    this.costumeFetch = this.costumeFetch.bind(this);
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.headers = headers;

    this.now = new Date();
    this.lastDate = new Date(this.now.getTime() - 7 * 24 * 3600 * 1000);
    this.day = this.lastDate.getDate();
    this.month = this.lastDate.getMonth() + 1;
    this.year = this.lastDate.getFullYear();

    this.startDate = this.year + "/" + this.month + "/" + this.day;
  }
  costumeFetch(url, headers) {
    return fetch(url, headers).then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(`Error! ${res.statusText}`);
    });
  }
  getSearchedArticles(key) {
    return this.costumeFetch(
      `${this.baseUrl}?q=${key}&apiKey=${this.apiKey}&from=${this.startDate}&to=${this.now}&pageSize=100`
    );
  }
}

const newsApi = new NewsApi({
  apiKey: "66672a82201f4feca0324014dd30c0db",
  baseUrl: "https://newsapi.org/v2/everything",
  headers: {
    authorization: `Bearer ${localStorage.jwt}`,
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*"
  },
});

export default newsApi;
