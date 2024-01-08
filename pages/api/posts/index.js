const posts = [
  {
    "id": 1,
    "title": "post 1",
    "description": "Post Description 1",
    "category": "sports"
  },
  {
    "id": 2,
    "title": "post 2",
    "description": "Post Description 2",
    "category": "politics"
  },
  {
    "id": 3,
    "title": "post 3",
    "description": "Post Description 3",
    "category": "sports"
  },
  {
    "id": 4,
    "title": "post 4",
    "description": "Post Description 4",
    "category": "sports"
  },
  {
    "id": 5,
    "title": "post 5",
    "description": "Post Description 5",
    "category": "politics"
  },
  {
    "id": 6,
    "title": "post 6",
    "description": "Post Description 6",
    "category": "sports"
  }
]
export default function handler(req,res) {
  return res.status(200).json(posts)
}