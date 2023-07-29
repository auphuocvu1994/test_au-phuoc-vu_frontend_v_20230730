import React, { useState } from "react";
import ButtonMain from "../../Button/ButtonMain";
import DiaryItem from "../DiaryItem/DiaryItem";
import "./ListDiary.scss";

const dataItemFake = {
  title: (
    <>
      2021.05.21 <br /> 23:25
    </>
  ),
  description:
    "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
};

export default function ListDiary() {
  const [listDiary, setListDiary] = useState(() => {
    return new Array(8).fill(dataItemFake);
  });

  const onLoadMore = () => {
    const arrayAdd = new Array(8).fill(dataItemFake);
    const newListDiary = listDiary.concat(arrayAdd);
    setListDiary(newListDiary);
  };
  return (
    <div className="ListDiary">
      <p className="titleMyDiary">MY DIARY</p>
      <div className="list">
        {listDiary.map((item, index) => (
          <DiaryItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <ButtonMain className="btnLoadMore" onClick={onLoadMore}>
        自分の日記をもっと見る
      </ButtonMain>
    </div>
  );
}
