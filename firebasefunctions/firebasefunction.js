const functions = require('firebase-functions')
const admin = require('firebase-admin');
admin.initializeApp();

exports.handleReservation = functions.https.onCall(async (data, context) => {
  try {
    // Vérifiez que l'utilisateur est authentifié
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'Vous devez être authentifié pour effectuer cette action.');
    }

    // Récupérez les données de la réservation
    const { mode, address, phone, cardNumber } = data;

    // Enregistrez les données dans la collection "tuteur1"
    await admin.firestore().collection('tuteur1').add({
      mode,
      address,
      phone,
      cardNumber,
      userId: context.auth.uid, // Ajoutez l'ID de l'utilisateur authentifié
      timestamp: admin.firestore.FieldValue.serverTimestamp() // Ajoutez le timestamp du serveur
    });

    return { success: true };
  } catch (error) {
    // Gérer les erreurs
    throw new functions.https.HttpsError('internal', 'Une erreur s\'est produite lors de l\'enregistrement de la réservation.');
  }
});
