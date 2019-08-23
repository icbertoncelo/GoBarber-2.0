import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
// import { Container } from './styles';

export default function Profile() {
  return <Background />;
}

function ProfileTabBarIcon({ tintColor }) {
  return <Icon name="person" size={20} color={tintColor} />;
}

Profile.navigationOptions = {
  tabBarLabel: 'My Profile',
  tabBarIcon: ProfileTabBarIcon,
};

ProfileTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
