import { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Popup from './components/Popup';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [selected, setSelected] = useState();
  const data = [
    { label: 'Zero', value: '0' },
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
    { label: 'Six', value: '6' },
    { label: 'Seven', value: '7' },
    { label: 'Eight', value: '8' },
    { label: 'Nine', value: '9' },
  ];

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Popup
          label="Select Item"
          data={data}
          onSelect={setSelected}
          style={styles.dropdown}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    height: '100%',
    padding: 5,
    backgroundColor: '#b2fff6',
  },
  dropdown: {
    fontSize: 20,
  },
});

export default App;
