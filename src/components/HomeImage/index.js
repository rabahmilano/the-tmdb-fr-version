/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../../context";

import { Wrapper, Content, Text } from "./HomeImage.Styles";

import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

import NoPoster from "../../images/no_image.jpg";

const HomeImage = () => {
  const { data } = useGlobalContext();
  const [value, setValue] = useState(0);

  const newData = data.filter((item) => {
    if (item.backdrop_path && item.overview) return item;
  });

  useEffect(() => {
    const lastValue = newData.length - 1;
    if (value < 0) {
      setValue(lastValue);
    }
    if (value + 1 > lastValue) {
      setValue(0);
    }
  }, [value, newData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setValue((oldValue) => {
        return oldValue + 1;
      });
    }, 150000);
    return () => clearInterval(slider);
  }, [value]);

  return (
    <Wrapper
      image={
        newData[value].backdrop_path
          ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${newData[value].backdrop_path}`
          : NoPoster
      }
    >
      <Content>
        <Text>
          <h3>
            {newData[value].title || newData[value].name
              ? newData[value].title || newData[value].name
              : newData[value].original_title || newData[value].original_name}
          </h3>
          <p>
            {newData[value].overview.length > 150
              ? `${newData[value].overview.slice(0, 150)} ...`
              : newData[value].overview}
          </p>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default HomeImage;
