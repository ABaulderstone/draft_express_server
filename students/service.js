const repository = require('./repository');
const useRepository = require('./repository');

const studentRepository = useRepository();

const createStudent = (name, age) => {
  return studentRepository.createStudent(name, age);
};

const getStudentById = (id) => {
  return studentRepository.findStudentById(id);
};

const getStudents = () => {
  return studentRepository.allStudents();
};

const updateStudent = (id, updateOptions = {}) => {
  return studentRepository.updateStudentById(id, updateOptions);
};

const deleteStudent = (id) => {
  return studentRepository.removeStudentById(id);
};

module.exports = {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
  getStudentById,
};
