export default function getShuffledArray(arr) {
  return arr.toSorted(() => Math.random() - 0.5);
}
