import React, {useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import ThemedPressable from '../utils/ThemedPressable';
import ThemedText from '../utils/ThemedText';
import ThemedText2 from '../utils/ThemeText2';
import ThemedView from '../utils/ThemedView';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import ThemedViewLightGray from '../utils/ThemedViewLightGray';
import {tableHeaders} from '../../assets/data';

const CustomTable = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const cellStyle = {
    width: responsiveWidth(30),
    paddingHorizontal: responsiveWidth(3),
    textAlign: 'center',
  };

  const cellStyle2 = {
    minWidth: responsiveWidth(30),
    paddingHorizontal: responsiveWidth(3),
    // textAlign: 'center',
  };

  const formattedDate = date =>
    `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
      .getDate()
      .toString()
      .padStart(2, '0')}/${date.getFullYear()}`;

  const renderItem = ({item, index}) => (
    <ThemedView styles="flex-row py-2 border border-zinc-300">
      <ThemedText style={cellStyle} styles="font-Regular">
        #{item?.orderNo}
      </ThemedText>
      <ThemedText style={cellStyle} styles="font-Regular">
        {item?.createdAt ? formattedDate(new Date(item?.createdAt)) : 'N/A'}
      </ThemedText>
      <ThemedText style={cellStyle} styles="font-Regular">
        {item?.status}
      </ThemedText>
      <ThemedText style={cellStyle} styles="font-Regular">
        ৳ {item?.totalPrice.toFixed(2)} for {item?.products?.length} items
      </ThemedText>
      <ThemedView style={cellStyle2} styles="flex-row gap-5 items-center">
        <ThemedPressable styles="py-2 px-4 rounded-md self-start">
          <ThemedText2 styles="font-Regular">View</ThemedText2>
        </ThemedPressable>
        {(item?.status === 'Pending' ||
          item?.status === 'Processing' ) && (
            <ThemedPressable styles="py-2 px-4 rounded-md self-start">
              <ThemedText2 styles="font-Regular">Cancel</ThemedText2>
            </ThemedPressable>
          )}
          {(item?.status === 'Delivered') && (
            <ThemedView styles="flex-row gap-5">
            <ThemedPressable styles="py-2 px-4 rounded-md self-start">
            <ThemedText2 styles="font-Regular">Replace/Refund</ThemedText2>
          </ThemedPressable>
          <ThemedPressable styles="py-2 px-4 rounded-md self-start">
          <ThemedText2 styles="font-Regular">Return</ThemedText2>
        </ThemedPressable>
        </ThemedView>
          )}
          {(item?.status === 'Returning') && (item?.return?.returnStatus === 'Approved') && (
            <ThemedPressable styles="py-2 px-4 rounded-md self-start">
            <ThemedText2 styles="font-Regular">Print Label</ThemedText2>
          </ThemedPressable>
          )}
          {(item?.status === 'Replacing') && (item?.replace?.replaceStatus === 'Approved') && (
            <ThemedPressable styles="py-2 px-4 rounded-md self-start">
            <ThemedText2 styles="font-Regular">Print Label</ThemedText2>
          </ThemedPressable>
          )}
          {(item?.status === 'Returning') && (
            <ThemedText styles="font-Regular text-center">
              Return Request {item?.return?.returnStatus}
            </ThemedText>
          )}
          {(item?.status === 'Replacing') && (
            <ThemedText styles="font-Regular text-center">
              Replace Request {item?.replace?.replaceStatus}
            </ThemedText>
          )}
      </ThemedView>
    </ThemedView>
  );

console.log('currentData', data);

  return (
    <ThemedView>
      {/* Horizontal Scroll View */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ThemedView>
          {/* Table Header */}
          <ThemedViewLightGray styles="py-4 flex-row border border-zinc-300">
            {tableHeaders.map((header, index) => (
              <ThemedText key={index} styles="font-Medium" style={[cellStyle]}>
                {header.title}
              </ThemedText>
            ))}
          </ThemedViewLightGray>

          {/* Table Rows */}
          <FlatList
            data={currentData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </ThemedView>
      </ScrollView>

      {/* Pagination Controls */}
      <ThemedView styles="flex-row justify-between items-center mt-4">
        <ThemedPressable
          styles="py-2 px-3 rounded-md self-start"
          onPress={prevPage}
          disabled={currentPage === 1}>
          <ThemedText2 styles="font-Regular"> {'<'} Prev</ThemedText2>
        </ThemedPressable>

        <ThemedText styles="font-Regular">
          Page {currentPage} of {totalPages}
        </ThemedText>
        <ThemedPressable
          styles="py-2 px-3 rounded-md self-start"
          onPress={nextPage}
          disabled={currentPage === totalPages}>
          <ThemedText2 styles="font-Regular"> Next {'>'}</ThemedText2>
        </ThemedPressable>
      </ThemedView>
    </ThemedView>
  );
};

export default CustomTable;
