import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

const Icomoon = createIconSetFromIcoMoon(
  icomoonConfig,
  'icomoon',
  'icomoon.ttf',
);

const icomoon = {
  book: [30],
  'book-color': [30],
  find: [30],
  'find-color': [30],
  match: [30],
  'match-color': [30],
  megaphone: [30],
  'megaphone-color': [30],
};

const icomoonLoaded = new Promise((resolve, reject) => {
  Promise.all(
    Object.keys(icomoon).map(iconName =>
      Icomoon.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icomoon[iconName][0],
        icomoon[iconName][1],
      ),
    ),
  ).then(sources => {
    Object.keys(icomoon).forEach(
      (iconName, idx) => (iconsMap[iconName] = sources[idx]),
    );
    resolve(true);
  });
});

export {iconsMap, icomoonLoaded};
