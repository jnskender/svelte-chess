export default function createNode(position, style) {
  return {
    position,
    piece: null,
    occupied: false,
    style
  }
}
