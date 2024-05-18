import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await studentServices.insertStudentDataToDB(student);
    res.status(200).json({
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const retrieveStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudents();
    res.status(200).json({
      success: true,
      message: 'Students data retrieved successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentController = { createStudent, retrieveStudents };
