import { Request, Response } from "express";
import studentValidationSchema from "../student/student.validation";
import { StudentServices } from "../student/student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body;

    // validating with zod
    const zodParsedData = studentValidationSchema.parse(studentData)

    // calling service function to send data
    const result = await StudentServices.createStudentIntoDB(zodParsedData);

    // sending data to client
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err
    })
  }
};