import axios from 'axios';

const fetchDistributorData = async (queryParamData:any) => {
  const response = await axios.get('http://127.0.0.1:8000/api/distributor/fetch/', {
    params: {
        ...queryParamData
    },
  });

  return response.data;
};

export {fetchDistributorData};
