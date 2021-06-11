import React, { useState, useRef, useMemo } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { Card } from 'components';
import mergeMaps from 'utils/mergeMaps';
import mapData from 'utils/mapData';

const showList = (data) => {
  const sortedArray = (Array.from(data)).sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });
  return sortedArray.map((val) => (
    <div key={val[0]}>
      <Card city={val[0]} aqi={val[1]} />
    </div>
  ));
};

function Home() {
  const [socketUrl] = useState(process.env.REACT_APP_WS_URL);
  const cityList = useRef([]);
  const {
    lastMessage,
    readyState,
  } = useWebSocket(socketUrl);
  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  cityList.current = useMemo(() => {
    const { data } = lastMessage || { data: '' };
    const JSONData = (data && JSON.parse(data));
    if (!data) return '';
    if (cityList.current.length === 0) return mapData(JSONData);
    const mergedMap = mergeMaps(cityList.current, mapData(JSONData));
    return mergedMap;
  }, [lastMessage]);

  return (
    <div>
      <div className="d-flex mb-10px p-10px justify-center text-bold text-1-2-5em">
        Server Status:
        {' '}
        {connectionStatus}
      </div>
      <div className="d-flex flex-wrap gap-10px justify-center">
        {
          cityList.current.size > 0 && showList(cityList.current)
        }
      </div>
    </div>
  );
}

export default Home;
