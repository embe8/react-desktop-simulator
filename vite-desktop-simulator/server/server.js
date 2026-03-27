 import express from 'express';
 import cors from 'cors';
 import path from 'path';
 import { fileURLToPath } from 'url';
 import { sequelize } from './models/index.js';
 import fs from 'fs';
 import { Anime } from './models/Anime.js';
 import { Concert } from './models/Concert.js';
 import { Game } from './models/Game.js';
 import { Movie } from './models/Movie.js';
 import { Vinyl } from './models/Vinyl.js';
 import { Window } from './models/Window.js';
import { defaultConcert } from './defaultData/defaultConcert.js';
import { defaultGame } from './defaultData/defaultGame.js';
import { defaultAnime } from './defaultData/defaultAnime.js';
import { defaultMovie } from './defaultData/defaultMovie.js';
import { defaultVinyl } from './defaultData/defaultVinyl.js';
 
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

if (await Concert.count() === 0) {
  await Concert.bulkCreate(defaultConcert);
}

if (await Movie.count() === 0) {
  await Movie.bulkCreate(defaultMovie);
}

if (await Anime.count() === 0) {
  await Anime.bulkCreate(defaultAnime);
}

if (await Game.count() === 0) {
  await Game.bulkCreate(defaultGame);
}

if (await Vinyl.count() === 0) {
  await Vinyl.bulkCreate(defaultVinyl);
}

if (await About.count() === 0) {
  await About.bulkCreate(defaultAbout);
}




// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });