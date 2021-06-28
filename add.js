import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Switch,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  Card,
  CardItem,
  Body,
  Item,
  Input,
  Button,
  Form,
  Picker,

  Content
} from 'native-base';
import { default as s } from '../../../Master/styles/GlobalStyles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomerGroupData, groupSelected, handleContactDeleteItem, handleCustomerAddInput, handleSubmit } from '../../Customer/Action/AddCustomerAction'
import BlueInput from '../../../components/input/BlueInput';
import { DatePicker } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleDatePicker from '../../../components/Date/SimpleDatePicker';


const AddCustomer = props => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [chosenDate, setChosenDate] = useState(new Date());
  const [showEmail, setShowEmail] = useState(false);
  const [showUrl, setShowUrl] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("Wallet");
  const contact = useSelector(state => state.customer.contact);
  const addCustomerInputData = useSelector(state => state.customer.addCustomerInputData);

  console.log(`addCustomerInputData`, addCustomerInputData);

  const dataset = [
    {
      id: 1,
      name: "farid"
    },
    {
      id: 2,
      name: "kamal"
    },
    {
      id: 3,
      name: "jewwl"
    },
  ]


  useEffect(() => {
    dispatch(getCustomerGroupData())
  }, [])



  const handleInputChange = (inputName, inputValue) => {
    console.log(`inputName, inputValue`, inputName, inputValue);
    dispatch(handleCustomerAddInput(inputName, inputValue));
  }

  const handleContactDelete = (item, index) => {
    dispatch(handleContactDeleteItem(index));
  }

  const addCustomer = () => {
    dispatch(handleSubmit(addCustomerInputData));
  }

  const onBranchSelected = (data) => {
    setSelectedBranch(data);
  }

  const updateStateInputValues = (name, value) => {
    console.log(`name, value`, name, value);
    dispatch(handleCustomerAddInput(name, value));

  };

  return (
    <ScrollView>
      <Content>
        <Form>

        </Form>
      </Content>


      <Form>
        <View
          style={[
            s.mt20,
            {
              backgroundColor: '#fff',
              borderRadius: 6,
              flexDirection: 'row',
            },
          ]}>
          <View style={{ flexBasis: '90%' }}>

          </View>
          {/* <View
                    style={{
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      flexBasis: '10%',
                    }}>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={25}
                      color={'#00000041'}
                    />
                  </View> */}
        </View>
      </Form>
      {/* <Card style={[s.mt20]}>
            <CardItem>
            <Picker
              style={{ width: '100%', height: 40 }}
              iosHeader="Branch"
              Header="Branch"
              mode="dropdown"
              name="group"
              textStyle={{ color: 'grey' }}
              placeholder='Select branch'
              headerBackButtonText='Geri'
              selectedValue={selectedBranch}
              onValueChange={(value)=>dispatch(groupSelected('group',value))}
            >
              {dataset.map((branches, i) => {
                return (
                  <Picker.Item label={branches.name} value={branches} key={i} />
                );
              }
              )}
            </Picker>
            </CardItem>
          </Card> */}

      <Card style={[s.mt20]}>
        <CardItem>
          <Body>
            <Item>
              <Input placeholder="First Name" name="firstName"
                onChangeText={(e) => handleInputChange('strFirstName', e)}

              />
            </Item>
            <Item>
              <Input placeholder="Last Name" name="lastName"
                onChangeText={(e) => handleInputChange('strLastName', e)} />
            </Item>
          </Body>
        </CardItem>
      </Card>

      {/* <SafeAreaView
            style={{ flexDirection: 'column', backgroundColor: 'white' }}>
            {show ? (
              <View>
                {contact.map((item, index) => (
                  <SwipeRow
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    body={
                      <View>
                        <View style={[s.rowDirection, {paddingLeft: 20}]}>
                          <View
                            style={[
                              s.flexBasis30,
                              {
                                paddingTop: 10,
                                borderRightWidth: 1,
                                borderRightColor: 'grey',
                              },
                            ]}>
                            <View style={[s.rowDirection]}>
                              <View style={[s.flexBasis20]}>
                                <MaterialCommunityIcons
                                  name="minus-circle"
                                  size={25}
                                  color={'red'}
                                />
                              </View>

                              <View style={[s.flexBasis50]}>
                                <Text style={{fontSize: 18, color: 'blue'}}>
                                  {item.name}
                                </Text>
                              </View>
                              <View style={[s.flexBasis20]}>
                                <MaterialIcons
                                  name="keyboard-arrow-right"
                                  size={25}
                                  color={'#00000041'}
                                />
                              </View>
                            </View>
                            <View style={[s.flexBasis70]}>
                              <Item>
                                <Input placeholder="02 8284 5852" name={item.name} onChangeText={(e) => handleInputChange(item.name, e)}/>
                              </Item>
                            </View>
                          </View>
                        </View>
                      </View>
                    }
                    right={
                      // <Button
                      //   danger
                      //   onPress={() => alert('Trash')}
                      //   title="Delete"></Button>
                      <TouchableOpacity
                        onPress={() => handleContactDelete(item, index)}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: 'blue',
                            textAlign: 'center',
                            paddingTop: 20,
                            paddingBottom: 20,
                            backgroundColor: 'red',
                            color: 'white',
                          }}>
                          Delete
                        </Text>
                      </TouchableOpacity>
                    }
                  />
                ))}
              </View>
            ) : null}
          </SafeAreaView>
          <Card
            style={[
              s.mt20,
              {
                height: 50,
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}>
            <CardItem>
              <Body>
                <View style={[s.rowDirection]}>
                  <TouchableWithoutFeedback>
                    <MaterialCommunityIcons
                      name="plus-circle"
                      size={20}
                      color={'#34C759'}
                      onPress={() => setShow(!show)}
                    />
                  </TouchableWithoutFeedback>
                  <Text style={[s.textDark, s.ml5]}>add phone</Text>
                </View>
              </Body>
            </CardItem>
          </Card> */}
      {/* <View>
            {showEmail ? (
              <View>
                <SwipeRow
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  body={
                    <View>
                      <View style={[s.rowDirection, {paddingLeft: 20}]}>
                        <View
                          style={[
                            s.flexBasis30,
                            {
                              paddingTop: 10,
                              borderRightWidth: 1,
                              borderRightColor: 'grey',
                            },
                          ]}>
                          <View style={[s.rowDirection]}>
                            <View style={[s.flexBasis20]}>
                              <MaterialCommunityIcons
                                name="minus-circle"
                                size={25}
                                color={'red'}
                              />
                            </View>

                            <View style={[s.flexBasis50]}>
                              <Text style={{fontSize: 18, color: 'blue'}}>
                                Email
                              </Text>
                            </View>
                            <View style={[s.flexBasis20]}>
                              <MaterialIcons
                                name="keyboard-arrow-right"
                                size={25}
                                color={'#00000041'}
                              />
                            </View>
                          </View>
                        </View>
                        <View style={[s.flexBasis70]}>
                          <Item>
                            <Input placeholder="shaker.test@gmail.com" />
                          </Item>
                        </View>
                      </View>
                    </View>
                  }
                  right={
                    // <Button
                    //   danger
                    //   onPress={() => alert('Trash')}
                    //   title="Delete"></Button>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'blue',
                        textAlign: 'center',
                        paddingTop: 20,
                        paddingBottom: 20,
                        backgroundColor: 'red',
                        color: 'white',
                      }}>
                      Delete
                    </Text>
                  }
                />
                <View
                  style={[s.rowDirection, {paddingLeft: 20, marginBottom: 4}]}>
                  <View
                    style={[
                      s.flexBasis30,
                      {
                        paddingTop: 10,
                        borderRightWidth: 1,
                        borderRightColor: 'grey',
                      },
                    ]}>
                    <View style={[s.rowDirection]}>
                      <View style={[s.flexBasis20]}>
                        <MaterialCommunityIcons
                          name="minus-circle"
                          size={25}
                          color={'red'}
                        />
                      </View>

                      <View style={[s.flexBasis50]}>
                        <Text style={{fontSize: 18, color: 'blue'}}>phone</Text>
                      </View>
                      <View style={[s.flexBasis20]}>
                        <MaterialIcons
                          name="keyboard-arrow-right"
                          size={25}
                          color={'#00000041'}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[s.flexBasis70]}>
                    <Item>
                      <Input placeholder="02 8284 5852" />
                    </Item>
                  </View>
                </View>

                <View
                  style={[s.rowDirection, {paddingLeft: 20, marginBottom: 4}]}>
                  <View
                    style={[
                      s.flexBasis30,
                      {
                        paddingTop: 10,
                        borderRightWidth: 1,
                        borderRightColor: 'grey',
                      },
                    ]}>
                    <View style={[s.rowDirection]}>
                      <View style={[s.flexBasis20]}>
                        <MaterialCommunityIcons
                          name="minus-circle"
                          size={25}
                          color={'red'}
                        />
                      </View>

                      <View style={[s.flexBasis50, {marginLeft: 5}]}>
                        <Text style={{fontSize: 18, color: 'blue'}}>
                          mobile
                        </Text>
                      </View>
                      <View style={[s.flexBasis20]}>
                        <MaterialIcons
                          name="keyboard-arrow-right"
                          size={25}
                          color={'#00000041'}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={[s.flexBasis70]}>
                    <Item>
                      <Input placeholder="02 8284 5852" />
                    </Item>
                  </View>
                </View>
              </View>
            ) : null}
          </View> */}

      <Card
        style={[
          s.mt20,
          {
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <CardItem>
          <Body>
            <View style={[s.rowDirection]}>
              <TouchableWithoutFeedback>
                <MaterialCommunityIcons
                  name="plus-circle"
                  size={20}
                  color={'#34C759'}
                  onPress={() => setShowEmail(true)}
                />
              </TouchableWithoutFeedback>

              <Text style={[s.textDark, s.ml5]}>add email</Text>
            </View>
          </Body>
        </CardItem>
      </Card>
      <Card style={[
        s.mt20,
        {
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
        <CardItem>

          <Body>
            <Item>
              <Input placeholder="Add phone" name="phone"
                onChangeText={(e) => handleInputChange('strPersonalPhone', e)} />
            </Item>
          </Body>
        </CardItem>
      </Card>
      <Card style={[s.mt20]}>
        <CardItem>

          <Body>
            <Item>
              <Input placeholder="Add url" name="url"
                onChangeText={(e) => handleInputChange('strUrl', e)} />
            </Item>
          </Body>
        </CardItem>
      </Card>

      <SimpleDatePicker
        level="To Date"
        mode="date"
        onChangeInputValue={(val) =>
          updateStateInputValues('dteBirthday', val)
        }
      />
      <Card style={[s.mt20]}>
        <CardItem>

          <Body>
            <Item>
              <Input placeholder="Add Address" name="Address"
                onChangeText={(e) => handleInputChange('strAddress', e)} />
            </Item>
          </Body>
        </CardItem>
      </Card>
      <Card style={[s.mt20]}>
        <CardItem>

          <Body>
            <Item>
              <Input placeholder="Add Address" name="Address"
                onChangeText={(e) => handleInputChange('strAddress', e)} />
            </Item>
          </Body>
        </CardItem>
      </Card>
      <Button block style={[styles.buttonPrimary]} onPress={() => addCustomer()}>
        <Text style={[styles.textBold,]}>Save</Text>
      </Button>



    </ScrollView>


  );
};
const styles = StyleSheet.create({
  btnSize: {
    width: '10%',
    height: 20,
  },
  buttonPrimary: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10
  },
});
export default AddCustomer;
