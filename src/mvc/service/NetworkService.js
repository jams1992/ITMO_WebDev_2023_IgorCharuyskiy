class NetworkService {
  #url;
  constructor(url) {
    this.#url = url;
  }
  retrieweFromPath(path) {
    return fetch(`${this.#url}/${path}`).then(
      (Response) => Response.ok && Response.json()
    );
  }
  post() {}
  delete() {}
  put() {}
}
export default NetworkService;
