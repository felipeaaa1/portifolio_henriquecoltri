import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { SeoService } from '../../../core/services/seo.service';
import { PortfolioService } from '../../../core/services/portfolio.service';

type ArchetypeName =
  | 'Inocente'
  | 'Explorador'
  | 'Sábio'
  | 'Herói'
  | 'Rebelde'
  | 'Mago'
  | 'Cara Comum'
  | 'Amante'
  | 'Bobo da Corte'
  | 'Cuidador'
  | 'Criador'
  | 'Governante';

interface ArchetypeScore {
  archetype: ArchetypeName;
  weight: number;
}

interface QuizOption {
  id: string;
  text: string;
  scores: ArchetypeScore[];
}

interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

interface ArchetypeResult {
  name: ArchetypeName;
  centralPhrase: string;
  motivation: string;
  strength: string;
  shadow: string;
  expression: string[];
  reading: string;
  secondaryPhrase: string;
}

type QuizPhase =
  | 'intro'
  | 'question'
  | 'processing'
  | 'result';

@Component({
  selector: 'app-archetype-quiz-page',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './archetype-quiz-page.component.html',
  styleUrl: './archetype-quiz-page.component.scss'
})
export class ArchetypeQuizPageComponent implements OnInit {

  readonly contactUrl: string;

  phase: QuizPhase = 'intro';

  currentQuestionIndex = 0;

  answers: Record<number, string> = {};

  primaryResult: ArchetypeResult | null = null;

  secondaryResults: ArchetypeResult[] = [];

  strongSecondaryInfluence = false;


  readonly archetypeOrder: ArchetypeName[] = [
    'Inocente',
    'Explorador',
    'Sábio',
    'Herói',
    'Rebelde',
    'Mago',
    'Cara Comum',
    'Amante',
    'Bobo da Corte',
    'Cuidador',
    'Criador',
    'Governante'
  ];


  readonly questions: QuizQuestion[] = [

    {
      id: 1,
      text: 'Quando algo importante sai do controle, qual tende a ser sua primeira reação?',
      options: [
        {
          id: 'A',
          text: 'Organizo o que está acontecendo e tento recuperar a direção.',
          scores: [
            { archetype: 'Governante', weight: 3 },
            { archetype: 'Herói', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Tento aliviar a tensão para conseguir olhar a situação com mais leveza.',
          scores: [
            { archetype: 'Bobo da Corte', weight: 3 },
            { archetype: 'Inocente', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Procuro uma saída diferente, mesmo que ela quebre o caminho esperado.',
          scores: [
            { archetype: 'Rebelde', weight: 3 },
            { archetype: 'Explorador', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Penso primeiro em como aquilo está afetando as pessoas ao redor.',
          scores: [
            { archetype: 'Amante', weight: 3 },
            { archetype: 'Cuidador', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 2,
      text: 'O que costuma fazer você sentir que está no caminho certo?',
      options: [
        {
          id: 'A',
          text: 'Perceber que estou evoluindo e superando meus próprios limites.',
          scores: [
            { archetype: 'Herói', weight: 3 },
            { archetype: 'Governante', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Sentir que estou vivendo de maneira simples e fiel ao que realmente importa para mim.',
          scores: [
            { archetype: 'Inocente', weight: 3 },
            { archetype: 'Explorador', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Ver algo que imaginei ganhando forma.',
          scores: [
            { archetype: 'Criador', weight: 3 },
            { archetype: 'Mago', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Saber que estou fazendo diferença na vida de alguém.',
          scores: [
            { archetype: 'Cuidador', weight: 3 },
            { archetype: 'Cara Comum', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 3,
      text: 'Quando você entra em um ambiente novo, o que mais chama sua atenção?',
      options: [
        {
          id: 'A',
          text: 'Como as coisas funcionam e por que funcionam daquele jeito.',
          scores: [
            { archetype: 'Sábio', weight: 3 },
            { archetype: 'Governante', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'O que existe ali para descobrir ou experimentar.',
          scores: [
            { archetype: 'Explorador', weight: 3 },
            { archetype: 'Inocente', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Como as pessoas estão se relacionando.',
          scores: [
            { archetype: 'Cara Comum', weight: 3 },
            { archetype: 'Amante', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'O que poderia ser questionado ou feito de outra maneira.',
          scores: [
            { archetype: 'Rebelde', weight: 3 },
            { archetype: 'Criador', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 4,
      text: 'Qual destas sensações mais incomoda você?',
      options: [
        {
          id: 'A',
          text: 'Sentir que não tenho controle sobre algo importante.',
          scores: [
            { archetype: 'Governante', weight: 3 },
            { archetype: 'Herói', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Sentir que estou preso a uma vida que não escolhi.',
          scores: [
            { archetype: 'Explorador', weight: 3 },
            { archetype: 'Rebelde', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Sentir que não compreendo o que está acontecendo.',
          scores: [
            { archetype: 'Sábio', weight: 3 },
            { archetype: 'Mago', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Sentir que estou decepcionando alguém que depende de mim.',
          scores: [
            { archetype: 'Cuidador', weight: 3 },
            { archetype: 'Amante', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 5,
      text: 'Quando você se envolve profundamente com alguma coisa, o que normalmente está buscando?',
      options: [
        {
          id: 'A',
          text: 'Fazer bem feito e provar que sou capaz.',
          scores: [
            { archetype: 'Herói', weight: 3 },
            { archetype: 'Governante', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Criar algo único, que carregue uma parte de mim.',
          scores: [
            { archetype: 'Criador', weight: 3 },
            { archetype: 'Amante', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Construir uma conexão verdadeira.',
          scores: [
            { archetype: 'Amante', weight: 3 },
            { archetype: 'Cara Comum', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Encontrar uma possibilidade que outras pessoas ainda não enxergaram.',
          scores: [
            { archetype: 'Mago', weight: 3 },
            { archetype: 'Criador', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 6,
      text: 'Como você costuma reagir a regras que não fazem sentido para você?',
      options: [
        {
          id: 'A',
          text: 'Tento compreender primeiro por que elas existem.',
          scores: [
            { archetype: 'Sábio', weight: 3 },
            { archetype: 'Governante', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Tento não deixar aquilo pesar mais do que merece e encontro um jeito leve de lidar com a situação.',
          scores: [
            { archetype: 'Bobo da Corte', weight: 3 },
            { archetype: 'Cara Comum', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Questiono e, se necessário, rompo com elas.',
          scores: [
            { archetype: 'Rebelde', weight: 3 },
            { archetype: 'Herói', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Prefiro encontrar meu próprio caminho.',
          scores: [
            { archetype: 'Explorador', weight: 3 },
            { archetype: 'Inocente', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 7,
      text: 'O que mais desperta sua energia em um projeto?',
      options: [
        {
          id: 'A',
          text: 'Um desafio difícil que precisa ser vencido.',
          scores: [
            { archetype: 'Herói', weight: 3 },
            { archetype: 'Rebelde', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Perceber que uma ideia pode transformar aquilo que existe hoje.',
          scores: [
            { archetype: 'Mago', weight: 3 },
            { archetype: 'Criador', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Tornar algo mais simples, verdadeiro e essencial.',
          scores: [
            { archetype: 'Inocente', weight: 3 },
            { archetype: 'Sábio', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Ver pessoas diferentes trabalhando juntas por algo em comum.',
          scores: [
            { archetype: 'Cara Comum', weight: 3 },
            { archetype: 'Cuidador', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 8,
      text: 'Quando alguém procura você em um momento difícil, qual papel surge mais naturalmente?',
      options: [
        {
          id: 'A',
          text: 'Tento ajudá-la a reencontrar o essencial e respirar um pouco.',
          scores: [
            { archetype: 'Inocente', weight: 3 },
            { archetype: 'Cuidador', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Tento fazê-la perceber possibilidades que ainda não está conseguindo enxergar.',
          scores: [
            { archetype: 'Mago', weight: 3 },
            { archetype: 'Sábio', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Escuto, acolho e procuro estar presente.',
          scores: [
            { archetype: 'Cuidador', weight: 3 },
            { archetype: 'Amante', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Tento diminuir o peso da situação e devolver um pouco de leveza.',
          scores: [
            { archetype: 'Bobo da Corte', weight: 3 },
            { archetype: 'Cara Comum', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 9,
      text: 'O que mais incomoda você na forma como o mundo funciona?',
      options: [
        {
          id: 'A',
          text: 'Falta de responsabilidade, organização e direção.',
          scores: [
            { archetype: 'Governante', weight: 3 },
            { archetype: 'Sábio', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Conformismo e repetição de padrões que já não fazem sentido.',
          scores: [
            { archetype: 'Rebelde', weight: 3 },
            { archetype: 'Explorador', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Falta de cuidado entre as pessoas.',
          scores: [
            { archetype: 'Cuidador', weight: 3 },
            { archetype: 'Cara Comum', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Falta de liberdade para viver de maneira autêntica.',
          scores: [
            { archetype: 'Explorador', weight: 3 },
            { archetype: 'Rebelde', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 10,
      text: 'Quando você imagina uma vida bem vivida, qual imagem se aproxima mais?',
      options: [
        {
          id: 'A',
          text: 'Ter construído algo sólido, respeitado e capaz de permanecer.',
          scores: [
            { archetype: 'Governante', weight: 3 },
            { archetype: 'Herói', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Ter aproveitado a vida, criado boas histórias e não ter levado tudo tão a sério.',
          scores: [
            { archetype: 'Bobo da Corte', weight: 3 },
            { archetype: 'Explorador', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Ter criado algo original que antes só existia na minha imaginação.',
          scores: [
            { archetype: 'Criador', weight: 3 },
            { archetype: 'Mago', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Ter vivido relações profundas e verdadeiras.',
          scores: [
            { archetype: 'Amante', weight: 3 },
            { archetype: 'Cuidador', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 11,
      text: 'Quando você precisa tomar uma decisão importante, o que costuma pesar mais?',
      options: [
        {
          id: 'A',
          text: 'O que consigo compreender e sustentar racionalmente.',
          scores: [
            { archetype: 'Sábio', weight: 3 },
            { archetype: 'Governante', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'O que me permite continuar em paz com aquilo que considero essencial.',
          scores: [
            { archetype: 'Inocente', weight: 3 },
            { archetype: 'Explorador', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'O efeito dessa decisão sobre as pessoas das quais faço parte.',
          scores: [
            { archetype: 'Cara Comum', weight: 3 },
            { archetype: 'Amante', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'A possibilidade de transformar a situação em algo melhor do que ela é hoje.',
          scores: [
            { archetype: 'Mago', weight: 3 },
            { archetype: 'Criador', weight: 1 }
          ]
        }
      ]
    },

    {
      id: 12,
      text: 'O que você gostaria que as pessoas reconhecessem em você sem que você precisasse dizer?',
      options: [
        {
          id: 'A',
          text: 'Coragem e capacidade para enfrentar o que for necessário.',
          scores: [
            { archetype: 'Herói', weight: 3 },
            { archetype: 'Governante', weight: 1 }
          ]
        },
        {
          id: 'B',
          text: 'Originalidade e capacidade de transformar ideias em algo concreto.',
          scores: [
            { archetype: 'Criador', weight: 3 },
            { archetype: 'Mago', weight: 1 }
          ]
        },
        {
          id: 'C',
          text: 'Sensibilidade e capacidade de criar conexões verdadeiras.',
          scores: [
            { archetype: 'Amante', weight: 3 },
            { archetype: 'Cuidador', weight: 1 }
          ]
        },
        {
          id: 'D',
          text: 'Uma presença humana, acessível e com a qual as pessoas se sintam à vontade.',
          scores: [
            { archetype: 'Cara Comum', weight: 3 },
            { archetype: 'Bobo da Corte', weight: 1 }
          ]
        }
      ]
    }

  ];


  readonly results: Record<ArchetypeName, ArchetypeResult> = {

    'Inocente': {
      name: 'Inocente',
      centralPhrase:
        'Você busca leveza, verdade e a sensação de que a vida pode ser mais simples.',
      motivation:
        'Desejo de viver de forma coerente com aquilo que considera essencial, preservando esperança, autenticidade e uma visão positiva do mundo.',
      strength:
        'Você tende a trazer clareza, confiança e simplicidade para ambientes que ficaram complexos demais.',
      shadow:
        'A busca por harmonia pode fazer você evitar conflitos, subestimar riscos ou acreditar que tudo se resolverá apenas com boas intenções.',
      expression: [
        'Direto',
        'Positivo',
        'Transparente',
        'Gentil',
        'Essencial'
      ],
      reading:
        'Talvez este seja um momento em que você esteja querendo menos ruído e mais verdade. Menos complicação e mais espaço para aquilo que realmente faz sentido. O convite agora pode estar em proteger essa simplicidade sem confundi-la com ingenuidade.',
      secondaryPhrase:
        'A busca pelo simples, verdadeiro e essencial.'
    },

    'Explorador': {
      name: 'Explorador',
      centralPhrase:
        'Você precisa sentir que existe sempre um horizonte além daquele que já conhece.',
      motivation:
        'Liberdade, autonomia, descoberta e a possibilidade de construir o próprio caminho.',
      strength:
        'Você se adapta, experimenta e encontra oportunidades justamente onde outras pessoas enxergam incerteza.',
      shadow:
        'A necessidade de liberdade pode virar inquietação constante, dificuldade de criar raízes ou vontade de abandonar algo assim que ele começa a parecer previsível.',
      expression: [
        'Livre',
        'Curioso',
        'Espontâneo',
        'Autônomo',
        'Aberto ao novo'
      ],
      reading:
        'Pode ser que algo em você esteja pedindo movimento. Não necessariamente uma mudança radical, mas a sensação de que ainda há espaço para descobrir outras formas de viver e escolher. Talvez o caminho não seja fugir do que existe, mas reencontrar liberdade dentro dele.',
      secondaryPhrase:
        'A necessidade de liberdade, descoberta e novos caminhos.'
    },

    'Sábio': {
      name: 'Sábio',
      centralPhrase:
        'Antes de escolher um caminho, você precisa compreender.',
      motivation:
        'Verdade, conhecimento, clareza e a vontade de entender profundamente o que está por trás das coisas.',
      strength:
        'Você observa, conecta informações e ajuda a transformar confusão em entendimento.',
      shadow:
        'Pensar demais pode atrasar decisões. A busca pela resposta certa também pode gerar distanciamento, excesso de análise ou dificuldade de confiar na intuição.',
      expression: [
        'Reflexivo',
        'Preciso',
        'Racional',
        'Didático',
        'Consistente'
      ],
      reading:
        'Talvez você esteja em uma fase em que compreender seja tão importante quanto agir. Você quer escolher melhor, não apenas escolher mais rápido. O desafio pode estar em reconhecer quando já existe clareza suficiente para transformar conhecimento em movimento.',
      secondaryPhrase:
        'A busca por compreender antes de concluir.'
    },

    'Herói': {
      name: 'Herói',
      centralPhrase:
        'Você encontra sentido quando percebe que existe algo a superar.',
      motivation:
        'Conquista, evolução, competência e a necessidade de provar, principalmente para si mesmo, que é capaz.',
      strength:
        'Coragem, disciplina, foco e disposição para enfrentar situações difíceis em vez de fugir delas.',
      shadow:
        'A necessidade de vencer pode transformar tudo em batalha. Você pode se cobrar demais, resistir à vulnerabilidade ou sentir que precisa estar sempre provando seu valor.',
      expression: [
        'Determinado',
        'Enérgico',
        'Objetivo',
        'Confiante',
        'Orientado à ação'
      ],
      reading:
        'Talvez você esteja vivendo uma fase em que crescer significa encarar algo que exige mais coragem, esforço ou consistência do que antes. Nem toda força precisa aparecer como resistência. Às vezes, reconhecer limites também faz parte da conquista.',
      secondaryPhrase:
        'A coragem para enfrentar desafios e avançar.'
    },

    'Rebelde': {
      name: 'Rebelde',
      centralPhrase:
        'Você percebe rapidamente quando alguma coisa deixou de fazer sentido.',
      motivation:
        'Ruptura, transformação, independência e a necessidade de questionar estruturas que parecem limitantes.',
      strength:
        'Você tem facilidade para desafiar padrões, provocar movimento e abrir espaço para aquilo que ainda não foi tentado.',
      shadow:
        'Questionar pode virar oposição automática. Às vezes, destruir o velho parece mais fácil do que construir o novo.',
      expression: [
        'Provocador',
        'Direto',
        'Intenso',
        'Inconformado',
        'Disruptivo'
      ],
      reading:
        'Talvez alguma parte da sua vida esteja parecendo pequena demais para quem você está se tornando. O incômodo pode estar apontando para uma mudança necessária. A pergunta agora é o que merece ser rompido e, principalmente, o que você deseja construir no lugar.',
      secondaryPhrase:
        'A força de questionar padrões que já não servem.'
    },

    'Mago': {
      name: 'Mago',
      centralPhrase:
        'Você enxerga possibilidades onde outras pessoas ainda enxergam apenas o que existe.',
      motivation:
        'Transformação, visão, significado e a vontade de tornar possível aquilo que parecia improvável.',
      strength:
        'Você conecta ideias, percebe padrões e inspira outras pessoas a enxergarem situações de uma nova maneira.',
      shadow:
        'A vontade de transformar pode virar controle, idealização ou promessa de algo que a realidade ainda não consegue sustentar.',
      expression: [
        'Visionário',
        'Simbólico',
        'Inspirador',
        'Intuitivo',
        'Provocador'
      ],
      reading:
        'Pode ser que você esteja vivendo um momento em que não basta melhorar o que existe. Algo em você quer mudar a lógica das coisas, enxergar caminhos que ainda não estão claros e aproximar realidade e possibilidade. Talvez o convite agora não seja imaginar mais, mas escolher o que realmente merece ser transformado.',
      secondaryPhrase:
        'A capacidade de transformar percepção em possibilidade.'
    },

    'Cara Comum': {
      name: 'Cara Comum',
      centralPhrase:
        'Você acredita que ninguém precisa provar que é especial para merecer pertencer.',
      motivation:
        'Pertencimento, proximidade, igualdade e relações em que as pessoas podem simplesmente ser quem são.',
      strength:
        'Você aproxima pessoas, reduz distâncias e cria ambientes em que os outros se sentem incluídos.',
      shadow:
        'O desejo de pertencer pode fazer você esconder diferenças, evitar se destacar ou abrir mão de escolhas próprias para não perder conexão com o grupo.',
      expression: [
        'Natural',
        'Acessível',
        'Simples',
        'Próximo',
        'Sem pretensão'
      ],
      reading:
        'Talvez você esteja valorizando mais as relações verdadeiras e os lugares em que não precisa performar para ser aceito. Pertencer é importante, mas talvez o momento também peça que você reconheça aquilo que o diferencia sem sentir que isso o afasta dos outros.',
      secondaryPhrase:
        'A busca por pertencimento, proximidade e relações reais.'
    },

    'Amante': {
      name: 'Amante',
      centralPhrase:
        'Para você, a vida ganha profundidade quando existe conexão verdadeira.',
      motivation:
        'Intimidade, vínculo, beleza, prazer e a possibilidade de viver relações significativas.',
      strength:
        'Sensibilidade para perceber pessoas, atmosferas e nuances que muitas vezes passam despercebidas.',
      shadow:
        'A busca por conexão pode virar necessidade de aprovação, medo da rejeição ou dificuldade de estabelecer limites.',
      expression: [
        'Sensível',
        'Caloroso',
        'Envolvente',
        'Atento',
        'Presente'
      ],
      reading:
        'Talvez este seja um período em que qualidade importa mais do que quantidade. Você quer relações, projetos e experiências que realmente façam você sentir alguma coisa. O desafio está em construir conexão sem abrir mão do próprio centro.',
      secondaryPhrase:
        'A necessidade de conexão, beleza e profundidade.'
    },

    'Bobo da Corte': {
      name: 'Bobo da Corte',
      centralPhrase:
        'Você sabe que a vida é séria demais para ser levada a sério o tempo inteiro.',
      motivation:
        'Prazer, espontaneidade, presença e a capacidade de transformar tensão em leveza.',
      strength:
        'Você percebe o absurdo das situações, quebra rigidez e ajuda as pessoas a voltarem para o presente.',
      shadow:
        'O humor pode virar fuga. A leveza também pode ser usada para evitar conversas difíceis ou responsabilidades que exigem profundidade.',
      expression: [
        'Espontâneo',
        'Divertido',
        'Irreverente',
        'Rápido',
        'Expressivo'
      ],
      reading:
        'Talvez algo em você esteja lembrando que viver também é experimentar, brincar e não transformar cada escolha em um peso. A leveza pode ser uma força poderosa quando não precisa esconder aquilo que também merece ser levado a sério.',
      secondaryPhrase:
        'A capacidade de devolver leveza e presença às situações.'
    },

    'Cuidador': {
      name: 'Cuidador',
      centralPhrase:
        'Você encontra sentido quando percebe que alguém está melhor porque você esteve ali.',
      motivation:
        'Proteção, serviço, empatia e o desejo genuíno de contribuir para o bem-estar das pessoas.',
      strength:
        'Você percebe necessidades, acolhe e cria segurança emocional em ambientes que poderiam ser frios ou impessoais.',
      shadow:
        'Cuidar demais pode significar esquecer de si, assumir responsabilidades que não são suas ou esperar reconhecimento pelo que oferece.',
      expression: [
        'Caloroso',
        'Atento',
        'Disponível',
        'Gentil',
        'Protetor'
      ],
      reading:
        'Talvez você esteja especialmente conectado ao impacto que suas escolhas têm sobre outras pessoas. Existe potência em cuidar, apoiar e proteger. O desafio é fazer isso sem desaparecer dentro das necessidades de quem está ao seu redor.',
      secondaryPhrase:
        'A vontade de acolher, proteger e contribuir.'
    },

    'Criador': {
      name: 'Criador',
      centralPhrase:
        'Você precisa transformar aquilo que imagina em alguma coisa que possa existir no mundo.',
      motivation:
        'Criação, expressão, originalidade e a vontade de deixar algo que carregue sua visão.',
      strength:
        'Você percebe possibilidades estéticas, conceituais e práticas e consegue dar forma ao que antes existia apenas como ideia.',
      shadow:
        'A busca pela ideia perfeita pode gerar perfeccionismo, insatisfação constante ou dificuldade de considerar algo realmente terminado.',
      expression: [
        'Inventivo',
        'Expressivo',
        'Autoral',
        'Detalhista',
        'Imaginativo'
      ],
      reading:
        'Talvez você esteja vivendo uma fase em que consumir ou repetir já não seja suficiente. Existe uma necessidade de produzir, construir e deixar uma assinatura. O desafio pode ser aceitar que uma ideia não precisa estar perfeita para começar a existir.',
      secondaryPhrase:
        'A necessidade de transformar imaginação em forma.'
    },

    'Governante': {
      name: 'Governante',
      centralPhrase:
        'Você se sente mais seguro quando consegue transformar caos em direção.',
      motivation:
        'Ordem, responsabilidade, controle e a vontade de construir estruturas capazes de funcionar e permanecer.',
      strength:
        'Liderança, organização, visão sistêmica e facilidade para assumir responsabilidade quando ninguém sabe exatamente o que fazer.',
      shadow:
        'A busca por controle pode virar rigidez, centralização ou dificuldade de confiar que outras pessoas também podem encontrar bons caminhos.',
      expression: [
        'Assertivo',
        'Seguro',
        'Organizado',
        'Estratégico',
        'Responsável'
      ],
      reading:
        'Talvez você esteja vivendo uma fase em que não basta participar. Você sente vontade de organizar, decidir e criar uma direção mais clara para aquilo que está ao seu redor. Liderar também pode significar construir estruturas que continuem funcionando quando você não estiver controlando cada detalhe.',
      secondaryPhrase:
        'A necessidade de transformar caos em direção e estrutura.'
    }

  };


  constructor(
    private seoService: SeoService,
    portfolioService: PortfolioService
  ) {

    this.contactUrl =
      portfolioService.getWhatsappUrl();
  }


  ngOnInit(): void {

    this.seoService.setPage({

      title:
        'Descubra seu Arquétipo | Henrique Coltri',

      description:
        'Responda a 12 perguntas e descubra qual arquétipo está mais presente em você hoje. Uma leitura sobre padrões de motivação, escolhas e comportamento.',

      path:
        '/descubra-seu-arquetipo',

      structuredData: {

        '@context':
          'https://schema.org',

        '@type':
          'WebPage',

        name:
          'Descubra seu Arquétipo',

        description:
          'Uma experiência interativa para identificar o arquétipo mais presente em você hoje.',

        url:
          'https://www.henriquecoltri.com.br/descubra-seu-arquetipo'
      }
    });
  }


  get currentQuestion(): QuizQuestion {

    return this.questions[
      this.currentQuestionIndex
    ];
  }


  get progress(): number {

    return (
      (this.currentQuestionIndex + 1) /
      this.questions.length
    ) * 100;
  }


  get selectedOptionId(): string | null {

    return (
      this.answers[
        this.currentQuestion.id
      ] ?? null
    );
  }


  startQuiz(): void {

    this.phase =
      'question';

    this.currentQuestionIndex =
      0;

    this.scrollToTop();
  }


  selectOption(option: QuizOption): void {

    this.answers[
      this.currentQuestion.id
    ] = option.id;

    if (
      this.currentQuestionIndex <
      this.questions.length - 1
    ) {

      this.currentQuestionIndex++;

      this.scrollToTop();

      return;
    }

    this.finishQuiz();
  }


  goBack(): void {

    if (
      this.currentQuestionIndex === 0
    ) {

      this.phase =
        'intro';

      this.scrollToTop();

      return;
    }

    this.currentQuestionIndex--;

    this.scrollToTop();
  }


  showResult(): void {

    this.phase =
      'result';

    this.scrollToTop();
  }




  /* QUIZ RESULT SHARE - INICIO */

  private getResultShareText(): string {

    const name =
      this.primaryResult?.name ?? 'meu arquétipo';

    const phrase =
      this.primaryResult?.centralPhrase ?? '';

    return phrase
      ? `Meu arquétipo predominante é ${name}. ${phrase}`
      : `Meu arquétipo predominante é ${name}.`;
  }


  async shareResult(): Promise<void> {

    const text =
      this.getResultShareText();

    const url =
      window.location.href;

    if (navigator.share) {

      try {

        await navigator.share({
          title: 'Meu arquétipo',
          text,
          url
        });

        return;

      }
      catch {
        return;
      }

    }

    await this.copyResultLink();
  }


  shareOnWhatsApp(): void {

    const text =
      `${this.getResultShareText()} ${window.location.href}`;

    const url =
      `https://wa.me/?text=${encodeURIComponent(text)}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  }


  shareByEmail(): void {

    const subject =
      'Meu resultado no quiz de arquétipos';

    const body =
      `${this.getResultShareText()}

${window.location.href}`;

    window.location.href =
      `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }


  async copyResultLink(): Promise<void> {

    const text =
      `${this.getResultShareText()} ${window.location.href}`;

    try {

      await navigator.clipboard.writeText(text);

    }
    catch {

      const textarea =
        document.createElement('textarea');

      textarea.value = text;

      document.body.appendChild(textarea);

      textarea.select();

      document.execCommand('copy');

      document.body.removeChild(textarea);
    }
  }

  /* QUIZ RESULT SHARE - FIM */

  restart(): void {

    this.answers = {};

    this.currentQuestionIndex = 0;

    this.primaryResult = null;

    this.secondaryResults = [];

    this.strongSecondaryInfluence =
      false;

    this.phase =
      'intro';

    this.scrollToTop();
  }


  private finishQuiz(): void {

    const ranking =
      this.calculateRanking();

    const primary =
      ranking[0];

    const secondary =
      ranking.slice(1, 3);

    this.primaryResult =
      this.results[primary.name];

    this.secondaryResults =
      secondary.map(item =>
        this.results[item.name]
      );

    this.strongSecondaryInfluence =
      secondary.length > 0 &&
      primary.score - secondary[0].score <= 2;

    this.phase =
      'processing';

    this.scrollToTop();
  }


  private calculateRanking(): {
    name: ArchetypeName;
    score: number;
    primaryHits: number;
  }[] {

    const scores =
      new Map<
        ArchetypeName,
        {
          score: number;
          primaryHits: number;
        }
      >();

    this.archetypeOrder.forEach(
      archetype => {

        scores.set(
          archetype,
          {
            score: 0,
            primaryHits: 0
          }
        );
      }
    );


    this.questions.forEach(
      question => {

        const answerId =
          this.answers[question.id];

        if (!answerId) {
          return;
        }

        const option =
          question.options.find(
            item =>
              item.id === answerId
          );

        if (!option) {
          return;
        }

        option.scores.forEach(
          scoreItem => {

            const current =
              scores.get(
                scoreItem.archetype
              );

            if (!current) {
              return;
            }

            current.score +=
              scoreItem.weight;

            if (
              scoreItem.weight === 3
            ) {

              current.primaryHits++;
            }
          }
        );
      }
    );


    return this.archetypeOrder
      .map(name => {

        const current =
          scores.get(name)!;

        return {
          name,
          score: current.score,
          primaryHits:
            current.primaryHits
        };
      })
      .sort((a, b) => {

        if (
          b.score !== a.score
        ) {
          return b.score - a.score;
        }

        if (
          b.primaryHits !==
          a.primaryHits
        ) {
          return (
            b.primaryHits -
            a.primaryHits
          );
        }

        return (
          this.archetypeOrder
            .indexOf(a.name) -
          this.archetypeOrder
            .indexOf(b.name)
        );
      });
  }


  private scrollToTop(): void {

    if (
      typeof window !==
      'undefined'
    ) {

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

}