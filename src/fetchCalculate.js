const fetchCalculate = async (portfolio) => {
    // Prepare the data payload
    let dataPayload = {
        portfolio: portfolio,
        start_date: '2018-01-01',
        end_date: '2024-01-01',
    };

    try {
        // const res = await fetch('http://127.0.0.1:5000/calculate', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(dataPayload),
        // });

        console.log(portfolio);

        const res = await fetch(
            'https://hermes-api-ttic.onrender.com/calculate?',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataPayload),
            }
        );

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching metrics data:', error);
    }
};

export default fetchCalculate;
