const { Router } = require('express');
const req = require('express/lib/request');

const { randomPair } = require('../utils');
const { createStudentValidation } = require('./validations');

// set up data
let students = [
  { id: 1, name: 'Alice', age: 20 },
  { id: 2, name: 'Bob', age: 25 },
  { id: 3, name: 'Charlie', age: 35 },
];

let id = 3;

//create handler in file

function findStudent(req, res, next) {
  const { id } = req.params;
  const student = students.find((student) => student.id === parseInt(id));
  if (!student) {
    return res.status(404).send({ message: 'Student not found' });
  }
  res.locals.student = student;
  next();
}

const router = Router();

router.get('/', (req, res) => {
  res.send(students);
});

// apply validation just on this route
router.post('/', createStudentValidation, (req, res) => {
  const { name, age } = req.body;
  const newStudent = { id: ++id, name, age };
  students.push(newStudent);
  res.status(201).send(newStudent);
});

router.get('/pair', (req, res) => {
  const pair = randomPair(students);
  if (pair.length < 1)
    return res.status(404).send({ message: 'No students to pair' });
  res.send(pair);
});

router.get('/:id', findStudent, (req, res) => {
  const { student } = res.locals;
  return res.send(student);
});

router.delete('/:id', findStudent, (req, res) => {
  const { student } = res.locals;
  const studentIndex = students.findIndex((s) => s.id === student.id);
  const [deletedStudent] = students.splice(studentIndex, 1);
  return res.status(202).send(deletedStudent);
});

router.patch('/:id', findStudent, (req, res) => {
  const { student } = res.locals;
  const { name = student.name, age = student.age } = req.body;
  const studentIndex = students.findIndex((s) => s.id === student.id);
  const updatedStudent = { ...student, name, age };
  students[studentIndex] = updatedStudent;
  return res.status(202).send(updatedStudent);
});

module.exports = router;
