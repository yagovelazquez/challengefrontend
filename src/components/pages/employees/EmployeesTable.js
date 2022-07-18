import Table from "../../commom/Table";
import React from "react";
import { useQueryClient, useQuery } from "react-query";
import { queryKeys } from "../../../reactQuery/queryConstants";
import useUser from "../../../hooks/useUser";
import moment from "moment";
import { generalGetCall } from './../../../lib/fetchServer';
import config from "../../../config/appConfig";
import LoadingModal from './../../commom/LoadingModal';

function EmployeesTable() {
  const queryClient = useQueryClient();
  const { user } = useUser();



  const { data: databaseData } = useQuery(
    queryKeys.employees,
    () => {
      return generalGetCall(`${config.BASE_URL}/all-users`, user.token)
    },
    {
      onError: () => {
        queryClient.setQueryData(queryKeys.employees, null);
      },
    }
  );



  const data = React.useMemo(() => {
    const processedData = databaseData?.map((item) => {

      let objData = {};

      for (const key in item) {
        if (item[key] && key === "createdAt" ) {
          const date = new Date(item[key]);
          const formatedDate = moment(date).format("DD/MM/YY");
          objData[key] = formatedDate;
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
        Header: "User Type",
        accessor: "type",
      },
      {
        Header: "Joined at",
        accessor: "createdAt",
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

export default EmployeesTable;
