import { z } from 'zod'
import { AcademicSemesterName } from './academicSemester.constant';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterName] as [string, ...string[]])
  })
})

export const academicSemesterValidation = {
  createAcademicSemesterValidationSchema
};