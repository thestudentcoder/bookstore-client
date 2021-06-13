const environmentUrls = new Map();

environmentUrls.set('localhost','http://localhost:8080');
environmentUrls.set('bookstore-demo-client.herokuapp.com','https://bookstore-demo-client.herokuapp.com');

export default environmentUrls.get(window.location.hostname);