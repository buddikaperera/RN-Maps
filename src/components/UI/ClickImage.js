// import React, {useState} from 'react';
// // Import Required Components
// import {View, Text, StyleSheet, Image} from 'react-native';

// //Import ImageMapper Component
// import ImageMapper from 'react-native-image-mapper';
// import {IMAGE} from '../HumanImage';

// const getRandomColor = () => {
//   //Function to return random color
//   //To highlight the mapping area
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
//   return color;
// };

// const ClickImage = () => {
//   //State for the selected area
//   const [selectedAreaId, setSelectedAreaId] = useState([]);

//   const mapperAreaClickHandler = async (item, idx, event) => {
//     const currentSelectedAreaId = selectedAreaId;
//     if (Array.isArray(currentSelectedAreaId)) {
//       const indexInState = currentSelectedAreaId.indexOf(item.id);
//       if (indexInState !== -1) {
//         console.log('Removing id', item.id);
//         setSelectedAreaId([
//           ...currentSelectedAreaId.slice(0, indexInState),
//           ...currentSelectedAreaId.slice(indexInState + 1),
//         ]);
//       } else {
//         alert(`Clicked Item Id: ${item.id}`);
//         console.log('Setting Id', item.id);
//         setSelectedAreaId([...currentSelectedAreaId, item.id]);
//       }
//     } else {
//       if (item.id === currentSelectedAreaId) {
//         setSelectedAreaId(null);
//       } else {
//         setSelectedAreaId(item.id);
//       }
//     }
//   };

//   return (
//     <View style={{flex: 1, alignItems: 'center', padding: 30}}>
//       <ImageMapper
//         imgHeight={551}
//         imgWidth={244}
//         // imgSource={{
//         //uri: 'https://raw.githubusercontent.com/msalo3/react-native-image-mapper/master/Examples/human.png',
//         // }}
//         imgSource={IMAGE.ICON_HUMAN}
//         imgMap={RECTANGLE_MAP}
//         onPress={(item, idx, event) => mapperAreaClickHandler(item, idx, event)}
//         containerStyle={{top: 10}}
//         selectedAreaId={selectedAreaId}
//         multiselect
//       />
//       <View style={{position: 'absolute', paddingTop: 225}}>
//         <Text style={{fontSize: 34}}>4</Text>
//       </View>
//     </View>
//   );
// };

// export default ClickImage;

// // Maps to Create Clickable Areas
// const RECTANGLE_MAP = [
//   {
//     id: '0',
//     name: 'Left Foot',
//     shape: 'rectangle',
//     x2: 110,
//     y2: 540,
//     x1: 80,
//     y1: 500,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '1',
//     name: 'Right Foot',
//     shape: 'rectangle',
//     x2: 155,
//     y2: 540,
//     x1: 125,
//     y1: 500,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '2',
//     name: 'Left Knee',
//     shape: 'rectangle',
//     x2: 110,
//     y2: 400,
//     x1: 80,
//     y1: 370,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '3',
//     name: 'Right Knee',
//     shape: 'rectangle',
//     x2: 155,
//     y2: 400,
//     x1: 125,
//     y1: 370,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '4',
//     name: 'Stomach',
//     title: '11',
//     shape: 'rectangle',
//     x2: 155,
//     y2: 240,
//     x1: 80,
//     y1: 165,
//     prefill: getRandomColor(),
//     fill: 'red',
//   },

//   {
//     id: '5',
//     name: 'Left Hand',
//     shape: 'rectangle',
//     x2: 40,
//     y2: 315,
//     x1: 5,
//     y1: 250,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '6',
//     name: 'Right Hand',
//     shape: 'rectangle',
//     x2: 235,
//     y2: 315,
//     x1: 200,
//     y1: 250,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '7',
//     name: 'Face',
//     shape: 'rectangle',
//     x2: 145,
//     y2: 70,
//     x1: 90,
//     y1: 30,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
//   {
//     id: '8',
//     name: 'Head',
//     shape: 'rectangle',
//     Text: 'sssssssssss',
//     x2: 145,
//     y2: 30,
//     x1: 90,
//     y1: 0,
//     prefill: getRandomColor(),
//     fill: 'blue',
//   },
// ];

///https://aboutreact.com/react-native-touchable/
///https://aboutreact.com/react-native-pie-chart/
///https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

////https://aboutreact.com/react-native-chart-kit/
///https://aboutreact.com/react-native-capture-signature/
// <View
//   style={{
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   }}>
//   <Image
//     style={{
//       flex: 1,
//       width: 100,
//       height: 100,
//     }}
//     source={require('../imgs/star.png')}
//   />
//   <Text style={{position: 'absolute', fontSize: 20}}>890</Text>
// </View>;

import React, {useState} from 'react';
// Import Required Components
import {View, Text, StyleSheet, Image} from 'react-native';

//Import ImageMapper Component
import ImageMapper from 'react-native-image-mapper';
import {IMAGE} from '../HumanImage';

const Img = require('../../assets/images/Samanvai-Art-Gallery.jpg');

const getRandomColor = () => {
  //Function to return random color
  //To highlight the mapping area
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
};

const ClickImage = () => {
  //State for the selected area
  const [selectedAreaId, setSelectedAreaId] = useState([]);

  const mainImgWasPressed = async (item, idx, event) => {
    const currentSelectedAreaId = selectedAreaId;
    if (Array.isArray(currentSelectedAreaId)) {
      const indexInState = currentSelectedAreaId.indexOf(item.id);
      if (indexInState !== -1) {
        console.log('Removing id', item.id);
        setSelectedAreaId([
          ...currentSelectedAreaId.slice(0, indexInState),
          ...currentSelectedAreaId.slice(indexInState + 1),
        ]);
      } else {
        alert(`Clicked Item Id: ${item.id} ${item.name}`);
        console.log('Setting Id', item.id);
        setSelectedAreaId([...currentSelectedAreaId, item.id]);
      }
    } else {
      if (item.id === currentSelectedAreaId) {
        setSelectedAreaId(null);
      } else {
        setSelectedAreaId(item.id);
      }
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', padding: 30}}>
      <View style={{flex: 1}}>
        <ImageMapper
          imgHeight={551}
          imgWidth={244}
          imgSource={Img}
          imgMap={CIRCLE_MAP}
          onPress={(item, idx, event) => mainImgWasPressed(item, idx, event)}
          name="sss"
          containerStyle={{top: 10}}
          selectedAreaId={selectedAreaId}
        />
      </View>
    </View>
  );
};

export default ClickImage;

// Maps to Create Clickable Areas
const RECTANGLE_MAP = [
  {
    id: '0',
    name: 'Left Foot',
    shape: 'rectangle',
    x2: 110,
    y2: 540,
    x1: 80,
    y1: 500,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '1',
    name: 'Right Foot',
    shape: 'rectangle',
    x2: 155,
    y2: 540,
    x1: 125,
    y1: 500,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '2',
    name: 'Left Knee',
    shape: 'rectangle',
    x2: 110,
    y2: 400,
    x1: 80,
    y1: 370,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '3',
    name: 'Right Knee',
    shape: 'rectangle',
    x2: 155,
    y2: 400,
    x1: 125,
    y1: 370,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '4',
    name: 'Stomach',
    shape: 'rectangle',
    x2: 155,
    y2: 240,
    x1: 80,
    y1: 165,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '5',
    name: 'Left Hand',
    shape: 'rectangle',
    x2: 40,
    y2: 315,
    x1: 5,
    y1: 250,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '6',
    name: 'Right Hand',
    shape: 'rectangle',
    x2: 235,
    y2: 315,
    x1: 200,
    y1: 250,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '7',
    name: 'Face',
    shape: 'rectangle',
    x2: 145,
    y2: 70,
    x1: 90,
    y1: 30,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '8',
    name: 'Head',
    shape: 'rectangle',
    x2: 145,
    y2: 30,
    x1: 90,
    y1: 0,
    prefill: getRandomColor(),
    fill: 'blue',
  },
];

const CIRCLE_MAP = [
  {
    id: '0',
    name: 'Left Foot',
    shape: 'circle',
    x1: 80,
    y1: 500,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '1',
    name: 'Right Foot',
    shape: 'circle',
    x1: 125,
    y1: 500,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '2',
    name: 'Left Knee',
    shape: 'circle',
    x1: 80,
    y1: 370,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '3',
    name: 'Right Knee',
    shape: 'circle',
    x1: 125,
    y1: 370,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '4',
    name: 'Stomach',
    shape: 'circle',
    x1: 80,
    y1: 165,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '5',
    name: 'Left Hand',
    shape: 'circle',
    x1: 5,
    y1: 250,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '6',
    name: 'Right Hand',
    shape: 'circle',
    x1: 200,
    y1: 250,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '7',
    name: 'Face',
    shape: 'circle',
    x1: 90,
    y1: 30,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
  {
    id: '8',
    name: 'Head',
    shape: 'circle',
    x1: 90,
    y1: 0,
    radius: 50,
    prefill: getRandomColor(),
    fill: 'blue',
  },
];
