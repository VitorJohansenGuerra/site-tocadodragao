"use client";
import { useState } from "react";
import { z } from "zod";

const FormSchema = z.object({
    name: z.string().min(3),
    userName: z.string().min(3),
    role: z.string().min(3),
    playerType: z.string().min(3),
    playerActivity: z.string().min(3),
});

type ContactForm = z.infer<typeof FormSchema>;

const ContactForm = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        userName: "",
        role: "",
        playerType: "",
        playerActivity: ""
    });

    const [responseMessage, setResponseMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<ContactForm>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validação com Zod
        const result = FormSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: Partial<ContactForm> = {};
            result.error.errors.forEach((error) => {
                if (error.path.length > 0) {
                    fieldErrors[error.path[0] as keyof ContactForm] = error.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

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
            setFormSubmitted(true);
        } else {
            const errorMessage = await response.text();
            console.error("Erro ao enviar:", errorMessage);
            setResponseMessage("Erro ao enviar o formulário.");
        }
    };

    return (
        <div>
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
                        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                    </div>

                    <div>
                        <label htmlFor="userName"></label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            placeholder="Nome de Usuário no Throne and Liberty"
                            value={formData.userName}
                            onChange={handleChange}
                            required
                        />
                        {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}
                    </div>

                    <div>
                        <label htmlFor="role"></label>
                        <input
                            type="text"
                            id="role"
                            name="role"
                            placeholder="Qual Role do seu personagem? ex: Tanker, Healer ou DPS"
                            value={formData.role}
                            onChange={handleChange}
                            required
                        />
                        {errors.role && <p style={{ color: "red" }}>{errors.role}</p>}
                    </div>

                    <div>
                        <label htmlFor="playerType"></label>
                        <input
                            type="text"
                            id="playerType"
                            name="playerType"
                            placeholder="Que tipo de jogador você é? ex: Casual ou Hardcore"
                            value={formData.playerType}
                            onChange={handleChange}
                            required
                        />
                        {errors.playerType && <p style={{ color: "red" }}>{errors.playerType}</p>}
                    </div>

                    <div>
                        <label htmlFor="playerActivity"></label>
                        <input
                            type="text"
                            id="playerActivity"
                            name="playerActivity"
                            placeholder="Que tipo de atividade mais gosta de fazer? ex: PVP, PVE, Raids"
                            value={formData.playerActivity}
                            onChange={handleChange}
                            required
                        />
                        {errors.playerActivity && <p style={{ color: "red" }}>{errors.playerActivity}</p>}
                    </div>

                    <button type="submit">Enviar</button>
                </form>
            )}

            {responseMessage && !formSubmitted && <p>{responseMessage}</p>}
        </div>
    );
};

export default ContactForm;
