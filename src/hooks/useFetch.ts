import useSWR, { ConfigInterface } from "swr";

import axios from "axios";

export default function useFetch<Data = any, Error = any>(url: string | null = null, options?: Omit<ConfigInterface<Data, Error>, "suspense">) {
    const {data, error} = useSWR<Data, Error>(url, async url => {
        return await axios.get(url).then(response => response.data);
    }, {...options});
    return {data, error};
}