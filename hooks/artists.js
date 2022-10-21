import useSWR from 'swr';
import useCookies from './cookies';

const fetcher = (...params) => fetch(...params).then(response => response.json());

const useArtists = (term) => {
  const { getCookie } = useCookies();

  console.log({ term })

  const {
    data: artists,
    error: artistsError,
    mutate: fetchArtists
  } = useSWR(`/artists`, async () => {
    const url = 'https://api.spotify.com/v1/search?q=glow&type=artist';
    const accessToken = getCookie('accessToken');

    return await fetcher(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
  });
  const artistsLoading = !artists && !artistsError;
console.log(artists);

///////////////////

  return artists

}

////// / // ////////

  // return {
  //   artists,
  //   artistsLoading,
  //   artistsError,
  //   fetchArtists
  // };}

export default useArtists;







// import useSWR from 'swr';
// import useCookies from './cookies';

// const fetcher = (...params) => fetch(...params).then(response => response.json());

// const useArtists = (term) => {
//   const { getCookie } = useCookies();

//   console.log(term)

//   const {
//     data: artists,
//     error: artistsError,
//     mutate: fetchArtists
//   } = useSWR(`/artists`, async () => {
//     const url = 'https://api.spotify.com/v1/search?q=glow&type=album';
//     const accessToken = getCookie('accessToken');

//     return await fetcher(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });
//   });
//   const artistsLoading = !artists && !artistsError;
// console.log(artistsError);
//   return {
//     artists,
//     artistsLoading,
//     artistsError,
//     fetchArtists
//   };}

// export default useArtists;