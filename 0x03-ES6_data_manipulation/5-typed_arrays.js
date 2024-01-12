export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer, 0, length);

  if (position < length) {
    view.setInt8(position, value);
    return view;
  }
  throw Error('Position outside range');
}
