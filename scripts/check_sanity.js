const https = require('https');
const query = '*[_type == "post" && defined(slug.current)][0...12]{_id,title,slug,publishedAt,author->{name,image},mainImage,body}';
const encoded = encodeURIComponent(query);
const url = `https://g6nnalqe.api.sanity.io/v2024-08-24/data/query/production?query=${encoded}`;
https.get(url, (res) => {
  let d = '';
  res.on('data', (c) => d += c);
  res.on('end', () => console.log(d));
}).on('error', (e) => console.error(e));
