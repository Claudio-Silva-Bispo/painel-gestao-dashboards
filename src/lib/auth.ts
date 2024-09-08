
// Instalar npm install jsonwebtoken e npm i --save-dev @types/jsonwebtoken
import jwt from 'jsonwebtoken';

// Rodar no terminal openssl rand -base64 64
const JWT_SECRET = process.env.JWT_SECRET || 'I6VRKxbFuAx8BfFILR2nQhPsHv5pBMnN0KJsmlqUmypsi38ijloicJ99XHkgBwFU';

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid token');
  }
};
