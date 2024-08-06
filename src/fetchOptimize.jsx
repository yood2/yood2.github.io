const fetchOptimize = async (tickers) => {
    let params = {
        tickers: tickers.join(','),
        start_date: '2018-01-01',
        end_date: '2024-01-01',
    };

    const queryString = new URLSearchParams(params).toString();

    try {
        // const res = await fetch(
        //     `http://127.0.0.1:5000/portfolio?${queryString}`
        // );
        const res = await fetch(
            `https://hermes-api-ttic.onrender.com/portfolio?${queryString}`
        );

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data.optimal_weights;
    } catch (error) {
        console.error('Error fetching optimization data:', error);
    }
};

export default fetchOptimize;
