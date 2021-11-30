import React from "react";
import Column from "../gallery-column/column.component";
import Thumbnail from "../gallery-thumbnail/thumbnail.component";

const GalleryTablet = ({ paintings }) => {
  return (
    <>
      <Column>
        {paintings
          .filter(
            (cur, i) =>
              i === 0 ||
              i === 2 ||
              i === 4 ||
              i === 6 ||
              i === 8 ||
              i === 11 ||
              i === 13
          )
          .map(({ id, ...props }) => {
            return <Thumbnail key={`${id}`} {...props} />;
          })}
      </Column>
      <Column>
        {paintings
          .filter(
            (cur, i) =>
              i === 1 ||
              i === 3 ||
              i === 5 ||
              i === 7 ||
              i === 9 ||
              i === 10 ||
              i === 12 ||
              i === 14
          )
          .map(({ id, ...props }) => {
            return <Thumbnail key={`${id}`} {...props} />;
          })}
      </Column>
    </>
  );
};
export default GalleryTablet;
