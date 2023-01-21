const finalParticipants = ['Prachitosh', 'Sourav', 'Vrisha', 'Shree'];

const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);


// const num = [10, 20, 30];
// const num10 = num.map(i => i * 2);
// console.log(num10);

/* 
   The .map() method executes a callback function on each element in an array.
   It returns a new array made up of the return values from the callback function.
   The original array does not get altered, and the returned array may contain different 
   elements than the original array.
*/