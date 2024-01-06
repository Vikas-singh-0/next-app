// import '../db.json';
const users = [
  {
    "id":1,
    "name": "vikas",
    "email":'vsingh@gmail.com'
  },
  {
    "id":2,
    "name": "Akas",
    "email":'asingh@gmail.com'
  },
  {
    "id":3,
    "name": "rakesh",
    "email":'rasingh@gmail.com'
  },
  {
    "id":4,
    "name": "abuu",
    "email":'abbusingh@gmail.com'
  }
];

export default function handler(req, res) {
  res.status(200).json(JSON.stringify(users));
}
