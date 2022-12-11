
import useSWR from 'swr';
import useCookies from './cookies';

const fetcher = (...params) => fetch(...params).then(response => response.json());

const useSearch = (term) => {
  const { getCookie } = useCookies();

  const {
    data: searchResults,
    error: searchResultsError,
  } = useSWR(term ? `/search?q=${term}` : null, async () => {
      const url = 'https://api.spotify.com/v1/search?q=' + term + '&type=album';
      const accessToken = getCookie('accessToken');

      return await fetcher(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    },{revalidateOnFocus: false});

  return {searchResults}

  }

export default useSearch;



















// import useSWR from 'swr';
// import useCookies from './cookies';

// const fetcher = (...params) => fetch(...params).then(response => response.json());

// const useSearch = (term) => {
//   const { getCookie } = useCookies();

//   const {
//     data: searchResults,
//     error: searchResultsError,
//   } = useSWR(term ? `/search` : null, async () => {

//       const url = 'https://api.spotify.com/v1/search?q=' + term + '&type=album';
//       const accessToken = getCookie('accessToken');

//       return await fetcher(url, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       });
//     });

//   return {searchResults}

//   }

// export default useSearch;























// import useSWR from 'swr';
// import useCookies from './cookies';

// const fetcher = (...params) => fetch(...params).then(response => response.json());

// const useSearch = (term) => {
//   const { getCookie } = useCookies();

//   const {
//     data: searchResults,
//     error: searchResultsError,
//   } = useSWR(term ? `/search` : null, async () => {

//       const url = 'https://api.spotify.com/v1/search?q=' + term + '&type=album';
//       const accessToken = getCookie('accessToken');

//       return await fetcher(url, {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${accessToken}`
//         }
//       });
//     });

//   return {
//     searchResults,
//     searchResultsError
//   };}

// export default useSearch;



