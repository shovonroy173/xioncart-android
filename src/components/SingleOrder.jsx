import {View, Text, Image} from 'react-native';
import React from 'react';
import ThemedView from '../utils/ThemedView';
import ThemedText from '../utils/ThemedText';
import ThemedPressable from '../utils/ThemedPressable';
import ThemedText2 from '../utils/ThemeText2';
import TabViewComponent from './TabViewComponent';

const SingleOrder = ({order}) => {
  console.log('single order', order);
  const formattedDate = isoDate => {
    const date = new Date(isoDate);

    // Extract date parts
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    // Convert to 12-hour format
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 0 => 12 for midnight

    // Combine all
    return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
  };
  return (
    <ThemedView>
      {order?.products.map(item => (
        <ThemedView
          key={item?._id}
          styles="border border-zinc-300 rounded-md p-2 self-start">
          <Image
            source={{uri: item?.product?.images[0]?.small}}
            className="w-20 h-32 object-contain"
          />
          <ThemedText>{item?.quantity}</ThemedText>
        </ThemedView>
      ))}
      <ThemedText styles="bg-red-500 py-2 px-3 rounded-md self-start font-Regular">
        {order?.status}
      </ThemedText>
      <ThemedText styles="font-Regular">
        Order #{order?.orderNo} (৳{order?.totalPrice} BDT)
      </ThemedText>
      <View className="bg-zinc-300 h-[1px] w-full" />
      <ThemedView>
        <ThemedText styles="font-Regular">Start Time</ThemedText>
        <ThemedText styles="font-Regular">
          {formattedDate(order?.createdAt)}
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedText styles="font-Regular">Address</ThemedText>
        <ThemedText styles="font-Regular">
          {order?.shippingAddress?.address}, {order?.shippingAddress?.upazila},{' '}
          {order?.shippingAddress?.city}, {order?.shippingAddress?.division},{' '}
          {order?.shippingAddress?.country}{' '}
        </ThemedText>
        {order?.totalPrice - order?.remainingTotalPrice >= 0 && (
          <ThemedView>
            <Text className="text-red-500 font-Regular">
              Payment is not completed! (
              {order?.totalPrice - order?.remainingTotalPrice} taka)
            </Text>
            <ThemedPressable styles="py-2 px-4 rounded-md self-start">
              <ThemedText2 styles="font-Medium">Pay Now</ThemedText2>
            </ThemedPressable>
          </ThemedView>
        )}
      </ThemedView>
      <TabViewComponent item={order && order} type="order" />
    </ThemedView>
  );
};

export default SingleOrder;
