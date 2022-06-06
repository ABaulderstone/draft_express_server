const { Router } = require('express');
const {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
  getStudentById,
} = require('./service');
const { randomPair } = require('../utils');
const { createStudentValidation } = require('./validations');

const router = Router();

router.get('/', (req, res) => {
  res.send(getStudents());
});

router.get('/pair', (req, res) => {
  const pair = randomPair(getStudents());
  if (pair.length < 1)
    return res.status(404).send({ message: 'No students to pair' });
  res.send(pair);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const student = getStudentById(id);
  if (!student) {
    return res.status(404).send({ message: 'Student not found' });
  }
  return res.send(student);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedStudent = deleteStudent(id);
  if (!deletedStudent) {
    return res.status(404).send({ message: 'Student not found' });
  }
  return res.status(202).send(deletedStudent);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const updatedStudent = updateStudent(id, req.body);
  if (!updatedStudent) {
    return res.status(404).send({ message: 'Student not found' });
  }
  return res.status(202).send(updatedStudent);
});

router.post('/', createStudentValidation, (req, res) => {
  const { name, age } = req.body;
  res.status(201).send(createStudent(name, age));
});

module.exports = router;
