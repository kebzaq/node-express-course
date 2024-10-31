console.log("Welcome to Intro to NodeJS!");
// Age generations
const bornYear = 1928;
if (bornYear >= 2013) {
  console.log(`You age range is: Generation Alpha`);
} else if ((bornYear >= 1997) & (bornYear <= 2012)) {
  console.log(`You age range is: Generation Z`);
} else if ((bornYear >= 1981) & (bornYear <= 1996)) {
  console.log(`You age range is: Millenials`);
} else if ((bornYear >= 1965) & (bornYear <= 1980)) {
  console.log(`You age range is: Generation X`);
} else if ((bornYear >= 1946) & (bornYear <= 1964)) {
  console.log(`You age range is: Baby Boomers`);
} else if ((bornYear >= 1928) & (bornYear <= 1945)) {
  console.log(`You age range is: Silent Generation`);
} else {
  console.log(`You age range is: Unknown`);
}
