import { StyleSheet, Platform, StatusBar } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: theme.colors.light,
  },
  androidSafeArea: {
    flex: 1,
    backgroundColor: theme.colors.light,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  title: {
    fontSize: theme.fontSizes.large,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: theme.fontSizes.medium,
    color: theme.colors.light,
  },
});
