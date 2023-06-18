function isLetter(letter) {
  if (
    (letter >= "a" && letter <= "z") ||
    (letter >= "A" && letter <= "Z") ||
    letter == " " ||
    letter == "-"
  )
    return true;
  return false;
}

export const genreList = (data) => {
  let genres = [];
  let s = data.subTitle;
  let size = s.length;
  var i = 0;

  while (i < size) {
    if (isLetter(s[i])) {
      let temp = "";

      while (i < size && isLetter(s[i])) {
        temp = temp + s[i];
        ++i;
      }

      if (i >= size || s[i] == ",") {
        genres.push(temp);
      }
    }
    ++i;
    // if (genres.length >= 1) break;
  }

  return genres;
};

export function exits(key, arr) {
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i].name == key || arr[i].image == key) return i;
  }

  return -1;
}
