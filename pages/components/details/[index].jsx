import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import list from '../../api/dummy_data';
import Header from '../Header/Header';
import details from './index.module.css';



export default function Details() {
    const [kolicina, setKolicina] = useState(1);

    const [size, setSize] = useState('Small');
    const [color, setColor] = useState('White');

    const [formData, setFormData] = useState({
        kolicina: 1,
        size: 'Small',
        color: 'White',
    });
    const [item, setItem] = useState(null);

    const router = useRouter();
    const index = router.query;

    //potreban useEffect jer se "html" ucita prije nego sta se uvati id i item iz liste pa je ovo mali delay koji omoguci da se promini kad je index uvacen
    useEffect(() => {
        const fetchItem = async () => {
            if (index.index !== undefined && !isNaN(parseInt(index.index))) {
                const itemIndex = parseInt(index.index);
                setTimeout(() => {
                    setItem(list[itemIndex]);
                }, 1000);
            }
        };

        fetchItem(); // Call the function to fetch the item
    }, [index.index]);




    // funkcije
    const Smanji = () => {
        setFormData((prevData) => ({
            ...prevData,
            kolicina: Math.max(prevData.kolicina - 1, 1),
        }));
    };

    const Povecaj = () => {
        setFormData((prevData) => ({
            ...prevData,
            kolicina: prevData.kolicina + 1,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cleanFormData = {
            kolicina: formData.kolicina,
            size: formData.size,
            color: formData.color
        };

        try {
            const response = await fetch('/api/fetch_form_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(cleanFormData),
            });
            if (!response.ok) {
                throw new Error('Failed to save data');
            }
            // Handle success response
        } catch (error) {
            console.error('Error saving data:', error);
        }


        console.log(cleanFormData);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));


    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //    console.log(size, color, kolicina);


    //    try {
    //     const response = await fetch('/api/fetch_form_data', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         kolicina,
    //         size,
    //         color
    //       })
    //     });
    //     if (response.ok) {
    //         const data = await response.json();
    //         console.log('API response:', data);
    //     } else {
    //         console.log('ne :(');
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }

    //     // const formData = new FormData(e.target);
    //     // try {
    //     //     const response = await fetch('/spremiUBazu.php', {
    //     //         method: 'POST',
    //     //         body: formData
    //     //     });
    //     //     if (response.ok) {
    //     //         console.log('Data saved successfully.');
    //     //     } else {
    //     //         console.error('Failed to save data.');
    //     //     }
    //     // } catch (error) {
    //     //     console.error('Error:', error);
    //     // }



    // };


    return (
        <>
            <Header />
            <div className={details.main}>
                {item ? (
                    <>
                        <div className={details.imgDiv}>
                            <img className={details.slika} src={item.slika} />
                        </div>
                        <div className={details.details}>
                            <h3>{item.product}</h3>
                            <p><b>{item.price} €</b></p>
                            <br />
                            <p className={details.desc}>{item.desc}</p>

                            <form onSubmit={handleSubmit} action="" method="post">
                                <select className={details.input} name="size" id="" onChange={handleInputChange}>
                                    <option value="Small">Small</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Large">Large</option>
                                </select>
                                <br />
                                <select className={details.input} name="color" id="" onChange={handleInputChange}>
                                    <option value="White">White</option>
                                    <option value="Black">Black</option>
                                    <option value="Grey">Grey</option>
                                </select>
                                <div className={details.ammount}>
                                    <button type='button' onClick={Smanji}>-</button>
                                    <p>{formData.kolicina}</p>
                                    <button type='button' onClick={Povecaj}>+</button>
                                </div>
                                <button type="submit" className={details.button}>Submit</button>
                            </form>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}