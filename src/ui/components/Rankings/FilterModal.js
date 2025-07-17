import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const options = [
  'Batting',
  'Bowling',
  'All Rounder',
  'Date',
];

export default function FilterModal({ visible, onClose, category, setCategory, gender, setGender }) {
  const [selectedCategory, setSelectedCategory] = useState(category || 'batsmen');
  const [selectedGender, setSelectedGender] = useState(gender || 'women');

  useEffect(() => {
    setSelectedCategory(category);
    setSelectedGender(gender);
  }, [category, gender, visible]);

  const handleApply = () => {
    setCategory(selectedCategory);
    setGender(selectedGender);
    onClose();
  };

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
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Category</Text>
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          <TouchableOpacity
            style={[styles.option, selectedCategory === 'batsmen' && styles.selectedOption]}
            onPress={() => setSelectedCategory('batsmen')}
          >
            <Text style={styles.optionText}>Batting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedCategory === 'bowlers' && styles.selectedOption]}
            onPress={() => setSelectedCategory('bowlers')}
          >
            <Text style={styles.optionText}>Bowling</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedCategory === 'all-rounder' && styles.selectedOption]}
            onPress={() => setSelectedCategory('all-rounder')}
          >
            <Text style={styles.optionText}>All Rounder</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: 'bold', marginBottom: 8 }}>Gender</Text>
        <View style={{ flexDirection: 'row', marginBottom: 16 }}>
          <TouchableOpacity
            style={[styles.option, selectedGender === 'man' && styles.selectedOption]}
            onPress={() => setSelectedGender('men')}
          >
            <Text style={styles.optionText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.option, selectedGender === 'women' && styles.selectedOption]}
            onPress={() => setSelectedGender('women')}
          >
            <Text style={styles.optionText}>Women</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.applyButton} onPress={handleApply}>
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