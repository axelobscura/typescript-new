const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

carMakers.map((car:string): string => {
  return car.toUpperCase();
});

// Flexible types
const importanDates: (Date | string)[] = [new Date(), '2030-10-10'];

importanDates.push('2030-10-10');