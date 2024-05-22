import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const zodParedData = studentValidationSchema.parse(student)
    const result = await studentServices.insertStudentDataToDB(zodParedData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Failed to post',
      error: error,
    });
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
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve',
      error: error,
    });
  }
};

export const studentController = { createStudent, retrieveStudents };
