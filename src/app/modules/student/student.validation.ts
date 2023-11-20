import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string().trim().required().max(20)
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.base': 'First name must be a string',
      'string.empty': 'First name is required',
      'string.max': 'First name cannot be longer than 20 characters',
      'string.pattern.base': 'First name must start with a capital letter and be in capitalize format',
    }),
  middleName: Joi.string().trim(),
  lastName: Joi.string().trim().required()
    .messages({
      'string.base': 'Last name must be a string',
      'string.empty': 'Last name is required',
    }),
});

// Define Joi schema for Guardian
const guardianNameValidationSchema = Joi.object({
  fatherName: Joi.string().required()
    .messages({
      'string.base': "Father's name must be a string",
      'string.empty': "Father's name is required",
    }),
  fatherOccupation: Joi.string().required()
    .messages({
      'string.base': "Father's occupation must be a string",
      'string.empty': "Father's occupation is required",
    }),
  fatherContactNo: Joi.string().trim().required()
    .messages({
      'string.base': "Father's contact number must be a string",
      'string.empty': "Father's contact number is required",
    }),
  motherName: Joi.string().required()
    .messages({
      'string.base': "Mother's name must be a string",
      'string.empty': "Mother's name is required",
    }),
  motherOccupation: Joi.string().required()
    .messages({
      'string.base': "Mother's occupation must be a string",
      'string.empty': "Mother's occupation is required",
    }),
  motherContactNo: Joi.string().trim().required()
    .messages({
      'string.base': "Mother's contact number must be a string",
      'string.empty': "Mother's contact number is required",
    }),
});

// Define Joi schema for LocalGuardian
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required()
    .messages({
      'string.base': 'Local guardian name must be a string',
      'string.empty': 'Local guardian name is required',
    }),
  occupation: Joi.string().required()
    .messages({
      'string.base': 'Local guardian occupation must be a string',
      'string.empty': 'Local guardian occupation is required',
    }),
  contactNo: Joi.string().trim().required()
    .messages({
      'string.base': 'Local guardian contact number must be a string',
      'string.empty': 'Local guardian contact number is required',
    }),
  address: Joi.string().required()
    .messages({
      'string.base': 'Local guardian address must be a string',
      'string.empty': 'Local guardian address is required',
    }),
});

// Define Joi schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required()
    .messages({
      'string.base': 'Student ID must be a string',
      'string.empty': 'Student ID is required',
    }),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female').required()
    .messages({
      'any.only': 'Gender must be either "male" or "female"',
      'any.required': 'Gender is required',
    }),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required()
    .messages({
      'string.base': 'Email must be a string',
      'string.empty': 'Email is required',
      'string.email': 'Invalid email format',
    }),
  contactNo: Joi.string().required()
    .messages({
      'string.base': 'Contact number must be a string',
      'string.empty': 'Contact number is required',
    }),
  emergencyContactNo: Joi.string().trim().required()
    .messages({
      'string.base': 'Emergency contact number must be a string',
      'string.empty': 'Emergency contact number is required',
    }),
  bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'),
  presentAddress: Joi.string().required()
    .messages({
      'string.base': 'Present address must be a string',
      'string.empty': 'Present address is required',
    }),
  permanentAddress: Joi.string().required()
    .messages({
      'string.base': 'Permanent address must be a string',
      'string.empty': 'Permanent address is required',
    }),
  guardian: guardianNameValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;