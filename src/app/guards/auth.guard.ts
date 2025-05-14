import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';
import { Auth } from '@angular/fire/auth';

export const AuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(Auth);

  return new Promise(resolve => {
    onAuthStateChanged(auth, user => {
      if (user) resolve(true);
      else router.navigate(['/login']);
    });
  });
};