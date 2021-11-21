import React, {useState, useEffect} from 'react';
import NoItems from '../../components/Donor/NoItems';
import ListData from '../../components/Donor/ListData';
import Axios from 'axios';
import Store from '../../store/Store';

const LandDonor = ({navigation, route}) => {
  const list = route.params;

  const [listdata, setlistdata] = useState([]);
  useEffect(() => {
    console.log('object',Store.basicUserInfo.email)
    Axios.get(`http://10.0.2.2:5000/donate?email=${Store.basicUserInfo.email}`)
      .then(res => {
       setlistdata(res.data);
      })
      .catch(err => {
        console.log('18',err);
      });
  }, []);

  if (listdata.length !== 0) {
    return <ListData data={listdata} navigation={navigation} />;
  } else {
    return <NoItems navigation={navigation} />;
  }
};

export default LandDonor;
