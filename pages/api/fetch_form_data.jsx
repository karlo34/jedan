import mysql from 'mysql2/promise';

export default async function Ajme() {

    try {
        // Fetch data from your database or any other source
        const data = await fetchDataFromDatabase();

        // Send the data as JSON
        // res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        // res.status(500).json({ error: 'Internal Server Error' });
    }


    const dbconnection = await mysql.createConnection({
        host: 'localhost',
        // port: 8889,
        user: 'root',
        password: '',
        database: 'narudzbe'
        // socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    });

    try {
        const query = "SELECT * FROM narudzbe";
        const values = [];

        const [data] = await dbconnection.execute(query, values);
        res.status(200).json({ results: data });
        dbconnection.end();

    } catch (error) {
        // res.status(500).json({ error: error.messsage });
    }
    console.log(`Spremljena kolicina: ${kolicina}`);

}