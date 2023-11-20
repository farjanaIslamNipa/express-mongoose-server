import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentMethods,
  StudentModel,
  TUserName,
} from './student.interface';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    trim: true,
    required: [true, 'First name is required'],
    maxlength: [20, 'First name cannot be longer than 20 characters'],
    validate: {
      validator: function(value:string){
        const firstNameValue = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameValue === value
      },
      message: '{VALUE} is not in capitalize format'
    }
  },
  middleName: { type: String, trim: true, },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last name is required'],
  },
});

const guardianNameSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  fatherContactNo: {
    type: String,
    trim: true,
    required: [true, "Father's contact number is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
  motherContactNo: {
    type: String,
    trim: true,
    required: [true, "Mother's contact number is required"],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: { type: String, required: [true, 'Local guardian name is required'] },
  occupation: {
    type: String,
    required: [true, 'Local guardian occupation is required'],
  },
  contactNo: {
    type: String,
    trim: true,
    required: [true, 'Local guardian contact number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local guardian address is required'],
  },
});
const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({
  id: { type: String, required: true, unique: true },
  name: {type: userNameSchema, required: true},
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid value'
    },
    required: true
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, 'Email is required'], unique: true, trim: true, },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true, trim: true, },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: {type: guardianNameSchema, required: true},
  localGuardian: {type: localGuardianSchema, required:true},
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active'
  },
});


// creating a custom instance method
// studentSchema.methods.isStudentExist = async function(id: string) {
//   const existingUser = await Student.findOne({id})
//   return existingUser;
// }

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
