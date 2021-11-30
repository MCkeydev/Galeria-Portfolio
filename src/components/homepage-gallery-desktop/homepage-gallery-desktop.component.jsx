import React from "react";
import Column from "../gallery-column/column.component";
import Thumbnail from "../gallery-thumbnail/thumbnail.component";
const GalleryDesktop = ({ paintings }) => {
  return (
    <>
      <Column>
        {paintings
          .filter((cur, i) => i === 0 || i === 4 || i === 8 || i === 11)
          .map(({ id, ...props }) => {
            return <Thumbnail key={`${id}`} {...props} />;
          })}
      </Column>
      <Column>
        {paintings
          .filter((cur, i) => i === 1 || i === 5 || i === 9 || i === 12)
          .map(({ id, ...props }) => {
            return <Thumbnail key={`${id}`} {...props} />;
          })}
      </Column>
      <Column>
        {paintings
          .filter((cur, i) => i === 2 || i === 6 || i === 13)
          .map(({ id, ...props }) => {
            return <Thumbnail key={`${id}`} {...props} />;
          })}
      </Column>
      <Column>
        {paintings
          .filter((cur, i) => i === 3 || i === 7 || i === 10 || i === 14)
          .map(({ id, ...props }) => {
            return <Thumbnail key={`${id}`} {...props} />;
          })}
      </Column>
    </>
  );
};

export default GalleryDesktop;
