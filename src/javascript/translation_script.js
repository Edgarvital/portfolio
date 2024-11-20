// Objeto com as traduções
const translations = {
    "pt-br": {
        nav_presentation: `Apresentação`,
        nav_systems: `Sistemas`,
        nav_experience: `Experiências`,
        description: `
            Minha trajetória na área de tecnologia começou em 2013, aos 14 anos, quando ingressei no curso Técnico em Informática no Instituto Federal de Pernambuco (IFPE). Durante os quatro anos de formação, adquiri uma base sólida em desenvolvimento de software, abrangendo diferentes stacks, como mobile, web, front-end, desktop e sistemas embarcados. Meu trabalho de conclusão de curso explorou sistemas embarcados, demonstrando minha capacidade de inovar em áreas diversas.<br>
            Após concluir o técnico, iniciei minha graduação em Ciência da Computação na Universidade Federal do Agreste de Pernambuco (UFAPE), onde continuei ampliando meus conhecimentos. Durante esse período, tive meu primeiro contato profissional no Laboratório Multidisciplinar de Tecnologias Sociais (LMTS), onde desenvolvi sistemas institucionais e sociais utilizando o framework Laravel (PHP) integrado com Blade e JQuery.<br>
            Em 2021, durante a pandemia, fui contratado pela Secretaria de Saúde de Garanhuns para liderar o desenvolvimento e a manutenção do Vem Vacina Garanhuns, um sistema crucial no combate à COVID-19, que beneficiou mais de 100 mil habitantes. Essa experiência fortaleceu minha expertise em modelagem e manutenção de sistemas de grande impacto social.<br>
            Atualmente, atuo na Overdrive Software e Consultoria, onde integro o time de produtos internos. Iniciei desenvolvendo o back-end de sistemas utilizando Laravel (PHP) e posteriormente expandi minhas habilidades com .NET (C#). Recentemente, foquei no desenvolvimento mobile com Flutter (Dart), criando e mantendo aplicações robustas, incluindo um jogo que demonstra minha habilidade em atender demandas inovadoras.
            Com ampla experiência em linguagens de programação como Java, PHP, Dart, C#, C, Python e Ruby, meu percurso reflete um compromisso com aprendizado contínuo e adaptação às tecnologias mais relevantes para atender às necessidades do mercado.
        `,
        title: `Apresentando, <span>Edgar Vital</span>`,
        technical_information: `Informações Técnicas`,
        programming_languages: `Linguagens de Programação`,
        frameworks_and_tools: `Frameworks e Ferramentas`,
        field_of_expertise: `Áreas de Atuação`,
        professional_pillars: `Pilares Profissionais`,
        development_backend: `Desenvolvimento e manutenção de sistemas backend`,
        development_mobile: `Desenvolvimento e manutenção de aplicativos mobile`,
        database_modeling: `Modelagem de Banco de Dados`,
        team_work: `Trabalho em Equipe`,
        software_architecture: `Arquitetura de Software`,
        problem_resolution: `Resolução de Problemas`,
        agile_development: `Desenvolvimento Ágil`,
        new_technologies_adaptation: `Adaptabilidade a Novas Tecnologias`,
        systems: `Sistemas`,
        act_as_colaborator_in: `Atuei como colaborador em...`,
        pega: `Plataforma Eletrônica de Gestão de Almoxarifados (PEGA)`,
        pega_description: `É uma aplicação web criada pela parceria UFAPE-LMTS/UPE para informatizar a gestão de
                                almoxarifados, facilitando tarefas como controle de estoque e atendimento de pedidos de
                                materiais. As funcionalidades principais incluem:<br>

                                Para Administradores: cadastrar/editar usuários, materiais e depósitos; consultar
                                estoque e histórico; gerenciar entrada, saída e transferências de materiais; aprovar,
                                negar e entregar solicitações.<br>

                                Para Requerentes: editar perfil e senha; fazer solicitações de materiais; consultar
                                histórico de pedidos.`,
        system_certification: `Certificado do Sistema`,
        system_link: `Certificado do Sistema`,
        submeta: `Sistema de Submissão de Projetos (Submeta)`,
        submeta_description: `O Submeta é um sistema de submissão de projetos acadêmicos, que pode ser adotado para os
                                diferentes propósitos de Ensino, Pesquisa e Extensão. O sistema abrange todas as
                                principais etapas relacionadas à submissão de projetos, permitindo o lançamento e
                                configuração de editais, além de gerenciar a distribuição das avaliações e os pareceres
                                técnicos dos avaliadores, como também, visualizar os projetos submetidos pelos
                                proponentes.`,
        certifica: `Certifica`,
        certifica_description: `O Certifica é uma plataforma web desenvolvida pela UFAPE, em parceria com a Pró-Reitoria
                                de Extensão e Cultura, com o objetivo de aprimorar a eficiência da gestão pública na
                                criação e gerenciamento de certificados emitidos por setores institucionais. Suas
                                principais funções incluem: cadastro de ações institucionais, importação de integrantes,
                                solicitação e emissão de certificados, verificação de autenticidade, invalidação e
                                consulta de certificados emitidos.`,
        secom: `Sistema de Gestão de Comunicação Institucional (SECOM)`,
        secom_description: `O Sistema de Gestão de Comunicação Institucional foi criado para atender demandas do
                                setor e assessoria de Comunicação Institucional da Universidade Federal do Agreste de
                                Pernambuco (UFAPE). Atualmente, a ferramenta possibilita a geração de cartões de
                                aniversário e de clipping customizados a partir da definição de plataforma de coleta dos
                                dados.`,
        ceua: `Comissão de Ética no Uso de Animais (CEUA)`,
        ceua_description: `A CEUA-UFAPE é a Comissão de Ética no Uso de Animais da UFAPE, responsável por avaliar
                                projetos de ensino, pesquisa e extensão que utilizam animais na instituição. Esta
                                comissão é normativa e deliberativa, com funções consultivas e educativas, vinculada à
                                Reitoria e autônoma em suas decisões. Suas principais responsabilidades incluem
                                assegurar o cumprimento da legislação relacionada ao uso ético de animais em
                                experimentos e promover preceitos éticos e morais para sua proteção.<br>

                                O Sistema CEUA Projetos é uma plataforma online dedicada à promoção e regulamentação do
                                uso ético de animais em pesquisas científicas e atividades acadêmicas.`,
        enade: `S.O.S. Enade`,
        enade_description: `Este projeto surgiu a partir de uma demanda da Pró-Reitoria de Ensino de Graduação
                                (PREG) e da necessidade de preparar os discentes da UFRPE para realizarem o Exame
                                Nacional de Desempenho de Estudantes (ENADE), visto que é uma prova importante para o
                                desenvolvimento da universidade, elevando tanto seu reconhecimento em aspecto nacional e
                                internacional quanto a possibilidade de maior visibilidade para investimentos público e
                                privado. O software foi desenvolvido como uma plataforma online, utilizando a linguagem
                                de programação PHP com a framework Laravel.<br>

                                O sistema conta com recursos que viabilizam a simulação da prova, com simulados que se
                                adaptam com a real necessidade do curso, podendo ser modeladas da forma que o usuário
                                queira, por exemplo, priorizando as disciplinas em que os alunos estão com deficit. Para
                                garantir provas mais consistentes, todas as questões são adicionadas por docentes,
                                separadas pela disciplina, ao banco de dados da universidade. A medida que os alunos
                                concluírem um simulado, os coordenadores receberão estatísticas das respostas,
                                organizadas pela área do conhecimento, para que os mesmos possam conhecer melhor o
                                perfil de aprendizagem dos seus estudantes, e a partir dessa informação definir sua
                                estratégia de atuação.`,
        experience: `Experiência`,
        academic_and_professional: `Acadêmica e Profissional`,
        academic: `Acadêmica`,
        professional: `Profissional`,
        ufape: `<p class="p-title">
                                Universidade Federal do Agreste de Pernambuco(UFAPE)
                                <br>
                                <i>2018 - 2023</i>
                            </p>

                            <p>
                                A UFAPE representou a continuação natural da minha jornada profissional. Ao sair do
                                IFPE, ainda não tinha uma certeza absoluta sobre a área específica em que gostaria de
                                atuar, mas sabia que queria trabalhar com tecnologia. O curso de Ciência da Computação
                                surgiu como a opção mais viável, pois proporciona uma visão ampla sobre os mais diversos
                                aspectos da computação e suas áreas correlatas. Um dos primeiros desafios da graduação
                                foi lidar com a carga pesada de disciplinas matemáticas, como Cálculo 1 e 2, além de
                                Física e Geometria Analítica. Superar essa etapa inicial, com matérias de base complexa,
                                foi fundamental para alcançar a parte tecnológica do curso, que se intensifica a partir
                                dos períodos mais avançados.</br></br>

                                O curso foi, em muitos aspectos, um aprofundamento dos conhecimentos que já havia
                                adquirido no IFPE, mas também me expôs a novas disciplinas que expandiram meu
                                entendimento e me trouxeram um repertório mais robusto. Áreas como Redes de
                                Computadores, onde aprendi sobre protocolos, arquiteturas de rede e segurança; Sistemas
                                Distribuídos, com foco em escalabilidade e comunicação entre sistemas; e Projeto e
                                Análise de Algoritmos, que aprimorou minha capacidade de desenvolver soluções
                                eficientes, foram algumas das matérias que se destacaram. Outras disciplinas importantes
                                incluíram Empreendedorismo, que ampliou minha visão sobre inovação e criação de
                                produtos, e Compiladores, que me proporcionou uma compreensão mais profunda sobre a
                                construção e funcionamento das linguagens de programação. A Engenharia de Software, por
                                sua vez, foi essencial para refinar minhas habilidades em gerenciamento de projetos,
                                documentação e aplicação de metodologias como SCRUM e práticas de desenvolvimento
                                ágil.</br></br>

                                No decorrer do curso, encontrei a direção que desejava para a minha carreira quando
                                ingressei no Laboratório Multidisciplinar de Tecnologias Sociais (LMTS). Essa
                                experiência me aproximou ainda mais da programação, uma área na qual tenho facilidade
                                devido à minha experiência prévia. O desenvolvimento e a resolução de problemas por meio
                                da criação de sistemas rapidamente se tornaram a minha paixão. No LMTS, pude colaborar
                                tanto com a comunidade acadêmica quanto com a população de Garanhuns, contribuindo com
                                inovações tecnológicas que trouxeram benefícios práticos e melhoraram processos
                                existentes. Dediquei os anos restantes da graduação a esse propósito, aprimorando minhas
                                habilidades como desenvolvedor e participando ativamente em dezenas de projetos, atuando
                                em diferentes etapas do ciclo de desenvolvimento, desde a concepção e prototipagem até a
                                implementação e manutenção.</br></br>

                                Meu trabalho de conclusão de curso foi, na verdade, o primeiro projeto em que trabalhei
                                ao entrar no LMTS: a Plataforma Eletrônica de Gestão de Almoxarifados. Este projeto foi
                                uma oportunidade de aplicar conceitos avançados de desenvolvimento de software, como a
                                criação de APIs RESTful seguras, práticas de versionamento de código e uso de frameworks
                                robustos. Mais detalhes sobre esse sistema estão registrados na seção de sistemas deste
                                portfólio.


                            </p>`,
        ifpe: `<p class="p-title">
                                Instituto Federal de Pernambuco(IFPE)
                                <br>
                                <i>2013 - 2017</i>
                            </p>

                            <p>
                                O IFPE marcou o início da minha jornada na programação, onde tive meu primeiro contato
                                com lógica de programação através do software Robô Mind. Esse programa apresentava um
                                ambiente lúdico em forma de jogo, onde o objetivo era controlar um robô para resolver
                                desafios lógicos, como mover-se de um ponto a outro e sair de um labirinto de forma
                                recursiva. Esse aprendizado inicial foi essencial para desenvolver o raciocínio lógico
                                necessário para a programação.</br></br>

                                Posteriormente, fui introduzido à linguagem de programação Java, que me acompanhou
                                durante os quatro anos do curso. Inicialmente, desenvolvi programas focados apenas no
                                processamento de informações, com saídas textuais impressas no terminal. Com o tempo,
                                essa prática evoluiu para a criação de interfaces gráficas básicas utilizando a
                                biblioteca Swing do Java, que permitia a criação de janelas e componentes visuais, como
                                botões, caixas de texto e painéis, facilitando a integração entre a lógica de
                                manipulação de dados e uma interface de usuário mais amigável.</br></br>

                                Durante o curso, também fui inserido no contexto de Engenharia de Requisitos, aprendendo
                                técnicas de levantamento de requisitos, análise de casos de uso e modelagem de software
                                com diagramas UML, conhecimentos que são úteis até hoje. Além disso, estudei conceitos
                                de banco de dados relacionais, incluindo a normalização de dados e a construção de
                                consultas SQL complexas. Simultaneamente, tive meu primeiro contato com o
                                desenvolvimento web, utilizando o PrimeFaces – uma biblioteca de componentes para
                                JavaServer Faces (JSF) – que possibilitava a criação de interfaces web ricas e
                                interativas, e foi complementada por tecnologias auxiliares como CSS e JavaScript para
                                melhorar a experiência do usuário.</br></br>

                                Ao longo de todo o curso, o foco em programação orientada a objetos foi constante, um
                                conceito que é a base do Java e que influenciou fortemente meu desenvolvimento como
                                programador. Compreender e aplicar os pilares da orientação a objetos (encapsulamento,
                                herança, polimorfismo e abstração) tornou-se uma habilidade fundamental que continuo
                                utilizando em projetos atuais.</br></br>

                                Meu trabalho de conclusão de curso foi uma oportunidade excelente para colocar todos
                                esses conhecimentos em prática e resolver um problema real. Garanhuns, sendo uma cidade
                                semi-rural, tem muitos sítios nos arredores onde a geração de gás de cozinha é feita por
                                meio de biodigestores. Esses biodigestores utilizam dejetos animais como combustível
                                para um processo bacteriano que resulta na produção de gás de cozinha. O curso de Meio
                                Ambiente do IFPE buscava mensurar a eficiência dessa geração, e foi aí que meu trabalho
                                entrou em cena. Juntamente com meu grupo, desenvolvemos um sistema de medição da vazão
                                de gás usando uma placa de Arduino, sensores de pressão e componentes eletrônicos de
                                baixo custo, integrados a um programa em C/C++ que coletava e processava os dados em
                                tempo real. Esse sistema proporcionou uma forma acessível e eficaz de monitorar a
                                produção de gás, contribuindo para a pesquisa e melhor uso dessa tecnologia pela
                                população local.
                            </p>`,
        overdrive: `<p class="p-title">
                                Overdrive Softwares e Consultoria
                                <br>
                                <i>Fev 2023 - Presente momento</i>
                            </p>

                            <p>
                                Com o fim da minha graduação, chegou o momento de entrar de fato no mercado de trabalho.
                                Fui contratado pela Overdrive Softwares e Desenvolvimento como desenvolvedor back-end
                                pleno para trabalhar no time de produtos internos da empresa. Meu primeiro projeto foi o
                                desenvolvimento de um sistema de limpeza industrial, onde criei uma API RESTful para
                                integrar duas stacks: Front-end e Mobile. A implementação dessa API apresentou um
                                desafio significativo: cada empresa cadastrada no sistema precisava ter sua própria
                                instância de banco de dados, o que exigiu a criação de uma arquitetura de multi-tenancy
                                físico. Para superar essa dificuldade, estudei soluções de segmentação de dados e
                                gerenciamento de múltiplos bancos em servidores SQL, desenvolvendo e implementando a
                                arquitetura de forma funcional em poucas semanas.</br></br>

                                Após concluir o desenvolvimento desse sistema, surgiu a necessidade de manutenção em um
                                dos sistemas de um cliente, que utilizava a linguagem C#. Isso me proporcionou a
                                oportunidade de ampliar meus conhecimentos com outro framework backend, o .NET.
                                Trabalhar com .NET (C#) foi uma transição suave devido à estrutura similar de conceitos
                                fundamentais entre as linguagens e frameworks. Durante esse período, desenvolvi serviços
                                RESTful, otimizei operações de banco de dados com Entity Framework e implementei
                                práticas de injeção de dependência e arquitetura limpa (Clean Architecture) para
                                garantir a escalabilidade e manutenibilidade do código.</br></br>

                                Atualmente, a Overdrive está explorando uma nova estratégia para entrar no mercado
                                mobile. Nesse contexto, recebi a oportunidade de trabalhar em uma stack diferente da que
                                utilizava habitualmente. Foi proposto que eu desenvolvesse um jogo utilizando Flutter
                                (Dart), que me permitiu atuar tanto no back-end quanto no front-end mobile. Flutter se
                                destacou pela sua capacidade de desenvolver aplicações multiplataforma de forma
                                eficiente, utilizando uma base de código unificada. Essa experiência tem sido empolgante
                                e produtiva para minha carreira, pois exigiu que eu implementasse interfaces
                                responsivas, gerenciasse o estado da aplicação com o uso de pacotes como Provider e
                                integrou funcionalidades de backend o sqlite para armazenar os dados internamento no
                                dispositivo dos usuários. O jogo, chamado Game Studio Manager, já está disponível na
                                Google Play Store e, em breve, será lançado para dispositivos Apple.


                            </p>`,
        saude: `<p class="p-title">
                                Secretária de Saúde de Garanhuns
                                <br>
                                <i>Jun 2021 - Dez 2022(1 ano e 6 meses)</i>
                            </p>

                            <p>
                                Atuei como Desenvolvedor Full Stack, liderando o desenvolvimento de soluções em projetos
                                internos da Secretaria da Saúde, utilizando o framework Laravel (PHP) e a arquitetura
                                proposta pelo próprio framework (MVC), que já garante robustez e qualidade de código. No
                                frontend, trabalhei com a ferramenta Blade, também nativa do Laravel, e a biblioteca
                                jQuery para criar interfaces dinâmicas e responsivas, proporcionando uma experiência de
                                usuário intuitiva.</br></br>

                                Durante esse período, tive a oportunidade de aprofundar meus conhecimentos em
                                levantamento de requisitos, entendendo as necessidades específicas dos departamentos e
                                propondo soluções que otimizassem os fluxos de trabalho. Além disso, desenvolvi lógica
                                de programação avançada e manipulei dados complexos com SQL, o que foi essencial para a
                                criação de relatórios e análises detalhadas, garantindo a precisão e acessibilidade das
                                informações de saúde.</br></br>

                                O sistema principal no qual atuei dando manutenção foi o "Vem Vacina Garanhuns", que, em
                                específico, gerou diversos desafios para garantir performance diante de uma grande
                                quantidade de dados e volume de acessos à plataforma em meio à pandemia de Covid-19.
                                Esse sistema ganhou alguns prêmios regionais e atendeu à população do município,
                                auxiliando na solicitação de vacinas.
                            </p>`,
        lmts: `<p class="p-title">
                                Laboratório Multidisciplinar de Tecnologias Sociais(LMTS)
                                <br>
                                <i>Out 2020 - Dez 2022(2 anos e 2 meses)</i>
                            </p>

                            <p>
                                O LMTS foi minha porta de entrada para o profissionalismo, permitindo-me colocar em
                                prática os conhecimentos adquiridos ao longo dos anos e refinando minhas habilidades por
                                meio dos desafios diários e desafiadores que me foram entregues. Meu primeiro projeto no
                                laboratório foi o desenvolvimento de um sistema de Almoxarifado, que hoje atende tanto a
                                UFAPE quanto a UPE do município de Garanhuns. Esse projeto, em específico, reuniu uma
                                equipe multidisciplinar, composta por profissionais da área que atuam diretamente com
                                Almoxarifado, além da equipe do laboratório, que envolveu integrantes de ambas as
                                faculdades beneficiadas.</br></br>

                                Em grande parte da minha jornada, atuei como Desenvolvedor Web Full Stack, onde modelei,
                                desenvolvi e dei manutenção a diversos sistemas que hoje atendem à comunidade. Como
                                principal tecnologia, utilizei o framework Laravel (PHP), escolhido pelo laboratório por
                                ser robusto, fácil de utilizar, ter bom suporte ao desenvolvedor e, principalmente, por
                                ter uma metodologia de desenvolvimento web voltada para esse framework. Para a parte
                                visual, o próprio Laravel possui um gerenciador de templates chamado Blade, que também é
                                fácil de ser utilizado e permite o reuso de código graças à sua estrutura de templates.
                                Como complemento, utilizei jQuery para dar dinamicidade aos sites, em conjunto com o
                                Bootstrap, que facilita a estilização e personalização dos layouts.</br></br>

                                Com o tempo e a entrada de novos integrantes no laboratório, fui designado para o papel
                                de gerente de projetos, onde atuei diretamente em todos os sistemas web que o
                                laboratório desenvolvia e mantinha na época, mesmo que indiretamente. Meu papel envolvia
                                cuidar do ciclo de desenvolvimento, utilizando uma metodologia de SCRUM adaptada à
                                realidade do laboratório, servir como Tech Lead, ensinando e orientando os
                                desenvolvedores na criação de código bem estruturado e, principalmente, na parte inicial
                                do aprendizado de cada aluno, além de avaliar pull requests antes do deploy das novas
                                funcionalidades.


                            </p>`,

    },
    "en": {
        nav_presentation: `Presentation`,
        nav_systems: `Systems`,
        nav_experience: `Experiences`,
        description: `
            My journey in the technology field began in 2013, at the age of 14, when I started the Technical Course in Informatics at the Federal Institute of Pernambuco (IFPE). Over four years of training, I built a solid foundation in software development, covering different stacks such as mobile, web, front-end, desktop, and embedded systems. My graduation project explored embedded systems, showcasing my ability to innovate in diverse areas.<br>
            After completing the technical course, I began my bachelor's degree in Computer Science at the Federal University of Agreste of Pernambuco (UFAPE), where I continued to expand my knowledge. During this period, I had my first professional contact at the Multidisciplinary Laboratory of Social Technologies (LMTS), where I developed institutional and social systems using the Laravel (PHP) framework integrated with Blade and jQuery.<br>
            In 2021, during the pandemic, I was hired by the Health Department of Garanhuns to lead the development and maintenance of Vem Vacina Garanhuns, a crucial system in the fight against COVID-19, which benefited more than 100,000 residents. This experience strengthened my expertise in modeling and maintaining systems with significant social impact.<br>
            Currently, I work at Overdrive Software and Consulting, where I am part of the internal products team. I started by developing the back-end of systems using Laravel (PHP) and later expanded my skills with .NET (C#). Recently, I have focused on mobile development with Flutter (Dart), creating and maintaining robust applications, including a game that demonstrates my ability to meet innovative demands.
            With extensive experience in programming languages such as Java, PHP, Dart, C#, C, Python, and Ruby, my journey reflects a commitment to continuous learning and adaptation to the most relevant technologies to meet market needs.
        `,
        title: `Introducing, <span>Edgar Vital</span>`,
        technical_information: `Technical Information`,
        programming_languages: `Programming Languages`,
        frameworks_and_tools: `Frameworks and Tools`,
        field_of_expertise: `Fields of Expertise`,
        professional_pillars: `Professional Pillars`,
        development_backend: `Development and maintenance of backend systems`,
        development_mobile: `Development and maintenance of mobile applications`,
        database_modeling: `Database Modeling`,
        team_work: `Teamwork`,
        software_architecture: `Software Architecture`,
        problem_resolution: `Problem Solving`,
        agile_development: `Agile Development`,
        new_technologies_adaptation: `Adaptability to New Technologies`,
        systems: `Systems`,
        act_as_colaborator_in: `Acted as a collaborator in...`,
        pega: `Electronic Platform for Warehouse Management (PEGA)`,
        pega_description: `A web application created through the UFAPE-LMTS/UPE partnership to digitize warehouse management, simplifying tasks such as inventory control and material request handling. Its main functionalities include:<br>

        For Administrators: register/edit users, materials, and warehouses; consult inventory and history; manage material entries, exits, and transfers; approve, deny, and deliver requests.<br>

        For Requesters: edit profile and password; submit material requests; consult request history.`,
        system_certification: `System Certification`,
        system_link: `System Link`,
        submeta: `Project Submission System (Submeta)`,
        submeta_description: `Submeta is a system for the submission of academic projects, which can be adopted for various purposes such as Teaching, Research, and Extension. The system covers all major stages related to project submission, enabling the launch and configuration of calls, managing the distribution of evaluations and technical reviews by evaluators, and viewing projects submitted by proponents.`,
        certifica: `Certifica`,
        certifica_description: `Certifica is a web platform developed by UFAPE in partnership with the Office of Outreach and Culture, aiming to enhance the efficiency of public management in creating and managing certificates issued by institutional sectors. Its main features include: registration of institutional activities, importing participants, requesting and issuing certificates, verifying authenticity, invalidating, and consulting issued certificates.`,
        secom: `Institutional Communication Management System (SECOM)`,
        secom_description: `The Institutional Communication Management System was created to meet the demands of the Institutional Communication Office and Advisory of the Federal University of Agreste of Pernambuco (UFAPE). Currently, the tool enables the generation of customized birthday cards and clippings based on a platform for data collection.`,
        ceua: `Animal Use Ethics Committee (CEUA)`,
        ceua_description: `CEUA-UFAPE is the Animal Use Ethics Committee of UFAPE, responsible for evaluating teaching, research, and extension projects that involve animals within the institution. This committee is normative and deliberative, with advisory and educational functions, linked to the Rectorate and autonomous in its decisions. Its main responsibilities include ensuring compliance with legislation related to the ethical use of animals in experiments and promoting ethical and moral principles for their protection.<br>

        The CEUA Projects System is an online platform dedicated to promoting and regulating the ethical use of animals in scientific research and academic activities.`,
        enade: `S.O.S. Enade`,
        enade_description: `This project arose from a demand by the Office of Undergraduate Studies (PREG) and the need to prepare UFRPE students for the National Student Performance Exam (ENADE), which is an important test for the university's development, increasing its national and international recognition as well as its visibility for public and private investments. The software was developed as an online platform using the PHP programming language with the Laravel framework.<br>

        The system includes features that enable exam simulation, with mock tests adapted to the real needs of the course. For example, they can be modeled to prioritize disciplines where students have deficits. To ensure more consistent tests, all questions are added by professors, categorized by discipline, into the university's database. As students complete a mock test, coordinators receive statistics on the responses, organized by knowledge area, allowing them to better understand their students' learning profiles and define their strategy accordingly.`,
        experience: `Experience`,
        academic_and_professional: `Academic and Professional`,
        academic: `Academic`,
        professional: `Professional`,
        ufape: `<p class="p-title">
                            Federal University of Agreste of Pernambuco (UFAPE)
                            <br>
                            <i>2018 - 2023</i>
                          </p>
                  
                          <p>
                            UFAPE represented the natural continuation of my professional journey. After leaving IFPE, I was still uncertain about the specific field I wanted to pursue, but I knew I wanted to work with technology. The Computer Science course emerged as the most viable option, as it provides a broad perspective on various aspects of computing and its related areas. One of the first challenges of the degree was dealing with the heavy workload of mathematical subjects, such as Calculus 1 and 2, as well as Physics and Analytical Geometry. Overcoming this initial stage with complex foundational subjects was crucial to reaching the technological part of the course, which becomes more intense in the advanced semesters.</br></br>
                  
                            The course was, in many ways, a deepening of the knowledge I had already acquired at IFPE, but it also exposed me to new subjects that expanded my understanding and provided me with a more robust skill set. Areas like Computer Networks, where I learned about protocols, network architectures, and security; Distributed Systems, focusing on scalability and communication between systems; and Algorithm Design and Analysis, which improved my ability to develop efficient solutions, stood out. Other important subjects included Entrepreneurship, which broadened my perspective on innovation and product creation, and Compilers, which gave me a deeper understanding of programming language construction and operation. Software Engineering, in turn, was essential in refining my skills in project management, documentation, and applying methodologies like SCRUM and agile development practices.</br></br>
                  
                            During the course, I found the direction I wanted for my career when I joined the Multidisciplinary Laboratory for Social Technologies (LMTS). This experience brought me closer to programming, an area I excelled in due to my prior experience. Developing and solving problems through system creation quickly became my passion. At LMTS, I was able to collaborate with both the academic community and the population of Garanhuns, contributing technological innovations that brought practical benefits and improved existing processes. I dedicated the remaining years of my degree to this purpose, enhancing my skills as a developer and actively participating in dozens of projects, working on different stages of the development cycle, from conception and prototyping to implementation and maintenance.</br></br>
                  
                            My final year project was actually the first project I worked on when I joined LMTS: the Electronic Warehouse Management Platform. This project was an opportunity to apply advanced software development concepts, such as creating secure RESTful APIs, version control practices, and using robust frameworks. More details about this system are recorded in the systems section of this portfolio.
                          </p>`,

        ifpe: `<p class="p-title">
                            Federal Institute of Pernambuco (IFPE)
                            <br>
                            <i>2013 - 2017</i>
                          </p>
                  
                          <p>
                            IFPE marked the beginning of my journey into programming, where I had my first contact with programming logic through the Robô Mind software. This program presented a playful game-like environment where the goal was to control a robot to solve logical challenges, such as navigating from one point to another and recursively escaping a maze. This initial learning was essential in developing the logical reasoning needed for programming.</br></br>
                  
                            Later, I was introduced to the Java programming language, which accompanied me throughout the four years of the course. Initially, I developed programs focused solely on information processing, with textual outputs printed on the terminal. Over time, this practice evolved into creating basic graphical interfaces using Java's Swing library, which allowed for the creation of windows and visual components like buttons, text boxes, and panels, facilitating the integration between data manipulation logic and a more user-friendly interface.</br></br>
                  
                            During the course, I was also introduced to Software Engineering concepts, learning requirement elicitation techniques, use case analysis, and software modeling with UML diagrams—knowledge that remains useful to this day. Additionally, I studied relational database concepts, including data normalization and crafting complex SQL queries. Simultaneously, I had my first contact with web development, using PrimeFaces—a component library for JavaServer Faces (JSF)—that enabled the creation of rich and interactive web interfaces, complemented by auxiliary technologies like CSS and JavaScript to enhance user experience.</br></br>
                  
                            Throughout the course, the focus on object-oriented programming was constant, a concept that underpins Java and significantly influenced my growth as a programmer. Understanding and applying the pillars of object orientation (encapsulation, inheritance, polymorphism, and abstraction) became a fundamental skill that I continue to use in current projects.</br></br>
                  
                            My final year project was an excellent opportunity to apply all these skills to solve a real problem. Garanhuns, being a semi-rural city, has many surrounding farms where cooking gas is generated using biodigesters. These biodigesters utilize animal waste as fuel for a bacterial process that results in cooking gas production. The Environmental Science course at IFPE sought to measure the efficiency of this gas generation, which is where my project came in. Together with my team, we developed a gas flow measurement system using an Arduino board, pressure sensors, and low-cost electronic components, integrated with a C/C++ program that collected and processed data in real-time. This system provided an accessible and effective way to monitor gas production, contributing to research and better use of this technology by the local population.
                          </p>`,

        overdrive: `<p class="p-title">
                                 Overdrive Software and Consulting
                                 <br>
                                 <i>Feb 2023 - Present</i>
                               </p>
                  
                               <p>
                                 Upon finishing my degree, it was time to officially enter the job market. I was hired by Overdrive Software and Consulting as a mid-level back-end developer to work in the company’s internal products team. My first project was developing an industrial cleaning system, where I created a RESTful API to integrate two stacks: Front-end and Mobile. Implementing this API presented a significant challenge: each company registered in the system needed its own database instance, requiring the creation of a physical multi-tenancy architecture. To overcome this difficulty, I studied data segmentation solutions and multi-database management in SQL servers, developing and implementing the architecture effectively within a few weeks.</br></br>
                  
                                 After completing this system’s development, a need arose for maintenance on one of the client systems, which used C#. This provided me with the opportunity to broaden my knowledge with another backend framework, .NET. Working with .NET (C#) was a smooth transition due to the similar structure of fundamental concepts across the languages and frameworks. During this period, I developed RESTful services, optimized database operations using Entity Framework, and implemented dependency injection and Clean Architecture practices to ensure code scalability and maintainability.</br></br>
                  
                                 Currently, Overdrive is exploring a new strategy to enter the mobile market. In this context, I was given the opportunity to work on a stack different from my usual one. I was tasked with developing a game using Flutter (Dart), which allowed me to work on both the back-end and mobile front-end. Flutter stood out for its ability to develop cross-platform applications efficiently using a unified codebase. This experience has been exciting and productive for my career as it required implementing responsive interfaces, managing application state using packages like Provider, and integrating backend functionalities with SQLite for storing user data internally on their devices. The game, called *Game Studio Manager*, is already available on Google Play Store and will soon be launched for Apple devices.
                               </p>`,
        lmts: `<p class="p-title">
                Multidisciplinary Laboratory of Social Technologies (LMTS)
                <br>
                <i>Oct 2020 - Dec 2022 (2 years and 2 months)</i>
            </p>

            <p>
                The LMTS was my entry point into professionalism, allowing me to put into practice the knowledge I had acquired over the years and refine my skills through the daily and challenging tasks assigned to me. My first project at the laboratory was the development of an Inventory Management System, which today serves both UFAPE and UPE in the city of Garanhuns. This project, in particular, brought together a multidisciplinary team composed of professionals directly working with Inventory Management, as well as the laboratory team, which involved members from both universities.

                For most of my journey, I worked as a Full Stack Web Developer, where I designed, developed, and maintained various systems that now serve the community. The main technology I used was the Laravel (PHP) framework, chosen by the laboratory for its robustness, ease of use, strong developer support, and especially for its web development methodology. For the front end, Laravel has a template manager called Blade, which is also easy to use and allows for code reuse thanks to its template structure. Additionally, I used jQuery to make websites dynamic, along with Bootstrap to simplify the styling and customization of layouts.

                Over time, as new team members joined the lab, I was assigned to the role of project manager, where I worked directly on all the web systems the laboratory was developing and maintaining at that time, even if indirectly. My role involved overseeing the development cycle using an adapted SCRUM methodology for the laboratory's context, serving as a Tech Lead, teaching and mentoring developers in creating well-structured code, especially during the initial learning phase of each student, and reviewing pull requests before deploying new features.
            </p>`,
        saude: `<p class="p-title">
                Health Secretary of Garanhuns
                <br>
                <i>Jun 2021 - Dec 2022 (1 year and 6 months)</i>
            </p>

            <p>
                I worked as a Full Stack Developer, leading the development of solutions for internal projects at the Health Secretary, using the Laravel (PHP) framework and the architecture proposed by the framework itself (MVC), which ensures robustness and code quality. On the frontend, I worked with Blade, Laravel's native templating tool, and the jQuery library to create dynamic and responsive interfaces, providing an intuitive user experience.

                During this period, I had the opportunity to deepen my knowledge in requirements gathering, understanding the specific needs of departments, and proposing solutions that optimized workflows. Additionally, I developed advanced programming logic and handled complex data using SQL, which was essential for creating detailed reports and analyses, ensuring the accuracy and accessibility of health information.

                The main system I worked on maintaining was "Vem Vacina Garanhuns", which, specifically, presented several challenges to ensure performance given the large amount of data and volume of accesses to the platform during the Covid-19 pandemic. This system won several regional awards and served the local population, helping with vaccine requests.
            </p>`,


    }
};

// Função para atualizar o conteúdo
function updateContent(language) {
    $(".nav_presentation").html(translations[language].nav_presentation);
    $(".nav_systems").html(translations[language].nav_systems);
    $(".nav_experiences").html(translations[language].nav_experience);
    $(".description").html(translations[language].description);
    $(".title").html(translations[language].title);
    $("#tecnical_information").html(translations[language].technical_information);
    $("#programming_languages").html(translations[language].programming_languages);
    $("#frameworks_and_tools").html(translations[language].frameworks_and_tools);
    $("#act_areas").html(translations[language].field_of_expertise);
    $("#dev_backend").html(translations[language].development_backend);
    $("#dev_mobile").html(translations[language].development_mobile);
    $("#db_modeling").html(translations[language].database_modeling);
    $("#professional_pilars").html(translations[language].professional_pillars);
    $("#team_work").html(translations[language].team_work);
    $("#software_arquiteture").html(translations[language].software_architecture);
    $("#problem_resolution").html(translations[language].problem_resolution);
    $("#agile_development").html(translations[language].agile_development);
    $("#new_techs_adaptation").html(translations[language].new_technologies_adaptation);
    $("#systems_title").html(translations[language].systems);
    $("#act_as_collaborator").html(translations[language].act_as_colaborator_in);
    $("#pega").html(translations[language].pega);
    $("#pega_description").html(translations[language].pega_description);
    $(".system-certification-label").html(translations[language].system_certification);
    $(".system-link").html(translations[language].system_link);
    $("#submeta").html(translations[language].submeta);
    $("#submeta_description").html(translations[language].submeta_description);
    $("#certifica").html(translations[language].certifica);
    $("#certifica_description").html(translations[language].certifica_description);
    $("#secom").html(translations[language].secom);
    $("#secom_description").html(translations[language].secom_description);
    $("#ceua").html(translations[language].ceua);
    $("#ceua_description").html(translations[language].ceua_description);
    $("#enade").html(translations[language].enade);
    $("#enade_description").html(translations[language].enade_description);
    $("#experience").html(translations[language].experience);
    $("#academic_and_professional").html(translations[language].academic_and_professional);
    $("#academic_btn").html(translations[language].academic);
    $("#professional_btn").html(translations[language].professional);
    $("#ufape").html(translations[language].ufape);
    $("#ifpe").html(translations[language].ifpe);
    $("#overdrive").html(translations[language].overdrive);
    $("#lmts").html(translations[language].lmts);
    $("#saude").html(translations[language].saude);

}

// Evento de mudança no select
$(document).ready(function () {
    $("#language_select").on("change", function () {
        const selectedLanguage = $(this).val();
        updateContent(selectedLanguage);
    });

    // Define o idioma inicial
    updateContent("pt-br");
});
