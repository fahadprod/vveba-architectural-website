import { useState, useEffect } from 'react';

export default function Customers() {
    const [users, setUsers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://reqres.in/api/users', {
                    headers: {
                        'x-api-key': 'reqres-free-v1'
                    }
                });
                const data = await response.json();
                console.log("data", data)
                setUsers(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);


    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 2 >= users.length ? 0 : prevIndex + 2
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 2 < 0 ? users.length - (users.length % 2 || 2) : prevIndex - 2
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="customers">
            <h1 className="customers-heading">CUSTOMERS</h1>
            <div className="customers-content">
                {users.slice(currentIndex, currentIndex + 2).map((user) => (
                    <div className="customers-card" key={user.id}>
                        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                        <div className="customers-card-content">
                            <h1>{user.first_name} {user.last_name}</h1>
                            <h3>{user.email}</h3>
                            <i className="fa-solid fa-quote-left"></i>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, illo velit ullam nam deleniti nisi?</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider-controls">
                <button onClick={prevSlide}>Previous</button>
                <button onClick={nextSlide}>Next</button>
            </div>
            <div className="client section-bottom">
                <h1>CLIENT</h1>
                <h3>SAYS</h3>
            </div>
        </section>
    );
}