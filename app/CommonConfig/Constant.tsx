import {Dimensions} from 'react-native';

// Grab the window object from that native screen size.
const window = Dimensions.get('window');

// The vertical resolution of the screen.
export const screenHeight = window.height;

// The horizontal resolution of the screen.
export const screenWidth = window.width;
