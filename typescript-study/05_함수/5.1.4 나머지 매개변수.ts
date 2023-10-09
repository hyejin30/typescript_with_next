function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}

singAllTheSongs("singer");
singAllTheSongs("singer", "song1", "song2", "song3");
