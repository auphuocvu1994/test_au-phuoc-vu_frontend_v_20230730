import React, { useState } from "react";
import "./style.scss";
import icMeal from "../../img/ic-meal.svg";
import icSnack from "../../img/ic-snack.svg";
import m01 from "../../img/m01(image).png";
import l03 from "../../img/l03(image).png";
import d01 from "../../img/d01(image)(1).png";
import d02 from "../../img/d02(image).png";
import l01 from "../../img/l01(image).png";
import l02 from "../../img/l02(image).png";
import s01 from "../../img/l03(image).png";
import ButtonMain from "../../components/Button/ButtonMain";
import LineChartComponent from "../../components/MyRecord/BodyRecord/Chart";
import Utils from "../../helpers/Utils";
import AuthPage from "../../components/AuthPage/AuthPage";

const dataItemFake = {
  title: "05.21.Morning",
  image: getRandomImage(),
};

function getRandomImage() {
  const images = [m01, l03, d01, d02, l01, l02, s01];
  return Utils.randomItemInArray(images);
}

const TopMyPage = () => {
  const lisTransit = [
    {
      title: "Morning",
      image: icMeal,
    },
    {
      title: "Lunch",
      image: icMeal,
    },
    {
      title: "Dinner",
      image: icMeal,
    },
    {
      title: "Snack",
      image: icSnack,
    },
  ];

  const [listMeal, setListMeal] = useState([
    {
      title: "05.21.Morning",
      image: m01,
    },
    {
      title: "05.21.Lunch",
      image: l03,
    },
    {
      title: "05.21.Dinner",
      image: d01,
    },
    {
      title: "05.21.Snack",
      image: d02,
    },
    {
      title: "05.21.Morning",
      image: m01,
    },
    {
      title: "05.21.Lunch",
      image: l02,
    },
    {
      title: "05.21.Dinner",
      image: l01,
    },
    {
      title: "05.21.Snack",
      image: s01,
    },
  ]);

  const onLoadMore = () => {
    const arrayAdd = new Array(8).fill(null).map(() => ({
      title: dataItemFake.title,
      image: getRandomImage(),
    }));
    const newListMeal = listMeal.concat(arrayAdd);
    setListMeal(newListMeal);
  };

  return (
    <AuthPage isAuth={true}>
      <div className="main-content">
      <div className="achievement_Rate">
        <div className="achievement_Rate_group">
          <div className="achievement_Rate_left">
            <div className="block-infor">
              <div className="block-infor-group">
                <span>05/21</span>
                <span>75%</span>
              </div>
            </div>
          </div>
          <div className="achievement_Rate_right">
            <div className="chart bg_dark600">
              <LineChartComponent height={"100%"} />
            </div>
          </div>
        </div>
      </div>
      <div className="transit">
        {lisTransit.map((item, index) => (
          <div key={index} className="transit-block">
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div className="listMeal">
        <div className="container">
          {listMeal.map((item, index) => (
            <div key={index} className="meal-block">
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="btn-loadMore">
        <div className="container">
          <ButtonMain className="btnLoadMore" onClick={onLoadMore}>
            記録をもっと見る
          </ButtonMain>
        </div>
      </div>
    </div>
    </AuthPage>
  );
};

export default TopMyPage;
