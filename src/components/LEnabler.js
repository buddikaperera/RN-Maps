import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
///https://reactnativeexample.com/a-location-enabler-with-react-native/#google_vignette

import LocationEnabler from 'react-native-location-enabler';

const {
  PRIORITIES: {HIGH_ACCURACY},
  useLocationSettings,
} = LocationEnabler;

// React Component
const LEnabler = () => {
  const [enabled, requestResolution] = useLocationSettings(
    {
      priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
      alwaysShow: true, // default false
      needBle: true, // default false
    },
    false /* optional: default undefined */,
  );

  return (
    <View>
      {!enabled && (
        <Button
          onPress={requestResolution}
          title="Request Resolution Location Settings"
        />
      )}
    </View>
  );
};

export default LEnabler;
