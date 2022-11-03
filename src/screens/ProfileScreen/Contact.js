import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";
import PhoneIcon from "icons/PhoneIcon";
import EmailIcon from "icons/EmailIcon";
import LocationIcon from "icons/LocationIcon";
import { useSelector } from "react-redux";

const Contact = () => {
  const user = useSelector(({ userRedux }) => userRedux.user);

  return (
    <View style={styles.wrapper}>
      <ContactItem title="Telephone" value={user?.phone} icon={<PhoneIcon />} />
      <ContactItem
        title="Email"
        value={user?.email}
        icon={<EmailIcon color="#40189D" />}
        style={styles.marginVertical}
      />
      <ContactItem
        title="Address"
        value={user?.address}
        icon={<LocationIcon />}
      />
    </View>
  );
};

const ContactItem = ({ title, value, icon, style, ...otherProps }) => {
  return (
    <View style={[styles.itemWrapper, style]} {...otherProps}>
      <View style={styles.iconWrapper}>{icon}</View>
      <View>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

ContactItem.propTypes = {
  icon: PropTypes.node,
  value: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

ContactItem.defaultProps = {};

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
    paddingVertical: 24,
    borderTopColor: "#f1f1f1",
    borderBottomColor: "#f1f1f1",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  itemWrapper: {
    flexDirection: "row",
  },
  iconWrapper: {
    marginRight: 16,
    height: 55,
    width: 55,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#673ab733",
    borderRadius: 27,
  },
  label: {
    color: "#6F6F6F",
    marginBottom: 8,
  },
  value: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },
  marginVertical: {
    marginVertical: 16,
  },
});

export default Contact;
