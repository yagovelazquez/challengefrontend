import { useQuery } from "react-query";
import useUser from "./useUser";
import { generalGetCall } from "../lib/fetchServer";
import { queryKeys } from "../reactQuery/queryConstants";
import config from "../config/appConfig";

function useReports() {

    const {user} = useUser()

    const { data: dataReports } = useQuery(
        [queryKeys.user, queryKeys.reports],
        ({ signal }) => {
          return generalGetCall(`${config.BASE_URL}/reports/all-total-hours-worked`, user?.token);
        },
        {
          enabled: !!user,
        },

      );



     

    return {dataReports};
}

export default useReports;