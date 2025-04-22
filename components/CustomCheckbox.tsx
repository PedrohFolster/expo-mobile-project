import React from 'react';
import { Checkbox as ExpoCheckbox } from 'expo-checkbox';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from '../styles/theme';

interface CustomCheckboxProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  color?: string;
  description?: string;
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  value,
  onValueChange,
  disabled = false,
  color = theme.colors.primary,
  description,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => !disabled && onValueChange(!value)}
      disabled={disabled}
    >
      <ExpoCheckbox
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
        color={color}
        style={styles.checkbox}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.label, disabled && styles.disabledText]}>{label}</Text>
        {description && (
          <Text style={[styles.description, disabled && styles.disabledText]}>
            {description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xs,
  },
  checkbox: {
    marginRight: theme.spacing.sm,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.text,
    marginBottom: 2,
  },
  description: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.text,
    opacity: 0.7,
  },
  disabledText: {
    opacity: 0.5,
  },
}); 