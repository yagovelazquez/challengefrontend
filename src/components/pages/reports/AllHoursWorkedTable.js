import Table from "../../commom/Table";
import React from "react";
import LoadingModal from './../../commom/LoadingModal';
import useReports from './../../../hooks/useReports';

function AllHoursWorkedTable() {

  const {dataReports: databaseData} = useReports()




  const data = React.useMemo(() => {
    const processedData = databaseData?.map((item) => {

      let objData = {};

      for (const key in item) {

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
        Header: "User Type",
        accessor: "type",
      },
      {
        Header: "Break time (Hours)",
        accessor: "total_hours_break",
      },
      {
        Header: "Worked time (Hours)",
        accessor: "total_hours_worked",
      },
    ],
    []
  );

  const dataPlaceHolder = []

  return <>
  <LoadingModal isLoading={data ? false : true}></LoadingModal>
  <Table data={databaseData ? data : dataPlaceHolder  } columns={columns} />
  </>;
}

export default AllHoursWorkedTable;
