import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const VendasScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Dinheiro"
          onPress={() => navigation.navigate('Vendas')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Pix"
          onPress={() => navigation.navigate('Produtos')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Cartão de crédito"
          onPress={() => navigation.navigate('Relatorios')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button}
          title="Cartão de débito"
          onPress={() => navigation.navigate('Relatorios')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    width: 200, 
    marginVertical: 10,
  },
  button: {
    flex: 1,
  },

});

export default VendasScreen;