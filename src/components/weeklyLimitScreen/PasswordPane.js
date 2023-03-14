import { Alert, Modal, StyleSheet, Text, Pressable, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from "../../constants"
import { selectUserInfo } from '../../redux/userSlice'
import { useSelector } from 'react-redux';




const PasswordPane = ({ modalVisible, setModalVisible, saveSpendingLimit, id, value }) => {
  const [pin, setPin] = useState('')
  const [invalidPin, setInvalidPin] = useState(false)
  const userInfo = useSelector(selectUserInfo)

  const submit = (id, value) => {

    setModalVisible(!modalVisible)
    saveSpendingLimit(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), id)
  }


  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {

        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.textInputContainer}>
            <TextInput secureTextEntry={true} style={styles.textInput} value={pin} onChangeText={(text) => setPin(text)} />
          </View>
          {invalidPin && <Text style={{ color: '#FF0000' }}>Wrong pin!</Text>}
          <View style={styles.buttonsContainer}>
            <Pressable
              disabled={!pin}
              style={[styles.button, { backgroundColor: pin === '' ? COLORS.lightGray : COLORS.primaryGreen }]}
              onPress={() => userInfo.card_info.pin === pin ? submit(id, value) : setInvalidPin(!invalidPin)}
            >
              <Text style={[styles.textStyle, { color: COLORS.primaryBlue }]}>submit</Text>
            </Pressable>
          </View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={[styles.textStyle, { color: COLORS.lightGreen }]}>cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>

  )
}

export default PasswordPane

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'transparent'
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.primaryBlue,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textInput: {
    fontSize: 20,
    margin: 5,
    height: 20,
    width: '20%',
    borderBottomWidth: 0.5,
    color: COLORS.white,
    textAlign: 'center',
    borderColor: COLORS.gray
  },
  buttonsContainer: {
    margin: 10
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: COLORS.white,
  },

  textStyle: {
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
