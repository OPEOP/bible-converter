import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import NumPad from './components/num-pad';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <ScrollView>

          </ScrollView>
          <View>
              <NumPad
                  onNumPress={() => console.log('f')}
              />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
    backgroundColor: '#fff',
  },
});
