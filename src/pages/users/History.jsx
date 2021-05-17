import React, { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { apiFetchAllHistory } from "../../api/history";
import Loading from "../../components/core/Loading";
import _ from "lodash";

const Card = (data) => (
  <>
    <div className="bikeCard flex justify-between">
      <div>
        <p>{data.bike_name}</p>
        <p>{data.start_date}</p>
      </div>
      <div>
        {dayjs().format() - data.start_date > 5 ? (
          <p style={{ color: "#D32121" }}>Late</p>
        ) : (
          <p style={{ color: "#3AB03F" }}>Ontime</p>
        )}
      </div>
    </div>
  </>
);

export default function History() {
  // const { authenticationStore } = useContext(storesContext);
//   const [isFetch, setIsFetch] = useState(false);
//   const [hist, setHist] = useSate();
//   const fetchData = useCallback(async () => {
//     setIsFetch(true);
//     const data = await apiFetchAllHistory(authenticationStore.currentUserId);
//     setHist(data);

//     setIsFetch(false);
//   }, [authenticationStore]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   if (isFetch) {
//     return (
//       <div className="flex flex-col flex-1 min-h-screen">
//         <Loading />
//       </div>
//     );
//   }

  return <>{_.map(hist, (data, key) => Card(data))}</>;
}
