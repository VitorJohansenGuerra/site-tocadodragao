"use client"
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        userName: '',
        role: '',
        playerType: '',
        playerActivity: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const result = await response.json();
            setResponseMessage(result.message);
        } else {
            const errorMessage = await response.text();
            console.error('Erro ao enviar:', errorMessage);
            setResponseMessage('Erro ao enviar o formulário.');
        }
    };


    return (
        <div>
            <h1>Venha participar</h1>
            <form onSubmit={handleSubmit}>
                <div id="join">
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Seu Nome'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="userName"></label>
                    <input
                        type="userName"
                        id="userName"
                        name="userName"
                        placeholder='Nome de Usuário no Throne and Liberty'
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="role"></label>
                    <input
                        type="text"
                        id="Role"
                        name="role"
                        placeholder='Qual Role do seu personagem?    ex:    Tanker, Healer ou DPS'
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="playerType"></label>
                    <input
                        type="playerType"
                        id="playerType"
                        name="playerType"
                        placeholder='Que tipo de jogador você é?   ex:  Casual ou Hardcore'
                        value={formData.playerType}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="playerActivity"></label>
                    <input
                        type="playerActivity"
                        id="playerActivity"
                        name="playerActivity"
                        placeholder='Que tipo de atividade mais gosta de fazer?   ex:  PVP, PVE, Raids'
                        value={formData.playerActivity}
                        onChange={handleChange}
                        required
                    />
                </div>


                <button type="submit">Send</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
        </div>
    );
};

export default ContactForm;