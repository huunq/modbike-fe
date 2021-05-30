import React, { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";
import { apiFetchAllHistory, apiUpdateHistory } from "../../api/history";
import Loading from "../../components/core/Loading";
import _ from "lodash";
import Cookies from "js-cookie";
import { navigate } from "@reach/router";
import Button from "../../components/core/Button";
import { apiBikeReturn } from "../../api/bikes";

export default function History() {
  const [isFetch, setIsFetch] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchData = useCallback(async () => {
    setIsFetch(true);
    const { data } = await apiFetchAllHistory(Cookies.get("auth"));
    setHistory(data);
    setIsFetch(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isFetch) {
    return (
      <div className="flex flex-col flex-1 min-h-screen">
        <Loading />
      </div>
    );
  }

  const handleReturn = async (id) => {
    const body = {
      finish_date: dayjs().format("YYYY-MM-DD H:mm:ss"),
      return_ontime: true,
    };

    try {
      const result = await apiUpdateHistory(history[id].history_id, body);
      if (result.status === 200) {
        navigate("/profile");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="px-5 py-3 mx-auto w-full">
      {_.map(history, (data, key) => (
        <>
          <div
            className="bikeCard flex justify-between p-2"
            onClick={() => handleReturn()}
          >
            <div>
              <p>Bike id: {data.bike_id}</p>
              <p>{dayjs(data.start_date).format("DD/MM/YYYY")}</p>
            </div>

            {data.return_ontime ? (
              <p style={{ color: "#3AB03F" }}>คืนแล้ว</p>
            ) : (
              <div>
                {dayjs().format() - data.start_date > 5 ? (
                  <p style={{ color: "#D32121" }}>Late</p>
                ) : (
                  <p style={{ color: "#3AB03F" }}>Ontime</p>
                )}
              </div>
            )}
          </div>
          {!data.return_ontime && (
            <Button text="คืนจักรยาน" onClick={() => handleReturn(key)} />
          )}
        </>
      ))}
    </div>
  );
}
