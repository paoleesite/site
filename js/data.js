
const projectsData = {
    'projet1-1': {
        title: 'Projet 1.1 - Site Web Personnel',
        content: `
            <div class="project-content">
                <h2>Projet 1.1 - Site Web Personnel</h2>
                <p>Ceci est le contenu du Projet 1.1. Il s'agit d'un exemple de projet avec du contenu HTML intégré directement dans le code JavaScript.</p>
                
                <h3>Objectifs</h3>
                <ul>
                    <li>Créer un site web personnel</li>
                    <li>Présenter mes compétences</li>
                    <li>Montrer mes projets</li>
                </ul>
                
                <h3>Technologies utilisées</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </ul>
                
                <h3>Détails</h3>
                <p>Ce projet a été réalisé dans le cadre de mon apprentissage du développement web. J'ai utilisé les dernières technologies pour créer un site moderne et réactif.</p>
                
                <h3>Fonctionnalités</h3>
                <ul>
                    <li>Design responsive</li>
                    <li>Animations fluides</li>
                    <li>Navigation intuitive</li>
                </ul>
            </div>
        `
    },
    'projet1-2': {
        title: 'Projet 1.2 - Site Web avec Markdown',
        isMarkdown: true
    },
    'projet1-3': {
        title: 'Projet 1.3 - Application Web Moderne',
        isMarkdown: true
    },
    'projet2-1': {
        title: 'Projet 2.1 - Application Web',
        content: `
            <div class="project-content">
                <h2>Projet 2.1 - Application Web</h2>
                <p>Ceci est le contenu du Projet 2.1. Il s'agit d'un exemple de projet avec du contenu HTML intégré directement dans le code JavaScript.</p>
                
                <h3>Objectifs</h3>
                <ul>
                    <li>Développer une application web interactive</li>
                    <li>Utiliser des API modernes</li>
                    <li>Optimiser les performances</li>
                </ul>
                
                <h3>Technologies utilisées</h3>
                <ul>
                    <li>React.js</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                </ul>
            </div>
        `
    },
    'projet2-2': {
        title: 'Projet 2.2 - Application Mobile',
        content: `
            <div class="project-content">
                <h2>Projet 2.2 - Application Mobile</h2>
                <p>Ceci est le contenu du Projet 2.2. Il s'agit d'un exemple de projet avec du contenu HTML intégré directement dans le code JavaScript.</p>
                
                <h3>Objectifs</h3>
                <ul>
                    <li>Créer une application mobile multiplateforme</li>
                    <li>Optimiser l'expérience utilisateur</li>
                    <li>Intégrer des fonctionnalités hors ligne</li>
                </ul>
                
                <h3>Technologies utilisées</h3>
                <ul>
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                </ul>
            </div>
        `
    },
    'projet3-1': {
        title: 'Projet 3.1 - Analyse de Données',
        content: `
            <div class="project-content">
                <h2>Projet 3.1 - Analyse de Données</h2>
                <p>Ceci est le contenu du Projet 3.1. Il s'agit d'un exemple de projet avec du contenu HTML intégré directement dans le code JavaScript.</p>
                
                <h3>Objectifs</h3>
                <ul>
                    <li>Analyser des jeux de données complexes</li>
                    <li>Créer des visualisations interactives</li>
                    <li>Présenter les résultats de manière claire</li>
                </ul>
                
                <h3>Technologies utilisées</h3>
                <ul>
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>Matplotlib</li>
                    <li>Jupyter Notebook</li>
                </ul>
            </div>
        `
    },
    'projet3-2': {
        title: 'Projet 3.2 - Apprentissage Automatique',
        content: `
            <div class="project-content">
                <h2>Projet 3.2 - Apprentissage Automatique</h2>
                <p>Ceci est le contenu du Projet 3.2. Il s'agit d'un exemple de projet avec du contenu HTML intégré directement dans le code JavaScript.</p>
                
                <h3>Objectifs</h3>
                <ul>
                    <li>Développer un modèle de machine learning</li>
                    <li>Entraîner et évaluer le modèle</li>
                    <li>Déployer le modèle en production</li>
                </ul>
                
                <h3>Technologies utilisées</h3>
                <ul>
                    <li>Python</li>
                    <li>Scikit-learn</li>
                    <li>TensorFlow</li>
                    <li>Flask</li>
                </ul>
            </div>
        `
    },
    'projet3-3': {
        title: 'Projet 3.3 - Automatisation',
        content: `
            <div class="project-content">
                <h2>Projet 3.3 - Automatisation</h2>
                <p>Ceci est le contenu du Projet 3.3. Il s'agit d'un exemple de projet avec du contenu HTML intégré directement dans le code JavaScript.</p>
                
                <h3>Objectifs</h3>
                <ul>
                    <li>Automatiser des tâches répétitives</li>
                    <li>Améliorer l'efficacité opérationnelle</li>
                    <li>Réduire les erreurs humaines</li>
                </ul>
                
                <h3>Technologies utilisées</h3>
                <ul>
                    <li>Python</li>
                    <li>Selenium</li>
                    <li>Docker</li>
                    <li>GitHub Actions</li>
                </ul>
            </div>
        `
    }
};


const markdownData = {
    'projet1-2': `# Projet 1.2 - Site Web avec Markdown

## Description
Ceci est le contenu du Projet 1.2 chargé localement pour le développement.

## Fonctionnalités
- Chargement dynamique
- Mise en forme Markdown
- Facile à mettre à jour

## Technologies utilisées
- HTML5
- CSS3
- JavaScript
- Marked.js

## Comment ça marche
En développement, le contenu est chargé depuis ce fichier JavaScript. En production, il sera chargé directement depuis GitHub.`,

    'projet1-3': `# Projet 1.3 - Application Web Moderne

## Description
Ceci est un exemple de contenu pour le Projet 1.3.

## Détails techniques
- Architecture modulaire
- Chargement asynchrone
- Gestion des erreurs

## Exemple de code
\`\`\`javascript
async function chargerContenu(projet) {
    try {
        const reponse = await fetch(\`/markdown/\${projet}.md\`);
        const contenu = await reponse.text();
        return marquerCommeHTML(contenu);
    } catch (erreur) {
        console.error('Erreur de chargement:', erreur);
        return '\u003cp class="erreur"\u003eErreur lors du chargement du contenu.\u003c/p\u003e';
    }
}
\`\`\``
};


function initializeMarkdownLoader() {

    if (typeof marked === 'undefined') {
        console.error('Erreur: La bibliothèque marked.js n\'est pas chargée');
        return false;
    }


    window.loadMarkdownContent = async function (projectId, elementId) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`Élément avec l'ID '${elementId}' non trouvé`);
            return;
        }


        element.innerHTML = `
            <div class="loading">
                <p>Chargement du contenu en cours...</p>
                <div class="spinner"></div>
            </div>`;

        try {
            if (markdownData && markdownData[projectId]) {

                await new Promise(resolve => setTimeout(resolve, 300));
                element.innerHTML = marked.parse(markdownData[projectId]);
                console.log('Contenu Markdown local chargé avec succès');
                return true;
            } else {
                throw new Error(`Aucun contenu trouvé pour le projet ${projectId}`);
            }
        } catch (error) {
            console.error('Erreur lors du chargement du Markdown:', error);
            element.innerHTML = `
                <div class="error-message">
                    <h3>Erreur de chargement</h3>
                    <p>${error.message}</p>
                    <p>Mode développement actif - les données sont chargées localement.</p>
                </div>`;
            return false;
        }
    };

    console.log('Module de chargement de développement initialisé avec succès');
    return true;
}


if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMarkdownLoader);
} else {
    initializeMarkdownLoader();
}
