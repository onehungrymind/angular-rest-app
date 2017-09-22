// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDsWZ4to-Zl11YMFx8o94k1mdTv_7bLnDk',
    authDomain: 'rest-app-notifications.firebaseapp.com',
    databaseURL: 'https://rest-app-notifications.firebaseio.com',
    projectId: 'rest-app-notifications',
    storageBucket: '',
    messagingSenderId: '846368973507'
  }
};
