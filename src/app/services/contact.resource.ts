angular
  .module("codecraft")
  .factory("Contact", function($resource : any) {
    return $resource(
      "http://localhost:3000/contacts/:id",
      {id: "@id"},
      {
        update: {
          method: "PUT"
        }
      }
    );
  })
