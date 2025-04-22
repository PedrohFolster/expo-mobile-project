# Expo Mobile Project

Aplicativo móvel demonstrando o uso dos componentes Network e Checkbox do Expo, com uma interface moderna e responsiva.

## 🚀 Funcionalidades

- Monitoramento do estado da rede em tempo real
- Exibição do endereço IP
- Detecção do tipo de conexão (WiFi, Celular, etc.)
- Checkboxes personalizáveis com diferentes estados
- Interface adaptativa para iOS e Android
- Atualização automática do estado da rede

## 📱 Screenshots

(Adicione screenshots do app aqui)

## 🛠️ Tecnologias Utilizadas

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [expo-network](https://docs.expo.dev/versions/latest/sdk/network/)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI
- Dispositivo móvel ou emulador

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/PedrohFolster/expo-mobile-project.git
cd expo-mobile-project
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o projeto:
```bash
npm i
npm expo start
```

4. Escaneie o QR code com o aplicativo Expo Go no seu dispositivo móvel ou pressione 'a' para abrir no emulador Android ou 'i' para iOS.

## 🎯 Como Usar

- O app mostra automaticamente o estado atual da sua conexão
- Você pode testar diferentes estados de rede desativando/ativando o WiFi ou dados móveis
- Os checkboxes podem ser clicados para demonstrar diferentes estados
- O app atualiza o estado da rede a cada 5 segundos

## 📝 Estrutura do Projeto

```
expo-mobile-project/
├── components/         # Componentes reutilizáveis
│   ├── Card.tsx       # Componente de card
│   ├── CustomCheckbox.tsx  # Checkbox personalizado
│   └── NetworkInfo.tsx     # Informações de rede
├── screens/           # Telas do app
│   └── HomeScreen.tsx # Tela principal
├── services/          # Serviços
│   └── NetworkService.ts  # Serviço de rede
├── styles/            # Estilos e temas
│   └── theme.ts       # Tema do app
└── App.tsx            # Ponto de entrada do app
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 👨‍💻 Autor

PedrohFolster - [@PedrohFolster](https://github.com/PedrohFolster)

---