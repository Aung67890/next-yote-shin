import { Box, CircularProgress } from "@mui/material";
import { getSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import ModalCom from "../components/Modal";
import VideoRow from "../components/Row";
// import { AppContext } from "../context/ContextProvider";
import {
  getOriginals,
  getPopularData,
  getTopRated,
  getActionMovies,
  getComedyMovies,
  getHorrorMovies,
  getRomanceMovies,
  getDocumentaries,
} from "../redux/actions/videoAction";

export default function Component() {
  // const {modalOpen,params} = useContext(AppContext)

  const dispatch = useDispatch();

  const originalData = useSelector(
    (state) => state.originalsReducer.original?.results
  );

  const trendingData = useSelector(
    (state) => state.trendingVideoReducer.trending?.results
  );
  const topRatedData = useSelector(
    (state) => state.topRatedReducer.topRated?.results
  );
  const actionVideoData = useSelector(
    (state) => state.actionVideoReducer.action?.results
  );
  const comedyData = useSelector(
    (state) => state.comedyReducer.comedy?.results
  );
  const horrorData = useSelector(
    (state) => state.horrorReducer.horror?.results
  );
  const romanceData = useSelector(
    (state) => state.romanceReducer.romance?.results
  );
  const documentaryData = useSelector(
    (state) => state.documentaryReducer.documentary?.results
  );

  useEffect(() => {
    dispatch(getPopularData(1));
    dispatch(getOriginals(1));
    dispatch(getTopRated(1));
    dispatch(getActionMovies(1));
    dispatch(getComedyMovies(1));
    dispatch(getHorrorMovies(1));
    dispatch(getRomanceMovies(1));
    dispatch(getDocumentaries(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{}}>
      

      {originalData ? (
        <Banner type="movie" data={originalData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
            height: "95vh",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {trendingData ? (
        <VideoRow title="Trendings" type="movie" data={trendingData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {topRatedData ? (
        <VideoRow title="Top rated" type="movie" data={topRatedData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {actionVideoData ? (
        <VideoRow title="Action" type="movie" data={actionVideoData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {comedyData ? (
        <VideoRow title="Comedy" type="movie" data={comedyData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {horrorData ? (
        <VideoRow title="Horror" type="movie" data={horrorData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {romanceData ? (
        <VideoRow title="Romance" type="movie" data={romanceData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}

      {documentaryData ? (
        <VideoRow title="Documentary" type="movie" data={documentaryData} />
      ) : (
        <Box
          sx={{
            display: "flex",
            py: 3,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
