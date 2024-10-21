// types/express.d.ts
import { Request } from 'express';

declare module 'express' {
  export interface Request {
    customData?: any; // Ganti 'any' dengan tipe data yang sesuai
  }
}
