/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import Carousel, {Pagination} from 'react-native-reanimated-carousel';

const data = [...new Array(6).keys()];
const {width, height} = Dimensions.get('window');

function AutoScrollFlatList() {
  const ref = React.useRef(null);
  const progress = useSharedValue(0);

  const onPressPagination = index => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.75}
        data={data}
        onProgressChange={progress}
        autoPlay={true}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />

      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 50}}
        containerStyle={{gap: 5, position: 'absolute', bottom: 20}}
        onPress={onPressPagination}
      />
    </View>
  );
}

export default AutoScrollFlatList;
