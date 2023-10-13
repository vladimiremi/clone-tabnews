function status(request, response) {
  response.status(200).send({ hello: "Hello World!" });
}

export default status;
