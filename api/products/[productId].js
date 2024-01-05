export default {
  get: (req, res, next, routeParams) => {
    const { productId } = routeParams;
    if (!productId) {
      res.end("Product id not specified");
    }
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((json) => res.json(json));
  },
};
