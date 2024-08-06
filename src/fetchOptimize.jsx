const fetchOptimize = async (tickers) => {
    let params = {
        tickers: tickers.join(','),
        start_date: '2018-01-01',
        end_date: '2024-01-01',
    };

    const queryString = new URLSearchParams(params).toString();

    try {
        const res = await fetch(
            `https://hermes-api-ttic.onrender.com/portfolio?${queryString}`
        );

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching optimization data:', error);
    }
};

export default fetchOptimize;
