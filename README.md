# Jour 2: Animate

Dans ce deuxième jour, nous essayons de faire une simple animation 360 Degré
![Image de l'animation](/src/assets/jour_2.png)

### Explication du `transition` dans Framer Motion

- **`type: "spring"`** : Utilise un modèle de ressort pour l'animation. L'élément agit comme un ressort qui se compresse ou s'étire, puis revient à sa position initiale avec un effet de rebond.

- **`stiffness: 400` (Rigidité)** : Définit la force du ressort. Une valeur élevée rend le ressort plus rigide, ce qui accélère l'animation et permet à l'élément d'atteindre plus rapidement sa position finale.

- **`damping: 40` (Amortissement)** : Contrôle la résistance du ressort au mouvement. Plus la valeur est élevée, plus l'animation s'arrête rapidement, réduisant ainsi les oscillations et le rebond.

- **`repeat: Infinity` (Répétition)** : L'animation se répète à l'infini, créant un mouvement continu sans fin.

- **`repeatType: "mirror"` (Type de répétition)** : Fait alterner l'animation dans les deux directions à chaque répétition, créant un effet de va-et-vient.

- **`repeatDelay: 0.2` (Délai de répétition)** : Ajoute un délai de 0,2 seconde entre chaque répétition de l'animation, créant une petite pause avant que le cycle suivant commence.

### Exemple de code :

```js
transition={{
  type: "spring",
  stiffness: 400,
  damping: 40,
  repeat: Infinity,
  repeatType: "mirror",
  repeatDelay: 0.2
}}
