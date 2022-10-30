import useSWR from 'swr';
import useCookies from './cookies';

const fetcher = (...params) => fetch(...params).then(response => response.json());

const useSearch = (term) => {
  const { getCookie } = useCookies();

  const {
    data: searchResults,
    error: searchResultsError,
  } = useSWR(term ? `/search` : null, async () => {

      const url = 'https://api.spotify.com/v1/search?q=' + term + '&type=album';
      const accessToken = getCookie('accessToken');

      return await fetcher(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    });

  return {
    searchResults,
    searchResultsError
  };}

export default useSearch;














// import useSWR from 'swr';
// import useCookies from './cookies';

// const fetcher = (...params) => fetch(...params).then(response => response.json());

// const useSearch = () => {
//   const { getCookie } = useCookies();

//   const url = 'https://api.spotify.com/v1/search?q=glow&type=album'

//   const {
//     data: search,
//     error: searchError,
//     mutate: fetchSearch
//   } = useSWR(`/search`, async () => {
//     const accessToken = getCookie('accessToken');

//     return await fetcher(url, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${accessToken}`
//       }
//     });
//   });
//   const searchLoading = !search && !searchError;
// console.log(searchError);
//   return {
//     search,
//     searchLoading,
//     searchError,
//     fetchSearch
//   };}



// // TEST / / / / // / / // / / / // / / / // / / /


// // const useSearch = () => {
// //   return "hi"

// // }



// export default useSearch;