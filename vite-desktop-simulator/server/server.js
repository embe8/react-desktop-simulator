 import express from 'express';
 import cors from 'cors';
 import path from 'path';
 import { fileURLToPath } from 'url';
 import { sequelize } from './models/index.js';

 const app = express();
 const PORT = process.env.PORT || 3000;
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 //Middleware
 app.use(cors());
 app.use(express.json());
//Serve images from the images folder
 app.use('/images/', express.static(path.join(__dirname, 'images')));