import React from 'react';
import "./style.scss";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';
import Cast from './cast/Cast';
import VideosSection from './videosSection/videosSection';
import Similar from './carousels/Similar';
import Recommendation from './carousels/Recommendations';


function Details() {
  const {mediaType, id} = useParams();
  const {data, loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data: credits, loading: creditLoading} = useFetch(`/${mediaType}/${id}/credits`);

  return (
    <>
        <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
        <Cast data={credits?.cast} loading={creditLoading} />
        <VideosSection data={data} loading={loading} />
        <Similar mediaType={mediaType} id={id}/>
        <Recommendation mediaType={mediaType} id={id}/>
    </>

  )
}

export default Details;










