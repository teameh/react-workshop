export default function randomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}
