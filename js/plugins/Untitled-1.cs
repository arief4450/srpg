<Custom Apply Effect>
// Check if user is an actor.
if (user.isActor()) {
  // Archive the previous settings.
  user._prevCharName = user._prevCharName || user._characterName;
  user._prevCharIndex = user._prevCharIndex || user._characterIndex;
  user._prevFaceName = user._prevFaceName || user._faceName;
  user._prevFaceIndex = user._prevFaceIndex || user._faceIndex;
  user._prevBattlerName = user._prevBattlerName || user._battlerName;
  // Check if the actor ID is 1.
  if (user.actorId() === 1) {
    // The filename of the character graphic without the file extension.
    var charName = 'Uqi';
    // The index of the character graphic used.
    var charIndex = 0;
    // The filename of the face graphic without the file extension.
    var faceName = 'Uqi';
    // The index of of the face graphic used.
    var faceIndex = 0;
    // The filename of the battler graphic without the file extension.
    var battlerName = 'Captain_Normal';
  // Check if the actor ID is 2.
  } else if (user.actorId() === 2) {
    // The filename of the character graphic without the file extension.
    var charName = 'ThereseSSJ';
    // The index of the character graphic used.
    var charIndex = 0;
    // The filename of the face graphic without the file extension.
    var faceName = 'ThereseSSJ';
    // The index of of the face graphic used.
    var faceIndex = 0;
    // The filename of the battler graphic without the file extension.
    var battlerName = 'Therese_SSJ1';
  // Check if the actor ID is 3.
  } else if (user.actorId() === 3) {
    // The filename of the character graphic without the file extension.
    var charName = 'MarshaSSJ';
    // The index of the character graphic used.
    var charIndex = 0;
    // The filename of the face graphic without the file extension.
    var faceName = 'MarshaSSJ';
    // The index of of the face graphic used.
    var faceIndex = 0;
    // The filename of the battler graphic without the file extension.
    var battlerName = 'Marsha_SSJ1';
  // Check if the actor ID is 4.
  } else if (user.actorId() === 4) {
    // The filename of the character graphic without the file extension.
    var charName = 'LuciusSSJ';
    // The index of the character graphic used.
    var charIndex = 0;
    // The filename of the face graphic without the file extension.
    var faceName = 'LuciusSSJ';
    // The index of of the face graphic used.
    var faceIndex = 0;
    // The filename of the battler graphic without the file extension.
    var battlerName = 'Lucius_SSJ1';
  // If none of the above actor ID's match, use this setting.
  } else {
    // The filename of the character graphic without the file extension.
    var charName = 'HaroldSSJ';
    // The index of the character graphic used.
    var charIndex = 0;
    // The filename of the face graphic without the file extension.
    var faceName = 'HaroldSSJ';
    // The index of of the face graphic used.
    var faceIndex = 0;
    // The filename of the battler graphic without the file extension.
    var battlerName = 'Harold_SSJ1';
  }
  // Changes the character image to the setting applied from above.
  user.setCharacterImage(charName, charIndex);
  // Changes the face image to the setting applied from above.
  user.setFaceImage(faceName, faceIndex);
  // Changes the battler image from the setting applied from above.
  user.setBattlerImage(battlerName);
  // Refreshes the user's appearance.
  user.refresh();
}
</Custom Apply Effect>

<Custom Remove Effect>
// Retrieve archived settings.
var charName = user._prevCharName;
var charIndex = user._prevCharIndex;
var faceName = user._prevFaceName;
var faceIndex = user._prevFaceIndex;
var battlerName = user._prevBattlerName;
// Changes the character image to the archived setting.
user.setCharacterImage(charName, charIndex);
// Changes the face image to the archived setting.
user.setFaceImage(faceName, faceIndex);
// Changes the battler image from the archived setting.
user.setBattlerImage(battlerName);
// Clear archived data.
user._priorityCharacterName = undefined;
user._priorityCharacterIndex = undefined;
user._prevFaceName = undefined;
user._prevFaceIndex = undefined;
user._priorityFaceName = undefined;
user._priorityFaceIndex = undefined;
user._prevFaceName = undefined;
user._prevFaceIndex = undefined;
user._priorityBattlerName = undefined;
user._prevBattlerName = undefined;
// Refreshes the user's appearance.
user.refresh();
</Custom Remove Effect>