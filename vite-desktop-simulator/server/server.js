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
 import { About } from './models/About.js';
 import { Window } from './models/Window.js';
import { defaultConcert } from './defaultData/defaultConcert.js';
import { defaultGame } from './defaultData/defaultGame.js';
import { defaultAnime } from './defaultData/defaultAnime.js';
import { defaultMovie } from './defaultData/defaultMovie.js';
import { defaultVinyl } from './defaultData/defaultVinyl.js';
import { defaultAbout } from './defaultData/defaultAbout.js';
const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 //Middleware
 app.use(cors());
 app.use(express.json());
//Serve images from the images folder
 app.use('/images/', express.static(path.join(__dirname, 'images')));

 // Anime routes
app.get('/api/anime', async (req, res) => {
  try {
    const anime = await Anime.findAll();
    res.json(anime);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Concert routes
app.get('/api/concerts', async (req, res) => {
  try {
    const concerts = await Concert.findAll();
    res.json(concerts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Game routes
app.get('/api/games', async (req, res) => {
  try {
    const games = await Game.findAll();
    res.json(games);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Movie routes
app.get('/api/movies', async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Vinyl routes
app.get('/api/vinyls', async (req, res) => {
  try {
    const vinyls = await Vinyl.findAll();
    res.json(vinyls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// About routes
app.get('/api/about', async (req, res) => {
  try {
    const about = await About.findAll();
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Window routes
app.get('/api/windows', async (req, res) => {
  try {
    const windows = await Window.findAll();
    res.json(windows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


 // Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve index.html for any unmatched routes
app.get('/{*splat}', (req, res) => {
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