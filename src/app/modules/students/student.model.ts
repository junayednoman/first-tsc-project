import { Schema, model } from 'mongoose';
import { Guardian, Student } from './student.interface';

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  fatherOccupation: { type: String },
  motherOccupation: { type: String },
  fatherContact: { type: String },
  motherContact: { type: String },
});
const studentSchema = new Schema<Student>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  gender: ['male', 'female'],
  dateOfBirth: { type: String },
  contactNo: { type: String },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  presentAddress: { type: String },
  guardian: guardianSchema,
  isActive: { type: Boolean },
});

const studentModel = model<Student>('students', studentSchema);
export default studentModel;
