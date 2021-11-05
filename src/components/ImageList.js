import React from 'react';

const ImageList = props => {
  
  const renderedimages = props.images.map(({ description, id, urls }) => {
    return (
      <img alt={description} key={id} src={urls.regular} style={{border:'2px solid salmon'}}/>
    )
  });

  return <div>{renderedimages}</div>;
};

export default ImageList;
