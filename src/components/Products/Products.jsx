import React from 'react';
import Card from '../Card/Card';
// import Areacnunt from '/assets/images/Areacnut.jpg;

function Products() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      <Card productname="Iron Ore" img="./images/bg.jpg" content="quality iron ore, a critical raw material for steel manufacturing, sourced responsibly to support industrial growth. Trusted for its consistency, purity, and suitability for global market needs" />
      <Card productname="Areacnut" img="./images/Areacnut.JPG" content="Premium quality Areca Nuts sourced and processed with utmost care, ideal for diverse industrial applications, exports, and traditional uses. Known for consistent quality and reliability, our Areca Nuts are a trusted choice for global markets" />
      <Card productname="Black Pepper" img="/images/Blackpepper.jpg" content="Premium quality black pepper, sourced from the finest plantations, offering rich flavor and aroma. Ideal for culinary and industrial use, our black pepper meets global quality standards for both domestic and export markets." />
      <Card productname="Honey" img="/images/honey.jpg" content="Pure and natural forest and farmed honey, harvested from the finest apiaries. Rich in flavor and nutrients, our honey offers a wholesome, organic option for both direct consumption and industrial use, meeting global quality standards" />
      {/* <Card productname="Iron Ore" img="https://via.placeholder.com/300" content="Iron ore is great" />
      <Card productname="Iron Ore" img="https://via.placeholder.com/300" content="Iron ore is great" /> */}
    </div>
  );
}

export default Products;
