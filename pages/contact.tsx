"use client";
import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        role: "",
        playerType: "",
        playerActivity: ""
    });

    const [responseMessage, setResponseMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar a submissão do formulário

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            const result = await response.json();
            setResponseMessage(result.message);
            setFormSubmitted(true); // Atualiza o estado para indicar que o formulário foi enviado
        } else {
            const errorMessage = await response.text();
            console.error("Erro ao enviar:", errorMessage);
            setResponseMessage("Erro ao enviar o formulário.");
        }
    };

    return (
        <div>
            {/* Verifica se o formulário foi enviado para exibir a mensagem ou o formulário */}
            {!formSubmitted && <h1>Venha participar</h1>}

            {formSubmitted ? (
                <div>
                    <h2>Enviado com sucesso!</h2>
                    <p style={{ fontSize: "24px", color: "green" }}>
                        Obrigado por se inscrever! A equipe entrará em contato em breve.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div id="join">
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Seu Nome"
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
                            placeholder="Nome de Usuário no Throne and Liberty"
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
                            placeholder="Qual Role do seu personagem? ex: Tanker, Healer ou DPS"
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
                            placeholder="Que tipo de jogador você é? ex: Casual ou Hardcore"
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
                            placeholder="Que tipo de atividade mais gosta de fazer? ex: PVP, PVE, Raids"
                            value={formData.playerActivity}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            )}

            {/* Exibe a mensagem de erro ou sucesso */}
            {responseMessage && !formSubmitted && <p>{responseMessage}</p>}
        </div>
    );
};

export default ContactForm;
