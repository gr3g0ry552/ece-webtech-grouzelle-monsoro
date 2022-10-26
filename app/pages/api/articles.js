export const db = [{
  slug: '1',
  title: 'article 1',
  message: 'Vivamus ullamcorper arcu at odio iaculis fermentum. Sed dictum diam nunc, tempus venenatis orci dignissim in.'
}, {
  slug: '2',
  title: 'article 2',
  message: 'Vehicula non lacus nec, fermentum interdum elit. Morbi porttitor tincidunt augue'
}, {
  slug: '3',
  title: 'article 3',
  message: 'Phasellus scelerisque condimentum finibus. Proin facilisis nisi eu finibus feugiat. Nam feugiat malesuada odio, sed pulvinar leo interdum eu. Cras at volutpat nibh, malesuada iaculis leo.'
}]

export default function handler(req, res) {
  res.status(200).json(db)
}