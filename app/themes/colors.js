/**
 * This file contains the application's colors.
 *
 * Define color here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

const primary = '#2F4858';
const lightGreen = '#607274';
const text = '#4D3D0C';
const secondaryText = '#FFFFFF';
const tertiaryText = '#4D3D0C';
const secondary = '#b0b0b0';
const success = '#28a745';
const error = '#dc3545';
const gotoStories = '#1890ff';
const cardBg = '#EFF1F3';

const colors = {
  transparent: 'rgba(0,0,0,0)',
  // Example colors:
  text,
  primary,
  secondary,
  success,
  error,
  secondaryText,
  gotoStories,
  cardBg,
  lightGreen,
  tertiaryText,
  theme: {
    lightMode: {
      primary,
      secondary
    },
    darkMode: {
      primary: secondary,
      secondary: primary
    }
  }
};
module.exports = colors;
