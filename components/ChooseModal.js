import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';



    return (
      <View style={{flex: 1}}>
        <Modal isVisible={this.props.isVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
          </View>
        </Modal>
      </View>
    );
}

export default ModalTester;