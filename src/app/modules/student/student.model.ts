import { Schema, model } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: String,
  middleName: String,
  lastName: String,
});

const guardianNameSchema = new Schema<Guardian>({
  fatherName: String,
  fatherOccupation: String,
  fatherContactNo: String,
  motherName: String,
  motherOccupation: String,
  motherContactNo: String,
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: String,
  occupation: String,
  contactNo: String,
  address: String,
});

const studentSchema = new Schema<Student>({
  id: { type: String, unique: true },
  name: { type: userNameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: '{VALUE} is not a valid value',
    },
    required: true,
  },
  dateOfBirth: String,
  email: { type: String, required: true, unique: true },
  contactNo: String,
  emergencyContactNo: String,
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
  },
  presentAddress: String,
  permanentAddress: String,
  guardian: { type: guardianNameSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: String,
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
});
export const StudentModel = model<Student>('Student', studentSchema);
