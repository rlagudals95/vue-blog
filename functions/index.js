const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();
// firebase에 email등록
exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
            admin: true,
        })
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made an admin!`
        }
    }).catch((err) => {
        console.log(err);
    })
})