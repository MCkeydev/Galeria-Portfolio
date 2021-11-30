import React from "react";
import Column from "../gallery-column/column.component";
import Thumbnail from "../gallery-thumbnail/thumbnail.component";

const GalleryPhone = ({ paintings }) => {
  return (
    <>
      <Column>
        {paintings.map(({ id, ...props }) => {
          return <Thumbnail key={`${id}`} {...props} />;
        })}
      </Column>
    </>
  );
};
export default GalleryPhone;
