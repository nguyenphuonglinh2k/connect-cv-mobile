import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

const SelectModal = ({ data, value, style, ...otherProps }) => {
  return (
    <Modal
      style={[styles.modal, style]}
      backdropColor="#05162D4D"
      {...otherProps}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const selected = item.value === value;
          return (
            <TouchableOpacity
              style={[styles.item, selected ? styles.selected : {}]}
            >
              <Text style={selected ? styles.selectedLabel : styles.label}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(_, i) => i}
      />
    </Modal>
  );
};

SelectModal.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
  value: PropTypes.number,
  isVisible: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    borderRadius: 8,
    maxWidth: "90%",
    maxHeight: "90%",
  },
  item: {
    padding: 16,
  },
  selected: {
    backgroundColor: "#F2F3F4",
  },
  selectedLabel: {
    color: "#212529",
    fontSize: 16,
  },
  label: {
    color: "#7e7e7e",
    fontSize: 16,
  },
});

export default SelectModal;
