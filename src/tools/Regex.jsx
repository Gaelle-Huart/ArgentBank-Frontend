// déclaration des regex permettant de contrôler les caractères renseignés dans les inputs
// (utile si ajout d'un composant Register(form))

// firstname, lastname (lettres uniquement, plus ' et - pour noms composés et autre)
export const validCivilianName = (name) => {
  const civilianNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]+$/;
  return civilianNameRegex.test(name)
}

// username (lettres uniquement, avec une longueur minimum et maximum)
export const validUserName = (username) => {
  const userNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{3,15}$/;
  return userNameRegex.test(username)
}

// email (accepte lettres, chiffres et caractères spéciaux, vérifie également le format du mail)
export const validEmail = (email) => {
  const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return mailRegex.test(email)
}

// password (8 caractères minimum avec 1 lettre et 1 chiffre obligatoire, accepte les caractères spéciaux)
export const validPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password)
}