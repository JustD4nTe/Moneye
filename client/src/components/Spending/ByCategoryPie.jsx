import React, { useEffect } from "react";
import "../../App.css";
import "../../index.css";
import { Pie } from "@nivo/pie";

export default function ByCategoryPie(props) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    setData(props.spendingByCategory);
    console.log(props.spendingByCategory);
  }, [props.spendingByCategory]);

  return (
    <Pie
      width={800}
      height={500}
      data={data}
      margin={{ bottom: 80, top: 80, right: 80 }}
      valueFormat=" >-$"
      sortByValue={true}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsLinkColor={{ from: "color" }}
      sliceLabelsSkipAngle={10}
      legends={[
        {
          anchor: "right",
          direction: "column",
          itemsSpacing: 16,
          itemWidth: 0,
          itemHeight: 10,
          symbolShape: "circle",
        },
      ]}
    />
  );
}
