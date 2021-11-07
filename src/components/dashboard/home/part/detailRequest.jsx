import React, { useContext, useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { Hooks } from "providers";
import { debounceSearchRender } from "helper/debouncer";
import Spinner from "assets/img/spinner.svg";
import { ThemeProvider, createTheme } from "@material-ui/core";
import Pintu from "assets/img/pintu.webp";
import Binance from "assets/img/binance.svg";
import { values } from "lodash";
const DetailRequest = ({ data, isLoading }) => {
  const theme = () =>
    createTheme({
      overrides: {
        MUIDataTableBodyCell: {
          root: { backgroundColor: "red !important", color: "inherit" },
        },
      },
    });
  const [filter, setFilter] = useState([
    "defi",
    "innovation-zone",
    "etf",
    "pos",
    "_layer1",
    "gaming",
    "polkadot",
    "nft",
    "metavers",
    "pow",
    "bsc",
    "storage-zone",
  ]);
  const columns = [
    {
      field: "id",
      headerName: "No",
      width: 100,
      options: {
        filter: false,
        display: "false",
      },
    },
    {
      name: "Coin",
      label: "Coin",
      width: 150,
      editable: true,
      options: {
        filter: false,
        sort: true,
        sortDirection: "asc",
        // customSort: (data, colIndex, order) => {
        //   console.log(data, colIndex, order, "ehhe");
        //   throw Error;
        // },
        customBodyRender: function (val) {
          return (
            <div className="subpixel-antialiased text-base font-bold text-gray-500 flex flex-row gap-3">
              <div>
                <img
                  src={Pintu}
                  width="35px"
                  height="35px"
                  alt=""
                  className="rounded-md shadow-lg"
                />
              </div>
              <div>
                <div>{val[0]}</div>
                <div className="subpixel-antialiased text-sm text-gray-400">
                  {val[1]}
                </div>
              </div>
            </div>
          );
        },
      },
    },
    {
      name: "LastPrice",
      label: "Last Price",
      width: 200,
      editable: true,
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div
              className={`subpixel-antialiased text-base font-medium ${
                value[1] === "up"
                  ? "text-green-400"
                  : value[1] === "down"
                  ? "text-red-400"
                  : "text-gray-500"
              }`}
            >
              ${value[0]}
            </div>
          );
        },
      },
    },
    {
      name: "hrChange",
      label: "24hr Change",
      type: "number",
      width: 200,
      editable: true,
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div
              className={`subpixel-antialiased text-base font-medium ${
                value[1] === "up"
                  ? "text-green-500"
                  : value[1] === "down"
                  ? "text-red-500"
                  : "text-gray-800"
              }`}
            >
              {value[0]}
            </div>
          );
        },
      },
    },
    {
      name: "MarketCap",
      label: "Market Cap",
      // type: "string",
      width: 200,
      editable: true,
      options: {
        filter: false,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div className="subpixel-antialiased text-base font-medium text-gray-500">
              ${value}
            </div>
          );
        },
      },
    },
    {
      name: "",

      label: "",
      // type: "string",
      width: 200,
      options: {
        display: "false",
        filterOptions: {
          names: filter,
          display: true,
          logic(value, filters) {
            // alert(value);
            const arr = value.split(",");
            const data = arr.filter((val) => val.includes(filters));
            if (data.length >= 1) {
              return false;
            } else {
              return data;
            }
          },
        },
        customBodyRender: (val) => {
          return <div className="text-red-400">{val}</div>;
        },
      },
    },
    {
      name: "Action",
      label: "Action",
      options: {
        sort: false,
        filter: false,
        searchable: false,
        filter: false,
        display: "false",
      },
    },
  ];
  const [cryptoAsset, setCryptoAsset] = useState([]);

  const options = {
    filterType: "dropdown",
    customSearchRender: debounceSearchRender(500),
    responsive: "stacked",
    // onFilterChange: (index, value, arr) => {
    //   const data = value.filter((n) => n);
    //   setTag(data);
    // },

    print: false,
    selectableRows: false, // <===== will turn off checkboxes in rows
  };

  return (
    <>
      <section className="detail-container d-block m-auto">
        <div
          className="wrap-tabel"
          style={{
            height: "100%",
            width: "80%",
            background: "#FFFFFF",
            marginTop: "40px",
            margin: "0 auto",
          }}
        >
          <MUIDataTable
            title={
              <>
                <img src={Binance} width="150px" alt="" />
              </>
            }
            data={data?.map((val, i) => {
              return [
                i + 1,
                [val.Coin, val.CoinDetail],
                [val.LastPrice, val.statLastPrice],
                [val.hrChange, val.statPercent],
                val.MarketCap,
                val.Tags,
              ];
            })}
            // columns={columns.map((val) => {
            //   return val.headerName;
            // })}
            columns={columns}
            options={options}
          />
        </div>
      </section>
    </>
  );
};
export default DetailRequest;
