import { Student } from './student.interface';
import studentModel from './student.model';

const insertStudentDataToDB = async (studentData: Student) => {
  // const result = await studentModel.create(student);
  const student = new studentModel(studentData);
  const result = student.save();
  return result;
};

const getAllStudents = async () => {
  const result = await studentModel.find();
  return result;
};
export const studentServices = { insertStudentDataToDB, getAllStudents };
