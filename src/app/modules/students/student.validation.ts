import { z } from 'zod';

// Guardian Schema
const guardianSchema = z.object({
  fatherName: z.string().nonempty({ message: "Father's name is required." }),
  motherName: z.string().nonempty({ message: "Mother's name is required." }),
  fatherOccupation: z.string(),
  motherOccupation: z.string(),
  fatherContact: z.string(),
  motherContact: z.string(),
});

// Student Schema
const studentValidationSchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'Student name is required.' })
    .regex(/^[a-zA-Z]+$/, { message: 'Name must contain only alphabets.' }),
  email: z
    .string()
    .nonempty({ message: 'Email address is required.' })
    .email({ message: 'Email is not valid.' }),
  password: z.string(),
  gender: z.enum(['male', 'female'], {
    message: "Gender must be either 'male' or 'female'.",
  }),
  dateOfBirth: z.string(),
  contactNo: z
    .string()
    .min(11, { message: 'Contact number must be exactly 11 digits.' })
    .max(11, { message: 'Contact number must be exactly 11 digits.' }),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], {
    message:
      'Blood group must be one of the following: A+, A-, B+, B-, AB+, AB-, O+, O-.',
  }),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianSchema,
  isActive: z.boolean().default(true),
});

export default studentValidationSchema;
