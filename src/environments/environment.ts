// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBxeE4qMeufXTYuihHMkjV__hnfuT5ROCM",
    authDomain: "chat-demo-cbd6f.firebaseapp.com",
    databaseURL: "https://chat-demo-cbd6f.firebaseio.com",
    projectId: "chat-demo-cbd6f",
    storageBucket: "chat-demo-cbd6f.appspot.com",
    messagingSenderId: "971517864478"
  }
};
