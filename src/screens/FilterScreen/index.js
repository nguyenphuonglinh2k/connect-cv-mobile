import React, { useState } from "react";
import { MainLayout } from "layouts";
import { StyleSheet, View } from "react-native";
import SelectBox from "./SelectBox";
import Actions from "./Actions";
import { CAREER_TYPES, LOCATION_TYPES, SALARY_TYPES } from "const/app.const";
import { useNavigation } from "@react-navigation/core";
import { useDispatch } from "react-redux";
import JobActions from "reduxStore/job.redux";

const FilterScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [profession, setProfession] = useState({ id: "", label: "" });

  const handlePressLocationItem = id => {
    setLocation(id);
  };

  const handlePressSalaryItem = id => {
    setSalary(id);
  };

  const handlePressProfessionItem = (id, label) => {
    setProfession({ id, label });
  };

  const handleClearData = () => {
    setLocation("");
    setSalary("");
    setProfession("");
  };

  const handleConfirmSearch = () => {
    let params = {};

    if (location) {
      params = { location };
    } else if (salary) {
      params = { salary };
    } else if (profession) {
      params = { profession: profession.id };
    }

    dispatch(JobActions.getSearchedJobsRequest({ params }));
    navigation.goBack();
  };

  return (
    <MainLayout
      isBackScreen
      headerProps={{
        title: "Filter",
      }}
    >
      <View style={styles.wrapper}>
        <SelectBox
          label="Location"
          value={location}
          data={LOCATION_TYPES}
          onPress={handlePressLocationItem}
        />
        <SelectBox
          label="Salary"
          value={salary}
          data={SALARY_TYPES}
          onPress={handlePressSalaryItem}
          style={styles.mt}
        />
        <SelectBox
          label="Profession"
          value={profession.label}
          data={CAREER_TYPES}
          onPress={handlePressProfessionItem}
          style={styles.mt}
        />
      </View>
      <Actions onClear={handleClearData} onConfirm={handleConfirmSearch} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 15,
    backgroundColor: "white",
    flex: 1,
  },
  mt: {
    marginTop: 12,
  },
});

export default FilterScreen;
