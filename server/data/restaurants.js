const restaurants = [
    {
        id:1,
        name:"Green Tree",
        area:"Saravanampatti",
        cuisine:["Arabian","South Indian","North Indian"],
        vegOnly:false,
        pricelevel:1,
        rating:4.3,
        moodTags:["gloomy","relaxed"],
        isCheesy:false,
        distanceKm:2.5
    },
      {
    id: 2,
    name: "Cheezy Bites Pizza",
    area: "RS Puram",
    cuisine: ["Italian", "Fast Food"],
    vegOnly: false,
    priceLevel: 2,
    rating: 4.5,
    moodTags: ["hangout", "cheesy"],
    isCheesy: true,
    distanceKm: 3.0
  },
  {
    id: 3,
    name: "Green Leaf Veg Cafe",
    area: "Gandhipuram",
    cuisine: ["South Indian", "Veg"],
    vegOnly: true,
    priceLevel: 1,
    rating: 4.1,
    moodTags: ["light", "healthy"],
    isCheesy: false,
    distanceKm: 1.2
  }
];
module.exports=restaurants;