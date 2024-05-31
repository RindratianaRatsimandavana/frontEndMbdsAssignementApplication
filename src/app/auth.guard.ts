import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Injection du router
  const router = inject(Router);

  // Vérification du token dans le localStorage
  const token = localStorage.getItem('token');

  if (token) {
    console.log("GUARD: Navigation autorisée");
    return true;
  } else {
    console.log("GUARD: Navigation NON autorisée");
    router.navigate(['/login']);
    return false;
  }
  
};
