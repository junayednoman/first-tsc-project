import { Schema, model } from 'mongoose';
import { Guardian, Student } from './student.interface';
import bcrypt from "bcrypt";

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father's name is required."] },
  motherName: { type: String, required: [true, "Mother's name is required."] },
  fatherOccupation: { type: String },
  motherOccupation: { type: String },
  fatherContact: { type: String },
  motherContact: { type: String },
});

const studentSchema = new Schema<Student>({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    minlength: [6, 'password should be atleast 6 characters'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: "Gender must be either 'male' or 'female'.",
    },
  },
  dateOfBirth: { type: String },
  contactNo: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message:
        'Blood group must be one of the following: A+, A-, B+, B-, AB+, AB-, O+, O-.',
    },
  },
  presentAddress: { type: String },
  guardian: {
    type: guardianSchema,
    required: true,
  },
  isActive: { type: Boolean, default: true },
});

// using middleware
studentSchema.pre('save', function async() {
  console.log(this, 'before saving data');
  // const student = this;
  // const student.password = await bcrypt
});
studentSchema.post('save', function () {
  console.log(this, 'after saving data');
});

const studentModel = model<Student>('students', studentSchema);
export default studentModel;
