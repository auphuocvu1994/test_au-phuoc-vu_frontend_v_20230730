import React, { useState } from "react";
import "./Column.scss";
import ButtonMain from "../../components/Button/ButtonMain";
import FoodItem from "../../components/Column/FoodItem/FoodItem";
import RecommendedItem from "../../components/Column/RecommendedItem/RecommendedItem";
import imgFood1 from "../../img/column-1.png";
import imgFood2 from "../../img/column-2(image).svg";
import imgFood3 from "../../img/column-3(image).svg";
import imgFood4 from "../../img/column-4(image).svg";
import imgFood5 from "../../img/column-5(image).svg";
import imgFood6 from "../../img/column-6(image).svg";
import imgFood7 from "../../img/column-7(image).svg";
import imgFood8 from "../../img/column-8(image).svg";
import Utils from "../../helpers/Utils";

const images = [
  imgFood1,
  imgFood2,
  imgFood3,
  imgFood4,
  imgFood5,
  imgFood6,
  imgFood7,
  imgFood8,
];
const listRecommended = [
  {
    title: (
      <>
        RECOMMENDED <br /> COLUMN
      </>
    ),
    description: "オススメ",
  },
  {
    title: (
      <>
        RECOMMENDED <br /> DIET
      </>
    ),
    description: "ダイエット",
  },
  {
    title: (
      <>
        RECOMMENDED <br /> BEAUTY
      </>
    ),
    description: "美容",
  },
  {
    title: (
      <>
        RECOMMENDED <br /> HEALTH
      </>
    ),
    description: "健康",
  },
];

const getDataItem = (image) => {
  return {
    image: image,
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: "#魚料理 #和食 #DHA",
  };
};

const Column = () => {
  const [listFood, setListFood] = useState([
    getDataItem(imgFood1),
    getDataItem(imgFood2),
    getDataItem(imgFood3),
    getDataItem(imgFood4),
    getDataItem(imgFood5),
    getDataItem(imgFood6),
    getDataItem(imgFood7),
    getDataItem(imgFood8),
  ]);

  const onLoadMore = () => {
    const arrayAdd = new Array(8)
      .fill(null)
      .map(() => getDataItem(Utils.randomItemInArray(images)));
    const newList = listFood.concat(arrayAdd);
    setListFood(newList);
  };

  return (
    <div className="Column">
      <div className="container">
        <div className="recommended">
          {listRecommended.map((item, index) => (
            <RecommendedItem
              title={item.title}
              description={item.description}
              key={index}
            />
          ))}
        </div>
        <div className="foodList">
          {listFood.map((item, index) => (
            <FoodItem
              image={item.image}
              time={item.time}
              title={item.title}
              tags={item.tags}
              key={index}
            />
          ))}
        </div>
        <ButtonMain className="btnLoadMore" onClick={onLoadMore}>
          コラムをもっと見る
        </ButtonMain>
      </div>
    </div>
  );
};

export default Column;
