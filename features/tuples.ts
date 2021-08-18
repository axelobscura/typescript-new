const drink = {
  color: 'brown',
  carbonated: true,
  sugra: 40
};

type Drink = [string, boolean, number];

// consistent order of elements inside the array
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];