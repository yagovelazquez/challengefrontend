import Table from "../../commom/Table";
import React from "react";
import LoadingModal from "./../../commom/LoadingModal";
import useReports from "./../../../hooks/useReports";

function FinancesTable() {
  const { dataReports: databaseData } = useReports();

  const data = React.useMemo(() => {
    const processedData = databaseData?.map((item) => {
      let objData = {};

      for (const key in item) {
        if (item[key] && (key === "money_earned" || key === "money_earned_after_taxes")  ) {
            objData[key] = `${Number.parseFloat(item[key]).toFixed(2)} €`
            continue
        }
        objData[key] = item[key];
      }

      return objData;
    });

    return processedData;
  }, [databaseData]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Occupation",
        accessor: "occupation",
      },
      {
        Header: "Worked time (Hours)",
        accessor: "total_hours_worked",
      },
      {
        Header: "Hour Rate",
        accessor: "hourRate",
      },
      {
        Header: "Total Earned",
        accessor: "money_earned",
      },
      {
        Header: "Earned After Taxes",
        accessor: "money_earned_after_taxes",
      },
    ],
    []
  );

  const dataPlaceHolder = [];

  return (
    <>
      <LoadingModal isLoading={data ? false : true}></LoadingModal>
      <Table data={databaseData ? data : dataPlaceHolder} columns={columns} />
    </>
  );
}

export default FinancesTable;
