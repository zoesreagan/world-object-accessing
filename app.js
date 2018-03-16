const world = {
  places: {
    northAmerica: ["US", "Canada"],
    australia: ["Auckland", "Boomerang"]
  },
  poets: [
    {
      ezraPound: ["the cantos", 'in a station of the metro'],
      alive: false,
    },
    {
      blake: ['The lily', 'sunflower', 'echoing green', 'lost little girl', 'lost boy'],
      alive: false
    },
    {
      whitman: ['Stranger', 'beginners', 'I hear america singing'],
      alive: false
    }
  ],
  food: [
    {
      bbq: {
        pappys: ['smoked meat', 'pulled pork', 'ribs'],
        rogers: ['mmmm i like food', ' yayyaa thats tasty']
      },
      italian: {
        sinatras: ['my way', 'fly me to the moon', 'singing in the rain'],
        tuscany: ['wine', 'berries', 'bread', 'cheese']
      }
    },
    {
      japanese: {
        ramen: ['tonkotsu', 'egg', 'pork', 'chicken Broth'],
      }
    },
    {
      clothes: {
      pajamas: ["nothing", 'long underwear', 't-shirt'],
      formal: ['tuxedo', {suit1: 'blue', suit2: 'turqoise'}]
    }
  }

  ]
}


//print turqoise
// print singing in the rain
// print sunflower
// print boomerang
// print beginners
// print anything else in the object :)

console.log(world.food[2].clothes.formal[1].suit2);

console.log(world.food[0].italian.sinatras[2]);

console.log(world.poets[1].blake[1]);

console.log(world.places.australia[1]);

console.log(world.poets[2].whitman[1]);

console.log(world.food[0].bbq.rogers[1]);
