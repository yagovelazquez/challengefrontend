import Table from "../../commom/Table";
import React from "react";
import { useQueryClient, useQuery } from "react-query";
import { queryKeys } from "../../../reactQuery/queryConstants";
import useUser from "../../../hooks/useUser";
import moment from "moment";
import { generalGetCall } from './../../../lib/fetchServer';
import config from "../../../config/appConfig";

function TimeClockTable() {
  const queryClient = useQueryClient();
  const { user } = useUser();



  const { data: databaseData } = useQuery(
    queryKeys.userClockTimes,
    () => {
      return generalGetCall(`${config.BASE_URL}/clock-timer/user`,user.token)
    },
    {
      initialData: user.clockTimes,
      onError: () => {
        queryClient.setQueryData(queryKeys.userClockTimes, null);
      },
    }
  );



  const data = React.useMemo(() => {
    const processedData = databaseData.map((item) => {

      let objData = {};

      for (const key in item) {
        if (item[key] && key !== 'comment' && key !== 'changedBy' ) {
          const date = new Date(item[key]);
          const formatedDate = moment(date).format("HH:mm DD/MM/YY");
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
        Header: "Clock In",
        accessor: "clockIn",
      },
      {
        Header: "Break Begin",
        accessor: "breakBegin",
      },
      {
        Header: "Break End",
        accessor: "breakEnd",
      },
      {
        Header: "Clock Out",
        accessor: "clockOut",
      },
      {
        Header: "Comment",
        accessor: "comment",
      },
      {
        Header: "Changed By",
        accessor: "changedBy",
      },
    ],
    []
  );

  return <Table data={data} columns={columns} />;
}

export default TimeClockTable;
