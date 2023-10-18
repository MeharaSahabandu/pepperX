import React, { useState } from 'react';
import Header from "./Header";
import { View, TouchableOpacity, Text, Modal } from 'react-native';

const MachineOperations = () => {
  const [open, setOpen] = useState(false);

  function handleOnPress () {
    setOpen(!open);
  }

  return (
    <>
      <Header />
      <View>
        <TouchableOpacity onPress={handleOnPress}>
          <Text>
            Open
          </Text>
        </TouchableOpacity>
        <Modal
        animationType='slide'
        transparent={true}
        visible={open}
        >

        </Modal>
      </View>
    </>
  )
}

export default MachineOperations