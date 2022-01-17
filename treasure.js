
var treasureLocation = Math.floor(Math.random()*23)
console.log(treasureLocation)
const treasure = (location) => {
if (location === treasureLocation) {
  alert("YOU WIN!it's pizza time")
 }
}
