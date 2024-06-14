import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setLoading} from '../../Actions/AppActions';

const HomeScreen = () => {
  const appReducer = useSelector((state: any) => state.app);
  console.log('appReducer', appReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));

    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  }, [dispatch]);
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
