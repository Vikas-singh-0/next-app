// import '../db.json';
const news = 
  [
    {
      "id": 1,
      "title": "News Article 1",
      "description": "Description 1",
      "category": "sports"
    },
    {
      "id": 2,
      "title": "News Article 2",
      "description": "Description 2",
      "category": "politics"
    },
    {
      "id": 3,
      "title": "News Article 3",
      "description": "Description 3",
      "category": "sports"
    }
];

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(news));
}
