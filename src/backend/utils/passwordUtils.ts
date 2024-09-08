import bcrypt from 'bcryptjs';

// Função para hash de senha
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10); // Gera um salt
  return await bcrypt.hash(password, salt); // Retorna o hash da senha
};

// Função para verificar senha
export const verifyPassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword); // Compara a senha com o hash
};
