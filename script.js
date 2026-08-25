<!DOCTYPE html>
<html lang="it">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>SXLLEN — Concept Artist & Illustrator</title>

    <link rel="stylesheet" href="style.css">

</head>


<body>


<header>

    <nav>

        <a href="#home" class="logo">
            SXLLEN
        </a>


        <div class="menu">

            <a href="#portfolio" data-i18n="navPortfolio">
                Portfolio
            </a>

            <a href="#about" data-i18n="navAbout">
                About
            </a>

            <a href="#commissions" data-i18n="navCommissions">
                Listino
            </a>

            <a href="#contact" data-i18n="navContact">
                Contatti
            </a>

        </div>


        <!-- LANGUAGE SELECTOR -->

        <select id="languageSelector" aria-label="Language">

            <option value="it">IT</option>

            <option value="en">EN</option>

            <option value="es">ES</option>

            <option value="fr">FR</option>

            <option value="de">DE</option>

            <option value="ja">JP</option>

        </select>


    </nav>

</header>



<main>


    <!-- =====================================================
         HOME
    ====================================================== -->

    <section id="home" class="hero">


        <div class="hero-text">


            <p
                class="small-title"
                data-i18n="heroSmall"
            >
                CONCEPT ARTIST & ILLUSTRATOR
            </p>


            <h1 data-i18n="heroTitle">
                SXLLEN
            </h1>


            <p data-i18n="heroDescription">

                Specializzata in character, environment e prop
                design per progetti fantasy e dark fantasy,
                con un focus su illustrazione e 3D.

            </p>


            <a
                href="#portfolio"
                class="button"
                data-i18n="heroButton"
            >
                Guarda il portfolio
            </a>


        </div>


    </section>



    <!-- =====================================================
         PORTFOLIO
    ====================================================== -->

    <section id="portfolio" class="section">


        <p
            class="small-title"
            data-i18n="portfolioSmall"
        >
            SELECTED WORKS
        </p>


        <h2 data-i18n="portfolioTitle">
            Portfolio
        </h2>



        <!-- =================================================
             MAIN PORTFOLIO CATEGORIES
        ================================================== -->

        <div
            id="portfolioCategories"
            class="portfolio-categories"
        >


            <!-- CHARACTER DESIGN -->

            <div
                class="portfolio-category"
                onclick="openCategory('character-design')"
            >

                <div class="category-image">

                    <img
                        src="character-cover.JPG"
                        alt="Character Design"
                    >

                </div>


                <h3 data-i18n="categoryCharacter">
                    Character Design
                </h3>

            </div>



            <!-- PROP DESIGN -->

            <div
                class="portfolio-category"
                onclick="openCategory('prop-design')"
            >

                <div class="category-image">

                    <img
                        src="prop-cover.JPG"
                        alt="Prop Design"
                    >

                </div>


                <h3 data-i18n="categoryProps">
                    Prop Design
                </h3>

            </div>



            <!-- ENVIRONMENT -->

            <div
                class="portfolio-category"
                onclick="openCategory('environment')"
            >

                <div class="category-image">

                    <img
                        src="environment-cover.JPG"
                        alt="Environment"
                    >

                </div>


                <h3 data-i18n="categoryEnvironment">
                    Environment
                </h3>

            </div>



            <!-- ILLUSTRAZIONI -->

            <div
                class="portfolio-category"
                onclick="openCategory('illustrations')"
            >

                <div class="category-image">

                    <img
                        src="illustration-cover.JPG"
                        alt="Illustrazioni"
                    >

                </div>


                <h3 data-i18n="categoryIllustrations">
                    Illustrazioni
                </h3>

            </div>


        </div>



        <!-- =================================================
             CHARACTER DESIGN
        ================================================== -->

        <div
            id="character-design"
            class="portfolio-view"
            style="display: none;"
        >


            <button
                class="back-button"
                onclick="backToPortfolio()"
                data-i18n="backPortfolio"
            >
                ← Back to Portfolio
            </button>


            <h2 data-i18n="categoryCharacter">
                Character Design
            </h2>


            <div class="subcategory-list">


                <button
                    onclick="openSubcategory('characters')"
                    data-i18n="subcategoryCharacters"
                >
                    Characters
                </button>


                <button
                    onclick="openSubcategory('creature-design')"
                    data-i18n="subcategoryCreatures"
                >
                    Creature Design
                </button>


                <button
                    onclick="openSubcategory('boss-design')"
                    data-i18n="subcategoryBosses"
                >
                    Boss Design
                </button>


            </div>


        </div>



        <!-- =================================================
             PROP DESIGN
        ================================================== -->

        <div
            id="prop-design"
            class="portfolio-view"
            style="display: none;"
        >


            <button
                class="back-button"
                onclick="backToPortfolio()"
                data-i18n="backPortfolio"
            >
                ← Back to Portfolio
            </button>


            <h2 data-i18n="categoryProps">
                Prop Design
            </h2>


            <div class="subcategory-list">


                <button
                    onclick="openSubcategory('weapons')"
                    data-i18n="subcategoryWeapons"
                >
                    Weapons
                </button>


                <button
                    onclick="openSubcategory('items-and-collectibles')"
                    data-i18n="subcategoryItems"
                >
                    Items & Collectibles
                </button>


                <button
                    onclick="openSubcategory('set-dressing')"
                    data-i18n="subcategorySetDressing"
                >
                    Set Dressing
                </button>


            </div>


        </div>



        <!-- =================================================
             ENVIRONMENT
        ================================================== -->

        <div
            id="environment"
            class="portfolio-view"
            style="display: none;"
        >


            <button
                class="back-button"
                onclick="backToPortfolio()"
                data-i18n="backPortfolio"
            >
                ← Back to Portfolio
            </button>


            <h2 data-i18n="categoryEnvironment">
                Environment
            </h2>


            <div class="subcategory-list">


                <button
                    onclick="openSubcategory('interiors')"
                    data-i18n="subcategoryInteriors"
                >
                    Interiors
                </button>


                <button
                    onclick="openSubcategory('exteriors')"
                    data-i18n="subcategoryExteriors"
                >
                    Exteriors
                </button>


            </div>


        </div>



        <!-- =================================================
             ILLUSTRAZIONI
             NESSUNA SOTTOCATEGORIA
        ================================================== -->

        <div
            id="illustrations"
            class="portfolio-view"
            style="display: none;"
        >


            <button
                class="back-button"
                onclick="backToPortfolio()"
                data-i18n="backPortfolio"
            >
                ← Back to Portfolio
            </button>


            <h2 data-i18n="categoryIllustrations">
                Illustrazioni
            </h2>


            <div
                id="gallery-illustrations"
                class="gallery"
            >

                <!-- Images will be added here later -->

            </div>


        </div>



        <!-- =================================================
             3D MODELS
             TEMPORANEAMENTE NON VISIBILE
             MANTENUTO PER IL FUTURO
        ================================================== -->

        <div
            id="3d-models"
            class="portfolio-view"
            style="display: none;"
        >


            <button
                class="back-button"
                onclick="backToPortfolio()"
                data-i18n="backPortfolio"
            >
                ← Back to Portfolio
            </button>


            <h2 data-i18n="category3D">
                3D Models
            </h2>


            <div
                id="gallery-3d-models"
                class="gallery"
            >

                <!-- Images will be added here later -->

            </div>


        </div>



        <!-- =================================================
             SUBCATEGORY GALLERY
        ================================================== -->

        <div
            id="subcategory-gallery"
            class="portfolio-view"
            style="display: none;"
        >


            <button
                class="back-button"
                onclick="backToCategory()"
                data-i18n="backCategory"
            >
                ← Back
            </button>


            <h2 id="subcategory-title"></h2>


            <div
                id="subcategory-images"
                class="gallery"
            >

                <!-- Images will be added here later -->

            </div>


        </div>


    </section>



    <!-- =====================================================
         ABOUT
    ====================================================== -->

    <section
        id="about"
        class="section about"
    >


        <div>


            <p
                class="small-title"
                data-i18n="aboutSmall"
            >
                ABOUT ME
            </p>


            <h2 data-i18n="aboutTitle">
                Chi sono
            </h2>


            <p data-i18n="aboutText1">

                Ciao! Sono SXLLEN, concept artist e illustratrice.
                Mi occupo di character design, prop design,
                environment design e illustrazione.

            </p>


            <p data-i18n="aboutText2">

                Qui puoi inserire una breve descrizione della tua
                formazione, delle tue passioni e del tipo di
                progetti a cui ti piace lavorare.

            </p>


        </div>


    </section>



    <!-- =====================================================
         COMMISSIONS
    ====================================================== -->

    <section
        id="commissions"
        class="section"
    >


        <p
            class="small-title"
            data-i18n="commissionsSmall"
        >
            COMMISSIONS
        </p>


        <h2 data-i18n="commissionsTitle">
            Listino
        </h2>


        <div class="prices">


            <!-- CHARACTER DESIGN -->

            <div class="price-card">


                <h3 data-i18n="price1Title">
                    Character Design
                </h3>


                <p class="price">
                    € XX
                </p>


                <p data-i18n="price1Description">

                    Character design completo,
                    sketch iniziale e rendering finale.

                </p>


            </div>



            <!-- PORTRAIT -->

            <div class="price-card">


                <h3 data-i18n="price2Title">
                    Portrait
                </h3>


                <p class="price">
                    € XX
                </p>


                <p data-i18n="price2Description">

                    Ritratto digitale personalizzato
                    a mezzo busto.

                </p>


            </div>



            <!-- ILLUSTRATION -->

            <div class="price-card">


                <h3 data-i18n="price3Title">
                    Illustration
                </h3>


                <p class="price">
                    € XX
                </p>


                <p data-i18n="price3Description">

                    Illustrazione completa con
                    composizione e rendering.

                </p>


            </div>


        </div>


    </section>



    <!-- =====================================================
         CONTACT
    ====================================================== -->

    <section
        id="contact"
        class="section contact"
    >


        <p
            class="small-title"
            data-i18n="contactSmall"
        >
            GET IN TOUCH
        </p>


        <h2 data-i18n="contactTitle">
            Parliamo del tuo progetto
        </h2>


        <p data-i18n="contactDescription">

            Hai un progetto o vuoi commissionarmi
            un'illustrazione? Scrivimi!

        </p>


        <a
            href="mailto:sabrinasrn29@gmail.com"
            class="button"
            data-i18n="contactButton"
        >
            Contattami
        </a>


    </section>


</main>



<!-- =========================================================
     FOOTER
========================================================= -->

<footer>

    <p data-i18n="footer">
        © 2026 SXLLEN — Concept Artist & Illustrator
    </p>

</footer>



<script src="script.js"></script>


</body>

</html>
