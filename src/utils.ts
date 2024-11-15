import bcrypt from 'bcrypt';

/**
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
