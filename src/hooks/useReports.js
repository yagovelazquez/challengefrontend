import { useQuery } from "react-query";
import useUser from "./useUser";
import { generalGetCall } from "../lib/fetchServer";
import { queryKeys } from "../reactQuery/queryConstants";
import config from "../config/appConfig";

function useReports() {
  const { user } = useUser();
  let url = user.type === "admin" ? `${config.BASE_URL}/reports/all-total-hours-worked` :`${config.BASE_URL}/reports/user-total-hours-worked`

  const { data: dataReports } = useQuery(
    [queryKeys.user, queryKeys.reports],
    ({ signal }) => {
      return generalGetCall(
        url,
        user?.token
      );
    },
    {
      enabled: !!user,
    }
  );

  return { dataReports };
}

export default useReports;
