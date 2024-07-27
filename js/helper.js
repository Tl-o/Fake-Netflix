// Helper Functions //
export function CreateUser(username, profilePicture, preference, watched) {
  this.username = username;
  this.profilePicture = profilePicture;
  this.preference = preference;
  this.watched = watched;
}

export function CreateShow(name, thumbnail, genres) {
  this.name = name;
  this.thumbnail = thumbnail;
  this.genres = genres;
}

export function shuffleArray(arr) {
  let currIndex = arr.length;

  while (currIndex != 0) {
    let randomElement = Math.floor(Math.random() * currIndex);
    currIndex--;

    [arr[currIndex], arr[randomElement]] = [arr[randomElement], arr[currIndex]];
  }

  return arr;
}

export function autoResolvePromise() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Done!'), 2000);
  });
}
