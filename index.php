<?php header("Content-Type: text/html");?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--Following 3 meta tags avoid caching the page on the clients browser
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    -->
    
    <link rel="stylesheet" href="style/fixed.css">
    <link rel="stylesheet" href="style/styleScrollBar.css">
    <link rel="stylesheet" href="style/FlexGrid.css">
    <link rel="stylesheet" href="style/style.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <title>Document</title>
</head>
<body>
    <nav class="py-3">
        <a href="/" class="navbar-brand">
            <img src="./media/images/SamsLogoSmall.png" alt="">
        </a>
        <ul class="navigation">
            <li class="nav__item">
               <a href="" data-scroll-to-section=#unternehmen>Unternehmen</a>
            </li>
            <li class="nav__item">
                <a href="" data-scroll-to-section="#leistungen">Leistungen</a>
            </li>
            <li class="nav__item">
                <a href="" data-scroll-to-section="#kontakt">Kontakt</a>
            </li>
        </ul>
        <div class="navbar-button-container">
            <button class="navbarToggler" data-toggle-navbar>
                <span class="navbarTogglerIcon"></span>
            </button>
        </div>
    </nav>
    <header class="fullScreenContainer">
        <div class="fullScreenImage slider" data-toggle-filter>
            <div class="slide active">
                <video src="./media/videos/lkws-720.mp4" muted loop playsinline></video>
                <h1 class="introContent text__center">Sams Trade GmbH<br><small>Ihr zuverlässiger Partner für Produkte verschiedener Art</small></h1>
            </div>
            <div class="slide">
                <video src="./media/videos/flugzeug-720.mp4" muted loop playsinline></video>
                <h1 class="introContent text__center"><small>Expressmöglichkeit per Luftfracht</small></h1>
            </div>
            <div class="slide">
                <video src="./media/videos/schiffs-fracht-720.mp4" muted loop playsinline></video>
                <h1 class="introContent text__center"><small>Seefracht Disponierung ohne Limit</small></h1>
            </div>
            <div class="slide">
                <video src="./media/videos/packetdienst-720.mp4" muted loop playsinline></video>
                <h1 class="introContent text__center"><small>Zuverlässiger und versicherter Versand</small></h1>
            </div>
        </div>
        <!-- By making the fullScreenGrid a nextSibling to fullScreenImage the socialItem-icons are clickable and hoverable -->
        <div class="fullScreenGrid">
            <div class="socialItems" data-toggle-Elem-on-open-Nav>
                <span class="verticalLine"></span>
                <a href="https://www.linkedin.com/company/bludaupartners-executive-consultants-gmbh/" target="_blank" rel="noopener" title="BludauPartners | LinkedIn">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/BludauPartners/" target="_blank" rel="noopener" title="BludauPartners | Facebook">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/bludaupartners/" target="_blank" rel="noopener" title="BludauPartners | Instagram">
                    <i class="fab fa-instagram"></i>
                </a>
                <span class="verticalLine"></span>
            </div>
            <div class="mainContent" data-toggle-Elem-on-open-Nav>
                
            </div>
            <div class="stripes" data-toggle-Elem-on-open-Nav>
                <ul>
                    <li data-single-dot class="active"></li>
                    <li data-single-dot></li>
                    <li data-single-dot></li>
                    <li data-single-dot></li>
                </ul>
            </div>
        </div>
    </header>
    <?php include("include/partial_includes/mainTagStart.php") ?>
        <section class="row justify-content-center" id="unternehmen">
            <div class="col-12">
                <h2 class="text__center mb-5">Unternehmen</h2>
            </div>
            <div class="col-12">
                <p class="mb-3">Die Sams Trade GmbH...</p>
                <p>...ist spezialisiert auf den Import hochwertiger Waren aus Asien. Unsere Produkte durchlaufen strenge Qualitätskontrollen und Prüfungen, um höchste Standards zu gewährleisten. Wir legen Wert auf Vertrauen im Handel, pflegen enge Beziehungen zu Lieferanten und bieten die besten Produkte zu wettbewerbsfähigen Preisen an</p>
            </div>
            <?php include("include/colDivider.php"); ?>
            <div class="col-12">
                <h2 class="mb-5">Wofür wir stehen </h2>
            </div>
            <div class="col-12">
                <ul>
                    <li><b>Erfolgreicher und professioneller Vertrieb</b> der Produkte</li>
                    <li>Umfassende <b>Kundenbeziehungen</b></li>
                    <li><b>Kompetenz im Umgang</b> mit den Bräuchen der <b>asiatischen Wirtschaft</b></li>
                    <li><b>Mehrsprachiges, qualifiziertes</b> Personal</li>
                    <li>Häufige <b>Kundenbesuche</b></li>
                    <li>Fundierte <b>Branchenkenntnisse</b></li>
                    <li>Vorteile im Einkauf durch <b>Größe</b></li>
                    <li>Erfahrung in <b>Sprache und Kultur</b></li>
                </ul>
            </div>
        </section>
        <?php include("include/sectionDelimiter.php"); ?>
        <section class="row" id="leistungen">
            <div class="col-12">
                <h2 class="text__center mb-5">Unsere Leistungen im Überblick</h2>
            </div>
            <div class="col-12">
                <ul>
                    <li><b>Unverzügliche Lieferung</b> bei Kauf ab Lager</li>
                    <li>Zusammenarbeit bei <b>Produktentwicklung</b></li>
                    <li><b>Individuelle Anpassungen</b></li>
                    <li><b>Import/Export</b></li>
                    <li>Belieferung mit <b>Kleinstmengen und Übergrößen</b></li>
                    <li>Möglichkeit <b>von Vorbestellungen</b></li>
                </ul>
            </div>
        </section>
        <?php include("include/sectionDelimiter.php"); ?>
        <section class="row justify-content-center" id="kontakt">
            <div class="col-12">
                <h2 class="text__center mb-5">Kontakt</h2>
            </div>
            
            <div class="col-lg-4 mb-lg-9 mb-3 text__center"><span><i class="pr-2 fas fa-map-marker-alt"></i>Sulzbacher Straße 21, 65760 Eschborn</span></div>
            <div class="col-lg-4 mb-lg-9 mb-3 text__center"><a href="tel:+491756054646"><i class="pr-2 fas fa-phone-alt"></i>+491756054646</a></div>
            <div class="col-lg-4 mb-lg-9 mb-3 text__center"><a href="mailto:info@samstrade.de"><i class="pr-2 far fa-envelope"></i>info@samstrade.de</a></div>
            <?php include("include/colDivider.php"); ?>
            <div class="col-lg-8">
                <form action="" class="w__100">
                    <label for="name" class="w__100 mb-2">Ihr Name *</label>
                    <input type="text" id="name" name="name" class="w__100 p-2" required>
                    <label for="company" class="w__100 mb-2">Ihre Firma (optional)</label>
                    <input type="text" id="company" name="company" class="w__100 p-2">
                    <label for="email" class="w__100 mb-2">Ihre E-Mail *</label>
                    <input type="email" id="email" name="email" class="w__100 p-2" required>
                    <label for="phoneNumber" class="w__100 mb-2">Ihre Mobilnummer (optional)</label>
                    <input type="number" id="phoneNumber" name="phoneNumber" class="w__100 p-2">
                    <label for="message" class="w__100 mb-2">Ihre Nachricht *</label>
                    <textarea name="message" id="message" rows="5" class="w__100 p-2" required></textarea>
                    <button type="submit" class="sams__button">Senden</button>
                </form>
            </div>
        </section>
        <?php include("include/sectionDelimiter.php"); ?>
    <?php include("include/partial_includes/mainTagEnd.php") ?>
    <footer class="px-5 pb-5 text__center">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <a href="#datenschutz" data-open-modal>Datenschutz</a>
            </div>
            <div class="col-md-4">
                <a href="#impressum" data-open-modal>Impressum</a>
            </div>
        </div>
    </footer>
    <div class="modal-container blury__background" id="datenschutz">
        <div class="modal">
            <div class="modal-header">
                <button id="close" data-close-modal>&#x2715;</button>
            </div>
            <div class="modal-body">
                <h2 class="mb-5">Datenschutz</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
    <div class="modal-container blury__background" id="impressum">
        <div class="modal">
            <div class="modal-header">
                <button id="close p-5" data-close-modal>&#x2715;</button>
            </div>
            <div class="modal-body">
                <h2 class="mb-5">Impressum</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
    <script src="js/script.js"></script>
</body>
</html>