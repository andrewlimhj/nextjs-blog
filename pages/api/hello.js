export default function handler(req, res, next) {
  res.status(200).json({ text: 'Hello world!' });
}
