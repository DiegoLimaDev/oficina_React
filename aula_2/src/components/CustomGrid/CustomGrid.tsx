import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { postsModel } from '../../models/posts.model';
import { getApi } from '../../services/getApi.service';
import GridCard from '../GridCard/GridCard';

const CustomGrid = () => {
  const [data, setData] = useState<postsModel[]>();
  const getApiService = new getApi();

  useEffect(() => {
    const callApi = async () => {
      setData(await getApiService.getApi());
    };

    callApi();
  });

  return (
    <Grid
      minHeight={'100dvh'}
      container
      spacing={2}
      padding={'2rem'}
      justifyContent={'center'}
    >
      {data?.map((item) => {
        return (
          <Grid item key={item.id} width={'25rem'}>
            <GridCard cardData={item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CustomGrid;
