const element = {
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
  ],
  region: [
    { required: true, message: 'Please select zone', trigger: 'change' }
  ],
  when: {
    date: [
      { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
    ],
    time: [
      { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
    ],
  },
  type: [
    { type: 'array', min: 2, max: 3, required: true, message: 'Please select between 2 and 3 types', trigger: 'change' }
  ],
  resource: [
    { required: true, message: 'Please select resource', trigger: 'change' }
  ],
  comment: [
    { required: true, message: 'Please input comment', trigger: 'blur' }
  ]
}

const vee = {
  name: 'required|alpha|min:2|max:5',
  region: 'required',
  when: {
    date: 'required',
    time: 'required',
  },
  type: 'picked:2,3',
  resource: 'required',
  comment: 'required'
}

export default {
  element,
  vee,
}
