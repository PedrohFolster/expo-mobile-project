import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';
import { Card } from './Card';

interface NetworkInfoProps {
  ipAddress: string;
  isConnected: boolean;
  networkType: string;
  isAirplaneMode?: boolean;
}

export const NetworkInfo: React.FC<NetworkInfoProps> = ({
  ipAddress,
  isConnected,
  networkType,
  isAirplaneMode,
}) => {
  return (
    <Card>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Network Status</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Connection Status:</Text>
          <Text
            style={[
              styles.value,
              isConnected ? styles.connected : styles.disconnected,
            ]}
          >
            {isConnected ? 'Connected' : 'Disconnected'}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>IP Address:</Text>
          <Text style={styles.value}>{ipAddress}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Network Type:</Text>
          <Text style={styles.value}>{networkType}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Airplane Mode:</Text>
          <Text style={[styles.value, isAirplaneMode ? styles.disabled : styles.enabled]}>
            {isAirplaneMode ? 'Enabled ✈️' : 'Disabled'}
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: theme.spacing.md,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  infoContainer: {
    gap: theme.spacing.sm,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.xs,
  },
  label: {
    ...theme.typography.body,
    color: theme.colors.text,
    opacity: 0.7,
  },
  value: {
    ...theme.typography.body,
    color: theme.colors.text,
    fontWeight: '500',
  },
  connected: {
    color: theme.colors.success,
  },
  disconnected: {
    color: theme.colors.error,
  },
  enabled: {
    color: theme.colors.success,
  },
  disabled: {
    color: theme.colors.error,
  },
}); 