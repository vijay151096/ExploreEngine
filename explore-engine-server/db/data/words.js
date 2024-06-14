const wordsData = [
  {
    "word": "apple",
    "type": "fruit",
    "createdAt": "2023-06-15T12:00:00Z"
  },
  {
    "word": "banana",
    "type": "fruit",
    "createdAt": "2023-07-20T08:30:00Z"
  },
  {
    "word": "orange",
    "type": "fruit",
    "createdAt": "2023-08-25T14:45:00Z"
  },
  {
    "word": "pineapple",
    "type": "fruit",
    "createdAt": "2023-09-30T10:00:00Z"
  },
  {
    "word": "grape",
    "type": "fruit",
    "createdAt": "2023-10-10T16:15:00Z"
  },
  {
    "word": "cat",
    "type": "animal",
    "createdAt": "2023-11-01T09:20:00Z"
  },
  {
    "word": "dog",
    "type": "animal",
    "createdAt": "2023-12-12T13:35:00Z"
  },
  {
    "word": "bird",
    "type": "animal",
    "createdAt": "2024-01-15T07:40:00Z"
  },
  {
    "word": "fish",
    "type": "animal",
    "createdAt": "2024-02-18T11:25:00Z"
  },
  {
    "word": "red",
    "type": "color",
    "createdAt": "2024-03-22T15:50:00Z"
  },
  {
    "word": "blue",
    "type": "color",
    "createdAt": "2024-04-25T10:10:00Z"
  },
  {
    "word": "green",
    "type": "color",
    "createdAt": "2024-05-30T18:05:00Z"
  },
  {
    "word": "yellow",
    "type": "color",
    "createdAt": "2023-06-05T12:00:00Z"
  },
  {
    "word": "purple",
    "type": "color",
    "createdAt": "2023-07-10T08:30:00Z"
  },
  {
    "word": "Monday",
    "type": "day",
    "createdAt": "2023-08-15T14:45:00Z"
  },
  {
    "word": "Tuesday",
    "type": "day",
    "createdAt": "2023-09-20T10:00:00Z"
  },
  {
    "word": "Wednesday",
    "type": "day",
    "createdAt": "2023-10-25T16:15:00Z"
  },
  {
    "word": "Thursday",
    "type": "day",
    "createdAt": "2023-11-30T09:20:00Z"
  },
  {
    "word": "Friday",
    "type": "day",
    "createdAt": "2023-12-05T13:35:00Z"
  },
  {
    "word": "Saturday",
    "type": "day",
    "createdAt": "2024-01-10T07:40:00Z"
  },
  {
    "word": "Sunday",
    "type": "day",
    "createdAt": "2024-02-15T11:25:00Z"
  },
  {
    "word": "car",
    "type": "vehicle",
    "createdAt": "2024-03-20T15:50:00Z"
  },
  {
    "word": "bicycle",
    "type": "vehicle",
    "createdAt": "2024-04-25T10:10:00Z"
  },
  {
    "word": "motorcycle",
    "type": "vehicle",
    "createdAt": "2024-05-30T18:05:00Z"
  },
  {
    "word": "bus",
    "type": "vehicle",
    "createdAt": "2023-06-05T12:00:00Z"
  },
  {
    "word": "train",
    "type": "vehicle",
    "createdAt": "2023-07-10T08:30:00Z"
  },
  {
    "word": "plane",
    "type": "vehicle",
    "createdAt": "2023-08-15T14:45:00Z"
  },
  {
    "word": "house",
    "type": "building",
    "createdAt": "2023-09-20T10:00:00Z"
  },
  {
    "word": "apartment",
    "type": "building",
    "createdAt": "2023-10-25T16:15:00Z"
  },
  {
    "word": "condo",
    "type": "building",
    "createdAt": "2023-11-30T09:20:00Z"
  },
  {
    "word": "villa",
    "type": "building",
    "createdAt": "2023-12-05T13:35:00Z"
  },
  {
    "word": "coffee",
    "type": "drink",
    "createdAt": "2024-01-10T07:40:00Z"
  },
  {
    "word": "tea",
    "type": "drink",
    "createdAt": "2024-02-15T11:25:00Z"
  },
  {
    "word": "juice",
    "type": "drink",
    "createdAt": "2024-03-20T15:50:00Z"
  },
  {
    "word": "soda",
    "type": "drink",
    "createdAt": "2024-04-25T10:10:00Z"
  },
  {
    "word": "water",
    "type": "drink",
    "createdAt": "2024-05-30T18:05:00Z"
  },
  {
    "word": "football",
    "type": "sport",
    "createdAt": "2023-06-05T12:00:00Z"
  },
  {
    "word": "basketball",
    "type": "sport",
    "createdAt": "2023-07-10T08:30:00Z"
  },
  {
    "word": "soccer",
    "type": "sport",
    "createdAt": "2023-08-15T14:45:00Z"
  },
  {
    "word": "tennis",
    "type": "sport",
    "createdAt": "2023-09-20T10:00:00Z"
  },
  {
    "word": "golf",
    "type": "sport",
    "createdAt": "2023-10-25T16:15:00Z"
  },
  {
    "word": "computer",
    "type": "device",
    "createdAt": "2023-11-30T09:20:00Z"
  },
  {
    "word": "phone",
    "type": "device",
    "createdAt": "2023-12-05T13:35:00Z"
  },
  {
    "word": "tablet",
    "type": "device",
    "createdAt": "2024-01-10T07:40:00Z"
  },
  {
    "word": "laptop",
    "type": "device",
    "createdAt": "2024-02-15T11:25:00Z"
  },
  {
    "word": "smartwatch",
    "type": "device",
    "createdAt": "2024-03-20T15:50:00Z"
  },
  {
    "word": "pizza",
    "type": "food",
    "createdAt": "2024-04-25T10:10:00Z"
  },
  {
    "word": "burger",
    "type": "food",
    "createdAt": "2024-05-30T18:05:00Z"
  },
  {
    "word": "sushi",
    "type": "food",
    "createdAt": "2023-06-05T12:00:00Z"
  },
  {
    "word": "taco",
    "type": "food",
    "createdAt": "2023-07-10T08:30:00Z"
  },
  {
    "word": "pasta",
    "type": "food",
    "createdAt": "2023-08-15T14:45:00Z"
  }
]

module.exports = wordsData;
