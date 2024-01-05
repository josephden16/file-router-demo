export default {
  get: (req, res, routeParams) => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => res.json(json));
  },
};
