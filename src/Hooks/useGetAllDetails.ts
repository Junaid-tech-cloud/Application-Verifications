import axios from 'axios';
import { QueryKey, useQuery, UseQueryOptions } from 'react-query';

async function useGetAllDetailsRequest<T>() {
    const config = {
        headers: { Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTc3ODg3MzQsImV4cCI6MzE3MjAyMjMxMTM0fQ.BKI9EzOzDU3Esv1wlyLHgjESKUB_tvHiM6MN-GwrASk'}` }
    };

    try {
          const res = await axios.get<T>(`http://18.142.153.136:3000/api/application/member_details?id=5`, config);
          return res.data;

      } catch (err: any) {
        throw new Error(err);
      }
}

export function useGetAllDetails<T>(options?: UseQueryOptions<T, Error, T>,) {
    return useQuery(['/useGetAllDetailsRequest',] as QueryKey, () => useGetAllDetailsRequest<T>());
}
