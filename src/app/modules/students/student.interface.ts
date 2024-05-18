export type Guardian = {
  fatherName: string;
  motherName: string;
  fatherOccupation: string;
  motherOccupation: string;
  fatherContact: string;
  motherContact: string;
};
export type Student = {
  name: string;
  email: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  contactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  isActive: true | false;
};
