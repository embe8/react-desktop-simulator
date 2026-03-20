 import express from 'express';
 import cors from 'cors';
 import path from 'path';
 import { fileURLToPath } from 'url';
 import { sequelize } from './models/index.js';
 import fs from 'fs';


 const app = express();
 const PORT = process.env.PORT || 3000;
 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 //Middleware
 app.use(cors());
 app.use(express.json());
//Serve images from the images folder
 app.use('/images/', express.static(path.join(__dirname, 'images')));

 // Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve index.html for any unmatched routes
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('index.html not found');
    }
  });

  // Error handling middleware
/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });
  /* eslint-enable no-unused-vars */
  
  // Sync database and load default data if none exist
await sequelize.sync();

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });