import React, {FC, useState} from 'react';
import {View, TextInput, Pressable} from 'react-native';
import {styles} from '../styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  onSearch: (input: string) => void;
}

const Header: FC<HeaderProps> = ({onSearch}) => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.header}>
      <TextInput
        onChangeText={text => setInput(text)}
        defaultValue={input}
        style={styles.galleryInput}
        placeholder="Search for photos"
      />
      <Pressable onPress={() => onSearch(input)} style={styles.buttonSearch}>
        <Icon name="search" size={30} color="#fff" />
      </Pressable>
    </View>
  );
};

export default Header;
