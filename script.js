 // Récupération des éléments HTML nécessaires
 const form = document.querySelector('form');
 const errorMessage = document.getElementById('error-message');
 const commentList = document.getElementById('comment-list');

 // Gestionnaire d'événement sur l'envoi du formulaire
 form.addEventListener('submit', function(event) {
   event.preventDefault(); // Empêche le rechargement de la page

   // Récupération des valeurs des champs du formulaire
   const firstName = document.getElementById('first-name').value.trim();
   const lastName = document.getElementById('last-name').value.trim();
   const message = document.getElementById('message').value.trim();

   // Vérification si tous les champs sont remplis
   if (!firstName || !lastName || !message) {
     errorMessage.style.display = 'block'; // Affiche le message d'erreur
     return;
   }
   errorMessage.style.display = 'none'; // Cache le message d'erreur

   // Création d'un nouvel élément de commentaire
   const newComment = document.createElement('div');
   newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500', 'border-t', 'border-gray-200', 'py-10');
   newComment.innerHTML = `
     <div class="flex-1">
       <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
       <div class="prose prose-sm mt-4 max-w-none text-gray-500">
         <p>${message}</p>
       </div>
     </div>
   `;

   // Ajout du nouveau commentaire dans la liste
   commentList.appendChild(newComment);

   // Réinitialisation des champs du formulaire
   form.reset();
 });