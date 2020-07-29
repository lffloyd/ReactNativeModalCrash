/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  TextInput,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';


const App = () => {
  const [isEnabled, setModalEnabled] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <>
      <Text>{username}</Text>
      <Button
        onPress={() => {
          setModalEnabled(!isEnabled);
        }}
        title="Open modal"
        color="#841584"
      />
      <Modal isVisible={isEnabled}>
        <TextInput onChangeText={text => setName(text)} value={name} />

        <Button
          onPress={() => {
            setUsername(name);
            setModalEnabled(!isEnabled);
          }}
          title="Close modal"
          color="#841584"
        />
      </Modal>
    </>
  );
};

export default App;
