import {Text, TouchableOpacity} from 'react-native';
import ThemedText from '../utils/ThemedText';
import ThemedView from '../utils/ThemedView';

export const Dashboard = ({item, setIndex}) => {
  return (
    <ThemedView styles="gap-2">
      <ThemedText styles="font-Medium text-lg">Hello, {item?.name}</ThemedText>
      <ThemedView styles="flex-row flex-wrap gap-1">
        <TouchableOpacity onPress={() => setIndex(1)}>
          <Text className="text-red-500 font-Regular">recent orders</Text>
        </TouchableOpacity>
        <ThemedText styles="font-Regular">, manage your</ThemedText>
        <TouchableOpacity onPress={() => setIndex(2)}>
          <Text className="text-red-500 font-Regular">
            shipping and billing addresses
          </Text>
        </TouchableOpacity>
        <ThemedText styles="font-Regular">, and</ThemedText>
        <TouchableOpacity onPress={() => setIndex(3)}>
          <Text className="text-red-500 font-Regular">
            edit your password and account details
          </Text>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
  );
};

export const AccountDetails = ({item}) => {
  return (
    <ThemedView>
      <ThemedText>
        Name: {item?.name}
      </ThemedText>
      <ThemedText>Phone: {item?.phone}</ThemedText>
      <ThemedText>Email: {item?.email}</ThemedText>
    </ThemedView>
  );
};
