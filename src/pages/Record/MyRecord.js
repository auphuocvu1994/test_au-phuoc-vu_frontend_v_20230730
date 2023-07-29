// MyRecord.js
import React from "react";
import ListDiary from "../../components/MyRecord/ListDiary/ListDiary";
import ListExercise from "../../components/MyRecord/ListExercise/ListExercise";
import ListFunction from "../../components/MyRecord/ListFunction/ListFunction";
import BodyRecord from "../../components/MyRecord/BodyRecord/BodyRecord";

const MyRecord = () => {
  return (
    <div className="container">
      <ListFunction />
      <BodyRecord />
      <ListExercise />
      <ListDiary />
    </div>
  );
};

export default MyRecord;
