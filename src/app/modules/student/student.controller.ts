import { Request, Response } from 'express';
import { StudentServices } from './student.service';



const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students get retrieved successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong"
    })
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
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "something went wrong"
    })
  }
};

const deleteStudent = async(req:Request, res: Response) => {
  const {studentId} = req.params;

  try{
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result
    })
  }catch(err: any){
    res.status(500).json({
      success:false,
      message: err.message || "something went wrong"
    })
  }
}

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent
};
