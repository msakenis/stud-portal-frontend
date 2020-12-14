export const registration = [
  {
    name: 'email',
    type: 'email',
    labelText: 'Email',
    required: true,
    minLength: 6,
    maxLength: 20,
  },
  {
    name: 'password',
    type: 'password',
    labelText: 'Password',
    required: true,
    minLength: 8,
    maxLength: 64,
  },
];

export const AddStudentForm = [
  {
    name: 'name',
    type: 'text',
    labelText: 'Name',
    required: true,
    minLength: 2,
    maxLength: 50,
    iconClass: 'fas fa-user',
  },
  {
    name: 'surname',
    type: 'text',
    labelText: 'Surname',
    required: true,
    minLength: 2,
    maxLength: 50,
    iconClass: 'fas fa-user',
  },
  {
    name: 'email',
    type: 'email',
    labelText: 'Email',
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  {
    name: 'phone',
    type: 'text',
    labelText: 'Phone',
    required: true,
    minLength: 5,
    maxLength: 15,
    iconClass: 'fas fa-phone',
  },
];
