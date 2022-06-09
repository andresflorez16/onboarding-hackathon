const ERRORS_CODE = {
  'auth/weak-password': 'La contraseña debe contener al menos 6 caracteres',
  'auth/email-already-in-use': 'El correo se encuentra en uso',
  'auth/invalid-email': 'Verifique el correo electrónico',
  'auth/wrong-password': 'Email y/o contraseña incorrectos',
  'auth/user-not-found': 'Usuario no encontrado'
}

export const errorsAuth = (err) => {
  return ERRORS_CODE[err] ? ERRORS_CODE[err] : ''
}
