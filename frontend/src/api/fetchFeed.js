const mapSong = (entry) => ({
  id: entry.id.attributes['im:id'],
  name: entry['im:name'].label,
  image: entry['im:image'][entry['im:image'].length - 1].label,
  artist: entry['im:artist'].label,
  type: entry['im:contentType']['im:contentType'].attributes.term,
  link: entry['link'][0].attributes['href'],
});

const mapAlbum = (entry) => ({
  id: entry.id.attributes['im:id'],
  name: entry['im:name'].label,
  image: entry['im:image'][entry['im:image'].length - 1].label,
  artist: entry['im:artist'].label,
  type: entry['im:contentType']['im:contentType'].attributes.term,
  link: entry['link'].attributes['href'],
});

const Mappers = {
  topsongs: mapSong,
  topalbums: mapAlbum,
};

const fetchFeed = async (feedType) => {
  const response = await fetch(`https://itunes.apple.com/us/rss/${feedType}/limit=100/json`);
  const json = await response.json();
  return json.feed.entry.map(Mappers[feedType]);
};

export default fetchFeed;
