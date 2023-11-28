import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";



const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create user object
  const userData: Partial<TUser> = {}

  // set default password if password is not given
  userData.password = userData.password || (config.default_password as string)

  //set student role
  userData.role = 'student'

  //set manually generated if
  userData.id = '203000136'

  //create user
  const newUser = await User.create(userData)

  //create student
  if(Object.keys(newUser).length){
    //set id, _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id

    const newStudent = await Student.create(studentData)
    return newStudent;
  }

};

export const UserService = {
  createStudentIntoDB
}
