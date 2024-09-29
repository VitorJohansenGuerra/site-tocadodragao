import { NextApiRequest, NextApiResponse } from 'next';

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1288920766519447686/dxubeEmF5f9qPZZJwF4n_9gtLPMMvWgYe5YGc7Ct2tJ8KlpD-gN_Qk5iDJIohqgR-By5';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, userName, role, playerType, playerActivity } = req.body;

        const discordPayload = {
            content: `**Nova mensagem!**\n**Nome**: ${name}\n**Nome de Usuário**: ${userName}\n**Role**: ${role}\n**Tipo de Jogador**: ${playerType}\n**Atividade**: ${playerActivity}`,
        };

        try {
            const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(discordPayload),
            });

            if (discordResponse.ok) {
                return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
            } else {
                return res.status(discordResponse.status).json({ message: 'Falha ao enviar para o Discord' });
            }
        } catch (error) {
            console.error('Erro ao enviar para o Discord:', error);
            return res.status(500).json({ message: 'Erro no servidor' });
        }
    } else {
        return res.status(405).json({ message: 'Método não permitido' });
    }
};

export default handler;