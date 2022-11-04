import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

const SelectModal = ({ data, value, style, onPress, ...otherProps }) => {
  return (
    <Modal
      style={[styles.modal, style]}
      backdropColor="#05162D4D"
      {...otherProps}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => {
          const selected = item.label === value;
          return (
            <TouchableOpacity
              style={[styles.item, selected ? styles.selected : {}]}
              onPress={() => onPress(item.id, item.label)}
            >
              <Text
                style={[
                  selected ? styles.selectedLabel : styles.label,
                  styles.labelItem,
                ]}
              >
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
      id: PropTypes.any,
      label: PropTypes.string,
    }),
  ),
  value: PropTypes.any,
  isVisible: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    borderRadius: 8,
    width: "60%",
    height: "50%",
    alignSelf: "center",
  },
  item: {
    padding: 16,
  },
  labelItem: {
    textAlign: "center",
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
