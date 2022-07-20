import { useQuery } from "react-query";
import useUser from "./useUser";
import { generalGetCall } from "../lib/fetchServer";
import { queryKeys } from "../reactQuery/queryConstants";
import config from "../config/appConfig";
import { useMemo } from "react";

function useFiles() {

    const {user} = useUser()

    const { data: dataFiles } = useQuery(
        [queryKeys.user, queryKeys.files],
        ({ signal }) => {
          return generalGetCall(`${config.BASE_URL}/upload`, user?.token);
        },
        {
          initialData: user?.files,
          enabled: !!user,
        },

      );


      const avatarData = useMemo(() =>  dataFiles?.filter((data) => data.type === "avatar"), [dataFiles]);
      const contractData = useMemo(() =>  dataFiles?.filter((data) => data.type === "contract"), [dataFiles]);



    return {avatarData, contractData};
}

export default useFiles;