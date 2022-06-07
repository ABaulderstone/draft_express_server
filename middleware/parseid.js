function parseId(req, res, next) {
  console.log('this runs', req.params);
  const id = parseInt(req.params.id);
  if (id) {
    res.locals.id = id;
  }
  next();
}

module.exports = parseId;
