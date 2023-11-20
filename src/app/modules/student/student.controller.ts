import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';


const createStudent = async (req: Request, res: Response) => {
  try {
  
    const { student: studentData } = req.body;
    // validating data with joi
    const {error, value} = studentValidationSchema.validate(studentData)
    // calling service function to send data
    const result = await StudentServices.createStudentIntoDB(value);


    if(error){
      res.status(500).json({
        success: false,
        message: "Data is not validated",
        error: error.details
      })
    }



    // sending data to client
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err
    })
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students get retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params;

  try {
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student get successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
