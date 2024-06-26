import { object, string } from 'zod'

export const createUserSchema = object({
  body: object({
    name: string({ required_error: 'Name is required' }),
    password: string({ required_error: 'Password is required' }).min(
      6,
      'Password too short - should be 6 chars minium',
    ),
    passwordConfirmation: string({
      required_error: 'Password Confirmation is required',
    }),
    email: string({ required_error: 'Email is required' }).email(
      'Not a valid email',
    ),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'passwords do not match',
    path: ['passwordCOnfirmation'],
  }),
})
