/* =========================================================
   SXLLEN — SCRIPT.JS
   Portfolio / Navigation / Gallery / Translations / Lightbox
========================================================= */


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    it: {

        navPortfolio: "Portfolio",
        navAbout: "About",
        navCommissions: "Commissioni",
        navContact: "Contatti",

        heroSmall: "CONCEPT ARTIST & ILLUSTRATOR",
        heroTitle: "SXLLEN",
        heroDescription:
            "Specializzata in character, environment e prop design per progetti fantasy e dark fantasy.",
        heroButton: "Guarda il portfolio",

        portfolioSmall: "SELECTED WORKS",
        portfolioTitle: "Portfolio",

        categoryCharacter: "Character Design",
        categoryProps: "Prop Design",
        categoryEnvironment: "Environment",
        categoryIllustrations: "Illustrazioni",
        category3D: "Modelli 3D",

        subcategoryCharacters: "Characters",
        subcategoryCreatures: "Creature Design",
        subcategoryBosses: "Boss Design",

        subcategoryWeapons: "Weapons",
        subcategoryItems: "Items & Collectibles",
        subcategorySetDressing: "Set Dressing",

        subcategoryInteriors: "Interiors",
        subcategoryExteriors: "Exteriors",

        backPortfolio: "← Torna al Portfolio",
        backCategory: "← Indietro",

        aboutSmall: "ABOUT ME",
        aboutTitle: "Chi sono",

        aboutText1:
            "Mi chiamo Sabrina e sono un'artista italiana. Da sempre appassionata di arte e videogiochi, ho frequentato un corso di concept art triennale. Lavoro principalmente a progetti dark fantasy, fantasy e semi-realistici.",

        aboutText2: "",

        commissionsSmall: "COMMISSIONS",
        commissionsTitle: "Commissioni",

        price1Title: "Character Design",
        price1: "A partire da €180",
        price1Description:
            "Character design completo, con sketch iniziale e rendering finale.",

        price2Title: "Prop Design",
        price2: "A partire da €120",
        price2Description:
            "Design di props e oggetti, con concept e rendering.",

        price3Title: "Environment Design",
        price3: "A partire da €200",
        price3Description:
            "Concept di ambiente, con composizione, mood e rendering.",

        price4Title: "Illustrazione",
        price4: "A partire da €180",
        price4Description:
            "Illustrazione completa con composizione e rendering.",

        commissionNote:
            "I prezzi indicati sono tariffe di partenza. Il prezzo finale può variare in base alla complessità, all'estensione e alle esigenze del progetto. L'utilizzo commerciale viene valutato separatamente. Sono incluse 2 revisioni: una durante la fase di sketch e una durante la fase avanzata del lavoro.",

        commissionTermsTitle: "Termini delle Commissioni",

        termsPaymentTitle: "Pagamento",
        termsPaymentText:
            "È richiesto un acconto del 50% per iniziare il progetto. Il restante 50% deve essere pagato prima della consegna dei file finali. Per commissioni di importo ridotto, può essere richiesto il pagamento completo anticipato.",

        termsRevisionsTitle: "Revisioni",
        termsRevisionsText:
            "Sono incluse 2 revisioni: una durante la fase di sketch e una durante la fase avanzata del lavoro. Eventuali revisioni aggiuntive possono comportare un costo extra, concordato prima di procedere.",

        termsPricingTitle: "Prezzi",
        termsPricingText:
            "I prezzi indicati nel portfolio sono tariffe di partenza. Il prezzo finale viene stabilito in base alla complessità, all'estensione e alle esigenze specifiche del progetto.",

        termsCommercialTitle: "Uso commerciale",
        termsCommercialText:
            "I prezzi indicati si riferiscono all'uso personale. L'utilizzo commerciale viene valutato separatamente e deve essere concordato prima dell'inizio del progetto.",

        termsTimelineTitle: "Tempistiche",
        termsTimelineText:
            "I tempi di lavorazione vengono comunicati insieme al preventivo e possono variare in base alla complessità del progetto e agli impegni lavorativi già in corso.",

        termsCancellationTitle: "Cancellazione",
        termsCancellationText:
            "Se il cliente cancella il progetto dopo l'inizio dei lavori, l'acconto non è rimborsabile. Nel caso in cui SXLLEN non possa completare il progetto, verrà rimborsata la parte relativa al lavoro non ancora svolto.",

        termsDeliveryTitle: "Consegna",
        termsDeliveryText:
            "I file finali vengono consegnati dopo il pagamento completo. I file sorgente, i materiali di lavoro e gli sketch intermedi non sono inclusi, salvo diverso accordo.",

        termsPortfolioTitle: "Portfolio e utilizzo delle opere",
        termsPortfolioText:
            "SXLLEN si riserva il diritto di mostrare le opere completate nel proprio portfolio, sul sito web e sui social media. Eventuali richieste di riservatezza o di mancata pubblicazione devono essere concordate prima dell'inizio del progetto.",

        termsAcceptanceTitle: "Accettazione",
        termsAcceptanceText:
            "Confermando una commissione, il cliente dichiara di aver letto e accettato questi termini prima dell'inizio del progetto.",

        contactSmall: "GET IN TOUCH",
        contactTitle: "Parliamo del tuo progetto",
        contactDescription:
            "Hai un progetto, una collaborazione o vuoi commissionarmi un'illustrazione? Scrivimi per raccontarmi la tua idea.",
        contactButton: "Scrivimi",

        footer: "© 2026 SXLLEN — Concept Artist & Illustrator"
    },


    en: {

        navPortfolio: "Portfolio",
        navAbout: "About",
        navCommissions: "Commissions",
        navContact: "Contact",

        heroSmall: "CONCEPT ARTIST & ILLUSTRATOR",
        heroTitle: "SXLLEN",
        heroDescription:
            "Specialized in character, environment and prop design for fantasy and dark fantasy projects.",
        heroButton: "View Portfolio",

        portfolioSmall: "SELECTED WORKS",
        portfolioTitle: "Portfolio",

        categoryCharacter: "Character Design",
        categoryProps: "Prop Design",
        categoryEnvironment: "Environment",
        categoryIllustrations: "Illustrations",
        category3D: "3D Models",

        subcategoryCharacters: "Characters",
        subcategoryCreatures: "Creature Design",
        subcategoryBosses: "Boss Design",

        subcategoryWeapons: "Weapons",
        subcategoryItems: "Items & Collectibles",
        subcategorySetDressing: "Set Dressing",

        subcategoryInteriors: "Interiors",
        subcategoryExteriors: "Exteriors",

        backPortfolio: "← Back to Portfolio",
        backCategory: "← Back",

        aboutSmall: "ABOUT ME",
        aboutTitle: "About Me",

        aboutText1:
            "My name is Sabrina and I am an Italian artist. Passionate about art and video games since I was young, I completed a three-year concept art course. I mainly work on dark fantasy, fantasy and semi-realistic projects.",

        aboutText2: "",

        commissionsSmall: "COMMISSIONS",
        commissionsTitle: "Commissions",

        price1Title: "Character Design",
        price1: "Starting from €180",
        price1Description:
            "Complete character design with initial sketch and final rendering.",

        price2Title: "Prop Design",
        price2: "Starting from €120",
        price2Description:
            "Prop and object design with concept and rendering.",

        price3Title: "Environment Design",
        price3: "Starting from €200",
        price3Description:
            "Environment concept with composition, mood and rendering.",

        price4Title: "Illustration",
        price4: "Starting from €180",
        price4Description:
            "Complete illustration with composition and rendering.",

        commissionNote:
            "The prices shown are starting rates. The final price may vary depending on the complexity, scope and specific requirements of the project. Commercial use is assessed separately. Two revisions are included: one during the sketch phase and one during the advanced stage of the work.",

        commissionTermsTitle: "Commission Terms",

        termsPaymentTitle: "Payment",
        termsPaymentText:
            "A 50% deposit is required to begin the project. The remaining 50% must be paid before the final files are delivered. For smaller commissions, full payment in advance may be required.",

        termsRevisionsTitle: "Revisions",
        termsRevisionsText:
            "Two revisions are included: one during the sketch phase and one during the advanced stage of the work. Additional revisions may involve an extra fee, agreed upon before proceeding.",

        termsPricingTitle: "Pricing",
        termsPricingText:
            "The prices shown in the portfolio are starting rates. The final price is determined according to the complexity, scope and specific requirements of the project.",

        termsCommercialTitle: "Commercial Use",
        termsCommercialText:
            "The listed prices refer to personal use. Commercial use is assessed separately and must be agreed upon before the project begins.",

        termsTimelineTitle: "Timeline",
        termsTimelineText:
            "Estimated working times are provided together with the quote and may vary depending on the complexity of the project and existing work commitments.",

        termsCancellationTitle: "Cancellation",
        termsCancellationText:
            "If the client cancels the project after work has started, the deposit is non-refundable. If SXLLEN is unable to complete the project, the portion corresponding to work not yet completed will be refunded.",

        termsDeliveryTitle: "Delivery",
        termsDeliveryText:
            "Final files are delivered after full payment. Source files, working materials and intermediate sketches are not included unless otherwise agreed.",

        termsPortfolioTitle: "Portfolio & Artwork Usage",
        termsPortfolioText:
            "SXLLEN reserves the right to display completed works in her portfolio, on her website and on social media. Any confidentiality or no-publication requests must be agreed upon before the project begins.",

        termsAcceptanceTitle: "Acceptance",
        termsAcceptanceText:
            "By confirming a commission, the client declares that they have read and accepted these terms before the project begins.",

        contactSmall: "GET IN TOUCH",
        contactTitle: "Let's Talk About Your Project",
        contactDescription:
            "Have a project, collaboration or would you like to commission an illustration? Get in touch and tell me about your idea.",
        contactButton: "Contact Me",

        footer: "© 2026 SXLLEN — Concept Artist & Illustrator"
    },


    es: {

        navPortfolio: "Portfolio",
        navAbout: "Sobre mí",
        navCommissions: "Comisiones",
        navContact: "Contacto",

        heroSmall: "CONCEPT ARTIST & ILLUSTRATOR",
        heroTitle: "SXLLEN",
        heroDescription:
            "Especializada en diseño de personajes, entornos y props para proyectos de fantasía y dark fantasy.",
        heroButton: "Ver portfolio",

        portfolioSmall: "TRABAJOS SELECCIONADOS",
        portfolioTitle: "Portfolio",

        categoryCharacter: "Diseño de Personajes",
        categoryProps: "Diseño de Props",
        categoryEnvironment: "Entornos",
        categoryIllustrations: "Ilustraciones",
        category3D: "Modelos 3D",

        subcategoryCharacters: "Personajes",
        subcategoryCreatures: "Diseño de Criaturas",
        subcategoryBosses: "Diseño de Jefes",

        subcategoryWeapons: "Armas",
        subcategoryItems: "Objetos y Coleccionables",
        subcategorySetDressing: "Decoración de Escenarios",

        subcategoryInteriors: "Interiores",
        subcategoryExteriors: "Exteriores",

        backPortfolio: "← Volver al Portfolio",
        backCategory: "← Atrás",

        aboutSmall: "SOBRE MÍ",
        aboutTitle: "Quién soy",

        aboutText1:
            "Me llamo Sabrina y soy una artista italiana. Apasionada por el arte y los videojuegos desde siempre, estudié un curso de concept art de tres años. Trabajo principalmente en proyectos de dark fantasy, fantasy y estilos semirrealistas.",

        aboutText2: "",

        commissionsSmall: "COMISIONES",
        commissionsTitle: "Comisiones",

        price1Title: "Diseño de Personajes",
        price1: "A partir de €180",
        price1Description:
            "Diseño completo de personaje, con sketch inicial y renderizado final.",

        price2Title: "Diseño de Props",
        price2: "A partir de €120",
        price2Description:
            "Diseño de props y objetos, con concepto y renderizado.",

        price3Title: "Diseño de Entornos",
        price3: "A partir de €200",
        price3Description:
            "Concepto de entorno, con composición, mood y renderizado.",

        price4Title: "Ilustración",
        price4: "A partir de €180",
        price4Description:
            "Ilustración completa con composición y renderizado.",

        commissionNote:
            "Los precios indicados son tarifas iniciales. El precio final puede variar según la complejidad, el alcance y las necesidades del proyecto. El uso comercial se evalúa por separado. Se incluyen 2 revisiones: una durante la fase de sketch y otra durante la fase avanzada del trabajo.",

        commissionTermsTitle: "Términos de las Comisiones",

        termsPaymentTitle: "Pago",
        termsPaymentText:
            "Se requiere un anticipo del 50% para comenzar el proyecto. El 50% restante debe pagarse antes de la entrega de los archivos finales. Para comisiones de menor importe, puede solicitarse el pago completo por adelantado.",

        termsRevisionsTitle: "Revisiones",
        termsRevisionsText:
            "Se incluyen 2 revisiones: una durante la fase de sketch y otra durante la fase avanzada del trabajo. Las revisiones adicionales pueden tener un coste extra, acordado antes de continuar.",

        termsPricingTitle: "Precios",
        termsPricingText:
            "Los precios mostrados en el portfolio son tarifas iniciales. El precio final se establece según la complejidad, el alcance y las necesidades específicas del proyecto.",

        termsCommercialTitle: "Uso Comercial",
        termsCommercialText:
            "Los precios indicados corresponden al uso personal. El uso comercial se evalúa por separado y debe acordarse antes del inicio del proyecto.",

        termsTimelineTitle: "Plazos",
        termsTimelineText:
            "Los tiempos de trabajo se comunican junto con el presupuesto y pueden variar según la complejidad del proyecto y los compromisos laborales existentes.",

        termsCancellationTitle: "Cancelación",
        termsCancellationText:
            "Si el cliente cancela el proyecto después de que el trabajo haya comenzado, el anticipo no es reembolsable. Si SXLLEN no puede completar el proyecto, se reembolsará la parte correspondiente al trabajo aún no realizado.",

        termsDeliveryTitle: "Entrega",
        termsDeliveryText:
            "Los archivos finales se entregan después del pago completo. Los archivos fuente, materiales de trabajo y sketches intermedios no están incluidos salvo acuerdo previo.",

        termsPortfolioTitle: "Portfolio y Uso de las Obras",
        termsPortfolioText:
            "SXLLEN se reserva el derecho de mostrar las obras terminadas en su portfolio, sitio web y redes sociales. Cualquier solicitud de confidencialidad o de no publicación debe acordarse antes del inicio del proyecto.",

        termsAcceptanceTitle: "Aceptación",
        termsAcceptanceText:
            "Al confirmar una comisión, el cliente declara haber leído y aceptado estos términos antes del inicio del proyecto.",

        contactSmall: "CONTACTO",
        contactTitle: "Hablemos de tu proyecto",
        contactDescription:
            "¿Tienes un proyecto, una colaboración o quieres encargarme una ilustración? Escríbeme para contarme tu idea.",
        contactButton: "Escríbeme",

        footer: "© 2026 SXLLEN — Concept Artist & Illustrator"
    },


    fr: {

        navPortfolio: "Portfolio",
        navAbout: "À propos",
        navCommissions: "Commandes",
        navContact: "Contact",

        heroSmall: "CONCEPT ARTIST & ILLUSTRATOR",
        heroTitle: "SXLLEN",
        heroDescription:
            "Spécialisée dans le character design, l'environment design et le prop design pour des projets fantasy et dark fantasy.",
        heroButton: "Voir le portfolio",

        portfolioSmall: "TRAVAUX SÉLECTIONNÉS",
        portfolioTitle: "Portfolio",

        categoryCharacter: "Character Design",
        categoryProps: "Prop Design",
        categoryEnvironment: "Environment",
        categoryIllustrations: "Illustrations",
        category3D: "Modèles 3D",

        subcategoryCharacters: "Personnages",
        subcategoryCreatures: "Créatures",
        subcategoryBosses: "Boss",

        subcategoryWeapons: "Armes",
        subcategoryItems: "Objets & Collectibles",
        subcategorySetDressing: "Décor",

        subcategoryInteriors: "Intérieurs",
        subcategoryExteriors: "Extérieurs",

        backPortfolio: "← Retour au Portfolio",
        backCategory: "← Retour",

        aboutSmall: "À PROPOS DE MOI",
        aboutTitle: "Qui suis-je",

        aboutText1:
            "Je m'appelle Sabrina et je suis une artiste italienne. Passionnée d'art et de jeux vidéo depuis toujours, j'ai suivi une formation de trois ans en concept art. Je travaille principalement sur des projets dark fantasy, fantasy et semi-réalistes.",

        aboutText2: "",

        commissionsSmall: "COMMANDES",
        commissionsTitle: "Commandes",

        price1Title: "Character Design",
        price1: "À partir de 180 €",
        price1Description:
            "Character design complet avec sketch initial et rendu final.",

        price2Title: "Prop Design",
        price2: "À partir de 120 €",
        price2Description:
            "Design de props et d'objets avec concept et rendu.",

        price3Title: "Environment Design",
        price3: "À partir de 200 €",
        price3Description:
            "Concept d'environnement avec composition, ambiance et rendu.",

        price4Title: "Illustration",
        price4: "À partir de 180 €",
        price4Description:
            "Illustration complète avec composition et rendu.",

        commissionNote:
            "Les prix indiqués sont des tarifs de départ. Le prix final peut varier selon la complexité, l'étendue et les besoins du projet. L'utilisation commerciale est évaluée séparément. 2 révisions sont incluses : une pendant la phase de sketch et une pendant la phase avancée du travail.",

        commissionTermsTitle: "Conditions des Commandes",

        termsPaymentTitle: "Paiement",
        termsPaymentText:
            "Un acompte de 50 % est demandé pour commencer le projet. Les 50 % restants doivent être payés avant la livraison des fichiers finaux. Pour les petites commandes, le paiement intégral à l'avance peut être demandé.",

        termsRevisionsTitle: "Révisions",
        termsRevisionsText:
            "2 révisions sont incluses : une pendant la phase de sketch et une pendant la phase avancée du travail. Des révisions supplémentaires peuvent entraîner des frais supplémentaires, convenus avant de continuer.",

        termsPricingTitle: "Tarifs",
        termsPricingText:
            "Les prix indiqués dans le portfolio sont des tarifs de départ. Le prix final est établi en fonction de la complexité, de l'étendue et des besoins spécifiques du projet.",

        termsCommercialTitle: "Usage Commercial",
        termsCommercialText:
            "Les prix indiqués concernent l'usage personnel. L'utilisation commerciale est évaluée séparément et doit être convenue avant le début du projet.",

        termsTimelineTitle: "Délais",
        termsTimelineText:
            "Les délais de réalisation sont communiqués avec le devis et peuvent varier selon la complexité du projet et les engagements professionnels en cours.",

        termsCancellationTitle: "Annulation",
        termsCancellationText:
            "Si le client annule le projet après le début du travail, l'acompte n'est pas remboursable. Si SXLLEN ne peut pas terminer le projet, la partie correspondant au travail non effectué sera remboursée.",

        termsDeliveryTitle: "Livraison",
        termsDeliveryText:
            "Les fichiers finaux sont livrés après paiement intégral. Les fichiers sources, matériaux de travail et sketches intermédiaires ne sont pas inclus sauf accord contraire.",

        termsPortfolioTitle: "Portfolio et Utilisation des Œuvres",
        termsPortfolioText:
            "SXLLEN se réserve le droit de présenter les œuvres terminées dans son portfolio, sur son site web et sur les réseaux sociaux. Toute demande de confidentialité ou de non-publication doit être convenue avant le début du projet.",

        termsAcceptanceTitle: "Acceptation",
        termsAcceptanceText:
            "En confirmant une commande, le client déclare avoir lu et accepté ces conditions avant le début du projet.",

        contactSmall: "CONTACT",
        contactTitle: "Parlons de votre projet",
        contactDescription:
            "Vous avez un projet, une collaboration ou souhaitez commander une illustration ? Écrivez-moi pour me parler de votre idée.",
        contactButton: "Écrivez-moi",

        footer: "© 2026 SXLLEN — Concept Artist & Illustrator"
    },


    de: {

        navPortfolio: "Portfolio",
        navAbout: "Über mich",
        navCommissions: "Aufträge",
        navContact: "Kontakt",

        heroSmall: "CONCEPT ARTIST & ILLUSTRATOR",
        heroTitle: "SXLLEN",
        heroDescription:
            "Spezialisiert auf Character-, Environment- und Prop-Design für Fantasy- und Dark-Fantasy-Projekte.",
        heroButton: "Portfolio ansehen",

        portfolioSmall: "AUSGEWÄHLTE ARBEITEN",
        portfolioTitle: "Portfolio",

        categoryCharacter: "Character Design",
        categoryProps: "Prop Design",
        categoryEnvironment: "Environment",
        categoryIllustrations: "Illustrationen",
        category3D: "3D-Modelle",

        subcategoryCharacters: "Charaktere",
        subcategoryCreatures: "Creature Design",
        subcategoryBosses: "Boss Design",

        subcategoryWeapons: "Waffen",
        subcategoryItems: "Gegenstände & Sammlerstücke",
        subcategorySetDressing: "Set Dressing",

        subcategoryInteriors: "Innenräume",
        subcategoryExteriors: "Außenbereiche",

        backPortfolio: "← Zurück zum Portfolio",
        backCategory: "← Zurück",

        aboutSmall: "ÜBER MICH",
        aboutTitle: "Wer ich bin",

        aboutText1:
            "Ich heiße Sabrina und bin eine italienische Künstlerin. Seit jeher begeistere ich mich für Kunst und Videospiele und habe eine dreijährige Ausbildung in Concept Art absolviert. Ich arbeite hauptsächlich an Dark-Fantasy-, Fantasy- und semi-realistischen Projekten.",

        aboutText2: "",

        commissionsSmall: "AUFTRÄGE",
        commissionsTitle: "Aufträge",

        price1Title: "Character Design",
        price1: "Ab €180",
        price1Description:
            "Komplettes Character Design mit initialem Sketch und finalem Rendering.",

        price2Title: "Prop Design",
        price2: "Ab €120",
        price2Description:
            "Design von Props und Objekten mit Konzept und Rendering.",

        price3Title: "Environment Design",
        price3: "Ab €200",
        price3Description:
            "Environment-Konzept mit Komposition, Stimmung und Rendering.",

        price4Title: "Illustration",
        price4: "Ab €180",
        price4Description:
            "Komplette Illustration mit Komposition und Rendering.",

        commissionNote:
            "Die angegebenen Preise sind Einstiegspreise. Der endgültige Preis kann je nach Komplexität, Umfang und Anforderungen des Projekts variieren. Die kommerzielle Nutzung wird separat bewertet. 2 Überarbeitungen sind enthalten: eine während der Sketch-Phase und eine während der fortgeschrittenen Arbeitsphase.",

        commissionTermsTitle: "Auftragsbedingungen",

        termsPaymentTitle: "Zahlung",
        termsPaymentText:
            "Für den Beginn des Projekts ist eine Anzahlung von 50 % erforderlich. Die verbleibenden 50 % müssen vor der Lieferung der finalen Dateien bezahlt werden. Bei kleineren Aufträgen kann eine vollständige Vorauszahlung verlangt werden.",

        termsRevisionsTitle: "Überarbeitungen",
        termsRevisionsText:
            "2 Überarbeitungen sind enthalten: eine während der Sketch-Phase und eine während der fortgeschrittenen Arbeitsphase. Zusätzliche Überarbeitungen können gegen eine vorher vereinbarte Zusatzgebühr möglich sein.",

        termsPricingTitle: "Preise",
        termsPricingText:
            "Die im Portfolio angegebenen Preise sind Einstiegspreise. Der endgültige Preis richtet sich nach Komplexität, Umfang und den spezifischen Anforderungen des Projekts.",

        termsCommercialTitle: "Kommerzielle Nutzung",
        termsCommercialText:
            "Die angegebenen Preise beziehen sich auf die private Nutzung. Die kommerzielle Nutzung wird separat bewertet und muss vor Beginn des Projekts vereinbart werden.",

        termsTimelineTitle: "Bearbeitungszeit",
        termsTimelineText:
            "Die voraussichtliche Bearbeitungszeit wird zusammen mit dem Angebot mitgeteilt und kann je nach Komplexität des Projekts und bereits bestehenden Arbeitsverpflichtungen variieren.",

        termsCancellationTitle: "Stornierung",
        termsCancellationText:
            "Wenn der Kunde das Projekt nach Beginn der Arbeiten storniert, ist die Anzahlung nicht erstattungsfähig. Falls SXLLEN das Projekt nicht abschließen kann, wird der Betrag für noch nicht geleistete Arbeiten zurückerstattet.",

        termsDeliveryTitle: "Lieferung",
        termsDeliveryText:
            "Die finalen Dateien werden nach vollständiger Bezahlung geliefert. Quelldateien, Arbeitsmaterialien und Zwischen-Sketches sind nicht enthalten, sofern nichts anderes vereinbart wurde.",

        termsPortfolioTitle: "Portfolio und Nutzung der Werke",
        termsPortfolioText:
            "SXLLEN behält sich das Recht vor, fertiggestellte Werke im eigenen Portfolio, auf der Website und in sozialen Medien zu zeigen. Wünsche bezüglich Vertraulichkeit oder Nichtveröffentlichung müssen vor Beginn des Projekts vereinbart werden.",

        termsAcceptanceTitle: "Akzeptanz",
        termsAcceptanceText:
            "Mit der Bestätigung eines Auftrags erklärt der Kunde, diese Bedingungen vor Beginn des Projekts gelesen und akzeptiert zu haben.",

        contactSmall: "KONTAKT",
        contactTitle: "Sprechen wir über dein Projekt",
        contactDescription:
            "Du hast ein Projekt, eine Zusammenarbeit oder möchtest eine Illustration in Auftrag geben? Schreib mir und erzähl mir von deiner Idee.",
        contactButton: "Schreib mir",

        footer: "© 2026 SXLLEN — Concept Artist & Illustrator"
    },


    ja: {

        navPortfolio: "ポートフォリオ",
        navAbout: "プロフィール",
        navCommissions: "ご依頼",
        navContact: "お問い合わせ",

        heroSmall: "CONCEPT ARTIST & ILLUSTRATOR",
        heroTitle: "SXLLEN",
        heroDescription:
            "ファンタジーやダークファンタジー作品を中心に、キャラクターデザイン、エンバイロメントデザイン、プロップデザインを制作しています。",
        heroButton: "ポートフォリオを見る",

        portfolioSmall: "SELECTED WORKS",
        portfolioTitle: "ポートフォリオ",

        categoryCharacter: "キャラクターデザイン",
        categoryProps: "プロップデザイン",
        categoryEnvironment: "エンバイロメント",
        categoryIllustrations: "イラストレーション",
        category3D: "3Dモデル",

        subcategoryCharacters: "キャラクター",
        subcategoryCreatures: "クリーチャーデザイン",
        subcategoryBosses: "ボスデザイン",

        subcategoryWeapons: "武器",
        subcategoryItems: "アイテム・コレクション",
        subcategorySetDressing: "セットドレッシング",

        subcategoryInteriors: "インテリア",
        subcategoryExteriors: "エクステリア",

        backPortfolio: "← ポートフォリオに戻る",
        backCategory: "← 戻る",

        aboutSmall: "ABOUT ME",
        aboutTitle: "プロフィール",

        aboutText1:
            "Sabrina（サブリナ）と申します。イタリア出身のアーティストです。幼い頃からアートとゲームが好きで、3年間のコンセプトアートコースを修了しました。主にダークファンタジー、ファンタジー、セミリアル系の作品を制作しています。",

        aboutText2: "",

        commissionsSmall: "COMMISSIONS",
        commissionsTitle: "ご依頼",

        price1Title: "キャラクターデザイン",
        price1: "€180から",
        price1Description:
            "初期スケッチから最終レンダリングまでを含むキャラクターデザイン。",

        price2Title: "プロップデザイン",
        price2: "€120から",
        price2Description:
            "コンセプトとレンダリングを含む小道具・アイテムのデザイン。",

        price3Title: "エンバイロメントデザイン",
        price3: "€200から",
        price3Description:
            "構図、ムード、レンダリングを含む背景・環境コンセプト。",

        price4Title: "イラストレーション",
        price4: "€180から",
        price4Description:
            "構図とレンダリングを含む完成イラスト。",

        commissionNote:
            "表示されている料金は基本料金です。最終的な料金は、作品の複雑さ、規模、プロジェクトの具体的な要件によって変動する場合があります。商用利用については別途ご相談となります。修正は2回まで含まれます。1回目はスケッチ段階、2回目は制作後半の段階で行います。",

        commissionTermsTitle: "ご依頼に関する規約",

        termsPaymentTitle: "お支払い",
        termsPaymentText:
            "制作開始時に50%の前金をお支払いいただきます。残りの50%は最終ファイルの納品前にお支払いください。少額のご依頼の場合は、全額前払いをお願いする場合があります。",

        termsRevisionsTitle: "修正",
        termsRevisionsText:
            "修正は2回まで含まれます。1回目はスケッチ段階、2回目は制作後半の段階で行います。追加の修正には、事前に合意した追加料金が発生する場合があります。",

        termsPricingTitle: "料金",
        termsPricingText:
            "ポートフォリオに掲載されている料金は基本料金です。最終料金は、作品の複雑さ、規模、プロジェクトの具体的な要件をもとに決定されます。",

        termsCommercialTitle: "商用利用",
        termsCommercialText:
            "掲載料金は個人利用を対象としています。商用利用については別途料金を設定し、制作開始前に合意する必要があります。",

        termsTimelineTitle: "制作期間",
        termsTimelineText:
            "制作期間は見積もり時にお伝えします。プロジェクトの複雑さや他の制作スケジュールによって変動する場合があります。",

        termsCancellationTitle: "キャンセル",
        termsCancellationText:
            "制作開始後にクライアント都合でキャンセルされた場合、前金は返金されません。SXLLEN側の事情によりプロジェクトを完了できない場合、未制作分に相当する金額を返金します。",

        termsDeliveryTitle: "納品",
        termsDeliveryText:
            "最終ファイルは全額のお支払い完了後に納品されます。ソースファイル、制作途中の素材、途中段階のスケッチは、別途合意がない限り含まれません。",

        termsPortfolioTitle: "ポートフォリオへの掲載",
        termsPortfolioText:
            "SXLLENは、完成した作品を自身のポートフォリオ、ウェブサイト、SNSに掲載する権利を有します。非公開や掲載不可をご希望の場合は、制作開始前にご相談ください。",

        termsAcceptanceTitle: "規約への同意",
        termsAcceptanceText:
            "ご依頼を確定した時点で、クライアントは制作開始前にこれらの規約を読み、同意したものとします。",

        contactSmall: "GET IN TOUCH",
        contactTitle: "プロジェクトについて話しましょう",
        contactDescription:
            "プロジェクトやコラボレーションのご相談、イラストのご依頼をご希望ですか？あなたのアイデアをぜひ聞かせてください。",
        contactButton: "お問い合わせ",

        footer: "© 2026 SXLLEN — Concept Artist & Illustrator"
    }

};


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentLanguage = "it";
let currentCategory = null;
let currentOpenSubcategory = null;


/* =========================================================
   LANGUAGE STORAGE
========================================================= */

function getSavedLanguage() {

    try {

        const saved =
            localStorage.getItem("sxllen-language");

        if (
            saved &&
            Object.prototype.hasOwnProperty.call(
                translations,
                saved
            )
        ) {

            return saved;

        }

    } catch (error) {

        console.warn(
            "SXLLEN: impossibile leggere localStorage.",
            error
        );

    }

    return "it";
}


function saveLanguage(language) {

    try {

        localStorage.setItem(
            "sxllen-language",
            language
        );

    } catch (error) {

        console.warn(
            "SXLLEN: impossibile salvare la lingua.",
            error
        );

    }

}


/* =========================================================
   APPLY TRANSLATIONS
========================================================= */

function applyTranslations(language) {

    if (
        !language ||
        !Object.prototype.hasOwnProperty.call(
            translations,
            language
        )
    ) {

        language = "it";

    }

    currentLanguage = language;

    document.documentElement.lang =
        language;

    const languageData =
        translations[language];

    const elements =
        document.querySelectorAll(
            "[data-i18n]"
        );

    elements.forEach(element => {

        const key =
            element.getAttribute("data-i18n");

        if (
            key &&
            Object.prototype.hasOwnProperty.call(
                languageData,
                key
            )
        ) {

            element.textContent =
                languageData[key];

        }

    });

    const prices =
        document.querySelectorAll(
            ".price"
        );

    const priceKeys = [
        "price1",
        "price2",
        "price3",
        "price4"
    ];

    prices.forEach((element, index) => {

        const key =
            priceKeys[index];

        if (
            key &&
            Object.prototype.hasOwnProperty.call(
                languageData,
                key
            )
        ) {

            element.textContent =
                languageData[key];

        }

    });

    const selector =
        document.getElementById(
            "languageSelector"
        );

    if (selector) {

        selector.value =
            language;

    }

    saveLanguage(language);

    const subcategoryTitle =
        document.getElementById(
            "subcategory-title"
        );

    if (
        subcategoryTitle &&
        currentOpenSubcategory
    ) {

        subcategoryTitle.textContent =
            getSubcategoryTitle(
                currentOpenSubcategory
            );

    }

    if (
        currentOpenSubcategory
    ) {

        loadSubcategoryGallery(
            currentOpenSubcategory
        );

    }

    const illustrations =
        document.getElementById(
            "illustrations"
        );

    if (
        illustrations &&
        window.getComputedStyle(
            illustrations
        ).display !== "none"
    ) {

        loadIllustrationsGallery();

    }

}


/* =========================================================
   LANGUAGE SELECTOR
========================================================= */

function setupLanguageSelector() {

    const selector =
        document.getElementById(
            "languageSelector"
        );

    if (!selector) {

        console.warn(
            "SXLLEN: languageSelector non trovato."
        );

        return;

    }

    const savedLanguage =
        getSavedLanguage();

    applyTranslations(
        savedLanguage
    );

    selector.addEventListener(
        "change",
        function (event) {

            applyTranslations(
                event.target.value
            );

        }
    );

}


/* =========================================================
   CONTACT BUTTON
========================================================= */

function setupContactButton() {

    const contactButton =
        document.querySelector(
            "#contact .button"
        );

    if (!contactButton) {

        return;

    }

    contactButton.href =
        "https://mail.google.com/mail/?view=cm&fs=1&to=sabrinasrn29@gmail.com";

    contactButton.target =
        "_blank";

    contactButton.rel =
        "noopener noreferrer";

}


/* =========================================================
   PORTFOLIO VIEW MANAGEMENT
========================================================= */

function hideAllPortfolioViews() {

    const views =
        document.querySelectorAll(
            ".portfolio-view"
        );

    views.forEach(view => {

        view.style.display =
            "none";

    });

}


/* =========================================================
   OPEN CATEGORY
========================================================= */

function openCategory(categoryId) {

    const categories =
        document.getElementById(
            "portfolioCategories"
        );

    const selectedCategory =
        document.getElementById(
            categoryId
        );

    if (
        !categories ||
        !selectedCategory
    ) {

        return;

    }

    currentCategory =
        categoryId;

    currentOpenSubcategory =
        null;

    categories.style.display =
        "none";

    hideAllPortfolioViews();

    selectedCategory.style.display =
        "block";

    selectedCategory.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   BACK TO PORTFOLIO
========================================================= */

function backToPortfolio() {

    currentCategory =
        null;

    currentOpenSubcategory =
        null;

    hideAllPortfolioViews();

    const categories =
        document.getElementById(
            "portfolioCategories"
        );

    if (!categories) {

        return;

    }

    categories.style.display =
        "grid";

    categories.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   OPEN SUBCATEGORY
========================================================= */

function openSubcategory(subcategoryId) {

    const gallery =
        document.getElementById(
            "subcategory-gallery"
        );

    const title =
        document.getElementById(
            "subcategory-title"
        );

    if (
        !gallery ||
        !title
    ) {

        return;

    }

    currentOpenSubcategory =
        subcategoryId;

    hideAllPortfolioViews();

    gallery.style.display =
        "block";

    title.textContent =
        getSubcategoryTitle(
            subcategoryId
        );

    loadSubcategoryGallery(
        subcategoryId
    );

    gallery.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   BACK TO CATEGORY
========================================================= */

function backToCategory() {

    currentOpenSubcategory =
        null;

    if (!currentCategory) {

        backToPortfolio();

        return;

    }

    hideAllPortfolioViews();

    const category =
        document.getElementById(
            currentCategory
        );

    if (category) {

        category.style.display =
            "block";

        category.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } else {

        backToPortfolio();

    }

}


/* =========================================================
   SUBCATEGORY TITLES
========================================================= */

function getSubcategoryTitle(
    subcategoryId
) {

    const language =
        translations[currentLanguage];

    if (!language) {

        return subcategoryId;

    }

    const titleMap = {

        "characters":
            "subcategoryCharacters",

        "creature-design":
            "subcategoryCreatures",

        "boss-design":
            "subcategoryBosses",

        "weapons":
            "subcategoryWeapons",

        "items-and-collectibles":
            "subcategoryItems",

        "set-dressing":
            "subcategorySetDressing",

        "interiors":
            "subcategoryInteriors",

        "exteriors":
            "subcategoryExteriors"

    };

    const key =
        titleMap[subcategoryId];

    if (
        key &&
        Object.prototype.hasOwnProperty.call(
            language,
            key
        )
    ) {

        return language[key];

    }

    return subcategoryId;

}


/* =========================================================
   GALLERY DATA
   =========================================================
   QUI AGGIUNGIAMO I FILE DELLE SOTTOCARTELLE.

   Le immagini vengono caricate automaticamente
   quando apri la relativa sottocartella.
========================================================= */

const galleryData = {

    characters: [],

    "creature-design": [],

    "boss-design": [],

    weapons: [
        "prop-design/weapons/weapon01.JPG",
        "prop-design/weapons/weapon02.JPG"
    ],

    "items-and-collectibles": [],

    "set-dressing": [
        "prop-design/set-dressing/set-dressing01.JPG",
        "prop-design/set-dressing/set-dressing02.JPG"
    ],

    interiors: [],

    exteriors: [],

    illustrations: [],

    "3d-models": []

};


/* =========================================================
   CREATE GALLERY IMAGE
========================================================= */

function createGalleryImage(
    imagePath,
    altText
) {

    const wrapper =
        document.createElement("div");

    wrapper.className =
        "gallery-item";


    const image =
        document.createElement("img");

    image.src =
        imagePath;

    image.alt =
        altText;

    image.loading =
        "lazy";

    image.style.cursor =
        "zoom-in";


    image.addEventListener(
        "click",
        function () {

            openLightbox(
                imagePath,
                altText
            );

        }
    );


    wrapper.appendChild(
        image
    );

    return wrapper;

}


/* =========================================================
   LOAD SUBCATEGORY GALLERY
========================================================= */

function loadSubcategoryGallery(
    subcategoryId
) {

    const container =
        document.getElementById(
            "subcategory-images"
        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    const images =
        galleryData[subcategoryId] || [];


    if (images.length === 0) {

        const message =
            document.createElement("p");

        message.className =
            "gallery-empty";

        message.textContent =
            getGalleryEmptyMessage();

        container.appendChild(
            message
        );

        return;

    }


    images.forEach(
        (imagePath, index) => {

            const image =
                createGalleryImage(
                    imagePath,
                    `${getSubcategoryTitle(
                        subcategoryId
                    )} ${index + 1}`
                );

            container.appendChild(
                image
            );

        }
    );

}


/* =========================================================
   LOAD ILLUSTRATIONS GALLERY
========================================================= */

function loadIllustrationsGallery() {

    const container =
        document.getElementById(
            "gallery-illustrations"
        );

    if (!container) {

        return;

    }

    container.innerHTML = "";

    const images =
        galleryData.illustrations || [];


    if (images.length === 0) {

        const message =
            document.createElement("p");

        message.className =
            "gallery-empty";

        message.textContent =
            getGalleryEmptyMessage();

        container.appendChild(
            message
        );

        return;

    }


    images.forEach(
        (imagePath, index) => {

            const image =
                createGalleryImage(
                    imagePath,
                    `${translations[
                        currentLanguage
                    ].categoryIllustrations} ${index + 1}`
                );

            container.appendChild(
                image
            );

        }
    );

}


/* =========================================================
   EMPTY GALLERY MESSAGE
========================================================= */

function getGalleryEmptyMessage() {

    const messages = {

        it:
            "I lavori verranno aggiunti presto.",

        en:
            "Works will be added soon.",

        es:
            "Los trabajos se añadirán próximamente.",

        fr:
            "Les travaux seront ajoutés prochainement.",

        de:
            "Die Arbeiten werden bald hinzugefügt.",

        ja:
            "作品は近日中に追加されます。"

    };

    return (
        messages[currentLanguage] ||
        messages.it
    );

}


/* =========================================================
   OPEN ILLUSTRATIONS
========================================================= */

function openIllustrations() {

    const categories =
        document.getElementById(
            "portfolioCategories"
        );

    const illustrations =
        document.getElementById(
            "illustrations"
        );

    if (
        !categories ||
        !illustrations
    ) {

        return;

    }

    currentCategory =
        "illustrations";

    currentOpenSubcategory =
        null;

    categories.style.display =
        "none";

    hideAllPortfolioViews();

    illustrations.style.display =
        "block";

    loadIllustrationsGallery();

    illustrations.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   LIGHTBOX
========================================================= */

function createLightbox() {

    if (
        document.getElementById(
            "sxllen-lightbox"
        )
    ) {

        return;

    }


    const lightbox =
        document.createElement("div");

    lightbox.id =
        "sxllen-lightbox";


    lightbox.innerHTML = `
        <button
            id="sxllen-lightbox-close"
            type="button"
            aria-label="Close"
        >×</button>

        <img
            id="sxllen-lightbox-image"
            src=""
            alt=""
        >
    `;


    document.body.appendChild(
        lightbox
    );


    lightbox.addEventListener(
        "click",
        function (event) {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );


    const closeButton =
        document.getElementById(
            "sxllen-lightbox-close"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }

}


function openLightbox(
    imagePath,
    altText
) {

    createLightbox();


    const lightbox =
        document.getElementById(
            "sxllen-lightbox"
        );

    const image =
        document.getElementById(
            "sxllen-lightbox-image"
        );


    if (
        !lightbox ||
        !image
    ) {

        return;

    }


    image.src =
        imagePath;

    image.alt =
        altText || "";


    lightbox.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


function closeLightbox() {

    const lightbox =
        document.getElementById(
            "sxllen-lightbox"
        );


    if (!lightbox) {

        return;

    }


    lightbox.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   COMMISSION TERMS
========================================================= */

function setupCommissionTerms() {

    const terms =
        document.querySelector(
            ".commission-terms"
        );

    if (!terms) {

        return;

    }

    terms.addEventListener(
        "toggle",
        function () {

            if (terms.open) {

                terms.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest"
                });

            }

        }
    );

}


/* =========================================================
   INITIAL PORTFOLIO STATE
========================================================= */

function setupPortfolio() {

    hideAllPortfolioViews();

    const categories =
        document.getElementById(
            "portfolioCategories"
        );

    if (categories) {

        categories.style.display =
            "grid";

    }

}


/* =========================================================
   ILLUSTRATIONS CATEGORY
========================================================= */

function setupIllustrationsCategory() {

    const illustrationCategory =
        document.querySelector(
            '.portfolio-category[onclick="openCategory(\'illustrations\')"]'
        );

    if (!illustrationCategory) {

        return;

    }

    illustrationCategory.onclick =
        function (event) {

            event.preventDefault();

            openIllustrations();

        };

}


/* =========================================================
   ESC KEY
========================================================= */

function setupEscapeKey() {

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                const terms =
                    document.querySelector(
                        ".commission-terms"
                    );

                if (
                    terms &&
                    terms.open
                ) {

                    terms.open =
                        false;

                }


                closeLightbox();

            }

        }
    );

}


/* =========================================================
   EXPOSE FUNCTIONS TO HTML
========================================================= */

window.openCategory =
    openCategory;

window.backToPortfolio =
    backToPortfolio;

window.openSubcategory =
    openSubcategory;

window.backToCategory =
    backToCategory;

window.openIllustrations =
    openIllustrations;


/* =========================================================
   MAIN INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "SXLLEN: script.js caricato correttamente."
        );

        setupLanguageSelector();

        setupContactButton();

        setupPortfolio();

        setupIllustrationsCategory();

        setupCommissionTerms();

        setupEscapeKey();

    }
);
