const products = [
  {
    "id": 35,
    "title": "Potatoes",
    "category": "groceries",
    "price": 2.29,
    "rating": 3.82
  },
  {
    "id": 36,
    "title": "Protein Powder",
    "category": "groceries",
    "price": 19.99,
    "rating": 3.91
  },
  {
    "id": 37,
    "title": "Red Onions",
    "category": "groceries",
    "price": 1.99,
    "rating": 4.08
  },
  {
    "id": 38,
    "title": "Rice",
    "category": "groceries",
    "price": 5.99,
    "rating": 3.94
  },
  {
    "id": 39,
    "title": "Soft Drinks",
    "category": "groceries",
    "price": 1.99,
    "rating": 4.59
  },
  {
    "id": 40,
    "title": "Strawberry",
    "category": "groceries",
    "price": 3.99,
    "rating": 4.5
  },
  {
    "id": 41,
    "title": "Tissue Paper Box",
    "category": "groceries",
    "price": 2.49,
    "rating": 4.55
  },
  {
    "id": 42,
    "title": "Water",
    "category": "groceries",
    "price": 0.99,
    "rating": 2.93
  },
  {
    "id": 43,
    "title": "Decoration Swing",
    "category": "home-decoration",
    "price": 59.99,
    "rating": 3.56
  },
  {
    "id": 44,
    "title": "Family Tree Photo Frame",
    "category": "home-decoration",
    "price": 29.99,
    "rating": 3.84
  },
  {
    "id": 45,
    "title": "House Showpiece Plant",
    "category": "home-decoration",
    "price": 39.99,
    "rating": 3.61
  },
  {
    "id": 46,
    "title": "Plant Pot",
    "category": "home-decoration",
    "price": 14.99,
    "rating": 3.33
  },
  {
    "id": 47,
    "title": "Table Lamp",
    "category": "home-decoration",
    "price": 49.99,
    "rating": 4.56
  },
  {
    "id": 48,
    "title": "Bamboo Spatula",
    "category": "kitchen-accessories",
    "price": 7.99,
    "rating": 4.4
  },
  {
    "id": 49,
    "title": "Black Aluminium Cup",
    "category": "kitchen-accessories",
    "price": 5.99,
    "rating": 3.62
  },
  {
    "id": 50,
    "title": "Black Whisk",
    "category": "kitchen-accessories",
    "price": 9.99,
    "rating": 2.88
  },
  {
    "id": 51,
    "title": "Boxed Blender",
    "category": "kitchen-accessories",
    "price": 39.99,
    "rating": 2.73
  },
  {
    "id": 52,
    "title": "Carbon Steel Wok",
    "category": "kitchen-accessories",
    "price": 29.99,
    "rating": 2.94
  },
  {
    "id": 53,
    "title": "Chopping Board",
    "category": "kitchen-accessories",
    "price": 12.99,
    "rating": 4.82
  },
  {
    "id": 54,
    "title": "Citrus Squeezer Yellow",
    "category": "kitchen-accessories",
    "price": 8.99,
    "rating": 4.18
  },
  {
    "id": 55,
    "title": "Egg Slicer",
    "category": "kitchen-accessories",
    "price": 6.99,
    "rating": 2.91
  },
  {
    "id": 56,
    "title": "Electric Stove",
    "category": "kitchen-accessories",
    "price": 49.99,
    "rating": 4.84
  },
  {
    "id": 57,
    "title": "Fine Mesh Strainer",
    "category": "kitchen-accessories",
    "price": 9.99,
    "rating": 3.7
  },
  {
    "id": 58,
    "title": "Fork",
    "category": "kitchen-accessories",
    "price": 3.99,
    "rating": 4.18
  },
  {
    "id": 59,
    "title": "Glass",
    "category": "kitchen-accessories",
    "price": 4.99,
    "rating": 3.06
  },
  {
    "id": 60,
    "title": "Grater Black",
    "category": "kitchen-accessories",
    "price": 10.99,
    "rating": 2.87
  },
  {
    "id": 61,
    "title": "Hand Blender",
    "category": "kitchen-accessories",
    "price": 34.99,
    "rating": 3.71
  },
  {
    "id": 62,
    "title": "Ice Cube Tray",
    "category": "kitchen-accessories",
    "price": 5.99,
    "rating": 3.27
  },
  {
    "id": 63,
    "title": "Kitchen Sieve",
    "category": "kitchen-accessories",
    "price": 7.99,
    "rating": 2.96
  },
  {
    "id": 64,
    "title": "Knife",
    "category": "kitchen-accessories",
    "price": 14.99,
    "rating": 4.31
  },
  {
    "id": 65,
    "title": "Lunch Box",
    "category": "kitchen-accessories",
    "price": 12.99,
    "rating": 2.84
  },
  {
    "id": 66,
    "title": "Microwave Oven",
    "category": "kitchen-accessories",
    "price": 89.99,
    "rating": 2.71
  },
  {
    "id": 67,
    "title": "Mug Tree Stand",
    "category": "kitchen-accessories",
    "price": 15.99,
    "rating": 4.34
  },
  {
    "id": 68,
    "title": "Pan",
    "category": "kitchen-accessories",
    "price": 24.99,
    "rating": 3.4
  },
  {
    "id": 69,
    "title": "Plate",
    "category": "kitchen-accessories",
    "price": 3.99,
    "rating": 3.07
  },
  {
    "id": 70,
    "title": "Red Tongs",
    "category": "kitchen-accessories",
    "price": 6.99,
    "rating": 3.22
  },
  {
    "id": 71,
    "title": "Silver Pot With Glass Cap",
    "category": "kitchen-accessories",
    "price": 39.99,
    "rating": 3.86
  },
  {
    "id": 72,
    "title": "Slotted Turner",
    "category": "kitchen-accessories",
    "price": 8.99,
    "rating": 3.77
  },
  {
    "id": 73,
    "title": "Spice Rack",
    "category": "kitchen-accessories",
    "price": 19.99,
    "rating": 4.05
  },
  {
    "id": 74,
    "title": "Spoon",
    "category": "kitchen-accessories",
    "price": 4.99,
    "rating": 3.98
  },
  {
    "id": 75,
    "title": "Tray",
    "category": "kitchen-accessories",
    "price": 16.99,
    "rating": 3.2
  },
  {
    "id": 76,
    "title": "Wooden Rolling Pin",
    "category": "kitchen-accessories",
    "price": 11.99,
    "rating": 4.99
  },
  {
    "id": 77,
    "title": "Yellow Peeler",
    "category": "kitchen-accessories",
    "price": 5.99,
    "rating": 4.41
  },
  {
    "id": 78,
    "title": "Apple MacBook Pro 14 Inch Space Grey",
    "category": "laptops",
    "price": 1999.99,
    "rating": 3.13,
    "brand": "Apple"
  },
  {
    "id": 79,
    "title": "Asus Zenbook Pro Dual Screen Laptop",
    "category": "laptops",
    "price": 1799.99,
    "rating": 3.14,
    "brand": "Asus"
  },
  {
    "id": 80,
    "title": "Huawei Matebook X Pro",
    "category": "laptops",
    "price": 1399.99,
    "rating": 4.62,
    "brand": "Huawei"
  },
  {
    "id": 81,
    "title": "Lenovo Yoga 920",
    "category": "laptops",
    "price": 1099.99,
    "rating": 2.98,
    "brand": "Lenovo"
  },
  {
    "id": 82,
    "title": "New DELL XPS 13 9300 Laptop",
    "category": "laptops",
    "price": 1499.99,
    "rating": 2.98,
    "brand": "Dell"
  },
  {
    "id": 83,
    "title": "Blue & Black Check Shirt",
    "category": "mens-shirts",
    "price": 29.99,
    "rating": 4.19,
    "brand": "Fashion Trends"
  },
  {
    "id": 84,
    "title": "Gigabyte Aorus Men Tshirt",
    "category": "mens-shirts",
    "price": 24.99,
    "rating": 4.95,
    "brand": "Gigabyte"
  },
  {
    "id": 85,
    "title": "Man Plaid Shirt",
    "category": "mens-shirts",
    "price": 34.99,
    "rating": 3.66,
    "brand": "Classic Wear"
  },
  {
    "id": 86,
    "title": "Man Short Sleeve Shirt",
    "category": "mens-shirts",
    "price": 19.99,
    "rating": 4.62,
    "brand": "Casual Comfort"
  },
  {
    "id": 87,
    "title": "Men Check Shirt",
    "category": "mens-shirts",
    "price": 27.99,
    "rating": 2.9,
    "brand": "Urban Chic"
  },
  {
    "id": 88,
    "title": "Nike Air Jordan 1 Red And Black",
    "category": "mens-shoes",
    "price": 149.99,
    "rating": 2.77,
    "brand": "Nike"
  },
  {
    "id": 89,
    "title": "Nike Baseball Cleats",
    "category": "mens-shoes",
    "price": 79.99,
    "rating": 4.01,
    "brand": "Nike"
  },
  {
    "id": 90,
    "title": "Puma Future Rider Trainers",
    "category": "mens-shoes",
    "price": 89.99,
    "rating": 4.85,
    "brand": "Puma"
  },
  {
    "id": 91,
    "title": "Sports Sneakers Off White & Red",
    "category": "mens-shoes",
    "price": 119.99,
    "rating": 4.92,
    "brand": "Off White"
  },
  {
    "id": 92,
    "title": "Sports Sneakers Off White Red",
    "category": "mens-shoes",
    "price": 109.99,
    "rating": 2.95,
    "brand": "Off White"
  },
  {
    "id": 93,
    "title": "Brown Leather Belt Watch",
    "category": "mens-watches",
    "price": 89.99,
    "rating": 4.47,
    "brand": "Fashion Timepieces"
  },
  {
    "id": 94,
    "title": "Longines Master Collection",
    "category": "mens-watches",
    "price": 1499.99,
    "rating": 2.64,
    "brand": "Longines"
  },
  {
    "id": 95,
    "title": "Rolex Cellini Date Black Dial",
    "category": "mens-watches",
    "price": 8999.99,
    "rating": 3.61,
    "brand": "Rolex"
  },
  {
    "id": 96,
    "title": "Rolex Cellini Moonphase",
    "category": "mens-watches",
    "price": 12999.99,
    "rating": 4.52,
    "brand": "Rolex"
  },
  {
    "id": 97,
    "title": "Rolex Datejust",
    "category": "mens-watches",
    "price": 10999.99,
    "rating": 4.94,
    "brand": "Rolex"
  },
  {
    "id": 98,
    "title": "Rolex Submariner Watch",
    "category": "mens-watches",
    "price": 13999.99,
    "rating": 2.97,
    "brand": "Rolex"
  },
  {
    "id": 99,
    "title": "Amazon Echo Plus",
    "category": "mobile-accessories",
    "price": 99.99,
    "rating": 3.52,
    "brand": "Amazon"
  },
  {
    "id": 100,
    "title": "Apple Airpods",
    "category": "mobile-accessories",
    "price": 129.99,
    "rating": 4.38,
    "brand": "Apple"
  },
  {
    "id": 101,
    "title": "Apple AirPods Max Silver",
    "category": "mobile-accessories",
    "price": 549.99,
    "rating": 3.11,
    "brand": "Apple"
  },
  {
    "id": 102,
    "title": "Apple Airpower Wireless Charger",
    "category": "mobile-accessories",
    "price": 79.99,
    "rating": 4.51,
    "brand": "Apple"
  },
  {
    "id": 103,
    "title": "Apple HomePod Mini Cosmic Grey",
    "category": "mobile-accessories",
    "price": 99.99,
    "rating": 4.51,
    "brand": "Apple"
  },
  {
    "id": 104,
    "title": "Apple iPhone Charger",
    "category": "mobile-accessories",
    "price": 19.99,
    "rating": 3.03,
    "brand": "Apple"
  },
  {
    "id": 105,
    "title": "Apple MagSafe Battery Pack",
    "category": "mobile-accessories",
    "price": 99.99,
    "rating": 2.61,
    "brand": "Apple"
  },
  {
    "id": 106,
    "title": "Apple Watch Series 4 Gold",
    "category": "mobile-accessories",
    "price": 349.99,
    "rating": 4.42,
    "brand": "Apple"
  },
  {
    "id": 107,
    "title": "Beats Flex Wireless Earphones",
    "category": "mobile-accessories",
    "price": 49.99,
    "rating": 4.17,
    "brand": "Beats"
  },
  {
    "id": 108,
    "title": "iPhone 12 Silicone Case with MagSafe Plum",
    "category": "mobile-accessories",
    "price": 29.99,
    "rating": 4.41,
    "brand": "Apple"
  },
  {
    "id": 109,
    "title": "Monopod",
    "category": "mobile-accessories",
    "price": 19.99,
    "rating": 2.99,
    "brand": "TechGear"
  },
  {
    "id": 110,
    "title": "Selfie Lamp with iPhone",
    "category": "mobile-accessories",
    "price": 14.99,
    "rating": 2.84,
    "brand": "GadgetMaster"
  },
  {
    "id": 111,
    "title": "Selfie Stick Monopod",
    "category": "mobile-accessories",
    "price": 12.99,
    "rating": 2.93,
    "brand": "SnapTech"
  },
  {
    "id": 112,
    "title": "TV Studio Camera Pedestal",
    "category": "mobile-accessories",
    "price": 499.99,
    "rating": 4.05,
    "brand": "ProVision"
  },
  {
    "id": 113,
    "title": "Generic Motorcycle",
    "category": "motorcycle",
    "price": 3999.99,
    "rating": 4.85,
    "brand": "Generic Motors"
  },
  {
    "id": 114,
    "title": "Kawasaki Z800",
    "category": "motorcycle",
    "price": 8999.99,
    "rating": 4.06,
    "brand": "Kawasaki"
  },
  {
    "id": 115,
    "title": "MotoGP CI.H1",
    "category": "motorcycle",
    "price": 14999.99,
    "rating": 4.15,
    "brand": "MotoGP"
  },
  {
    "id": 116,
    "title": "Scooter Motorcycle",
    "category": "motorcycle",
    "price": 2999.99,
    "rating": 3.33,
    "brand": "ScootMaster"
  },
  {
    "id": 117,
    "title": "Sportbike Motorcycle",
    "category": "motorcycle",
    "price": 7499.99,
    "rating": 2.97,
    "brand": "SpeedMaster"
  },
  {
    "id": 118,
    "title": "Attitude Super Leaves Hand Soap",
    "category": "skin-care",
    "price": 8.99,
    "rating": 4.68,
    "brand": "Attitude"
  },
  {
    "id": 119,
    "title": "Olay Ultra Moisture Shea Butter Body Wash",
    "category": "skin-care",
    "price": 12.99,
    "rating": 4.81,
    "brand": "Olay"
  },
  {
    "id": 120,
    "title": "Vaseline Men Body and Face Lotion",
    "category": "skin-care",
    "price": 9.99,
    "rating": 3.97,
    "brand": "Vaseline"
  },
  {
    "id": 121,
    "title": "iPhone 5s",
    "category": "smartphones",
    "price": 199.99,
    "rating": 3.92,
    "brand": "Apple"
  },
  {
    "id": 122,
    "title": "iPhone 6",
    "category": "smartphones",
    "price": 299.99,
    "rating": 3.76,
    "brand": "Apple"
  },
  {
    "id": 123,
    "title": "iPhone 13 Pro",
    "category": "smartphones",
    "price": 1099.99,
    "rating": 3.42,
    "brand": "Apple"
  },
  {
    "id": 124,
    "title": "iPhone X",
    "category": "smartphones",
    "price": 899.99,
    "rating": 4.96,
    "brand": "Apple"
  },
  {
    "id": 125,
    "title": "Oppo A57",
    "category": "smartphones",
    "price": 249.99,
    "rating": 3.1,
    "brand": "Oppo"
  },
  {
    "id": 126,
    "title": "Oppo F19 Pro Plus",
    "category": "smartphones",
    "price": 399.99,
    "rating": 2.57,
    "brand": "Oppo"
  },
  {
    "id": 127,
    "title": "Oppo K1",
    "category": "smartphones",
    "price": 299.99,
    "rating": 3.39,
    "brand": "Oppo"
  },
  {
    "id": 128,
    "title": "Realme C35",
    "category": "smartphones",
    "price": 149.99,
    "rating": 2.56,
    "brand": "Realme"
  },
  {
    "id": 129,
    "title": "Realme X",
    "category": "smartphones",
    "price": 299.99,
    "rating": 4.42,
    "brand": "Realme"
  },
  {
    "id": 130,
    "title": "Realme XT",
    "category": "smartphones",
    "price": 349.99,
    "rating": 4.14,
    "brand": "Realme"
  },
  {
    "id": 131,
    "title": "Samsung Galaxy S7",
    "category": "smartphones",
    "price": 299.99,
    "rating": 4.9,
    "brand": "Samsung"
  },
  {
    "id": 132,
    "title": "Samsung Galaxy S8",
    "category": "smartphones",
    "price": 499.99,
    "rating": 3.69,
    "brand": "Samsung"
  },
  {
    "id": 133,
    "title": "Samsung Galaxy S10",
    "category": "smartphones",
    "price": 699.99,
    "rating": 2.81,
    "brand": "Samsung"
  },
  {
    "id": 134,
    "title": "Vivo S1",
    "category": "smartphones",
    "price": 249.99,
    "rating": 2.83,
    "brand": "Vivo"
  },
  {
    "id": 135,
    "title": "Vivo V9",
    "category": "smartphones",
    "price": 299.99,
    "rating": 3.1,
    "brand": "Vivo"
  },
  {
    "id": 136,
    "title": "Vivo X21",
    "category": "smartphones",
    "price": 499.99,
    "rating": 2.75,
    "brand": "Vivo"
  },
  {
    "id": 137,
    "title": "American Football",
    "category": "sports-accessories",
    "price": 19.99,
    "rating": 3.78
  },
  {
    "id": 138,
    "title": "Baseball Ball",
    "category": "sports-accessories",
    "price": 8.99,
    "rating": 4.76
  },
  {
    "id": 139,
    "title": "Baseball Glove",
    "category": "sports-accessories",
    "price": 24.99,
    "rating": 2.72
  },
  {
    "id": 140,
    "title": "Basketball",
    "category": "sports-accessories",
    "price": 14.99,
    "rating": 4.15
  },
  {
    "id": 141,
    "title": "Basketball Rim",
    "category": "sports-accessories",
    "price": 39.99,
    "rating": 4.98
  },
  {
    "id": 142,
    "title": "Cricket Ball",
    "category": "sports-accessories",
    "price": 12.99,
    "rating": 4.43
  },
  {
    "id": 143,
    "title": "Cricket Bat",
    "category": "sports-accessories",
    "price": 29.99,
    "rating": 3.07
  },
  {
    "id": 144,
    "title": "Cricket Helmet",
    "category": "sports-accessories",
    "price": 44.99,
    "rating": 3.34
  },
  {
    "id": 145,
    "title": "Cricket Wicket",
    "category": "sports-accessories",
    "price": 29.99,
    "rating": 4.16
  },
  {
    "id": 146,
    "title": "Feather Shuttlecock",
    "category": "sports-accessories",
    "price": 5.99,
    "rating": 3.95
  },
  {
    "id": 147,
    "title": "Football",
    "category": "sports-accessories",
    "price": 17.99,
    "rating": 3.94
  },
  {
    "id": 148,
    "title": "Golf Ball",
    "category": "sports-accessories",
    "price": 9.99,
    "rating": 4.84
  },
  {
    "id": 149,
    "title": "Iron Golf",
    "category": "sports-accessories",
    "price": 49.99,
    "rating": 4.87
  },
  {
    "id": 150,
    "title": "Metal Baseball Bat",
    "category": "sports-accessories",
    "price": 29.99,
    "rating": 4.11
  },
  {
    "id": 151,
    "title": "Tennis Ball",
    "category": "sports-accessories",
    "price": 6.99,
    "rating": 4.77
  },
  {
    "id": 152,
    "title": "Tennis Racket",
    "category": "sports-accessories",
    "price": 49.99,
    "rating": 3.82
  },
  {
    "id": 153,
    "title": "Volleyball",
    "category": "sports-accessories",
    "price": 11.99,
    "rating": 4.08
  },
  {
    "id": 154,
    "title": "Black Sun Glasses",
    "category": "sunglasses",
    "price": 29.99,
    "rating": 3.23,
    "brand": "Fashion Shades"
  },
  {
    "id": 155,
    "title": "Classic Sun Glasses",
    "category": "sunglasses",
    "price": 24.99,
    "rating": 2.99,
    "brand": "Fashion Shades"
  },
  {
    "id": 156,
    "title": "Green and Black Glasses",
    "category": "sunglasses",
    "price": 34.99,
    "rating": 2.84,
    "brand": "Fashion Shades"
  },
  {
    "id": 157,
    "title": "Party Glasses",
    "category": "sunglasses",
    "price": 19.99,
    "rating": 3.21,
    "brand": "Fashion Fun"
  },
  {
    "id": 158,
    "title": "Sunglasses",
    "category": "sunglasses",
    "price": 22.99,
    "rating": 2.58,
    "brand": "Fashion Shades"
  },
  {
    "id": 159,
    "title": "iPad Mini 2021 Starlight",
    "category": "tablets",
    "price": 499.99,
    "rating": 3.87,
    "brand": "Apple"
  },
  {
    "id": 160,
    "title": "Samsung Galaxy Tab S8 Plus Grey",
    "category": "tablets",
    "price": 599.99,
    "rating": 3.43,
    "brand": "Samsung"
  },
  {
    "id": 161,
    "title": "Samsung Galaxy Tab White",
    "category": "tablets",
    "price": 349.99,
    "rating": 3.7,
    "brand": "Samsung"
  },
  {
    "id": 162,
    "title": "Blue Frock",
    "category": "tops",
    "price": 29.99,
    "rating": 3.57
  },
  {
    "id": 163,
    "title": "Girl Summer Dress",
    "category": "tops",
    "price": 19.99,
    "rating": 2.67
  },
  {
    "id": 164,
    "title": "Gray Dress",
    "category": "tops",
    "price": 34.99,
    "rating": 3.49
  },
  {
    "id": 165,
    "title": "Short Frock",
    "category": "tops",
    "price": 24.99,
    "rating": 4.63
  },
  {
    "id": 166,
    "title": "Tartan Dress",
    "category": "tops",
    "price": 39.99,
    "rating": 2.82
  },
  {
    "id": 167,
    "title": "300 Touring",
    "category": "vehicle",
    "price": 28999.99,
    "rating": 4.56,
    "brand": "Chrysler"
  },
  {
    "id": 168,
    "title": "Charger SXT RWD",
    "category": "vehicle",
    "price": 32999.99,
    "rating": 2.92,
    "brand": "Dodge"
  },
  {
    "id": 169,
    "title": "Dodge Hornet GT Plus",
    "category": "vehicle",
    "price": 24999.99,
    "rating": 3.93,
    "brand": "Dodge"
  },
  {
    "id": 170,
    "title": "Durango SXT RWD",
    "category": "vehicle",
    "price": 36999.99,
    "rating": 3.47,
    "brand": "Dodge"
  },
  {
    "id": 171,
    "title": "Pacifica Touring",
    "category": "vehicle",
    "price": 31999.99,
    "rating": 2.96,
    "brand": "Chrysler"
  },
  {
    "id": 172,
    "title": "Blue Women's Handbag",
    "category": "womens-bags",
    "price": 49.99,
    "rating": 3.37,
    "brand": "Fashionista"
  },
  {
    "id": 173,
    "title": "Heshe Women's Leather Bag",
    "category": "womens-bags",
    "price": 129.99,
    "rating": 2.62,
    "brand": "Heshe"
  },
  {
    "id": 174,
    "title": "Prada Women Bag",
    "category": "womens-bags",
    "price": 599.99,
    "rating": 3.52,
    "brand": "Prada"
  },
  {
    "id": 175,
    "title": "White Faux Leather Backpack",
    "category": "womens-bags",
    "price": 39.99,
    "rating": 4.91,
    "brand": "Urban Chic"
  },
  {
    "id": 176,
    "title": "Women Handbag Black",
    "category": "womens-bags",
    "price": 59.99,
    "rating": 4.94,
    "brand": "Elegance Collection"
  },
  {
    "id": 177,
    "title": "Black Women's Gown",
    "category": "womens-dresses",
    "price": 129.99,
    "rating": 4.77
  },
  {
    "id": 178,
    "title": "Corset Leather With Skirt",
    "category": "womens-dresses",
    "price": 89.99,
    "rating": 2.52
  },
  {
    "id": 179,
    "title": "Corset With Black Skirt",
    "category": "womens-dresses",
    "price": 79.99,
    "rating": 3
  },
  {
    "id": 180,
    "title": "Dress Pea",
    "category": "womens-dresses",
    "price": 49.99,
    "rating": 2.92
  },
  {
    "id": 181,
    "title": "Marni Red & Black Suit",
    "category": "womens-dresses",
    "price": 179.99,
    "rating": 4.17
  },
  {
    "id": 182,
    "title": "Green Crystal Earring",
    "category": "womens-jewellery",
    "price": 29.99,
    "rating": 2.94
  },
  {
    "id": 183,
    "title": "Green Oval Earring",
    "category": "womens-jewellery",
    "price": 24.99,
    "rating": 2.54
  },
  {
    "id": 184,
    "title": "Tropical Earring",
    "category": "womens-jewellery",
    "price": 19.99,
    "rating": 3.32
  },
  {
    "id": 185,
    "title": "Black & Brown Slipper",
    "category": "womens-shoes",
    "price": 19.99,
    "rating": 4.13,
    "brand": "Comfort Trends"
  },
  {
    "id": 186,
    "title": "Calvin Klein Heel Shoes",
    "category": "womens-shoes",
    "price": 79.99,
    "rating": 4.06,
    "brand": "Calvin Klein"
  },
  {
    "id": 187,
    "title": "Golden Shoes Woman",
    "category": "womens-shoes",
    "price": 49.99,
    "rating": 4.82,
    "brand": "Fashion Diva"
  },
  {
    "id": 188,
    "title": "Pampi Shoes",
    "category": "womens-shoes",
    "price": 29.99,
    "rating": 3.01,
    "brand": "Pampi"
  },
  {
    "id": 189,
    "title": "Red Shoes",
    "category": "womens-shoes",
    "price": 34.99,
    "rating": 4.23,
    "brand": "Fashion Express"
  },
  {
    "id": 190,
    "title": "IWC Ingenieur Automatic Steel",
    "category": "womens-watches",
    "price": 4999.99,
    "rating": 2.58,
    "brand": "IWC"
  },
  {
    "id": 191,
    "title": "Rolex Cellini Moonphase",
    "category": "womens-watches",
    "price": 15999.99,
    "rating": 3.41,
    "brand": "Rolex"
  },
  {
    "id": 192,
    "title": "Rolex Datejust Women",
    "category": "womens-watches",
    "price": 10999.99,
    "rating": 3.53,
    "brand": "Rolex"
  },
  {
    "id": 193,
    "title": "Watch Gold for Women",
    "category": "womens-watches",
    "price": 799.99,
    "rating": 3.03,
    "brand": "Fashion Gold"
  },
  {
    "id": 194,
    "title": "Women's Wrist Watch",
    "category": "womens-watches",
    "price": 129.99,
    "rating": 2.93,
    "brand": "Fashion Co."
  }
];

module.exports = products