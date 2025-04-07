import React, {useState, useEffect, useRef} from 'react';
import {FlatList, Text, View, StyleSheet, Dimensions} from 'react-native';

const AutoScrollFlatList = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {id: '1', title: 'Item 1'},
    {id: '2', title: 'Item 2'},
    {id: '3', title: 'Item 3'},
    {id: '4', title: 'Item 4'},
    {id: '5', title: 'Item 5'},
    {id: '6', title: 'Item 6'},
    {id: '7', title: 'Item 7'},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        const nextIndex = (currentIndex + 1) % data.length; // Loop back to the first item
        setCurrentIndex(nextIndex);

        flatListRef.current.scrollToIndex({
          animated: true,
          index: nextIndex,
        });
      }
    }, 3000); // Auto scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [data.length, currentIndex]);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width); // Adjust 200 to your item width
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width} // Adjust item width
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16} // Throttle scroll events for smooth performance
      />

      <View style={styles.indicatorContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
};
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  item: {
    width: width, // Set item width
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
    margin: 5,
  },
  activeIndicator: {
    backgroundColor: '#47A146', // Active indicator color
  },
});

export default AutoScrollFlatList;
