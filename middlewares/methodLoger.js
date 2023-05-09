const methodLoger = (req, res, next) => {
  console.log("🚀 method:", req.method);
  next();
};

export default methodLoger