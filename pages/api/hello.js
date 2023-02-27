// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// ZROB SEKRETNEGO ENDPOINTA Z KOTKIEM I STRINGIEM GRaTULACJE cos tam i url kotka
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
