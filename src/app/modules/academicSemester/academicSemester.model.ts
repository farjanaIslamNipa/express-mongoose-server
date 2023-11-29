import { Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {type: String, enum: ['Autumn', 'Summer', 'Fall'], required: true},
  code: {type: String, enum: ['01', '02', '03'], required: true},
  year: {type: Date, required: true}
})