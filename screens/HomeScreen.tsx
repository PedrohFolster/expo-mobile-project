import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, AppState, AppStateStatus, SafeAreaView } from 'react-native';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { NetworkInfo } from '../components/NetworkInfo';
import { NetworkService } from '../services/NetworkService';
import { theme } from '../styles/theme';
import { Card } from '../components/Card';

export const HomeScreen: React.FC = () => {
  const [networkState, setNetworkState] = useState<any>(null);
  const [ipAddress, setIpAddress] = useState<string>('');
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [checkboxValue, setCheckboxValue] = useState<boolean>(false);
  const [disabledCheckboxValue, setDisabledCheckboxValue] = useState<boolean>(true);

  const fetchNetworkInfo = async () => {
    try {
      const state = await NetworkService.getNetworkState();
      const ip = await NetworkService.getIpAddress();
      const connected = await NetworkService.isConnected();

      setNetworkState(state);
      setIpAddress(ip);
      setIsConnected(connected);
    } catch (error) {
      console.error('Error fetching network info:', error);
    }
  };

  useEffect(() => {
    // Fetch network info immediately
    fetchNetworkInfo();

    // Set up interval to refresh network info every 5 seconds
    const intervalId = setInterval(fetchNetworkInfo, 5000);

    // Set up app state listener
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      if (nextAppState === 'active') {
        fetchNetworkInfo();
      }
    });

    // Cleanup
    return () => {
      clearInterval(intervalId);
      subscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <NetworkInfo
            ipAddress={ipAddress}
            isConnected={isConnected}
            networkType={networkState?.type || 'Unknown'}
            isAirplaneMode={networkState?.isAirplaneMode}
          />

          <Card>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Checkbox Examples</Text>
            </View>
            <View style={styles.checkboxContainer}>
              <CustomCheckbox
                label="Regular Checkbox"
                value={checkboxValue}
                onValueChange={setCheckboxValue}
                description="This is a regular checkbox that you can toggle"
              />
              <CustomCheckbox
                label="Disabled Checkbox"
                value={disabledCheckboxValue}
                onValueChange={setDisabledCheckboxValue}
                disabled={true}
                description="This checkbox is disabled and cannot be toggled"
              />
              <CustomCheckbox
                label="Custom Color Checkbox"
                value={checkboxValue}
                onValueChange={setCheckboxValue}
                color="#FF0000"
                description="This checkbox uses a custom color"
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  checkboxContainer: {
    gap: 16,
  },
}); 