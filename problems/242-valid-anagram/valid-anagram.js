/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const sHash = new Map();
  const tHash = new Map();
  for (let i = 0; i < s.length; i++) {
    sHash.has(s[i]) ? sHash.set(s[i], sHash.get(s[i]) + 1) : sHash.set(s[i], 1);
  }
  for (let i = 0; i < t.length; i++) {
    tHash.has(t[i]) ? tHash.set(t[i], tHash.get(t[i]) + 1) : tHash.set(t[i], 1);
  } 
  for (const [key, value] of sHash.entries()) {
    if (tHash.get(key) !== value) return false;
  }
  return true;
};