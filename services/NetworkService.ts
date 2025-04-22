import * as Network from 'expo-network';
import { Platform } from 'react-native';

export class NetworkService {
  static async getNetworkState() {
    const state = await Network.getNetworkStateAsync();
    let isAirplaneMode = false;

    // Only check airplane mode on Android
    if (Platform.OS === 'android') {
      try {
        isAirplaneMode = await Network.isAirplaneModeEnabledAsync();
      } catch (error) {
        console.warn('Could not check airplane mode:', error);
      }
    }

    return {
      ...state,
      type: this.getNetworkTypeDescription(state.type),
      isAirplaneMode,
    };
  }

  static async getIpAddress() {
    try {
      const ip = await Network.getIpAddressAsync();
      return ip || 'Unknown';
    } catch (error) {
      console.warn('Could not get IP address:', error);
      return 'Unknown';
    }
  }

  static async isConnected() {
    try {
      const state = await Network.getNetworkStateAsync();
      return state.isConnected;
    } catch (error) {
      console.warn('Could not check connection state:', error);
      return false;
    }
  }

  static async isAirplaneModeEnabled() {
    try {
      return await Network.isAirplaneModeEnabledAsync();
    } catch (error) {
      return false;
    }
  }

  private static getNetworkTypeDescription(type: string | null): string {
    if (!type) {
      if (Platform.OS === 'web') {
        return 'Broadband/Ethernet';
      }
      return 'Unknown';
    }
    
    switch (type.toLowerCase()) {
      case 'wifi':
        return 'Wi-Fi';
      case 'cellular':
        return 'Cellular Data';
      case 'ethernet':
      case 'wimax':
      case 'vpn':
      case 'other':
        if (Platform.OS === 'web') {
          return 'Broadband/Ethernet';
        }
        return type.charAt(0).toUpperCase() + type.slice(1);
      default:
        if (Platform.OS === 'web') {
          return 'Broadband/Ethernet';
        }
        return 'Unknown';
    }
  }
} 