import {View} from 'react-native';
import ThemedText from '../utils/ThemedText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useThemeColor} from '../utils/useThemeColor';
import ThemedViewLightGray from '../utils/ThemedViewLightGray';

export const DescriptionRoute = ({item}) => {
  return (
    <ThemedViewLightGray onLayout={() => {}} styles="px-4 py-5 gap-4">
      <ThemedText styles="font-Medium text-xl">Description</ThemedText>
      <ThemedText styles="font-Regular">{item?.description || 'No Description' }</ThemedText>
    </ThemedViewLightGray>
  );
};

export const ReviewRoute = () => {
  const {icon} = useThemeColor();

  return (
    <ThemedViewLightGray styles="px-4 py-5 gap-4">
      <ThemedText styles="font-Medium text-xl">Customer Reviews</ThemedText>
      <View className="gap-1">
        <View className="flex-row gap-2 items-center bg-">
          <Ionicons name="person-circle-outline" size={20} color={icon} />
          <ThemedText styles="font-Regular">Md. Hossen</ThemedText>
        </View>
        <ThemedText styles="font-Regular">Rating: 5 ⭐</ThemedText>
        <ThemedText styles="font-Regular">Nice cut</ThemedText>
      </View>
    </ThemedViewLightGray>
  );
};

export const ShippingRoute = () => {
  return (
    <ThemedViewLightGray onLayout={() => {}} styles="px-4 py-5 gap-4">
      <ThemedText styles="font-Medium text-xl">
        The Company Private Limited Policy
      </ThemedText>{' '}
      <ThemedText styles="font-Regular">
        The Company Private Limited and each of their respective subsidiary,
        parent and affiliated companies is deemed to operate this Website (“we”
        or “us”) recognizes that you care how information about you is used and
        shared. We have created this Privacy Policy to inform you what
        information we collect on the Website, how we use your information and
        the choices you have about the way your information is collected and
        used. Please read this Privacy Policy carefully. Your use of the Website
        indicates that you have read and accepted our privacy practices, as
        outlined in this Privacy Policy.
      </ThemedText>
      <ThemedText styles="font-Regular">
        Please be advised that the practices described in this Privacy Policy
        apply to information gathered by us or our subsidiaries, affiliates or
        agents: (i) through this Website, (ii) where applicable, through our
        Customer Service Department in connection with this Website, (iii)
        through information provided to us in our free standing retail stores,
        and (iv) through information provided to us in conjunction with
        marketing promotions and sweepstakes.
      </ThemedText>
      <ThemedText styles="font-Regular">
        We are not responsible for the content or privacy practices on any
        websites.
      </ThemedText>
      <ThemedText styles="font-Regular">
        We reserve the right, in our sole discretion, to modify, update, add to,
        discontinue, remove or otherwise change any portion of this Privacy
        Policy, in whole or in part, at any time. When we amend this Privacy
        Policy, we will revise the “last updated” date located at the top of
        this Privacy Policy.
      </ThemedText>
      <ThemedText styles="font-Regular">
        If you provide information to us or access or use the Website in any way
        after this Privacy Policy has been changed, you will be deemed to have
        unconditionally consented and agreed to such changes. The most current
        version of this Privacy Policy will be available on the Website and will
        supersede all previous versions of this Privacy Policy.
      </ThemedText>
      <ThemedText styles="font-Regular">
        If you have any questions regarding this Privacy Policy, you should
        contact our Customer Service Department by email at
        marketing@company.com
      </ThemedText>
    </ThemedViewLightGray>
  );
};

export const ReturnPolicyRoute = () => {
  return (
    <ThemedViewLightGray onLayout={() => {}} styles="px-4 py-5 gap-4">
      <ThemedText styles="font-Medium text-xl">Return Policy</ThemedText>
      <ThemedText styles="font-Regular">
        LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt
      </ThemedText>
    </ThemedViewLightGray>
  );
};
