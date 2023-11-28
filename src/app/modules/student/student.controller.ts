import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from "http-status";


const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All students get retrieved successfully',
      data: result
    })
  } catch (err) {
    next(err)
  }
};

const getSingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  const { studentId } = req.params;

  try {
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student get successfully',
      data: result
    })
  } catch (err) {
    next(err)
  }
};

const deleteStudent = async(req:Request, res: Response, next: NextFunction) => {
  const {studentId} = req.params;

  try{
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student deleted successfully',
      data: result
    })
  }catch(err){
    next(err)
  }
}

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
