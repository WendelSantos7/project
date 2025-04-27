// Mock data for the EasyRoute app

// Course modules (same for all course types)
export const courseModules = [
  {
    id: '1',
    title: 'Segurança Pessoal e Patrimonial',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis sapien vitae nulla faucibus pharetra. Donec finibus, nisi vel ultricies malesuada, ex erat imperdiet nulla, a faucibus velit justo et libero. Sed sed ipsum vel erat gravida porta vel id justo. Nullam eget odio blandit, posuere nisi vel, rutrum magna.',
    link: 'https://example.com/seguranca'
  },
  {
    id: '2',
    title: 'Atendimento ao Cliente',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat felis vel libero facilisis, vel consectetur magna interdum. Proin euismod vulputate ipsum, non efficitur ex ultricies id. Fusce scelerisque tincidunt lacus, a bibendum lectus eleifend ut. Duis feugiat magna eu erat lobortis, in semper dui interdum.',
    link: 'https://example.com/atendimento'
  },
  {
    id: '3',
    title: 'Direção Defensiva',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta interdum magna, nec aliquam felis. Duis at felis sed enim vulputate lacinia. Donec a ligula est. Morbi cursus, dolor a condimentum euismod, lacus magna sollicitudin eros, non tincidunt ipsum nulla eu erat. Pellentesque mattis viverra purus.',
    link: 'https://example.com/direcao'
  },
  {
    id: '4',
    title: 'Saúde Mental e Estresse',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat, justo ac varius dapibus, justo nisi bibendum lectus, et laoreet ex libero eget tellus. Fusce interdum tempor diam, sed sollicitudin sem dapibus sit amet. Cras ut urna a massa tempus lacinia vulputate ut nulla. Cras ac placerat enim.',
    link: 'https://example.com/saude'
  },
  {
    id: '5',
    title: 'Manutenção Preventiva do Veículo',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et posuere sapien. Cras finibus eleifend urna et commodo. Praesent eu varius metus. Suspendisse a est commodo, tincidunt quam sit amet, vehicula justo. Aenean aliquam scelerisque dapibus. Nunc eu dui nec est interdum congue ut a enim.',
    link: 'https://example.com/manutencao'
  }
];

// Course types
export const courseTypes = [
  {
    id: 'food',
    title: 'Entregador de Comida',
    color: '#3B82F6', // Blue
  },
  {
    id: 'products',
    title: 'Entregador de Produtos',
    color: '#EF4444', // Red
  },
  {
    id: 'driver',
    title: 'Motorista Particular',
    color: '#8B5CF6', // Purple
  }
];

// Sample test questions
export const testQuestions = [
  {
    id: '1',
    question: 'Qual é a melhor prática para garantir a segurança durante entregas?',
    options: [
      'Estacionar em locais proibidos para economizar tempo',
      'Manter o veículo com a porta aberta para agilizar a entrega',
      'Verificar o endereço antes da entrega e planejar a rota',
      'Ignorar as regras de trânsito quando houver pressa'
    ],
    correctAnswer: 2
  },
  {
    id: '2',
    question: 'Como lidar com um cliente insatisfeito?',
    options: [
      'Ignorar a reclamação e seguir para a próxima entrega',
      'Discutir com o cliente para provar seu ponto',
      'Ouvir atentamente, pedir desculpas e oferecer solução',
      'Transferir o problema para outro departamento'
    ],
    correctAnswer: 2
  },
  {
    id: '3',
    question: 'Qual técnica de direção defensiva é recomendada em dias chuvosos?',
    options: [
      'Manter a mesma velocidade para não atrasar as entregas',
      'Reduzir a velocidade e aumentar a distância entre veículos',
      'Usar constantemente a buzina para alertar outros motoristas',
      'Acelerar em poças d\'água para limpar os pneus'
    ],
    correctAnswer: 1
  },
  {
    id: '4',
    question: 'Qual a melhor forma de lidar com o estresse durante o expediente?',
    options: [
      'Ignorar os sinais de cansaço e continuar trabalhando',
      'Fazer pausas regulares e praticar técnicas de respiração',
      'Consumir bebidas energéticas para manter a atenção',
      'Dirigir mais rápido para terminar o trabalho antes'
    ],
    correctAnswer: 1
  },
  {
    id: '5',
    question: 'Qual item deve ser verificado diariamente antes de iniciar as entregas?',
    options: [
      'Nível de água no reservatório do limpador de para-brisa',
      'Data da última troca de óleo',
      'Pressão e condição dos pneus',
      'Validade do extintor de incêndio'
    ],
    correctAnswer: 2
  }
];