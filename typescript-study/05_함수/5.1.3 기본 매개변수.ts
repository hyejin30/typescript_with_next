function rateSong(song: string, rating?: number) {
  console.log(`${song} gets ${rating}/5 stars!`);
}

rateSong("At Last!");
rateSong("At Last!", undefined);

function rateSongWithDefault(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars!`);
}

rateSongWithDefault("At Last!");
rateSongWithDefault("At Last!", undefined);
rateSongWithDefault("At Last!", "100");
