import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Encriptación de contraseñas
 * @param text 
 * @returns {Promise<string>}
 */
export async function encrypt(text: string):Promise<string> {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(text, salt);

    return hash;
  } catch (err) {
    throw err
  }
}

/**
 * Compara un texto con un hash encriptado.
 * @param oneText 
 * @param hash 
 * @returns {Promise<boolean>}
 */
export async function compareHash(oneText: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(oneText, hash);
}

/**
 * Generar un JWT para un usuario
 * @param payload - Información del usuario
 * @param jwt_expire - expiración del JWT
 * @returns {string} - El JWT
 */
export function generateToken(payload: Record<string, any>, jwt_expire: string): string {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET no está definido. Asegúrate de configurarlo en tus variables de entorno.');
  }

  return jwt.sign(payload, JWT_SECRET, { expiresIn: jwt_expire });
}
