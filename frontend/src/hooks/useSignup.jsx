import { useState } from "react";
import { useAuthContext } from "./useAuthContext";export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { dispatch } = useAuthContext();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        contactNumber: '',
        password: '',
        birthDay: '',
        country: ''
    });

    const signup = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://onestep-api.vercel.app/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const json = await response.json();

            if (!response.ok) {
                setError(json.error || 'An error occurred during signup.');
            } else {
                localStorage.setItem('user', JSON.stringify(json));
                dispatch({ type: 'LOGIN', payload: json });
            }
        } catch (error) {
            setError('An error occurred during signup.');
        } finally {
            setIsLoading(false);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return { signup, isLoading, error, handleInputChange, formData };
}

