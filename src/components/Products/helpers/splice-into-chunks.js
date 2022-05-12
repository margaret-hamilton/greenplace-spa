export function spliceIntoChunks(arr = [], chunkSize = 1) {
  const res = [];

  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }

  return res;
}
