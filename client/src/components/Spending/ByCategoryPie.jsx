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
      marginBottom: "24px",
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
          margin={{ left: 80, bottom: 80, top: 80, right: 160 }}
          valueFormat=" >-$"
          sortByValue={true}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={(datum) => {
            switch (datum.id) {
              case "Food":
                return "#F2AE7A";
              case "Shopping":
                return "#AC6FE9";
              case "Transport":
                return "#E9776F";
              case "Gift":
                return "#6F87E9";
              case "Other":
                return "#6E6E6E";
              case "Health":
                return "#4DCB99";
              case "Home":
                return "#68ACF1";
              case "Leisure":
                return "#F168CC";
            }
          }}
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
