import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const options = [
  'Batting',
  'Bowling',
  'All Rounder',
  'Date',
];

export default function FilterModal({ visible, onClose }) {
  const [selected, setSelected] = useState('Bowling');

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose} />
      <View style={styles.modalContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Filter</Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close-circle" size={28} color="#C4C4C4" />
          </TouchableOpacity>
        </View>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.option, selected === option && styles.selectedOption]}
            onPress={() => setSelected(option)}
            activeOpacity={0.7}
          >
            <Text style={styles.optionText}>{option}</Text>
            <View style={styles.radioOuter}>
              {selected === option && <View style={styles.radioInner} />}
            </View>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.applyButton} onPress={onClose}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F8F8',
    borderRadius: 32,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  selectedOption: {
    backgroundColor: '#D1E2F8',
  },
  optionText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
  },
  radioOuter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#1B6FDE',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  radioInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#1B6FDE',
  },
  applyButton: {
    backgroundColor: '#F04329',
    borderRadius: 32,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
  },
  applyText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
}); 