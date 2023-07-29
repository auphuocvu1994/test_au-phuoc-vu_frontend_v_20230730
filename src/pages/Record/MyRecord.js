// MyRecord.js
import React from "react";
import ListDiary from "../../components/MyRecord/ListDiary/ListDiary";
import ListExercise from "../../components/MyRecord/ListExercise/ListExercise";
import ListFunction from "../../components/MyRecord/ListFunction/ListFunction";
import BodyRecord from "../../components/MyRecord/BodyRecord/BodyRecord";
import AuthPage from "../../components/AuthPage/AuthPage";

const MyRecord = () => {
  return (
    <AuthPage isAuth={true}>
      <div className="container">
        <ListFunction />
        <BodyRecord />
        <ListExercise />
        <ListDiary />
      </div>
    </AuthPage>
  );
};

export default MyRecord;
