import axios from "axios";

export default {
  // Gets all books
  //   getBooks: function() { 
  //     return axios.get("/api/books");
  //   },
  //   // Gets the book with the given id
  //   getBook: function(id) {
  //     return axios.get("/api/books/" + id);
  //   },
  //   // Deletes the book with the given id
  //   deleteBook: function(id) {
  //     return axios.delete("/api/books/" + id);
  //   },


  // Saves an order to the database
  saveOrder: function (orderData) {
    console.log(orderData);
    return axios.post("/api/order", orderData);
  },

  // GET THE FOOD CATEGORIES
  getCategories: function () {
    return axios.get("/api/categories");
  },

  // FILL CATEGORIES WITH FOOD ITEMS
  getCategoryItems: function (key) {
    console.log("getCategoryItems key: " + key)
    const resp = axios.get("/api/categories/" + key)
    console.log("getCategoryItems" + resp)
    return resp
  },

  // BOH GET ORDERS
  getToCookOrders: function() {
    return axios.get("/api/order")
  },

  //FOH COOKED ORDERS
  completeOrder: function(key) {
    return axios.put("/api/order/"  + key)
  },

  //PIN Validation
  getPIN: function (pin) {
    console.log("Hit API.js")
    return axios.get("/api/pin/" + pin)
  }
};