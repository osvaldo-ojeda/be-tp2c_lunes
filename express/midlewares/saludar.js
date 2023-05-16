const saludar = (req, res, next) => {
  console.log("hola como estas");
  next();
};

export default saludar;
