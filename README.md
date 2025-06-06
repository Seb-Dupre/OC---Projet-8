1er projet react :
    Objectifs :
        Apprendre à utiliser react et son utilité
        Installer un router et creer des routes pour avoir une app en une seule page (spa) 
        Apprendre à reconnaitre qu'elle partie du site peuvent etre fait en composant réutilisable

    utilité principale de react : créer des composant qui seront réutilisable sur d'autres pages/routes.

    router utilisé : React-Router, les routes crées sont :
        Home : page par defaut, elle affiche les cartes des different logement, et permet l'acces a la route du logement de la carte cliqué. Elle est aussi accessible via la bar de navigation du header, en cliquant sur le logo ou sur acceuil.
        Logement : affiche les information sur le logement : carousel des photo du logement, sont propriétaire, le rating, les équipements présents, et une descriptions du logement.
        About : affiche les grands mots du site et un descripton de ceux ci : "fiabilité" "respect" "service" "securité", la route est accessible via la bar de navigation du   header.
        Erreur404 : dans le cas ou la page n'est pas trouvé, l'application renvois l'utilisateur vers la page d'erreur 404 qui indique a l'utilisateur que la page n'existe pas, et lui permet de revenir sur la page d'acceuil.


    Les different composant créer :

        le Carousel : permet à l'utilisateur de naviguer entre plusieurs images, une animation de transition ce produit au changement d'images.
                      il reçoit deux props : "pictures" un tableau d'URLs d'images, qui seront affuché et "animationDuration" qui est la durée de l'animation au changement de l'image.
                      le carousel boucle, c'est à dire que si l'image est la derniere et que l'utilisateur veut passé a l'image suivante, le carousel réafficheras la premiere images, de meme si il s'agit de la premiere et que l'utilisateur veut aller à click sur la fleche de gauche, cela afficheras la dernieres image. 
                      l'animation se fait dans la direction de la fleche cliqué.
                      utilisé sur la route logement

        L'accordeon : un bouton permentant d'afficher ou masqué un contenu attribué au bouton, si le contenu est un tableau alors il affichera sous un liste <ul>. Sinon ce     
                      sera un paragraphe <p>.
                      l'accordeon utilise un state nommé "isOpen" qui change de faux a vrai au click du bouton, par defaut le state "isOpen" est faux, ce qui cache le contenue.
                      utilisé sur les routes logement et about.

        Host :        Permet d'afficher la photo et le nom de l'host selon l'id du logement, le nom est séparé en deux a l'aide de la methode split.
                      Utilisé sur la route logement.

        Logement_location: Affiche le titre et la location du logement.
                       Utilisé sur la route logement.

        Rating :      affiche la note du logement sous forme d'etoiles, cherche "rating" du logement en cours dans logement.json, afin d'y trouver une note sur 5, cette note ci afficheras des etoiles pleines, et des etoiles vide seront afficher pour les point manquante sur la note (si le rating est 3, 3 etoiles pleine et 2 etoiles vide) 
        Utilisé sur la route logement.

        Tags :         affiche les tags dynamiquement grace à un .map().
                       Utilisé sur la route logement.

        Logement_Card : Affiche les differente carte des logements grace à un .map(), chaque carte est un lien vers la route logement, tout en lui fournissant un id specifique, afin que la route logement affiche les informations specifique a la carte cliqué.
        Utilisé sur la route acceuil

        Image banner : affiche un banniere, qui est composé de 4 props : "bannerSrc" la source de l'image qui sera affiché, "text", un contenu texte qui sera affiché sur l'image, "boxshadow" l'ombre derriere l'image, "filter" un filtre qui passe sur l'image.