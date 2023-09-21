# MERGE with console show conflicts

I tried to resolve conflicts but i show my error messages inside README.MD 
from 
the readme.md from [our exercices]([https://github.com/marcn97](https://github.com/matthieuGravy/groupeMarkDown/tree/main)).







## terminal
 2023-09-21 10:22:32 ⌚  meyKouy in ~
○ → cd groupeMarkDown

 2023-09-21 10:22:41 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 ✗| → ls
makrdown.md  README.md

 2023-09-21 10:22:42 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 ✗| → git add .

 2023-09-21 10:22:45 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 ✗| → git commit -m "name"
[alpha 83ca999] name
 1 file changed, 1 insertion(+)

 2023-09-21 10:22:52 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git push origin alpha
Énumération des objets: 5, fait.
Décompte des objets: 100% (5/5), fait.
Compression par delta en utilisant jusqu'à 12 fils d'exécution
Compression des objets: 100% (2/2), fait.
Écriture des objets: 100% (3/3), 298 octets | 298.00 Kio/s, fait.
Total 3 (delta 0), réutilisés 0 (delta 0), réutilisés du pack 0
To github.com:matthieuGravy/groupeMarkDown.git
   fab2de4..83ca999  alpha -> alpha

 2023-09-21 10:22:59 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git fetch
remote: Enumerating objects: 26, done.
remote: Counting objects: 100% (26/26), done.
remote: Compressing objects: 100% (21/21), done.
remote: Total 24 (delta 4), reused 23 (delta 3), pack-reused 0
Dépaquetage des objets: 100% (24/24), 2.46 Kio | 139.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
 * [nouvelle branche] louis      -> origin/louis
 * [nouvelle branche] marc       -> origin/marc

 2023-09-21 10:31:41 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git checkout main
Basculement sur la branche 'main'
Votre branche est à jour avec 'origin/main'.

 2023-09-21 10:31:53 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git fetch
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Dépaquetage des objets: 100% (1/1), 647 octets | 647.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   fab2de4..0471738  main       -> origin/main

 2023-09-21 10:32:18 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓2 ✓| → git checkout alpha
Basculement sur la branche 'alpha'

 2023-09-21 10:32:31 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git checkout main
Basculement sur la branche 'main'
Votre branche est en retard sur 'origin/main' de 2 commits, et peut être mise à jour en avance rapide.
  (utilisez "git pull" pour mettre à jour votre branche locale)

 2023-09-21 10:33:18 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓2 ✓| → git pull
Mise à jour fab2de4..0471738
Fast-forward
 README.md | 6 ++++++
 1 file changed, 6 insertions(+)

 2023-09-21 10:33:26 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git checkout main
Déjà sur 'main'
Votre branche est à jour avec 'origin/main'.

 2023-09-21 10:34:11 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git merge alpha
Fusion automatique de README.md
CONFLIT (contenu) : Conflit de fusion dans README.md
La fusion automatique a échoué ; réglez les conflits et validez le résultat.

 2023-09-21 10:34:19 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → get fetch
La commande « get » n'a pas été trouvée, mais il y en a 18 similaires.

 2023-09-21 10:34:30 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git fetch

 2023-09-21 10:34:35 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git merge alpha
error: Impossible de fusionner car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:34:41 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git fetch

 2023-09-21 10:34:52 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git pull
error: Impossible de tirer car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:35:53 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git push origin alpha
Everything up-to-date

 2023-09-21 10:37:33 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git merge alpha
error: Impossible de fusionner car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:38:04 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git checkout alpha
README.md: needs merge
error: vous devez d'abord résoudre votre index courant

 2023-09-21 10:38:15 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git fetch
remote: Enumerating objects: 8, done.
remote: Counting objects: 100% (8/8), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Dépaquetage des objets: 100% (4/4), 1.46 Kio | 1.46 Mio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   0471738..2540192  main       -> origin/main

 2023-09-21 10:38:31 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git checkout alpha
README.md: needs merge
error: vous devez d'abord résoudre votre index courant

 2023-09-21 10:38:41 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git pull alpha
error: Impossible de tirer car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:38:50 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git pull
error: Impossible de tirer car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:38:53 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git merge 
error: Impossible de fusionner car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:39:14 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git status
Sur la branche main
Votre branche est en retard sur 'origin/main' de 9 commits, et peut être mise à jour en avance rapide.
  (utilisez "git pull" pour mettre à jour votre branche locale)

Vous avez des chemins non fusionnés.
  (réglez les conflits puis lancez "git commit")
  (utilisez "git merge --abort" pour annuler la fusion)

Chemins non fusionnés :
  (utilisez "git add <fichier>..." pour marquer comme résolu)
	modifié des deux côtés :  README.md

aucune modification n'a été ajoutée à la validation (utilisez "git add" ou "git commit -a")

 2023-09-21 10:39:26 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git pull 
error: Impossible de tirer car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:39:44 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git pull main
error: Impossible de tirer car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:39:52 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git pull alpha
error: Impossible de tirer car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:39:56 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 S:1 U:1 ✗| → git merge --abort

 2023-09-21 10:40:09 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓9 ✓| → git pull
Mise à jour 0471738..2540192
Fast-forward
 README.md | 12 +++++++++---
 1 file changed, 9 insertions(+), 3 deletions(-)

 2023-09-21 10:40:14 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git checkout alpha
Basculement sur la branche 'alpha'

 2023-09-21 10:40:46 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → vim README.md

 2023-09-21 10:40:59 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → vim README.md

 2023-09-21 10:41:17 ⌚  meyKouy in ~/groupeMarkDown
± |alpha U:1 ✗| → git add .

 2023-09-21 10:41:21 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 ✗| → git commit -m "correction"
[alpha 74393b8] correction
 1 file changed, 1 insertion(+), 1 deletion(-)

 2023-09-21 10:41:29 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git push origin alpha
Énumération des objets: 5, fait.
Décompte des objets: 100% (5/5), fait.
Compression par delta en utilisant jusqu'à 12 fils d'exécution
Compression des objets: 100% (2/2), fait.
Écriture des objets: 100% (3/3), 300 octets | 300.00 Kio/s, fait.
Total 3 (delta 0), réutilisés 0 (delta 0), réutilisés du pack 0
To github.com:matthieuGravy/groupeMarkDown.git
   83ca999..74393b8  alpha -> alpha

 2023-09-21 10:41:38 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git pull
Pas d'information de suivi distant pour la branche actuelle.
Veuillez spécifier une branche avec laquelle fusionner.
Référez-vous à git-pull(1) pour de plus amples détails.

    git pull <distant> <branche>

Si vous souhaitez indiquer l'information de suivi distant pour cette branche, vous pouvez le faire avec :

    git branch --set-upstream-to=origin/<branche> alpha


 2023-09-21 10:41:43 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git pull alpha
fatal: 'alpha' does not appear to be a git repository
fatal: Impossible de lire le dépôt distant.

Veuillez vérifier que vous avez les droits d'accès
et que le dépôt existe.

 2023-09-21 10:41:47 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git checkout main
Basculement sur la branche 'main'
Votre branche est à jour avec 'origin/main'.

 2023-09-21 10:42:01 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git checkout alpha
Basculement sur la branche 'alpha'

 2023-09-21 10:42:11 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git pull main
fatal: 'main' does not appear to be a git repository
fatal: Impossible de lire le dépôt distant.

Veuillez vérifier que vous avez les droits d'accès
et que le dépôt existe.

 2023-09-21 10:42:16 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git pull origin main
Depuis github.com:matthieuGravy/groupeMarkDown
 * branch            main       -> FETCH_HEAD
astuce: Vous avez des branches divergentes et vous devez spécifier comment
astuce: les réconcilier. Vous pouvez le faire en lançant une des
astuce: commandes suivantes avant votre prochain tirage :
astuce: 
astuce:   git config pull.rebase false  # fusion (stratégie par défaut)
astuce:   git config pull.rebase true   # rebasage
astuce:   git config pull.ff only       # avance rapide seulement
astuce: 
astuce: Vous pouvez remplacer "git config" par "git config --global" pour que
astuce: ce soit l'option par défaut pour tous les dépôts. Vous pouvez aussi
astuce: passer --rebase, --no-rebase ou --ff-only sur la ligne de commande pour
astuce: remplacer à l'invocation la valeur par défaut configurée.
fatal: Besoin de spécifier comment réconcilier des branches divergentes.

 2023-09-21 10:42:25 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git cherry-pick
usage : git cherry-pick [<options>] <commit ou apparenté>...
   ou : git cherry-pick <sous-commande>

    --quit                mettre fin au retour ou picorage
    --continue            reprendre le retour ou picorage
    --abort               annuler le retour ou picorage
    --skip                sauter le commit courant et continuer
    --cleanup <mode>      comment éliminer les espaces et les commentaires # du message
    -n, --no-commit       ne pas valider automatiquement
    -e, --edit            éditer le message de validation
    -s, --signoff         ajouter une ligne terminale Signed-off-by
    -m, --mainline <numéro-de-parent>
                          sélectionner le parent principal
    --rerere-autoupdate   met à jour l'index avec les résolutions de conflit réutilisées si possible
    --strategy <stratégie>
                          stratégie de fusion
    -X, --strategy-option <option>
                          option pour la stratégie de fusion
    -S, --gpg-sign[=<id-clé>]
                          signer la validation avec GPG
    -x                    ajouter le nom de validation
    --ff                  autoriser l'avance rapide
    --allow-empty         préserver les validations vides initialement
    --allow-empty-message
                          autoriser les validations avec des messages vides
    --keep-redundant-commits
                          garder les validations redondantes, vides


 2023-09-21 10:46:38 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git rebase -i
Pas d'information de suivi distant pour la branche actuelle.
Veuillez spécifier sur quelle branche vous souhaiter rebaser.
Voir git-rebase(1) pour plus de détails.

    git rebase '<branche>'

Si vous souhaitez indiquer l'information de suivi distant pour cette branche, vous pouvez le faire avec :

    git branch --set-upstream-to=<distant>/<branche> alpha


 2023-09-21 10:46:57 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git rebase alpha
La branche courante alpha est à jour.

 2023-09-21 10:47:04 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git pick alpha
git : 'pick' n'est pas une commande git. Voir 'git --help'.

La commande la plus ressemblante est
	pickaxe

 2023-09-21 10:47:44 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git --help
usage : git [--version] [--help] [-C <chemin>] [-c <nom>=<valeur>]
           [--exec-path[=<chemin>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<chemin>] [--work-tree=<chemin>] [--namespace=<nom>]
           [--super-prefix=<chemin>] [--config-env=<nom>=<variable-d-environnement>]
           <commande> [<args>]

Ci-dessous les commandes Git habituelles dans diverses situations :

démarrer une zone de travail (voir aussi : git help tutorial)
   clone     Cloner un dépôt dans un nouveau répertoire
   init      Créer un dépôt Git vide ou réinitialiser un existant

travailler sur la modification actuelle (voir aussi : git help revisions)
   add       Ajouter le contenu de fichiers dans l'index
   mv        Déplacer ou renommer un fichier, un répertoire, ou un lien symbolique
   restore   Restaurer les fichiers l'arbre de travail
   rm        Supprimer des fichiers de la copie de travail et de l'index

examiner l'historique et l'état (voir aussi : git help revisions)
   bisect    Trouver par recherche binaire la modification qui a introduit un bogue
   diff      Afficher les changements entre les validations, entre validation et copie de travail, etc
   grep      Afficher les lignes correspondant à un motif
   log       Afficher l'historique des validations
   show      Afficher différents types d'objets
   status    Afficher l'état de la copie de travail

agrandir, marquer et modifier votre historique
   branch    Lister, créer ou supprimer des branches
   commit    Enregistrer les modifications dans le dépôt
   merge     Fusionner deux ou plusieurs historiques de développement ensemble
   rebase    Réapplication des commits sur le sommet de l'autre base
   reset     Réinitialiser la HEAD courante à l'état spécifié
   switch    Basculer de branche
   tag       Créer, lister, supprimer ou vérifier un objet d'étiquette signé avec GPG

collaborer (voir aussi : git help workflows)
   fetch     Télécharger les objets et références depuis un autre dépôt
   pull      Rapatrier et intégrer un autre dépôt ou une branche locale
   push      Mettre à jour les références distantes ainsi que les objets associés

'git help -a' et 'git help -g' listent les sous-commandes disponibles et
quelques concepts. Voir 'git help <commande>' ou 'git help <concept>'
pour en lire plus à propos d'une commande spécifique ou d'un concept.
Voir 'git help git' pour un survol du système.

 2023-09-21 10:47:50 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git commit -v
Sur la branche alpha
rien à valider, la copie de travail est propre

 2023-09-21 10:48:00 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git merge main
Fusion automatique de README.md
CONFLIT (contenu) : Conflit de fusion dans README.md
La fusion automatique a échoué ; réglez les conflits et validez le résultat.

 2023-09-21 10:48:28 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → git pull
error: Impossible de tirer car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:51:45 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → git commit add .
fatal: impossible de faire une validation partielle pendant une fusion.

 2023-09-21 10:52:14 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → git commit -m "fixed error #1"
U	README.md
error: Impossible de valider car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:52:29 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → sudo git commut -m "fixed error #1"
[sudo] Mot de passe de annomaly : 
Désolé, essayez de nouveau.
[sudo] Mot de passe de annomaly : 
git : 'commut' n'est pas une commande git. Voir 'git --help'.

La commande la plus ressemblante est
	commit

 2023-09-21 10:53:00 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → sudo git commut -m "fixed error #1"
git : 'commut' n'est pas une commande git. Voir 'git --help'.

La commande la plus ressemblante est
	commit

 2023-09-21 10:53:16 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → sudo git commit -m "fixed error #1"
U	README.md
error: Impossible de valider car vous avez des fichiers non fusionnés.
astuce: Corrigez-les puis lancez 'git add/rm <fichier>'
astuce: si nécessaire pour marquer la résolution et valider.
fatal: Abandon à cause de conflit non résolu.

 2023-09-21 10:53:34 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → git checkout main
README.md: needs merge
error: vous devez d'abord résoudre votre index courant

 2023-09-21 10:53:50 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → git fetch

 2023-09-21 10:53:55 ⌚  meyKouy in ~/groupeMarkDown
± |alpha S:1 U:1 ✗| → cd ../

 2023-09-21 11:06:39 ⌚  meyKouy in ~
○ → ls
BeCodeExo     groupeMarkDown  Modèles                   publication-balibeauty  Vidéos
Bureau        Images          Musique                   snap                    web-dev
Documents     markdown.md     pommepatatepublic-master  Swartz-8                web-project
gitApprendre  matthieuGravy   Public                    Téléchargements

 2023-09-21 11:06:40 ⌚  meyKouy in ~
○ → cd rm -r groupeMarkDown
bash: cd: trop d'arguments

 2023-09-21 11:07:00 ⌚  meyKouy in ~
○ → ls
BeCodeExo     groupeMarkDown  Modèles                   publication-balibeauty  Vidéos
Bureau        Images          Musique                   snap                    web-dev
Documents     markdown.md     pommepatatepublic-master  Swartz-8                web-project
gitApprendre  matthieuGravy   Public                    Téléchargements

 2023-09-21 11:07:01 ⌚  meyKouy in ~
○ → rm -r groupeMarkDown
rm : supprimer 'groupeMarkDown/.git/objects/49/ba064057533b3d7a02fe615b3e9b419f8d4871' qui est protégé en écriture et est du type « fichier » ? o
rm : supprimer 'groupeMarkDown/.git/objects/59/2633438dbe652915ad874d1476d6ee6bd74e4c' qui est protégé en écriture et est du type « fichier » ? y
rm : supprimer 'groupeMarkDown/.git/objects/62/f3501a75dd500d3903ad5cf5e25c56d64b3237' qui est protégé en écriture et est du type « fichier » ? yes
rm : supprimer 'groupeMarkDown/.git/objects/28/c06d158f2db46c6cacad6b1f4d9fb85862f26a' qui est protégé en écriture et est du type « fichier » ? ooui
rm : supprimer 'groupeMarkDown/.git/objects/19/5cf181e89b31674e70e521e63aa9ac428af009' qui est protégé en écriture et est du type « fichier » ? ^C

 2023-09-21 11:07:37 ⌚  meyKouy in ~
○ → rm -rf groupeMarkDown

 2023-09-21 11:07:47 ⌚  meyKouy in ~
○ → ls
BeCodeExo  gitApprendre  matthieuGravy  pommepatatepublic-master  snap             Vidéos
Bureau     Images        Modèles        Public                    Swartz-8         web-dev
Documents  markdown.md   Musique        publication-balibeauty    Téléchargements  web-project

 2023-09-21 11:07:49 ⌚  meyKouy in ~
○ → git clone git@github.com:matthieuGravy/groupeMarkDown.git
Clonage dans 'groupeMarkDown'...
remote: Enumerating objects: 38, done.
remote: Counting objects: 100% (38/38), done.
remote: Compressing objects: 100% (32/32), done.
remote: Total 38 (delta 4), reused 32 (delta 3), pack-reused 0
Réception d'objets: 100% (38/38), 5.26 Kio | 1.75 Mio/s, fait.
Résolution des deltas: 100% (4/4), fait.

 2023-09-21 11:08:28 ⌚  meyKouy in ~
○ → ls
BeCodeExo     groupeMarkDown  Modèles                   publication-balibeauty  Vidéos
Bureau        Images          Musique                   snap                    web-dev
Documents     markdown.md     pommepatatepublic-master  Swartz-8                web-project
gitApprendre  matthieuGravy   Public                    Téléchargements

 2023-09-21 11:08:29 ⌚  meyKouy in ~
○ → cd groupeMarkDown

 2023-09-21 11:08:38 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → ls
makrdown.md  README.md

 2023-09-21 11:08:39 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git checkout alpha
La branche 'alpha' est paramétrée pour suivre la branche distante 'alpha' depuis 'origin'.
Basculement sur la nouvelle branche 'alpha'

 2023-09-21 11:08:52 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git checkout main
Basculement sur la branche 'main'
Votre branche est à jour avec 'origin/main'.

 2023-09-21 11:12:35 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git pull origin main
Depuis github.com:matthieuGravy/groupeMarkDown
 * branch            main       -> FETCH_HEAD
Déjà à jour.

 2023-09-21 11:12:43 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git merge alpha
Fusion automatique de README.md
CONFLIT (contenu) : Conflit de fusion dans README.md
La fusion automatique a échoué ; réglez les conflits et validez le résultat.

 2023-09-21 11:12:57 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git checkout alpha
README.md: needs merge
error: vous devez d'abord résoudre votre index courant

 2023-09-21 11:14:29 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git status
Sur la branche main
Votre branche est à jour avec 'origin/main'.

Vous avez des chemins non fusionnés.
  (réglez les conflits puis lancez "git commit")
  (utilisez "git merge --abort" pour annuler la fusion)

Chemins non fusionnés :
  (utilisez "git add <fichier>..." pour marquer comme résolu)
	modifié des deux côtés :  README.md

aucune modification n'a été ajoutée à la validation (utilisez "git add" ou "git commit -a")

 2023-09-21 11:14:35 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 U:1 ✗| → git commit -a
[main ee5f0d9] Merge branch 'alpha'

 2023-09-21 11:18:41 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ✓| → git commit 
Sur la branche main
Votre branche est en avance sur 'origin/main' de 3 commits.
  (utilisez "git push" pour publier vos commits locaux)

rien à valider, la copie de travail est propre

 2023-09-21 11:18:45 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ✓| → git push
To github.com:matthieuGravy/groupeMarkDown.git
 ! [rejected]        main -> main (fetch first)
error: impossible de pousser des références vers 'github.com:matthieuGravy/groupeMarkDown.git'
astuce: Les mises à jour ont été rejetées car la branche distante contient du travail que
astuce: vous n'avez pas en local. Ceci est généralement causé par un autre dépôt poussé
astuce: vers la même référence. Vous pourriez intégrer d'abord les changements distants
astuce: (par exemple 'git pull ...') avant de pousser à nouveau.
astuce: Voir la 'Note à propos des avances rapides' dans 'git push --help' pour plus d'information.

 2023-09-21 11:18:57 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ✓| → git checkout alpha
Basculement sur la branche 'alpha'
Votre branche est à jour avec 'origin/alpha'.

 2023-09-21 11:19:06 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git push
Everything up-to-date

 2023-09-21 11:19:09 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git checkout main
Basculement sur la branche 'main'
Votre branche est en avance sur 'origin/main' de 3 commits.
  (utilisez "git push" pour publier vos commits locaux)

 2023-09-21 11:19:16 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ✓| → git commit
Sur la branche main
Votre branche est en avance sur 'origin/main' de 3 commits.
  (utilisez "git push" pour publier vos commits locaux)

rien à valider, la copie de travail est propre

 2023-09-21 11:19:22 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ✓| → git fetch
remote: Enumerating objects: 11, done.
remote: Counting objects: 100% (11/11), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 8 (delta 1), reused 7 (delta 1), pack-reused 0
Dépaquetage des objets: 100% (8/8), 1.47 Kio | 751.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   2540192..ccb78ff  main       -> origin/main
 * [nouvelle branche] louis-2    -> origin/louis-2

 2023-09-21 11:20:18 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓2 ✓| → git fetch
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Dépaquetage des objets: 100% (3/3), 735 octets | 735.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   cd6d605..4d75f12  louis-2    -> origin/louis-2

 2023-09-21 11:20:31 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓2 ✓| → git fetch
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
Dépaquetage des objets: 100% (1/1), 647 octets | 647.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   ccb78ff..119f33d  main       -> origin/main

 2023-09-21 11:20:37 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓5 ✓| → git commit m 
error: le spécificateur de chemin 'm' ne correspond à aucun fichier connu de git

 2023-09-21 11:20:42 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓5 ✓| → git merge alpha
Déjà à jour.

 2023-09-21 11:21:03 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓5 ✓| → git checkout alpha
Basculement sur la branche 'alpha'
Votre branche est à jour avec 'origin/alpha'.

 2023-09-21 11:22:18 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → ls
makrdown.md  README.md

 2023-09-21 11:22:23 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git README.me
git : 'README.me' n'est pas une commande git. Voir 'git --help'.

 2023-09-21 11:22:27 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → vim README.md

 2023-09-21 11:23:07 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git checkout main
Basculement sur la branche 'main'
Votre branche et 'origin/main' ont divergé,
et ont 3 et 5 commits différents chacune respectivement.
  (utilisez "git pull" pour fusionner la branche distante dans la vôtre)

 2023-09-21 11:24:25 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓5 ✓| → git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 2 (delta 0), pack-reused 0
Dépaquetage des objets: 100% (3/3), 330 octets | 165.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
 * [nouvelle branche] marc3      -> origin/marc3
astuce: Vous avez des branches divergentes et vous devez spécifier comment
astuce: les réconcilier. Vous pouvez le faire en lançant une des
astuce: commandes suivantes avant votre prochain tirage :
astuce: 
astuce:   git config pull.rebase false  # fusion (stratégie par défaut)
astuce:   git config pull.rebase true   # rebasage
astuce:   git config pull.ff only       # avance rapide seulement
astuce: 
astuce: Vous pouvez remplacer "git config" par "git config --global" pour que
astuce: ce soit l'option par défaut pour tous les dépôts. Vous pouvez aussi
astuce: passer --rebase, --no-rebase ou --ff-only sur la ligne de commande pour
astuce: remplacer à l'invocation la valeur par défaut configurée.
fatal: Besoin de spécifier comment réconcilier des branches divergentes.

 2023-09-21 11:24:45 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓5 ✓| → git config pull.rebase false 

 2023-09-21 11:25:06 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓5 ✓| → git pull
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
Dépaquetage des objets: 100% (2/2), 719 octets | 719.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   119f33d..2624cfb  main       -> origin/main
Fusion automatique de README.md
CONFLIT (contenu) : Conflit de fusion dans README.md
La fusion automatique a échoué ; réglez les conflits et validez le résultat.

 2023-09-21 11:25:13 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑3 ↓7 S:2 U:1 ✗| → git commit -a
[main 9612856] Merge branch 'main' of github.com:matthieuGravy/groupeMarkDown

 2023-09-21 11:25:56 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑4 ✓| → git update-ref -d MERGE_HEAD

 2023-09-21 11:25:58 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑4 ✓| → git merge alpha
Déjà à jour.

 2023-09-21 11:26:28 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑4 ✓| → git pull
Déjà à jour.

 2023-09-21 11:26:42 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑4 ✓| → git checkout alpha
Basculement sur la branche 'alpha'
Votre branche est à jour avec 'origin/alpha'.

 2023-09-21 11:28:29 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → vim README.md

 2023-09-21 11:30:33 ⌚  meyKouy in ~/groupeMarkDown
± |alpha U:1 ✗| → git commit -a
Abandon de la validation dû à un message de validation vide.

 2023-09-21 11:32:30 ⌚  meyKouy in ~/groupeMarkDown
± |alpha U:1 ✗| → git log
commit 74393b8a2e6ec6860a55b164f964648e00b5554a (HEAD -> alpha, origin/alpha)
Author: Matthieu Gravy <matthieugravy@gmail.com>
Date:   Thu Sep 21 10:41:29 2023 +0200

    correction

commit 83ca99981f6f1350e5bf89b90f2dd9374661a7b3
Author: Matthieu Gravy <matthieugravy@gmail.com>
Date:   Thu Sep 21 10:22:52 2023 +0200

    name

commit fab2de433bd16822544c3aec2f8952257b9a99ba
Author: Matthieu Gravy <matthieugravy@gmail.com>
Date:   Thu Sep 21 10:06:29 2023 +0200

    create files

 2023-09-21 11:32:32 ⌚  meyKouy in ~/groupeMarkDown
± |alpha U:1 ✗| → git checkout alpha
M	README.md
Déjà sur 'alpha'
Votre branche est à jour avec 'origin/alpha'.

 2023-09-21 11:32:57 ⌚  meyKouy in ~/groupeMarkDown
± |alpha U:1 ✗| → ls
makrdown.md  README.md

 2023-09-21 11:32:58 ⌚  meyKouy in ~/groupeMarkDown
± |alpha U:1 ✗| → git remove branch alpha
git : 'remove' n'est pas une commande git. Voir 'git --help'.

La commande la plus ressemblante est
	remote

 2023-09-21 11:33:10 ⌚  meyKouy in ~/groupeMarkDown
± |alpha U:1 ✗| → git status
Sur la branche alpha
Votre branche est à jour avec 'origin/alpha'.

Modifications qui ne seront pas validées :
  (utilisez "git add <fichier>..." pour mettre à jour ce qui sera validé)
  (utilisez "git restore <fichier>..." pour annuler les modifications dans le répertoire de travail)
	modifié :         README.md

aucune modification n'a été ajoutée à la validation (utilisez "git add" ou "git commit -a")

 2023-09-21 11:34:30 ⌚  meyKouy in ~/groupeMarkDown
± |alpha U:1 ✗| → git restore README.md

 2023-09-21 11:34:40 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git fetch
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Dépaquetage des objets: 100% (3/3), 752 octets | 376.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   2624cfb..39c10ae  main       -> origin/main
 * [nouvelle branche] marc4      -> origin/marc4

 2023-09-21 11:34:49 ⌚  meyKouy in ~/groupeMarkDown
± |alpha ✓| → git checkout main
Basculement sur la branche 'main'
Votre branche et 'origin/main' ont divergé,
et ont 4 et 1 commits différents chacune respectivement.
  (utilisez "git pull" pour fusionner la branche distante dans la vôtre)

 2023-09-21 11:35:09 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑4 ↓1 ✓| → git pull
Merge made by the 'ort' strategy.
 makrdown.md => markdown.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
 rename makrdown.md => markdown.md (90%)

 2023-09-21 11:36:06 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑5 ✓| → git push origin main
Énumération des objets: 16, fait.
Décompte des objets: 100% (15/15), fait.
Compression par delta en utilisant jusqu'à 12 fils d'exécution
Compression des objets: 100% (8/8), fait.
Écriture des objets: 100% (8/8), 1.15 Kio | 1.15 Mio/s, fait.
Total 8 (delta 2), réutilisés 0 (delta 0), réutilisés du pack 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:matthieuGravy/groupeMarkDown.git
   39c10ae..1fb545d  main -> main

 2023-09-21 11:37:11 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git fetch
remote: Enumerating objects: 25, done.
remote: Counting objects: 100% (23/23), done.
remote: Compressing objects: 100% (16/16), done.
remote: Total 17 (delta 4), reused 10 (delta 1), pack-reused 0
Dépaquetage des objets: 100% (17/17), 2.74 Kio | 215.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   1fb545d..20d96e7  main       -> origin/main
 * [nouvelle branche] louis-3    -> origin/louis-3
 * [nouvelle branche] marc5      -> origin/marc5

 2023-09-21 11:51:43 ⌚  meyKouy in ~/groupeMarkDown
± |main ↓2 ✓| → git pull
Mise à jour 1fb545d..20d96e7
Fast-forward
 README.md | 17 ++++-------------
 1 file changed, 4 insertions(+), 13 deletions(-)

 2023-09-21 11:52:22 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git pull
remote: Enumerating objects: 21, done.
remote: Counting objects: 100% (20/20), done.
remote: Compressing objects: 100% (11/11), done.
Dépaquetage des objets: 100% (12/12), 3.08 Kio | 1.54 Mio/s, fait.
remote: Total 12 (delta 3), reused 3 (delta 1), pack-reused 0
Depuis github.com:matthieuGravy/groupeMarkDown
   20d96e7..e8507a1  main       -> origin/main
Mise à jour 20d96e7..e8507a1
Fast-forward
 README.md   |  2 +-
 markdown.md | 16 ++++++++++++++--
 2 files changed, 15 insertions(+), 3 deletions(-)

 2023-09-21 12:00:10 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git pull
remote: Enumerating objects: 15, done.
remote: Counting objects: 100% (15/15), done.
remote: Compressing objects: 100% (11/11), done.
remote: Total 12 (delta 4), reused 3 (delta 1), pack-reused 0
Dépaquetage des objets: 100% (12/12), 2.34 Kio | 342.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   e8507a1..6134a98  main       -> origin/main
Mise à jour e8507a1..6134a98
Fast-forward
 README.md   | 2 +-
 markdown.md | 3 +++
 2 files changed, 4 insertions(+), 1 deletion(-)

 2023-09-21 12:08:33 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → vim README.md

 2023-09-21 12:09:00 ⌚  meyKouy in ~/groupeMarkDown
± |main U:1 ✗| → git add .

 2023-09-21 12:09:03 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 ✗| → git commt 
git : 'commt' n'est pas une commande git. Voir 'git --help'.

La commande la plus ressemblante est
	commit

 2023-09-21 12:09:09 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 ✗| → git commit "test"
error: le spécificateur de chemin 'test' ne correspond à aucun fichier connu de git

 2023-09-21 12:09:19 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 ✗| → git commit -m "test"
[main f2be0fa] test
 1 file changed, 1 insertion(+)

 2023-09-21 12:09:25 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑1 ✓| → git push origin main
Énumération des objets: 5, fait.
Décompte des objets: 100% (5/5), fait.
Compression par delta en utilisant jusqu'à 12 fils d'exécution
Compression des objets: 100% (3/3), fait.
Écriture des objets: 100% (3/3), 308 octets | 308.00 Kio/s, fait.
Total 3 (delta 1), réutilisés 0 (delta 0), réutilisés du pack 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:matthieuGravy/groupeMarkDown.git
   6134a98..f2be0fa  main -> main

 2023-09-21 12:09:33 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → vim README.md

 2023-09-21 12:11:24 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → git pull
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
Dépaquetage des objets: 100% (3/3), 686 octets | 686.00 Kio/s, fait.
Depuis github.com:matthieuGravy/groupeMarkDown
   f2be0fa..6b5c77a  main       -> origin/main
Mise à jour f2be0fa..6b5c77a
Fast-forward
 README.md | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)

 2023-09-21 12:11:29 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → vim README.md

 2023-09-21 12:12:30 ⌚  meyKouy in ~/groupeMarkDown
± |main U:1 ✗| → git commit -m "test color"
Sur la branche main
Votre branche est à jour avec 'origin/main'.

Modifications qui ne seront pas validées :
  (utilisez "git add <fichier>..." pour mettre à jour ce qui sera validé)
  (utilisez "git restore <fichier>..." pour annuler les modifications dans le répertoire de travail)
	modifié :         README.md

aucune modification n'a été ajoutée à la validation (utilisez "git add" ou "git commit -a")

 2023-09-21 12:12:40 ⌚  meyKouy in ~/groupeMarkDown
± |main U:1 ✗| → git add .

 2023-09-21 12:12:44 ⌚  meyKouy in ~/groupeMarkDown
± |main S:1 ✗| → git commit -m "test color"
[main 820cd55] test color
 1 file changed, 4 insertions(+)

 2023-09-21 12:12:50 ⌚  meyKouy in ~/groupeMarkDown
± |main ↑1 ✓| → git push origin
Énumération des objets: 5, fait.
Décompte des objets: 100% (5/5), fait.
Compression par delta en utilisant jusqu'à 12 fils d'exécution
Compression des objets: 100% (3/3), fait.
Écriture des objets: 100% (3/3), 326 octets | 326.00 Kio/s, fait.
Total 3 (delta 1), réutilisés 0 (delta 0), réutilisés du pack 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To github.com:matthieuGravy/groupeMarkDown.git
   6b5c77a..820cd55  main -> main

 2023-09-21 12:12:58 ⌚  meyKouy in ~/groupeMarkDown
± |main ✓| → 

