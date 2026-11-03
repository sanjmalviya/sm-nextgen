async function search() {
  const q = encodeURIComponent('SM NextGen Udaipur');
  const res = await fetch('https://www.google.com/maps/search/' + q, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9'
    }
  });
  const html = await res.text();
  
  // Look for ChIJ place IDs
  const chijMatches = html.match(/ChIJ[a-zA-Z0-9_-]{20,}/g) || [];
  console.log('ChIJ Matches:', [...new Set(chijMatches)]);

  // Look for occurrences of NextGen, Sanjay, etc.
  const regex = /SM NextGen[^"]*/gi;
  const matches = html.match(regex) || [];
  console.log('SM NextGen matches:', matches.slice(0, 5));

  // Look for reviews or numbers
  const reviewMatches = html.match(/(\d+(\.\d+)?)\s*stars?|\d+\s*reviews?/gi) || [];
  console.log('Rating/Review matches:', reviewMatches.slice(0, 10));
}

search().catch(console.error);
