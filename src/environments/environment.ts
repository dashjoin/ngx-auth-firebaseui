// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    apiKey: 'AIzaSyASG7KxDO2z5AH9r0jlUmwiw68Ap8kG20c',
    authDomain: 'ngx-auth-firebaseui.firebaseapp.com',
    databaseURL: 'https://ngx-auth-firebaseui.firebaseio.com',
    projectId: 'ngx-auth-firebaseui',
    storageBucket: 'ngx-auth-firebaseui.appspot.com',
    messagingSenderId: '520699629648'
  }
};

// YOU MUST PROVIDE YOUR OWN FIREBASE CONFIG AS config ABOVE
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
