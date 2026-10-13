# Site CV de Frenet Alonmadon

Site statique (HTML, CSS, JS), sans dépendance externe.

## Publier sur GitHub Pages
1. Crée un dépôt public nommé `alonmadonfrenet.github.io`.
2. Envoie-y TOUS les fichiers de ce dossier, sans sous-dossier (`index.html` et les images à la racine).
3. Dans Settings > Pages : Source = « Deploy from a branch », branche `main`, dossier `/ (root)`.
4. Ton site sera en ligne sur `https://alonmadonfrenet.github.io` après une à deux minutes.

## Mettre à jour
- Modifie `index.html` (textes) ; remplace `CV-Frenet-Alonmadon.pdf` pour changer le CV téléchargeable.
- Domaine personnalisé : Settings > Pages > Custom domain.

## Activer le formulaire de contact (Formspree)
1. Crée un compte gratuit sur formspree.io, puis « New form » : indique ton e-mail (il reste caché dans le site).
2. Formspree te donne une adresse du type `https://formspree.io/f/abcd1234`.
3. Dans `index.html`, remplace `https://formspree.io/f/VOTRE_ID` par cette adresse (une seule occurrence : `data-endpoint`).
4. Envoie `index.html` sur GitHub (Add file > Upload files > Commit). Le premier message de test doit être confirmé par e-mail depuis Formspree.
