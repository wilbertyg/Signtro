import {useEffect, useState} from "react";

interface RequestResult {
    data: any | null;
    isPending: boolean;
    error: any | null;
}

const GetService = (url: string): RequestResult => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        setTimeout(() => {
            fetch("http://localhost:3000" + url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching data');
                    }

                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return {data, isPending, error};
}

export default GetService;