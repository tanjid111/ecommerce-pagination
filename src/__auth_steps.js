/* 
1. create a new firebase project in console.firebase.google.com 
2. npm install firebase
3. create firebase.init.js and import getAuth to export auth
4. Firebase settings > Authentication > Enable email and password auth
5. Create Login, Signup component, setup route
6. Attach form field handler and form submit handler
7. npm install --save react-firebase-hooks
8. useCreateUserWithEmailAndPassword from react firebase hooks
9. if user is created redirect to the expected page
10. useSignInWithEmailAndPassword for sign in
11. Create RequireAuth Component ==> check user exists also track user location.
12. In route wrap protected component by using required auth component

*/

/* 
Hosting steps
1. npm install -g firebase-tools (one time for your computer)
2. firebase login (one time for your computer)
3. firebase init(one time for each project)
4. npm run build (Everytime you wanto to deploy)
5. firebase deploy (Everytime you wanto to deploy)

*/