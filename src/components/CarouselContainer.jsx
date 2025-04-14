/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ThemedView from '../utils/ThemedView';

function CarouselContainer({
  ref,
  data,
  renderItem,
  sliderWidth,
  itemWidth,
  paginationAbove,
  autoPlay,
  loop,
  useScrollView,
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <ThemedView>
      <Carousel
        ref={ref}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        loop={autoPlay || loop}
        // loop={true}
        autoplay={autoPlay}
        autoplayInterval={1000}
        autoplayDelay={500}
        // enableSnap={autoPlay}
        windowSize={10}
        onSnapToItem={index => setActiveSlide(index)}
        activeSlideAlignment="start"
        useScrollView={useScrollView}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={{
          paddingVertical: 10,

          position: paginationAbove && 'absolute',
          bottom: paginationAbove && 20,
          alignSelf: paginationAbove && 'center',
        }}
        dotStyle={{
          width: 10,
          height: 10,
          backgroundColor: '#ef4444',
          borderRadius: 100,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </ThemedView>
  );
}

export default CarouselContainer;
