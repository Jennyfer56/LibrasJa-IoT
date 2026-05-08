msg.payload = {
    id_atendimento: Math.floor(Math.random() * 1000),
    usuario: "Cliente LibrasJá",
    status: "atendimento_iniciado",
    duracao_min: Math.floor(Math.random() * 30)
};

return msg;
