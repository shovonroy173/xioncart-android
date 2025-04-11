import {useColorScheme} from 'react-native';

export const useThemeColor = () => {
  const theme = useColorScheme();

  const colors = {
    light: {
      text: '#000000',
      icon: '#000000',
      background: '#ffffff',
      border: '#d4d4d8',
      placeholder: '#a1a1aa',
    },
    dark: {
      text: '#e4e4e7',
      icon: '#f4f4f5',
      background: '#18181b',
      border: '#3f3f46',
      placeholder: '#71717a',
    },
  };

  return theme === 'dark' ? colors.dark : colors.light;
};
