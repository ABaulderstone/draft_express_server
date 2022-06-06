const createStudentValidation = (req, res, next) => {
  if (!req.body?.name || !req.body?.age) {
    return res.status(400).send({ message: 'Name and age must exist' });
  }
  next();
};

module.exports = { createStudentValidation };
