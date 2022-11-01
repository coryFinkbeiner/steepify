
import useCookies from './cookies';

// const fetcher = (...params) => fetch(...params).then(response => response.json());

const useGetAlbumTracks = (albumIDs) => {
  const { getCookie } = useCookies();
  const accessToken = getCookie('accessToken');

  // albumIDs = ["5XpEKORZ4y6OrCZSKsi46A", "2guirTSEqLizK7j9i1MTTZ"]

  let playlist = []


  for (let i = 0; i< albumIDs.length; i++) {

    fetch(`https://api.spotify.com/v1/albums/${albumIDs[i]}/tracks`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log({data})
      playlist.push(data.items)
      console.log({playlist})
    })
    .catch(err => console.log(err))

  }

  




  // const {
  //   data: albumTracks
  // } = useSWR(albumID ? `/albums/${albumID}/tracks` : null, async () => {
  //     const url = `https://api.spotify.com/v1/albums/${albumID}/tracks`;
  //     const accessToken = getCookie('accessToken');

  //     return await fetcher(url, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`
  //       }
  //     });
  //   },{revalidateOnFocus: false});
  //   console.log('inside hook', albumTracks)
  // return {albumTracks}

  }

export default useGetAlbumTracks;











// import useSWR from 'swr';
// import useCookies from './cookies';

// const fetcher = (...params) => fetch(...params).then(response => response.json());

// const useGetAlbumTracks = (albumID) => {

//   const { getCookie } = useCookies();



//   const {
//     data: albumTracks
//   } = useSWR(albumID ? `/albums/${albumID}/tracks` : null, async () => {
//       const url = `https://api.spotify.com/v1/albums/${albumID}/tracks`;
//       const accessToken = getCookie('accessToken');

//       return await fetcher(url, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       });
//     },{revalidateOnFocus: false});
//     console.log('inside hook', albumTracks)
//   return {albumTracks}

//   }

// export default useGetAlbumTracks;



