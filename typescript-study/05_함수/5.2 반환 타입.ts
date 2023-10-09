function recursive(songs: string[], count = 0): number {
  return songs.length ? recursive(songs.slice(1), count + 1) : count;
}

const recursiveArrow = (songs: string[], count = 0): number => {
  return songs.length ? recursive(songs.slice(1), count + 1) : count;
};
