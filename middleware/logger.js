const logger = (req, res, next) => {
  const { path, method } = req;
  console.log({ path, method });
  next();
};

module.exports = logger;
