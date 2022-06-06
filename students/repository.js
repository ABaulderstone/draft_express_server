module.exports = () => {
  let students = [
    { id: 1, name: 'Alice', age: 39 },
    { id: 2, name: 'Bob', age: 26 },
    { id: 3, name: 'Charlie', age: 17 },
  ];
  let id = 3;

  return {
    allStudents() {
      return students;
    },

    createStudent(name, age) {
      const newStudent = { id: ++id, name, age };
      students.push(newStudent);
      return newStudent;
    },

    findStudentById(inputId) {
      return students.find((student) => student.id === parseInt(inputId));
    },

    updateStudentById(inputId, params) {
      const studentIndex = students.findIndex(
        (student) => student.id === parseInt(inputId)
      );
      if (studentIndex === undefined) return null;
      const updatedStudent = { ...students[studentIndex], ...params };
      students[studentIndex] = updatedStudent;
      return updatedStudent;
    },

    removeStudentById(inputId) {
      const studentIndex = students.findIndex(
        (student) => student.id === parseInt(inputId)
      );
      if (studentIndex === undefined) return null;
      const [deletedStudent] = students.splice(studentIndex, 1);
      return deletedStudent;
    },
  };
};
