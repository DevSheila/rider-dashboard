export const MOCK_PHOTOS = {
  ride: [
    "https://images.ctfassets.net/tk7rwcciwvbq/5sFuNXNUd0fObgDiHqTKLo/3a762c0981fbda34a2120f7f25e878ab/category-bolt.png",
    "https://images.ctfassets.net/tk7rwcciwvbq/72GFjpNJ4JsLk4YqV6mswj/c886f22864c0052256df09c5dbafc51d/category-premium.png",
    "https://static.wixstatic.com/media/cb820c_3fd6b16857034eb6a6f6c1be93d1b1e1~mv2.png/v1/fill/w_207,h_124,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Green%20Tesla.png",
  
],
  driver: [
    "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1672907030834-d04f7f990528?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBtYW58ZW58MHx8MHx8fDA%3D",
  ],
};
export const RIDE_TYPES = ["Economy", "Business", "Luxury"];

export const CAR_MODELS = [
  "Toyota Prius",
  "Honda Civic",
  "Ford Focus",
  "Nissan Altima",
];
export const CAR_PLATES = ["KCA 123Y", "KDB 456X", "KCE 789Z", "KDF 101A"];
export const PHONE_NUMBERS = [
  "+254710617776",
  "+254711234567",
  "+254722345678",
  "+254733456789",
];

export const getRandomItem = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

