import React, { useEffect } from "react";
import "../../App.css";
import "../../index.css";
import { Pie } from "@nivo/pie";
import { makeStyles } from "@material-ui/core/styles";

export default function ByCategoryPie(props) {
  const style = makeStyles({
    container: {
      height: "90%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    noData: {
      textAlign: "center",
      fontSize: "2em",
      color: "var(--main-grey)",
      marginBottom: "24px"
    },
  })();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    setData(props.spendingByCategory);
  }, [props.spendingByCategory]);

  return (
    <div className="widget">
      <h2>Spending by category</h2>
      {data.length > 0 ? (
        <Pie
          width={500}
          height={400}
          data={data}
          margin={{ left: 16, bottom: 80, top: 80, right: 160 }}
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
              translateX: 72,
              itemsSpacing: 16,
              itemWidth: 0,
              itemHeight: 10,
              symbolShape: "circle",
            },
          ]}
        />
      ) : (
        <div className={style.container}>
          <p className={style.noData}>No data :(</p>
        </div>
      )}
    </div>
  );
}
