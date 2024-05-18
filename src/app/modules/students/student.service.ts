import { Student } from './student.interface';
import studentModel from './student.model';

const insertStudentDataToDB = async (student: Student) => {
  const result = await studentModel.create(student);
  return result;
};

const getAllStudents = async () => {
  const result = await studentModel.find();
  return result;
};
export const studentServices = { insertStudentDataToDB, getAllStudents };
