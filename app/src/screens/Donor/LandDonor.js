import React from 'react';
import NoItems from '../../components/Donor/NoItems';
import ListData from '../../components/Donor/ListData';

const LandDonor = ({navigation, route}) => {
  const list = route.params;
  const data = [
    {
      id: 1,
      title: 'Title 1',
      description: 'Description 1',
      image: '../../../assets/dummyImage.jpg',
    },
    {
      id: 2,
      title: 'Title 2',
      description: 'Description 2',
      image: '../../../assets/dummyImage.jpg',
    },
    {
      id: 3,
      title: 'Title 3',
      description: 'Description 3',
      image: '../../../assets/dummyImage.jpg',
    },
    {
      id: 4,
      title: 'Title 4',
      description: 'Description 4',
      image: '../../../assets/dummyImage.jpg',
    },
  ];
  if (list.list) {
    return (
      <ListData data={data} navigation={navigation} />
    );
  } else {
    return (
      <NoItems navigation={navigation} />
    );
  }
};

export default LandDonor;
