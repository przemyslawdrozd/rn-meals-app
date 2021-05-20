import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../assets/Colors';
import { Platform } from 'react-native';
const DefaultHeaderButton = (props) => {
	return (
		<HeaderButton
			{...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Platform.OS === 'android' ? 'white' : Colors.primary}
		/>
	);
};

export default DefaultHeaderButton;
