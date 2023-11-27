import { TStudent } from "../student/student.interface";
import { User } from "./user.model";



const createStudentIntoDB = async (studentData: TStudent) => {


  // if(await student.isStudentExist(studentData.id)){
  //   throw new Error('Student is already exist')
  // }

   const result = await User.create(studentData); //built in static method

  return result;
};

export const UserService = {
  createStudentIntoDB
}
