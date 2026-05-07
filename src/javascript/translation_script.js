// Objeto com as traduções
const translations = {
    "pt-br": {
        hero_eyebrow: `Portfólio de Software`,
        hero_summary: `Desenvolvo sistemas web, mobile e backend com foco em arquitetura, confiabilidade, segurança e impacto real.`,
        hero_highlight_1_label: `Atuação principal`,
        hero_highlight_1_value: `Backend · Full Stack · Mobile`,
        hero_highlight_2_label: `Experiência`,
        hero_highlight_2_value: `Atuando com software desde 2013`,
        hero_highlight_3_label: `Foco atual`,
        hero_highlight_3_value: `Arquitetura, aplicações críticas e evolução de produtos`,
        nav_presentation: `Apresentação`,
        nav_systems: `Sistemas Web`,
        nav_apps: `Apps`,
        nav_experience: `Experiências`,
        description: `
            Minha trajetória na área de tecnologia começou em 2013, aos 14 anos, quando ingressei no curso Técnico em Informática no Instituto Federal de Pernambuco (IFPE). Durante os quatro anos de formação, adquiri uma base sólida em desenvolvimento de software, abrangendo diferentes stacks, como mobile, web, front-end, desktop e sistemas embarcados. Meu trabalho de conclusão de curso explorou sistemas embarcados, demonstrando minha capacidade de inovar em áreas diversas.<br>
            Após concluir o técnico, iniciei minha graduação em Ciência da Computação na Universidade Federal do Agreste de Pernambuco (UFAPE), onde continuei ampliando meus conhecimentos. Durante esse período, tive meu primeiro contato profissional no Laboratório Multidisciplinar de Tecnologias Sociais (LMTS), onde desenvolvi sistemas institucionais e sociais utilizando o framework Laravel (PHP) integrado com Blade e JQuery.<br>
            Em 2021, durante a pandemia, fui contratado pela Secretaria de Saúde de Garanhuns para liderar o desenvolvimento e a manutenção do Vem Vacina Garanhuns, um sistema crucial no combate à COVID-19, que beneficiou mais de 100 mil habitantes. Essa experiência fortaleceu minha expertise em modelagem e manutenção de sistemas de grande impacto social.<br>
            Atualmente, atuo na Overdrive Software e Consultoria, onde integro o time de produtos internos. Iniciei desenvolvendo o back-end de sistemas utilizando Laravel (PHP) e posteriormente expandi minhas habilidades com .NET (C#). Recentemente, foquei no desenvolvimento mobile com Flutter (Dart), criando e mantendo aplicações robustas, incluindo um jogo que demonstra minha habilidade em atender demandas inovadoras.<br>

            Em paralelo à atuação profissional, iniciei o mestrado em Ciência da Computação com foco em segurança em ecossistemas Kubernetes. A pesquisa investiga o impacto de contramedidas como Zero Trust, mTLS, políticas de rede e gestão segura de credenciais sobre a latência de sistemas distribuídos, usando um jogo multiplayer poliglota como ambiente experimental.<br>

            Com ampla experiência em linguagens de programação como Java, PHP, Dart, C#, C, Python e Ruby, meu percurso reflete um compromisso com aprendizado contínuo, rigor técnico e adaptação às tecnologias mais relevantes para atender às necessidades do mercado e da pesquisa aplicada.
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
        systems: `Sistemas Web`,
        act_as_colaborator_in: `Atuei como colaborador em...`,
        masters: `<p class="p-title">
                                Mestrado em Ciência da Computação na UFAPE
                                <br>
                                <i>2025 - 2027 (Em andamento)</i>
                            </p>

                            <p>
                                Minha pesquisa de mestrado investiga, de forma empírica, vulnerabilidades em arquiteturas de microsserviços orquestradas por Kubernetes. O estudo utiliza um jogo multiplayer desenvolvido em arquitetura poliglota, com serviços em C# e Golang, como ambiente de laboratório para avaliar estratégias de proteção de infraestrutura em cenários de tempo real.
                            </p>

                            <p>
                                A metodologia está estruturada em três frentes complementares: mapeamento da superfície de ataque do cluster com ferramentas como Kube-hunter e Kube-bench; hardening da infraestrutura com práticas de Zero Trust, autenticação mTLS, isolamento de rede e gestão segura de credenciais com HashiCorp Vault; e análise de impacto, comparando o ganho de segurança com o custo de latência e desempenho imposto às aplicações. O objetivo é consolidar diretrizes práticas para ambientes seguros, otimizados e alinhados às demandas de sistemas distribuídos modernos.
                            </p>`,
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
        system_link: `Link do Sistema`,
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
                                de programação PHP com o framework Laravel.<br>

                                O sistema conta com recursos que viabilizam a simulação da prova, com simulados que se
                                adaptam com a real necessidade do curso, podendo ser modelados da forma que o usuário
                                queira, por exemplo, priorizando as disciplinas em que os alunos estão com déficit. Para
                                garantir provas mais consistentes, todas as questões são adicionadas por docentes,
                                separadas pela disciplina, ao banco de dados da universidade. À medida que os alunos
                                concluírem um simulado, os coordenadores receberão estatísticas das respostas,
                                organizadas pela área do conhecimento, para que os mesmos possam conhecer melhor o
                                perfil de aprendizagem dos seus estudantes, e a partir dessa informação definir sua
                                estratégia de atuação.`,
        sol_agora: `Sol Agora`,
        sol_agora_description: `A Sol Agora é uma plataforma digital especializada em soluções de financiamento para
                                energia solar, conectando clientes, integradores e distribuidores em um ecossistema 100%
                                online. O sistema visa desburocratizar o acesso à energia limpa, oferecendo processos
                                ágeis com segurança biométrica e assinatura digital integradas. Suas funcionalidades
                                principais incluem:<br><br>

                                <strong>Para Clientes:</strong> realizar simulações de financiamento com parcelas fixas;
                                solicitar crédito para projetos residenciais, comerciais, industriais ou do agronegócio;
                                gerenciar pagamentos e emitir 2ª via de boletos; e monitorar remotamente o desempenho do sistema
                                solar instalado.<br><br>

                                <strong>Para Integradores:</strong> gestão completa de propostas e acompanhamento online
                                de status; acesso a um canal de atendimento exclusivo via WhatsApp; recebimento direto
                                de pagamentos e conexão com mais de 50 distribuidores parceiros para agilizar a
                                aquisição de equipamentos.`,
                    mobile_apps_title: `Apps Mobile`,
                    mobile_apps_subtitle: `Atuei como colaborador nesses apps publicados...`,
                    bmp_app_title: `BMP`,
                    bmp_app_description: `A BMP é uma conta digital que facilita sua vida. Não precisa de convite nem de esperar em fila para aprovar seu cadastro. De forma amigável e com poucos cliques, você abre sua conta. Você faz tudo pelo celular, sem perder tempo com filas e sem burocracia.`,
                    gsm_app_title: `Game Studio Manager`,
                    gsm_app_description: `Neste jogo idle, você se torna o desenvolvedor de jogos dos seus sonhos. Crie jogos incríveis escolhendo entre diversos gêneros e subgêneros, além de diferentes plataformas.`,
                    app_frame_placeholder: `Adicione o print do app aqui`,
                    app_play_store_label: `Ver na Play Store`,
        experience: `Experiência`,
        academic_and_professional: `Acadêmica e Profissional`,
        academic: `Acadêmica`,
        professional: `Profissional`,
        ufape: `<p class="p-title">
                                Graduação em Ciência da Computação na Universidade Federal Rural de Pernambuco (UFRPE) e UFAPE
                                <br>
                                <i>2018 - 2023</i>
                            </p>

                            <p>
                                A graduação foi a continuação natural da minha formação técnica e me proporcionou visão ampla sobre redes, sistemas distribuídos, escalabilidade e projeto e análise de algoritmos. Disciplinas como Engenharia de Software foram fundamentais para aprimorar práticas de gerenciamento de projetos e metodologias ágeis.

                                Durante o curso, ingressei no Laboratório Multidisciplinar de Tecnologias Sociais (LMTS), onde dediquei grande parte da graduação ao desenvolvimento de sistemas institucionais e soluções para a comunidade. Meu Trabalho de Conclusão de Curso (TCC) foi focado no aprimoramento da Plataforma Eletrônica de Gestão de Almoxarifados, aplicando conceitos avançados de APIs RESTful e arquitetura de software.

                            </p>`,
        ifpe: `<p class="p-title">
                                Técnico em Informática no IFPE
                                <br>
                                <i>2013 - 2017</i>
                            </p>

                            <p>
                                O IFPE marcou o início da minha jornada na programação, onde fui apresentado à lógica computacional e à linguagem Java. Aprendi programação orientada a objetos, engenharia de requisitos, modelagem UML e desenvolvimento de interfaces com Java Swing e PrimeFaces (JSF).

                                No TCC do curso técnico desenvolvi um sistema em C/C++ integrado a um Arduino e sensores de pressão para medir, em tempo real, a eficiência da geração de gás de cozinha em biodigestores locais, contribuindo para pesquisas do curso de Meio Ambiente.
                            </p>`,
        overdrive: `<p class="p-title">
                                Overdrive Softwares e Consultoria
                                <br>
                                <i>Fev 2023 - Abr 2026(3 anos e 3 meses)</i>
                            </p>

                            <p>
                                Com o fim da minha graduação, iniciei minha trajetória na Overdrive Softwares e Consultoria como Desenvolvedor Back-End Pleno, atuando no time de produtos internos. Meu primeiro projeto foi o desenvolvimento de um sistema de limpeza industrial, onde criei uma API RESTful robusta para integrar o front-end e o mobile. A implementação exigiu uma arquitetura de multi-tenancy físico com PostgreSQL para isolar os dados de cada cliente no sistema, além da configuração de ambientes com Docker e integração com AWS S3 para armazenamento.

                                Posteriormente, assumi a manutenção e desenvolvimento em sistemas da carteira de clientes da empresa, como SolAgora e Banco Money Plus, utilizando a linguagem C# e o framework .NET. Essa transição me permitiu consolidar conhecimentos no desenvolvimento de serviços RESTful, otimizar operações com Entity Framework e implementar práticas de Clean Architecture para garantir a escalabilidade do código.

                                Como a empresa explorava novas estratégias de mercado, recebi a oportunidade de atuar também como Desenvolvedor Mobile Pleno, construindo aplicações nativas multiplataforma com Flutter e Dart. Nesse contexto, participei da estruturação do FitEasyAI, um aplicativo integrado à API da OpenAI e ao Firebase, e do Game Studio Manager, o primeiro título de simulação da companhia. Destaca-se também minha atuação no aplicativo bancário white-label do Banco Money Plus, onde lidei com componentes complexos, consumo de APIs financeiras de alta segurança, persistência local com SQLite e gerenciamento de estado utilizando Provider e arquitetura MVVM.

                                Em abril de 2026, concluí minha jornada na Overdrive, encerrando um ciclo de extremo crescimento. Essa experiência de mais de três anos me permitiu transitar com fluidez entre a engenharia back-end e front-end mobile, entregando valor de ponta a ponta e me preparando técnica e estrategicamente para assumir novos desafios na construção de soluções escaláveis.
                            </p>`,
        saude: `<p class="p-title">
                                Secretaria Municipal da Saúde de Garanhuns
                                <br>
                                <i>Jun 2021 - Jan 2023 (1 ano e 8 meses)</i>
                            </p>

                            <p>
                                Atuei como Desenvolvedor Full Stack, liderando o desenvolvimento de soluções em projetos internos da Secretaria da Saúde. Utilizei o framework Laravel (PHP) sob a arquitetura MVC para garantir robustez e qualidade de código. No frontend, trabalhei com ferramentas nativas como Blade, além de HTML, CSS, JavaScript e jQuery, criando interfaces dinâmicas e responsivas.

                                Durante esse período, aprofundei meus conhecimentos em levantamento de requisitos e na otimização de consultas SQL para garantir a alta disponibilidade dos sistemas. O principal destaque da minha atuação foi o desenvolvimento e manutenção do "Vem Vacina Garanhuns", um sistema crítico para o combate à COVID-19 que atendeu a mais de 100 mil habitantes. Esse sistema exigiu estratégias avançadas para suportar picos de acesso sem comprometer a performance, evitando aglomerações na campanha de vacinação. Além disso, atuei em projetos como o Sistema de Almoxarifado e o Sistema de Vigilância Sanitária, otimizando fluxos de trabalho e garantindo conformidade regulatória.
                            </p>`,
        lmts: `<p class="p-title">
                                Laboratório Multidisciplinar de Tecnologias Sociais (LMTS)
                                <br>
                                <i>Out 2020 - Jan 2023 (2 anos e 4 meses)</i>
                            </p>

                            <p>
                                O LMTS foi minha porta de entrada para o mercado profissional, permitindo-me colocar em prática os conhecimentos acadêmicos em projetos que atendem à comunidade. Iniciei atuando como Desenvolvedor Full Stack, modelando e desenvolvendo soluções robustas utilizando o framework Laravel (PHP). Para a interface visual, utilizei o motor de templates Blade em conjunto com jQuery e frameworks como Bootstrap e Tailwind CSS, facilitando a estilização e garantindo uma experiência de usuário intuitiva.

                                Meu primeiro grande projeto foi a Plataforma Eletrônica de Gestão de Almoxarifados, que hoje atende à UFAPE e à UPE. Com o crescimento do laboratório, assumi também os papéis de Scrum Master e Gerente de Projetos (Tech Lead). Liderando equipes multidisciplinares, fui responsável pelo ciclo de desenvolvimento de plataformas como o Sistema CEUA e o Simulador ENADE. Minhas atribuições incluíam a prototipagem de interfaces no Figma, avaliação de pull requests, ensino e onboarding de novos desenvolvedores, garantindo entregas alinhadas às metodologias ágeis.
                            </p>`,

    },
    "en": {
        hero_eyebrow: `Software Portfolio`,
        hero_summary: `I build web, mobile, and backend systems with a focus on architecture, reliability, security, and real-world impact.`,
        hero_highlight_1_label: `Core scope`,
        hero_highlight_1_value: `Backend · Full Stack · Mobile`,
        hero_highlight_2_label: `Experience`,
        hero_highlight_2_value: `Building software since 2013`,
        hero_highlight_3_label: `Current focus`,
        hero_highlight_3_value: `Architecture, critical applications, and product evolution`,
        nav_presentation: `Presentation`,
        nav_systems: `Web Systems`,
        nav_apps: `Apps`,
        nav_experience: `Experiences`,
        description: `
            My journey in the technology field began in 2013, at the age of 14, when I started the Technical Course in Informatics at the Federal Institute of Pernambuco (IFPE). Over four years of training, I built a solid foundation in software development, covering different stacks such as mobile, web, front-end, desktop, and embedded systems. My graduation project explored embedded systems, showcasing my ability to innovate in diverse areas.<br>
            After completing the technical course, I began my bachelor's degree in Computer Science at the Federal University of Agreste of Pernambuco (UFAPE), where I continued to expand my knowledge. During this period, I had my first professional contact at the Multidisciplinary Laboratory of Social Technologies (LMTS), where I developed institutional and social systems using the Laravel (PHP) framework integrated with Blade and jQuery.<br>
            In 2021, during the pandemic, I was hired by the Health Department of Garanhuns to lead the development and maintenance of Vem Vacina Garanhuns, a crucial system in the fight against COVID-19, which benefited more than 100,000 residents. This experience strengthened my expertise in modeling and maintaining systems with significant social impact.<br>
            Currently, I work at Overdrive Software and Consulting, where I am part of the internal products team. I started by developing the back-end of systems using Laravel (PHP) and later expanded my skills with .NET (C#). Recently, I have focused on mobile development with Flutter (Dart), creating and maintaining robust applications, including a game that demonstrates my ability to meet innovative demands.<br>

            In parallel with my professional work, I started a Master's degree in Computer Science focused on security in Kubernetes ecosystems. The research investigates the impact of countermeasures such as Zero Trust, mTLS, network policies, and secure credential management on the latency of distributed systems, using a polyglot multiplayer game as an experimental environment.<br>

            With extensive experience in programming languages such as Java, PHP, Dart, C#, C, Python, and Ruby, my journey reflects a commitment to continuous learning, technical rigor, and adaptation to the most relevant technologies for both market and applied research needs.
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
        systems: `Web Systems`,
        act_as_colaborator_in: `Acted as a collaborator in...`,
        masters: `<p class="p-title">
                                Master's in Computer Science at UFAPE
                                <br>
                                <i>2025 - 2027 (In progress)</i>
                            </p>

                            <p>
                                My master's research empirically investigates vulnerabilities in microservice architectures orchestrated by Kubernetes. The study uses a multiplayer game developed in a polyglot architecture, with services in C# and Golang, as a laboratory environment to evaluate infrastructure protection strategies in real-time scenarios.
                            </p>

                            <p>
                                The methodology is structured into three complementary phases: mapping the cluster attack surface with tools such as Kube-hunter and Kube-bench; infrastructure hardening with Zero Trust practices, mTLS authentication, network isolation, and secure credential management with HashiCorp Vault; and impact analysis, comparing security gains with the latency and performance cost imposed on applications. The objective is to consolidate practical guidelines for secure and optimized environments aligned with modern distributed systems requirements.
                            </p>`,
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
        sol_agora: `Sol Agora`,
        sol_agora_description: `Sol Agora is a digital platform specialized in solar energy financing solutions, connecting customers, integrators, and distributors in a fully online ecosystem. The system aims to simplify access to clean energy through agile workflows with integrated biometric security and digital signatures. Its main features include:<br><br>

        <strong>For Customers:</strong> run financing simulations with fixed installments; request credit for residential, commercial, industrial, or agribusiness projects; manage payments and issue duplicate boleto slips; and remotely monitor the performance of the installed solar system.<br><br>

        <strong>For Integrators:</strong> complete proposal management and online status tracking; access to an exclusive support channel via WhatsApp; direct payment reception; and connection to over 50 partner distributors to speed up equipment acquisition.`,
        mobile_apps_title: `Mobile Apps`,
        mobile_apps_subtitle: `I acted as a collaborator in these published apps...`,
        bmp_app_title: `BMP`,
        bmp_app_description: `BMP is a digital account that makes your daily life easier. You do not need an invitation and you do not have to wait in line for account approval. In a friendly flow with just a few taps, you open your account. You do everything on your phone, without wasting time in lines and without bureaucracy.`,
        gsm_app_title: `Game Studio Manager`,
        gsm_app_description: `In this idle game, you become the game developer of your dreams. Build amazing games by choosing from multiple genres and subgenres, plus different platforms.`,
        app_frame_placeholder: `Add the app screenshot here`,
        app_play_store_label: `View on Play Store`,
        experience: `Experience`,
        academic_and_professional: `Academic and Professional`,
        academic: `Academic`,
        professional: `Professional`,
                                ufape: `<p class="p-title">
                                                                                                                                                                                                                                Bachelor's Degree in Computer Science at UFRPE and UFAPE
                                                        <br>
                                                        <i>2018 - 2023</i>
                                                    </p>
                  
                                                    <p>
                                                        The degree continued my technical formation and provided a broad view of networks, distributed systems, scalability, and algorithm design and analysis. Courses such as Software Engineering were instrumental in refining project management practices and agile methodologies.

                                                        During the course, I joined the Multidisciplinary Laboratory of Social Technologies (LMTS), where I dedicated much of my undergraduate years to developing institutional systems and community solutions. My final project focused on enhancing the Electronic Warehouse Management Platform, applying advanced RESTful API and software architecture concepts.
                                                    </p>`,

                                ifpe: `<p class="p-title">
                                                                                                                                                                                                                                Technical Course in Informatics at IFPE
                                                        <br>
                                                        <i>2013 - 2017</i>
                                                    </p>
                  
                                                    <p>
                                                        IFPE marked the start of my programming journey, where I was introduced to computational logic and the Java language. I learned object-oriented programming, requirements engineering, UML modeling, and interface development with Java Swing and PrimeFaces (JSF).

                                                        For my final project, I developed a C/C++ system integrated with an Arduino and pressure sensors to measure, in real time, the efficiency of cooking gas production in local biodigesters, contributing to Environmental Science research.
                                                    </p>`,

                                overdrive: `<p class="p-title">
                                                                 Overdrive Software and Consulting
                                                                 <br>
                                                                 <i>Feb 2023 - Apr 2026(3 years and 3 months)</i>
                                                             </p>
                  
                                                             <p>
                                                                 Upon finishing my degree, I began at Overdrive Software and Consulting as a mid-level Back-End Developer on the internal products team. My first project was an industrial cleaning system, where I built a robust RESTful API to integrate front-end and mobile clients. The implementation required a physical multi-tenancy architecture using PostgreSQL to isolate each customer's data, containerized environments with Docker, and AWS S3 for storage.

                                                                 Later, I maintained and developed client portfolio systems such as SolAgora and Banco Money Plus using C# and .NET. This work reinforced my skills in RESTful service design, database optimization with Entity Framework, and Clean Architecture practices for scalable code.

                                                                 As the company expanded into mobile, I also worked as a Mobile Developer using Flutter (Dart). I contributed to FitEasyAI (integrated with OpenAI and Firebase) and Game Studio Manager, and participated in the white-label banking app for Banco Money Plus, handling secure financial APIs, local persistence with SQLite, and state management with Provider and MVVM patterns.

                                                                 In April 2026 I completed my tenure at Overdrive, concluding a period of strong professional growth and end-to-end delivery across backend and mobile domains.
                                                             </p>`,
                lmts: `<p class="p-title">
                Multidisciplinary Laboratory of Social Technologies (LMTS)
                <br>
                <i>Oct 2020 - Jan 2023 (2 years and 4 months)</i>
            </p>

            <p>
                The LMTS was my entry point into professional software development, where I applied academic knowledge to community-facing projects. I began as a Full Stack Developer using Laravel (PHP) and Blade, combined with jQuery and utility frameworks like Bootstrap and Tailwind to deliver intuitive user experiences.

                My first major project was an Inventory Management Platform that today serves UFAPE and UPE. As the lab grew, I took on Scrum Master and Tech Lead responsibilities, coordinating multidisciplinary teams, prototyping interfaces in Figma, reviewing pull requests, and onboarding new developers while ensuring deliveries aligned with agile practices.
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
    $("#hero_eyebrow").html(translations[language].hero_eyebrow);
    $("#hero_summary").html(translations[language].hero_summary);
    $("#hero_highlight_1_label").html(translations[language].hero_highlight_1_label);
    $("#hero_highlight_1_value").html(translations[language].hero_highlight_1_value);
    $("#hero_highlight_2_label").html(translations[language].hero_highlight_2_label);
    $("#hero_highlight_2_value").html(translations[language].hero_highlight_2_value);
    $("#hero_highlight_3_label").html(translations[language].hero_highlight_3_label);
    $("#hero_highlight_3_value").html(translations[language].hero_highlight_3_value);

    $(".nav_presentation").html(translations[language].nav_presentation);
    $(".nav_systems").html(translations[language].nav_systems);
    $(".nav_apps").html(translations[language].nav_apps);
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
    $("#masters").html(translations[language].masters);
    $("#pega").html(translations[language].pega);
    $("#pega_description").html(translations[language].pega_description);
    $(".system-certification-label").html(translations[language].system_certification);
    $(".system-link-label").html(translations[language].system_link);
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
    $("#sol_agora").html(translations[language].sol_agora);
    $("#sol_agora_description").html(translations[language].sol_agora_description);
    $("#mobile_apps_title").html(translations[language].mobile_apps_title);
    $("#mobile_apps_subtitle").html(translations[language].mobile_apps_subtitle);
    $("#bmp_app_title").html(translations[language].bmp_app_title);
    $("#bmp_app_description").html(translations[language].bmp_app_description);
    $("#gsm_app_title").html(translations[language].gsm_app_title);
    $("#gsm_app_description").html(translations[language].gsm_app_description);
    $("#bmp_screen_placeholder").html(translations[language].app_frame_placeholder);
    $("#gsm_screen_placeholder").html(translations[language].app_frame_placeholder);
    $(".app-play-store-label").html(translations[language].app_play_store_label);
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
