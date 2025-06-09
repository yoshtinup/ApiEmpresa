export class VerifyLogin {
  constructor(loginRepository) {
    this.loginRepository = loginRepository; // Inyección del repositorio
  }

  /**
   * Ejecutar la verificación del login de un cliente.
   * @param {string} gmail - El correo del usuario.
   * @param {string} password - La contraseña proporcionada.
   * @returns {Promise<Object>} - Información del usuario si las credenciales son correctas.
   */
  async execute(gmail, password) {
    const loginData = await this.loginRepository.findLoginByCredentials(gmail, password);

    if (!loginData) {
      throw new Error('Invalid email or password');
    }

    return {
      id: loginData.id,
      gmail: loginData.gmail,
      // ⚠️ No incluir password por seguridad
    };
  }
}
