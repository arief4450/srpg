/*:
 * @plugindesc v1.00 Battle Formation
 * @author Yorae Rasante (based on work by Ninakoru)
 * 
 * @param ---Formations---
 * @default
 * 
 * @param defaultFormation
 * @text Default Formations
 * @parent ---Formations---
 * @desc The basic formation for x members
 * Leave 0 or without for default maker formation
 * @type number[]
 * @default
 * 
 * @param formation
 * @text Formations
 * @parent ---Formations---
 * @type struct<Formation>[]
 * @desc The list of formations
 * 
 * @param emptyName
 * @text Name of Empty
 * @parent ---Formations---
 * @type text
 * @desc Name to show on the menu for empty formation
 * Only used if no default formation for party size
 * @default Default
 * 
 * @param emptyDesc
 * @text Description of Empty
 * @parent ---Formations---
 * @type note
 * @desc Description to show on the menu for empty formation
 * Only used if no default formation for party size
 * @default "Default positioning.\nNothing special."
 * 
 * @param ---General---
 * @default
 * 
 * @param maxBattlerSize
 * @text Max Actors in Battle
 * @parent ---General---
 * @desc Max number of actors in batle at once
 * @default Imported.YEP_PartySystem ? Yanfly.Param.MaxBattleMembers : 4

 * @param replaceFormation
 * @text Replace Menu Formation
 * @parent ---General---
 * @type boolean
 * @on Replace
 * @off New option
 * @desc Replace the 'formation' command on the main
 * menu screen
 * @default true
 * 
 * @param battleFormationCommand
 * @text Command Name
 * @type text
 * @desc Text of the Battle Formation command on the menu
 * @default Battle Formation
 *  
 * @param changeSize
 * @text Allow Party Swap
 * @parent ---General---
 * @type boolean
 * @on Allow
 * @off Don't allow
 * @desc Let the player change the battle party with reserves
 * from the Battle Formation screen
 * @default true
 * 
 * @param openMenuInBattle
 * @text Change formation in battle
 * @parent ---General---
 * @type boolean
 * @on Allow
 * @off Don't allow
 * @desc Let the player open Battle Formation screen during battle
 * Needs YEP_BattleEngineCore
 * @default true
 *
 * @param enableMenuInBattle
 * @text Enable Battle Command
 * @parent ---General---
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the command battle
 * NO - false     YES - true
 * @default true
 *
 * @param battleCooldown
 * @text Battle Cooldown
 * @parent ---General---
 * @type number
 * @min 0
 * @desc How many turns must the player wait after changing formation
 * @default 1
 * 
 * @param changePartyInBattle
 * @text Change party in battle
 * @parent ---General---
 * @type boolean
 * @on Allow
 * @off Don't allow
 * @desc Let the player change the battle party
 * from the Battle Formation screen during battle
 * @default false
 * 
 * @param battleCenterX
 * @text Battle Center X
 * @parent ---General---
 * @desc Formula or value to get where to reference 
 * with the party member coordinates on battle.
 * @default Graphics.boxWidth * 0.8
 * 
 * @param battleCenterY
 * @text Battle Center Y
 * @parent ---General---
 * @desc Formula or value to get where to reference 
 * with the party member coordinates on battle.
 * @default Graphics.boxHeight * 0.6
 * 
 * @param ---Menu Settings---
 * @default
 * 
 * @param formationOptionName
 * @text Formation Option
 * @parent ---Menu Settings---
 * @type text
 * @desc Text for the option to change formation
 * @default Formation
 * 
 * @param partySetupOptionName
 * @text Party Setup Option
 * @parent ---Menu Settings---
 * @type text
 * @desc Text for the option to change party order
 * @default Change Party
 * 
 * @param finishOptionEval
 * @text Add Finish Option
 * @parent ---Menu Settings---
 * @type boolean
 * @on Show
 * @off Do not show
 * @desc Show option to close the menu
 * If not, can still just use the cancel button
 * @default true
 * 
 * @param finishOptionName
 * @text Finish Option
 * @parent ---Menu Settings---
 * @type text
 * @desc Text for the option to close the menu
 * @default Finish
 * 
 * @param menuUseIcon
 * @text Use Icon or Color
 * @parent ---Menu Settings---
 * @type boolean
 * @on Icon
 * @off Color
 * @desc Use icon or color to show selected formation
 * Icon can use text code in formation names
 * @default true
 * 
 * @param menuIcon
 * @text Selection Icon
 * @parent ---Menu Settings---
 * @type number
 * @min 0
 * @desc Icon Id for when using icon
 * @default 164
 * 
 * @param menuSelectColor
 * @text Selection Color
 * @parent ---Menu Settings---
 * @type text
 * @desc Color for when using color
 * @default #ffff00
 * 
 * @param leftSideWidth
 * @text Formation Choice Width
 * @parent ---Menu Settings---
 * @type number
 * @min 0
 * @desc Width of the Formation Choice Window
 * @default 240
 * 
 * @param partyOrderHeight
 * @text Party Order Height
 * @parent ---Menu Settings---
 * @type number
 * @min 0
 * @desc Height of the party order window
 * @default 144
 * 
 * @param menuCenterX
 * @text Formation Center X
 * @parent ---Menu Settings---
 * @desc Formula or value to get where to reference 
 * with the party member coordinates on the menu.
 * @default width * 0.5
 * 
 * @param menuCenterY
 * @text Formation Center Y
 * @parent ---Menu Settings---
 * @desc Formula or value to get where to reference 
 * with the party member coordinates on the menu.
 * @default height * 0.6
 * 
 * @param menuBackColor
 * @text Empty Color
 * @parent ---Menu Settings---
 * @type text
 * @desc Color for the faces' background
 * @default #202040
 * 
 * @param menuBattlePartyColor
 * @text Battle Party Color
 * @parent ---Menu Settings---
 * @type text
 * @desc Color for the Position when battle member
 * @default #80ff80
 * 
 * @param menuNotBattlePartyColor
 * @text Reserve Party Color
 * @parent ---Menu Settings---
 * @type text
 * @desc Color for the Position when not battle member
 * @default #c08080
 * 
 * @param menuNotBattlePartyText
 * @text Reserve Party Text
 * @parent ---Menu Settings---
 * @type text
 * @desc Text for the Position when not battle member
 * @default R
 * 
 * @help Version 1.00
 * Testers: NeoSoulGamer, HAMMERSTUN, inVictor
 * 
 * Battle Formation plugin, based on version by Ninakoru
 * Battle Formations, based on the Breath of Fire system, affect
 * the player party depending on their position. They also change
 * the positioning on the battle screen.
 * 
 * For example, a n offensive formation that raises attack but
 * lowers defense, or a defensive one that does the opposite.
 * 
 * This plugin needs at least RPG Maker 1.5.0.
 * To be able to change formations mid-battle you need Yanfly's
 * Battle Engine Core.
 * It is compatible with Yanfly's Part System, but if both are used
 * in combat then cooldown may suffer issues.
 * 
 * Plugin Commands:
 *  OpenBattleFormationMenu
 *      Opens the Battle Formation menu. Can be used in battle.
 * 
 *  ChangePartyMax x
 *      Changes the max number of members allowed in the party.
 *      The "x" is the new number for max party members.
 * 
 *  ShowBattleFormationInBattle
 *  HideBattleFormationInBattle
 *      Shows or Hides the Battle Formation option in battle.
 * 
 *  EnableBattleFormationInBattle
 *  DisableBattleFormationInBattle
 *      Enables or disables the Battle Formation option in battle.
 * 
 * To set in Yanfly's Main Menu Manager:
 *  Menu X Name      : YR.BattleFormation.battleFormationCommand
 *      (or you can, you know, write 'Battle Formation')
 *  Menu X Symbol    : battle_formation
 *  Menu X Main Bind : this.commandBattleFormation.bind(this) 
 * 
 */
/*~struct~Formation:
 *
 * @param nameForm
 * @text Name
 * @type text
 * @desc Name of the formation to show on the menu.
 * Can use text codes if menu is set for icon.
 * 
 * @param descForm
 * @text Description
 * @type note
 * @desc Description of the formation to show on menu.
 * Can use text codes.
 * 
 * @param showForm
 * @text Show
 * @type text
 * @desc evaluation if formation should be visible.
 * Can be turned on/off through plugin command.
 * @default true
 * 
 * @param sizeForm
 * @text Party Size
 * @type number
 * @min 1
 * @desc Size of party for the formation.
 * @default 4
 * 
 * @param posForm
 * @text Positions
 * @type struct<FormationPosition>[]
 * @desc The positioning of the battlers.
 * If less battlers than positions, default maker will be used.
 * 
 */
/*~struct~FormationPosition:
 *
 * @param xPos
 * @text X Position
 * @type number
 * @min -9999
 * @max 9999
 * @desc Coordinate relative to the battle formation center.
 * @default 0
 * 
 * @param yPos
 * @text Y position
 * @type number
 * @min -9999
 * @max 9999
 * @desc Coordinate relative to the battle formation center.
 * @default 0
 * 
 * @param statePos
 * @text States
 * @type state[]
 * @desc State added automatically for battler in position.
 * 
 */

var Imported = Imported || {};
Imported.YR_BattleFormation = true;

var YR = YR || {};
YR.BattleFormation = YR.BattleFormation || {};

YR.parameters = PluginManager.parameters('YR_BattleFormation');
YR.BattleFormation.defaultFormation = [];
if (YR.parameters['defaultFormation']) {
    YR.BattleFormation.defaultFormation = JSON.parse(YR.parameters['defaultFormation']);
    for (var i = 0; i < YR.BattleFormation.defaultFormation.length; i++) {
        YR.BattleFormation.defaultFormation[i] = Number(YR.BattleFormation.defaultFormation[i]);
    }
}
YR.BattleFormation.formation = [];
if (YR.parameters['formation']) {
    YR.BattleFormation.formation = JSON.parse(YR.parameters['formation']);
    for (var i = 0; i < YR.BattleFormation.formation.length; i++) {
        YR.BattleFormation.formation[i] = JSON.parse(YR.BattleFormation.formation[i]);
        YR.BattleFormation.formation[i].nameForm = String(YR.BattleFormation.formation[i]['nameForm']);
        YR.BattleFormation.formation[i].descForm = String(YR.BattleFormation.formation[i]['descForm']);
        YR.BattleFormation.formation[i].showForm = String(YR.BattleFormation.formation[i]['showForm']);
        YR.BattleFormation.formation[i].sizeForm = Number(YR.BattleFormation.formation[i]['sizeForm']);
        if (YR.BattleFormation.formation[i]['posForm']) {
            YR.BattleFormation.formation[i].posForm = JSON.parse(YR.BattleFormation.formation[i]['posForm']);
            for (var j = 0; j < YR.BattleFormation.formation[i].posForm.length; j++) {
                YR.BattleFormation.formation[i].posForm[j] = JSON.parse(YR.BattleFormation.formation[i].posForm[j]);
                YR.BattleFormation.formation[i].posForm[j].xPos = Number(YR.BattleFormation.formation[i].posForm[j]['xPos']);
                YR.BattleFormation.formation[i].posForm[j].yPos = Number(YR.BattleFormation.formation[i].posForm[j]['yPos']);
                if (YR.BattleFormation.formation[i].posForm[j]['statePos'].length > 0) {
                    YR.BattleFormation.formation[i].posForm[j].statePos = JSON.parse(YR.BattleFormation.formation[i].posForm[j]['statePos']);
                    for (var k = 0; k < YR.BattleFormation.formation[i].posForm[j].statePos.length; k++) {
                        YR.BattleFormation.formation[i].posForm[j].statePos[k] = Number(YR.BattleFormation.formation[i].posForm[j].statePos[k]);
                    }
                } else YR.BattleFormation.formation[i].posForm[j].statePos = [];
            }
        }
        else YR.BattleFormation.formation[i].posForm = [];
    }
}
YR.BattleFormation.emptyName = String(YR.parameters['emptyName']);
YR.BattleFormation.emptyDesc = String(YR.parameters['emptyDesc']);
YR.BattleFormation.maxBattlerSize = eval(YR.parameters['maxBattlerSize']);
YR.BattleFormation.maxBattlerSize = Number(YR.BattleFormation.maxBattlerSize);
YR.BattleFormation.replaceFormation = eval(YR.parameters['replaceFormation']);
YR.BattleFormation.battleFormationCommand = String(YR.parameters['battleFormationCommand']);
YR.BattleFormation.changeSize = eval(YR.parameters['changeSize']);
YR.BattleFormation.openMenuInBattle = eval(YR.parameters['openMenuInBattle']);
YR.BattleFormation.enableMenuInBattle = eval(YR.parameters['enableMenuInBattle']);
YR.BattleFormation.battleCooldown = Number(YR.parameters['battleCooldown']);
YR.BattleFormation.changePartyInBattle = eval(YR.parameters['changePartyInBattle']);
YR.BattleFormation.battleCenterX = String(YR.parameters['battleCenterX']);
YR.BattleFormation.battleCenterY = String(YR.parameters['battleCenterY']);
YR.BattleFormation.formationOptionName = String(YR.parameters['formationOptionName']);
YR.BattleFormation.partySetupOptionName = String(YR.parameters['partySetupOptionName']);
YR.BattleFormation.finishOptionEval = eval(YR.parameters['finishOptionEval']);
YR.BattleFormation.finishOptionName = String(YR.parameters['finishOptionName']);
YR.BattleFormation.menuUseIcon = eval(YR.parameters['menuUseIcon']);
YR.BattleFormation.menuIcon = Number(YR.parameters['menuIcon']);
YR.BattleFormation.menuSelectColor = String(YR.parameters['menuSelectColor']);
YR.BattleFormation.leftSideWidth = Number(YR.parameters['leftSideWidth']);
YR.BattleFormation.partyOrderHeight = Number(YR.parameters['partyOrderHeight']);
YR.BattleFormation.menuCenterX = String(YR.parameters['menuCenterX']);
YR.BattleFormation.menuCenterY = String(YR.parameters['menuCenterY']);
YR.BattleFormation.menuBackColor = String(YR.parameters['menuBackColor']);
YR.BattleFormation.menuBattlePartyColor = String(YR.parameters['menuBattlePartyColor']);
YR.BattleFormation.menuNotBattlePartyColor = String(YR.parameters['menuNotBattlePartyColor']);
YR.BattleFormation.menuNotBattlePartyText = String(YR.parameters['menuNotBattlePartyText']);



//=============================================================================
// Game_Temp
//=============================================================================

if (!Imported.YEP_PartySystem) {

Game_Temp.prototype.hasStoredBattleSpriteset = function() {
  return this._battleSpriteset;
};

Game_Temp.prototype.storeBattleSpriteset = function() {
  this._battleSpriteset = SceneManager._scene._spriteset;
};

Game_Temp.prototype.restoreBattleSpriteset = function() {
  if (this._battleSpriteset) {
    SceneManager._scene._spriteset = this._battleSpriteset;
    SceneManager._scene.addChild(SceneManager._scene._spriteset);
    this._battleSpriteset = undefined;
  }
};

};

//=============================================================================
// Game_System
//=============================================================================

YR.BattleFormation.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    YR.BattleFormation.Game_System_initialize.call(this);
    this.initBattleFormationSettings();
};

Game_System.prototype.initBattleFormationSettings = function() {
    this._showBattleBattleFormation = YR.BattleFormation.openMenuInBattle;
    this._battleBattleFormationEnabled = YR.BattleFormation.enableMenuInBattle;
};

Game_System.prototype.isShowBattleBattleFormation = function() {
    if (this._showBattleBattleFormation === undefined) this.initBattleFormationSettings();
    return this._showBattleBattleFormation;
};

Game_System.prototype.setShowBattleBattleFormation = function(value) {
    if (this._showBattleBattleFormation === undefined) this.initBattleFormationSettings();
    this._showBattleBattleFormation = value;
};

Game_System.prototype.isBattleBattleFormationEnabled = function() {
    if (this._battleBattleFormationEnabled === undefined) this.initBattleFormationSettings();
    if (this._battleBattleFormationCooldown === undefined) {
      this.resetBattleBattleFormationCooldown();
    }
    if (this._battleBattleFormationCooldown > 0) return false;
    return this._battleBattleFormationEnabled;
};

Game_System.prototype.setBattleBattleFormationEnabled = function(value) {
    if (this._battleBattleFormationEnabled === undefined) this.initBattleFormationSettings();
    this._battleBattleFormationEnabled = value;
};

Game_System.prototype.resetBattleBattleFormationCooldown = function() {
    this._battleBattleFormationCooldown = 0;
};

Game_System.prototype.updateBattleBattleFormationCooldown = function() {
    if (this._battleBattleFormationCooldown === undefined) {
      this.resetBattleBattleFormationCooldown();
    }
    this._battleBattleFormationCooldown--;
};

Game_System.prototype.setBattleBattleFormationCooldown = function() {
    this._battleBattleFormationCooldown = YR.BattleFormation.battleCooldown;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

YR.BattleFormation.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    YR.BattleFormation.Game_Interpreter_pluginCommand.call(this, command, args)
    if (command === 'OpenBattleFormationMenu') this.gotoSceneBattleFormation();
    if (command === 'ChangePartyMax') $gameParty.changeBattleMax(args[0]);
    if (command === 'ShowBattleFormationInBattle') {
      $gameSystem.setShowBattleBattleFormation(true);
    }
    if (command === 'HideBattleFormationInBattle') {
      $gameSystem.setShowBattleBattleFormation(false);
    }
    if (command === 'EnableBattleFormationInBattle') {
      $gameSystem.setBattleBattleFormationEnabled(true);
    }
    if (command === 'DisableBattleFormationInBattle') {
      $gameSystem.setBattleBattleFormationEnabled(false);
    }
};

Game_Interpreter.prototype.gotoSceneBattleFormation = function() {
    if ($gameParty.inBattle()) Scene_Battle.prototype.partyCommandBattleFormation.call(SceneManager._scene);
    else {
        $gameParty.loadActorImages();
        SceneManager.push(Scene_BattleFormation);
    }
};

//=============================================================================
// Game_Party
//=============================================================================

YR.BattleFormation.Game_Party_initialize = Game_Party.prototype.initialize;
Game_Party.prototype.initialize = function() {
    YR.BattleFormation.Game_Party_initialize.call(this);
    this._battleFormation = -1;
    if (!Imported.YEP_PartySystem) {
        this.initBattleMaxSize();
        this.initializeBattleMembers();
    }
};

YR.BattleFormation.Game_Party_setupStartingMembers = Game_Party.prototype.setupStartingMembers;
Game_Party.prototype.setupStartingMembers = function() {
    YR.BattleFormation.Game_Party_setupStartingMembers.call(this);
    if (!Imported.YEP_PartySystem) this.initializeBattleMembers();
    var size = this.battleMembers().length;
    if (YR.BattleFormation.defaultFormation[size-1]) {
        this._battleFormation = YR.BattleFormation.defaultFormation[size-1] -1;
    }
};

Game_Party.prototype.initBattleMaxSize = function() {
    this._BattleMaxSize = YR.BattleFormation.maxBattlerSize;
    this.initializeBattleMembers();
};

Game_Party.prototype.loadActorImages = function() {
    for (var i = 0; i < this.members().length; ++i) {
      var actor = this.members()[i];
      if (!actor) continue;
      ImageManager.loadFace(actor.faceName());
      ImageManager.loadCharacter(actor.characterName());
      ImageManager.loadSvActor(actor.battlerName());
    }
};

Game_Party.prototype.nonBattleMembers = function () {
    return $gameParty.allMembers().filter(function (actor) {
        for (var i = 0; i < $gameParty.battleMembers().length; i++) {
            var bActor = $gameParty.battleMembers()[i];
            if (bActor.index() === actor.index()) {
                return false;
            }
        }
        return true;
    });
}

Game_Party.prototype.resetPositions = function () {
    for (var i = 0; i < this.battleMembers().length; i++) {
        this.battleMembers()[i].battler().setActorHome(i);
    }
};

YR.BattleFormation.Game_Party_addActor = Game_Party.prototype.addActor;
Game_Party.prototype.addActor = function(actorId) {
    YR.BattleFormation.Game_Party_addActor.call(this, actorId);
    if (this._battleMembers.contains(actorId)) return;
    if (!this._battleMembers.contains(0)) return;
    if (!Imported.YEP_PartySystem) {
        var index = this._battleMembers.indexOf(0);
        this._battleMembers[index] = actorId;
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
        this.rearrangeActors();
    }
    if (YR.BattleFormation.defaultFormation[this.battleMembers().length-1]) {
        this._battleFormation = YR.BattleFormation.defaultFormation[this.battleMembers().length-1] -1;
    } else this._battleFormation = -1;
};

YR.BattleFormation.Game_Party_removeActor = Game_Party.prototype.removeActor;
Game_Party.prototype.removeActor = function(actorId) {
    YR.BattleFormation.Game_Party_removeActor.call(this, actorId);
    if (!this._battleMembers.contains(actorId)) return;
    if (!Imported.YEP_PartySystem) {
        var index = this._battleMembers.indexOf(actorId);
        this._battleMembers[index] = 0;
        $gamePlayer.refresh();
        $gameMap.requestRefresh();
        this.rearrangeActors();
    }
    if (YR.BattleFormation.defaultFormation[this.battleMembers().length-1]) {
        this._battleFormation = YR.BattleFormation.defaultFormation[this.battleMembers().length-1] -1;
    } else this._battleFormation = -1;
};

Game_Party.prototype.rearrangeActors = function() {
    if (this._battleMembers === null) this.initializeBattleMembers();
    var battleArray = [];
    for (var i = 0; i < this._battleMembers.length; i++) {
      var actorId = this._battleMembers[i];
      if (actorId === null) continue;
      if ($gameActors.actor(actorId)) battleArray.push(actorId);
    }
    var reserveArray = [];
    for (var i = 0; i < this.members().length; i++) {
        var actorId = this._actors[i];
        if (battleArray.contains(actorId)) continue;
        if ($gameActors.actor(actorId) === null) continue;
        reserveArray.push(actorId);
    }
    this._actors = battleArray.concat(reserveArray);
};

if (!Imported.YEP_PartySystem) {
    
    Game_Party.prototype.changeBattleMax = function(value) {
        this._BattleMaxSize = value;
        this.initializeBattleMembers();
    };
    
    Game_Party.prototype.battleMembers = function() {
        if (this.toInitializeBattleMembers()) this.initializeBattleMembers();
        var battleParty = [];
        for (var i = 0; i < this._battleMembers.length; i++) {
          var actorId = this._battleMembers[i];
          if (battleParty.length > this.maxBattleMembers()) break;
          if (actorId === null) continue;
          if (!$gameActors.actor(actorId)) continue;
          if (!$gameActors.actor(actorId).isAppeared()) continue;
          battleParty.push($gameActors.actor(actorId));
        }
        return battleParty;
    };
    
    Game_Party.prototype.maxBattleMembers = function() {
        if (this._BattleMaxSize === undefined) this.initBattleMaxSize();
        return Math.max(this._BattleMaxSize, 1);
    };
    
    Game_Party.prototype.toInitializeBattleMembers = function() {
        if (this._battleMembers === null) return true;
        if (!this._battleMembers) this.initializeBattleMembers();
        return (this._battleMembers.length !== this.maxBattleMembers());
    };
    
    YR.BattleFormation.Game_Party_setupBattleTestMembers =
        Game_Party.prototype.setupBattleTestMembers;
    Game_Party.prototype.setupBattleTestMembers = function() {
        YR.BattleFormation.Game_Party_setupBattleTestMembers.call(this);
        for (var i = 0; i < $dataActors.length; ++i) {
          var actor = $dataActors[i];
          if (!actor) continue;
          if (this._battleMembers.contains(actor.id)) continue;
          this._actors.push(actor.id);
        }
        this.loadActorImages();
    };
    
    Game_Party.prototype.initializeBattleMembers = function() {
        this._battleMembers = [];
        for (var i = 0; i < this.maxBattleMembers(); ++i) {
          if (this._actors[i]) {
            this._battleMembers.push(this._actors[i]);
          } else {
            this._battleMembers.push(0);
          }
        }
        if ($gamePlayer) $gamePlayer.refresh();
    };
    
    Game_Party.prototype.reconstructActions = function(actorId) {
        for (var i = 0; i < this.members().length; ++i) {
          var member = this.members()[i];
          if (!member) continue;
          if (member.currentAction() && member.currentAction().item()) continue;
          member.makeActions();
        }
    };
    
    YR.BattleFormation.Game_Party_swapOrder = Game_Party.prototype.swapOrder;
    Game_Party.prototype.swapOrder = function(index1, index2) {
        if (index1 >= this.battleMembers().length && index2 >= this.battleMembers().length) YR.BattleFormation.Game_Party_swapOrder.call(this, index1, index2);
        else if (index1 < this.battleMembers().length && index2 < this.battleMembers().length) {
            var temp = this._battleMembers[index1];
            this._battleMembers[index1] = this._battleMembers[index2];
            this._battleMembers[index2] = temp;
        } else if (index2 >= this.battleMembers().length) {
            var temp = this._battleMembers[index1];
            this._battleMembers[index1] = this._actors[index2];
            this._actors[index2] = temp;
            this._actors.splice(index1, 1);
        } else {
            var temp = this._battleMembers[index2];
            this._battleMembers[index2] = this._actors[index1];
            this._actors[index1] = temp;
            this._actors.splice(index2, 1);
        }
        this.rearrangeActors();
        $gamePlayer.refresh();
    };

};

Game_Party.prototype.hasBattleFormation = function() {
    return (this._battleFormation > -1);
};

//=============================================================================
// Game_Troop
//=============================================================================

YR.BattleFormation.Game_Troop_increaseTurn = Game_Troop.prototype.increaseTurn;
Game_Troop.prototype.increaseTurn = function() {
    YR.BattleFormation.Game_Troop_increaseTurn.call(this);
    $gameSystem.updateBattleBattleFormationCooldown();
};

//=============================================================================
// Game_Player
//=============================================================================
if (!Imported.YEP_PartySystem) {

    Game_Followers.prototype.initialize = function() {
        this._visible = $dataSystem.optFollowers;
        this._gathering = false;
        this._data = [];
        var max = $gameParty.maxBattleMembers();
        for (var i = 1; i < max; i++) {
            this._data.push(new Game_Follower(i));
        }
    }
    
};

//=============================================================================
// Sprite_Actor
//=============================================================================

YR.BattleFormation.Sprite_Actor_setActorHome = Sprite_Actor.prototype.setActorHome;
Sprite_Actor.prototype.setActorHome = function (index) {
    if (!$gameParty.hasBattleFormation()) {
        YR.BattleFormation.Sprite_Actor_setActorHome.call(this, index);
    } else {
        var formPos = YR.BattleFormation.formation[$gameParty._battleFormation].posForm[index];
        if (formPos) {
            var centerX = Number(eval(YR.BattleFormation.battleCenterX));
            var centerY = Number(eval(YR.BattleFormation.battleCenterY));
            var x = centerX + formPos.xPos;
            var y = centerY + formPos.yPos;
            this.setHome(x, y);
        } else {
            YR.BattleFormation.Sprite_Actor_setActorHome.call(this, index);
        }
    }
    this._battleFormation = $gameParty._battleFormation;
};

YR.BattleFormation.Sprite_Actor_moveToStartPosition = Sprite_Actor.prototype.moveToStartPosition;
Sprite_Actor.prototype.moveToStartPosition = function() {
    if (BattleManager._bypassMoveToStartLocation) return;
    if (this._battleFormation !== $gameParty._battleFormation) return;
    YR.BattleFormation.Sprite_Actor_moveToStartPosition.call(this);
};

YR.BattleFormation.Sprite_Actor_setBattler = Sprite_Actor.prototype.setBattler;
Sprite_Actor.prototype.setBattler = function(battler) {
    YR.BattleFormation.Sprite_Actor_setBattler.call(this, battler);
    if (battler && this._battleFormation !== $gameParty._battleFormation) this.setActorHome(battler.index());
};

//=============================================================================
// Sprite_BFActor
//=============================================================================

function Sprite_BFActor() {
    this.initialize.apply(this, arguments);
}

Sprite_BFActor.prototype = Object.create(Sprite_Base.prototype);
Sprite_BFActor.prototype.constructor = Sprite_BFActor;

Sprite_BFActor.prototype.initialize = function(battler) {
    Sprite_Base.prototype.initialize.call(this);
    this.initMembers();
    this.setBattler(battler);
};

Sprite_BFActor.prototype.initMembers = function() {
    this.anchor.x = 0.5;
    this.anchor.y = 1;
    this._battler = null;
    this._damages = [];
    this._homeX = 0;
    this._homeY = 0;
    this._offsetX = 0;
    this._offsetY = 0;
    this._targetOffsetX = NaN;
    this._targetOffsetY = NaN;
    this._movementDuration = 0;
    this._selectionEffectCount = 0;
    this._battlerName = '';
    this._motion = null;
    this._motionCount = 0;
    this._pattern = 0;
    this.createShadowSprite();
    this.createMainSprite();
};

Sprite_BFActor.prototype.createMainSprite = function() {
    this._mainSprite = new Sprite_Base();
    this._mainSprite.anchor.x = 0.5;
    this._mainSprite.anchor.y = 1;
    this.addChild(this._mainSprite);
};

Sprite_BFActor.prototype.createShadowSprite = function() {
    this._shadowSprite = new Sprite();
    this._shadowSprite.bitmap = ImageManager.loadSystem('Shadow2');
    this._shadowSprite.anchor.x = 0.5;
    this._shadowSprite.anchor.y = 0.5;
    this._shadowSprite.y = -2;
    this.addChild(this._shadowSprite);
};

Sprite_BFActor.prototype.setBattler = function(battler) {
    this._battler = battler;
    var changed = (battler !== this._actor);
    if (changed) {
        this._actor = battler;
    }
};

Sprite_BFActor.prototype.setHome = function(x, y) {
    this._homeX = x;
    this._homeY = y;
    this.updatePosition();
};

Sprite_BFActor.prototype.update = function() {
    Sprite_Base.prototype.update.call(this);
    if (this._battler) {
        this.updateMain();
    } else {
        this.bitmap = null;
    }
};

Sprite_BFActor.prototype.updatePosition = function() {
    this.x = this._homeX + this._offsetX;
    this.y = this._homeY + this._offsetY;
};

Sprite_BFActor.prototype.updateMain = function() {
    if (this._battler.isSpriteVisible()) {
        this.updateBitmap();
        this.updateFrame();
    }
};

Sprite_BFActor.prototype.updateBitmap = function() {
    Sprite_Battler.prototype.updateBitmap.call(this);
    var name = this._actor.battlerName();
    if (this._battlerName !== name) {
        this._battlerName = name;
        this._mainSprite.bitmap = ImageManager.loadSvActor(name);
    }
};

Sprite_BFActor.prototype.updateFrame = Sprite_Actor.prototype.updateFrame;

//=============================================================================
// Game_Actor
//=============================================================================

YR.BattleFormation.Game_Actor_states = Game_Actor.prototype.states;
Game_Actor.prototype.states = function() {
    var array = YR.BattleFormation.Game_Actor_states.call(this);
    if ($gameParty.inBattle()) {
      this.addFormationStates(array);
      this.sortFormationStates(array);
    }
    return array;
};

YR.BattleFormation.Game_Actor_isStateAffected =
    Game_Actor.prototype.isStateAffected;
Game_Actor.prototype.isStateAffected = function(stateId) {
    if (this.isFormationStateAffected(stateId)) return true;
    return YR.BattleFormation.Game_Actor_isStateAffected.call(this, stateId);
};

Game_Actor.prototype.addFormationStates = function(array) {
    var length = this.getFormationStateData().length;
    for (var i = 0; i < length; ++i) {
      var stateId = this.getFormationStateData()[i];
      var state = $dataStates[stateId];
      if (state) array.push(state);
    }
};

Game_Actor.prototype.formationStates = function() {
    var array = [];
    for (var i = 0; i < this.getFormationStateData().length; ++i) {
      var state = $dataStates[this.getFormationStateData()[i]];
      if (state && array.contains(state)) continue;
      array.push(state);
    }
    return array;
};

Game_Actor.prototype.getFormationStateData = function() {
    var array = [];
    if (!$gameParty.hasBattleFormation()) return array;
    if (YR.BattleFormation.formation[$gameParty._battleFormation].posForm[this.index()]) 
        var source = YR.BattleFormation.formation[$gameParty._battleFormation].posForm[this.index()].statePos;
    else var source = [];
    for (var i = 0; i < source.length; ++i) {
      var stateId = source[i];
      if (!this.meetFormationStateCondition(stateId)) continue;
      array.push(stateId);
    }
    return array;
};

Game_Actor.prototype.meetFormationStateCondition = function(stateId) {
    if (!$gameParty.inBattle()) return false;
    var state = $dataStates[stateId];
    if (!state) return false;
    return true;
};

Game_Actor.prototype.sortFormationStates = function(array) {
    array.sort(function(a, b) {
      var p1 = a.priority;
      var p2 = b.priority;
      if (p1 !== p2) return p2 - p1;
      return a - b;
    });
};

Game_Actor.prototype.isFormationStateAffected = function(stateId) {
    if (!$gameParty.inBattle()) return false;
    return this.getFormationStateData().contains(stateId);
};

if (!Imported.YEP_PartySystem) {

    YR.BattleFormation.Game_Actor_index = Game_Actor.prototype.index;
    Game_Actor.prototype.index = function() {
        if ($gameParty.inBattle()) {
        return $gameParty.battleMembers().indexOf(this);
        } else {
        return YR.BattleFormation.Game_Actor_index.call(this);
        }
    };

};

//=============================================================================
// Window_MenuCommand
//=============================================================================

YR.BattleFormation.Window_MenuCommand_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
    YR.BattleFormation.Window_MenuCommand_addOriginalCommands.call(this);
    if (!YR.BattleFormation.replaceFormation) {
        this.addBattleFormationCommand();
    }  
};

YR.BattleFormation.Window_MenuCommand_addFormationCommand = Window_MenuCommand.prototype.addFormationCommand;
Window_MenuCommand.prototype.addFormationCommand = function () {
    if (YR.BattleFormation.replaceFormation) {
        this.addBattleFormationCommand();
    }
    else {
        YR.BattleFormation.Window_MenuCommand_addFormationCommand.call(this);
    }
};

Window_MenuCommand.prototype.addBattleFormationCommand = function() {
    if (this.needsCommand('battle_formation')) {
        var enabled = this.isFormationEnabled();
        this.addCommand(YR.BattleFormation.battleFormationCommand, 'battle_formation', enabled);
    }
};

//=============================================================================
// Scene_Menu
//=============================================================================

YR.BattleFormation.Scene_Menu_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
    YR.BattleFormation.Scene_Menu_createCommandWindow.call(this);
    this._commandWindow.setHandler('battle_formation', this.commandBattleFormation.bind(this));
};

Scene_Menu.prototype.commandBattleFormation = function() {
    $gameParty.loadActorImages();
    SceneManager.push(Scene_BattleFormation);
};
//=============================================================================
// Battle Engine Core Implementation
//=============================================================================

if (Imported.YEP_BattleEngineCore) {

//=============================================================================
// BattleManager
//=============================================================================

YR.BattleFormation.BattleManager_startBattle = BattleManager.startBattle;
BattleManager.startBattle = function() {
    if (!$gameTemp._formationBattle) {
        YR.BattleFormation.BattleManager_startBattle.call(this);
    }
    $gameTemp._formationBattle = false;
    this._bypassMoveToStartLocation = false;
    BattleManager.refreshAllBattlers();
};

BattleManager.refreshAllBattlers = function() {
    var members = $gameParty.members().concat($gameTroop.members());
    var length = members.length;
    for (var i = 0; i < length; ++i) {
        var member = members[i];
        if (member) member.refresh();
    }
};

if (!Imported.YEP_PartySystem) {

YR.BattleFormation.BattleManager_playBattleBgm = BattleManager.playBattleBgm;
BattleManager.playBattleBgm = function() {
    var restartBgm = true;
    if (YR.BattleFormation.SavedBattleBgm) {
      AudioManager.playBgm(YR.BattleFormation.SavedBattleBgm);
      YR.BattleFormation.SavedBattleBgm = undefined;
      restartBgm = false;
    }
    if (YR.BattleFormation.SavedBattleBgs) {
      AudioManager.playBgs(YR.BattleFormation.SavedBattleBgs);
      YR.BattleFormation.SavedBattleBgs = undefined;
      restartBgm = false;
    }
    if (restartBgm) YR.BattleFormation.BattleManager_playBattleBgm.call(this);
};

};

//=============================================================================
// Game_Unit
//=============================================================================

YR.BattleFormation.Game_Unit_onBattleStart = Game_Unit.prototype.onBattleStart;
Game_Unit.prototype.onBattleStart = function() {
    if ($gameTemp._formationBattle) return;
    YR.BattleFormation.Game_Unit_onBattleStart.call(this);
    $gameSystem.resetBattleBattleFormationCooldown();
};

YR.BattleFormation.Game_Unit_onBattleEnd = Game_Unit.prototype.onBattleEnd;
Game_Unit.prototype.onBattleEnd = function() {
    if ($gameTemp._formationBattle) return;
    YR.BattleFormation.Game_Unit_onBattleEnd.call(this);
    $gameSystem.resetBattleBattleFormationCooldown();
};

//=============================================================================
// Window_Command
//=============================================================================

if (!Imported.YEP_PartySystem) {

Window_Command.prototype.addCommandAt = function(index, name, symbol, en, ext) {
    if (en === undefined) enabled = true;
    if (ext === undefined) ext = null;
    var obj = { name: name, symbol: symbol, enabled: en, ext: ext};
    this._list.splice(index, 0, obj);
};

};

//=============================================================================
// Window_PartyCommand
//=============================================================================

YR.BattleFormation.Window_PartyCommand_makeCommandList =
    Window_PartyCommand.prototype.makeCommandList;
Window_PartyCommand.prototype.makeCommandList = function() {
    YR.BattleFormation.Window_PartyCommand_makeCommandList.call(this);
    this.addBattleFormationCommand();
};

Window_PartyCommand.prototype.addBattleFormationCommand = function() {
    if (!$gameSystem.isShowBattleBattleFormation()) return;
    var index = this.findSymbol('escape');
    var enabled = $gameSystem.isBattleBattleFormationEnabled();
    this.addCommandAt(index, YR.BattleFormation.battleFormationCommand, 'battle_formation', enabled);
};

//=============================================================================
// Spriteset_Battle
//=============================================================================

if (!Imported.YEP_PartySystem) {

    YR.BattleFormation.Spriteset_Battle_createBackground =
        Spriteset_Battle.prototype.createBackground;
    Spriteset_Battle.prototype.createBackground = function() {
        YR.BattleFormation.Spriteset_Battle_createBackground.call(this);
        if (YR.BattleFormation.SavedBackgroundBitmap) {
        var spr = this._backgroundSprite;
        spr.bitmap = YR.BattleFormation.SavedBackgroundBitmap;
        YR.BattleFormation.SavedBackgroundBitmap = undefined;
        }
    };

};

//=============================================================================
// Scene_Map
//=============================================================================

if (!Imported.YEP_PartySystem) {

    YR.BattleFormation.Scene_Map_create = Scene_Map.prototype.create;
    Scene_Map.prototype.create = function() {
        YR.BattleFormation.Scene_Map_create.call(this);
        $gameParty.loadActorImages();
    };

};

//=============================================================================
// Scene_Battle
//=============================================================================

YR.BattleFormation.Scene_Battle_createPartyCommandWindow =
Scene_Battle.prototype.createPartyCommandWindow;
Scene_Battle.prototype.createPartyCommandWindow = function() {
    YR.BattleFormation.Scene_Battle_createPartyCommandWindow.call(this);
    var win = this._partyCommandWindow;
    win.setHandler('battle_formation', this.partyCommandBattleFormation.bind(this));
};

Scene_Battle.prototype.partyCommandBattleFormation = function() {
    BattleManager._bypassMoveToStartLocation = true;
    $gameParty.loadActorImages();
    this.prepareBackground();
    BattleManager._savedActor = BattleManager.actor();
    $gameSystem.setBattleBattleFormationCooldown();
    YR.BattleFormation.SavedBattleBgm = AudioManager.saveBgm();
    YR.BattleFormation.SavedBattleBgs = AudioManager.saveBgs();
    $gameTemp.storeBattleSpriteset();
    SceneManager.push(Scene_BattleFormation);
    BattleManager._phase = 'input';
    $gameTemp._formationBattle = true;
};

YR.BattleFormation.Scene_Battle_createDisplayObjects =
Scene_Battle.prototype.createDisplayObjects;
Scene_Battle.prototype.createDisplayObjects = function() {
    $gameParty.loadActorImages();
    YR.BattleFormation.Scene_Battle_createDisplayObjects.call(this);
};

if (!Imported.YEP_PartySystem) {
    
    YR.BattleFormation.Scene_Battle_createSpriteset =
        Scene_Battle.prototype.createSpriteset;
    Scene_Battle.prototype.createSpriteset = function() {
      if ($gameTemp.hasStoredBattleSpriteset()) {
        $gameTemp.restoreBattleSpriteset();
      } else {
        YR.BattleFormation.Scene_Battle_createSpriteset.call(this);
      }
    };
    
    Scene_Battle.prototype.prepareBackground = function() {
        YR.BattleFormation.SavedBackgroundBitmap = SceneManager._backgroundBitmap;
        this._prevWindowLayer = this._windowLayer.y;
        this._windowLayer.y = Graphics.boxHeight * 495;
        SceneManager.snapForBackground();
        this._windowLayer.y = this._prevWindowLayer;
    };

};

}; // Imported.YEP_BattleEngineCore

//=============================================================================
// Scene_BattleFormation
//=============================================================================

function Scene_BattleFormation() {
    this.initialize.apply(this, arguments);
};

Scene_BattleFormation.prototype = Object.create(Scene_MenuBase.prototype);
Scene_BattleFormation.prototype.constructor = Scene_BattleFormation;

Scene_BattleFormation.prototype.initialize = function() {
    $gameParty.loadActorImages();
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_BattleFormation.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createBattleFormationMenuWindow();
    this.createBattleFormationSelectionWindow();
    this.createBattleFormationPartySetupWindow();
    this.createBattleFormationDescriptionWindow();
};

Scene_BattleFormation.prototype.createBattleFormationMenuWindow = function () {
    var x = 0;
    var y = 0;
    var width = YR.BattleFormation.leftSideWidth;
    var lines = 2;
    var height = Window_Selectable.prototype.fittingHeight(lines);
    if (YR.BattleFormation.finishOptionEval) lines++;
    this._formMenuWindow = new Window_BattleFormationMenu(x, y, width, height);
    this._formMenuWindow.setHandler('formation_setup_ok', this.onFormationSetupOk.bind(this));
    this._formMenuWindow.setHandler('party_setup_ok', this.onPartySetupOk.bind(this));
    this._formMenuWindow.setHandler('cancel', this.commandFinish.bind(this));
    this.addWindow(this._formMenuWindow);
};

Scene_BattleFormation.prototype.createBattleFormationSelectionWindow = function () {
    var x = 0;
    if (this._formMenuWindow) var y = this._formMenuWindow.height;
    else var y = 0;
    var width = YR.BattleFormation.leftSideWidth;
    var height = Graphics.boxHeight - y;
    this._formSelWindow = new Window_BattleFormationSelection(x, y, width, height);
    this._formSelWindow.setHandler('ok', this.onFormationSetupSelect.bind(this));
    this._formSelWindow.setHandler('cancel', this.onFormationSetupCancel.bind(this));
    this.addWindow(this._formSelWindow);
};
Scene_BattleFormation.prototype.createBattleFormationPartySetupWindow = function () {
    var x = YR.BattleFormation.leftSideWidth;
    var y = 0;
    var width = Graphics.boxWidth - x;
    var height = YR.BattleFormation.partyOrderHeight;
    this._formPartyWindow = new Window_BattleFormationPartySetup(x, y, width, height);
    this._formPartyWindow.setHandler('ok', this.onPartySetupSelect.bind(this));
    this._formPartyWindow.setHandler('cancel', this.onPartySetupCancel.bind(this));
    this.addWindow(this._formPartyWindow);
};

Scene_BattleFormation.prototype.createBattleFormationDescriptionWindow = function () {
    var x = YR.BattleFormation.leftSideWidth;
    var y = YR.BattleFormation.partyOrderHeight;
    var width = Graphics.boxWidth - x;
    var height = Graphics.boxHeight - y;
    this._formDescWindow = new Window_BattleFormationDescription(x, y, width, height);
    this.addWindow(this._formDescWindow);
    this._formSelWindow.setHelpWindow(this._formDescWindow);
};

Scene_BattleFormation.prototype.commandFinish = function() {
    if ($gameParty.inBattle()) {
      $gameParty.reconstructActions();
      if (BattleManager._savedActor) {
        BattleManager._actorIndex = BattleManager._savedActor.index();
      }
    }
    this.popScene();
};

Scene_BattleFormation.prototype.onFormationSetupOk = function() {
    this._formSelWindow.activate();
    this._formSelWindow.select(this._formSelWindow._data.indexOf($gameParty._battleFormation));
  };
  
  Scene_BattleFormation.prototype.onFormationSetupSelect = function () {
      this._formSelWindow.selectBattleFormation();
      if (this._formSelWindow.hasChanged()) {
          this._formDescWindow.refresh();
      } 
  }
  
  Scene_BattleFormation.prototype.onFormationSetupCancel = function() {
    this._formMenuWindow.activate();
    this._formSelWindow.deselect();
  };
  
  
  Scene_BattleFormation.prototype.onPartySetupOk = function () {
      this._formPartyWindow.activate();
      if (this._formPartyWindow.index() < 0) this._formPartyWindow.select(0);
  };
  
  Scene_BattleFormation.prototype.onPartySetupSelect = function () {
      this._formPartyWindow.selectSlot();
      if (this._formPartyWindow.hasChanged()) {
          this._formSelWindow.refresh();
          this._formDescWindow.refresh();
      }    
  };
  
  Scene_BattleFormation.prototype.onPartySetupCancel = function () {
      this._formMenuWindow.activate();
      this._formPartyWindow.deselect();
  };

//=============================================================================
// Window_BattleFormationMenu
//=============================================================================

function Window_BattleFormationMenu() {
    this.initialize.apply(this, arguments);
}

Window_BattleFormationMenu.prototype = Object.create(Window_Command.prototype);
Window_BattleFormationMenu.prototype.constructor = Window_BattleFormationMenu;

Window_BattleFormationMenu.prototype.initialize = function(x, y, width, height) {
  this._windowWidth = width;
  this._windowHeight = height;
  Window_Command.prototype.initialize.call(this, x, y);
};

Window_BattleFormationMenu.prototype.makeCommandList = function() {
    var cancelEnabled = this.isCancelEnabled();
    this.addCommand(YR.BattleFormation.formationOptionName, 'formation_setup_ok');
    this.addCommand(YR.BattleFormation.partySetupOptionName, 'party_setup_ok');
    if (YR.BattleFormation.finishOptionEval) this.addCommand(YR.BattleFormation.finishOptionName, 'cancel', cancelEnabled);
}

Window_BattleFormationMenu.prototype.isCancelEnabled = function() {
    return ($gameParty.battleMembers().length >= 1);
};

Window_BattleFormationMenu.prototype.windowWidth = function() {
  return this._windowWidth;
};

//=============================================================================
// Window_BattleFormationSelection
//=============================================================================

function Window_BattleFormationSelection() {
    this.initialize.apply(this, arguments);	
}

Window_BattleFormationSelection.prototype = Object.create(Window_Selectable.prototype);
Window_BattleFormationSelection.prototype.constructor = Window_BattleFormationSelection;

Window_BattleFormationSelection.prototype.initialize = function (x, y, width, height) {
    this._hasChanged = false;
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_BattleFormationSelection.prototype.hasChanged = function () {
    return this._hasChanged;
};

Window_BattleFormationSelection.prototype.selectBattleFormation = function () {
    this._hasChanged = false;
	var currentItem = this._data[this.index()];
	if (!currentItem && currentItem !== 0) return;
    if ($gameParty._battleFormation !== currentItem) {
        $gameParty._battleFormation = currentItem;
        this._hasChanged = true;
		this.refresh();		
	}
	this.activate();
};

Window_BattleFormationSelection.prototype.refresh = function () {
    this._data = this.validFormations();
    if (!this._data.contains($gameParty._battleFormation)) $gameParty._battleFormation = this._data[0];
    Window_Selectable.prototype.refresh.call(this);
}

Window_BattleFormationSelection.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};

Window_BattleFormationSelection.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var formations = YR.BattleFormation.formation;
    if (YR.BattleFormation.menuUseIcon) {
        if (this._data[index] === $gameParty._battleFormation) {
            this.drawIcon(YR.BattleFormation.menuIcon, rect.x + 2, rect.y + 2);
            if (this._data[index] === -1) var text = YR.BattleFormation.emptyName;
            else var text = formations[this._data[index]].nameForm;
            this.drawTextEx(text, rect.x + Window_Base._iconWidth + 4, rect.y);
        }
        else {
            if (this._data[index] === -1) var text = YR.BattleFormation.emptyName;
            else var text = formations[this._data[index]].nameForm;
            this.drawTextEx(text, rect.x + Window_Base._iconWidth + 4, rect.y);
        }
    } else {
        if (this._data[index] === $gameParty._battleFormation) {
            this.changeTextColor(YR.BattleFormation.menuSelectColor);
            if (this._data[index] === -1) var text = YR.BattleFormation.emptyName;
            else var text = formations[this._data[index]].nameForm;
            this.drawText(text, rect.x, rect.y, rect.width);
            this.resetTextColor();
        } else {
            if (this._data[index] === -1) var text = YR.BattleFormation.emptyName;
            else var text = formations[this._data[index]].nameForm;
            this.drawText(text, rect.x, rect.y, rect.width);
        }
    }
}

Window_BattleFormationSelection.prototype.validFormations = function () {
    var array = [];
    var size = $gameParty.battleMembers().length;
    var formations = YR.BattleFormation.formation;
    if (YR.BattleFormation.defaultFormation[size-1] && formations[YR.BattleFormation.defaultFormation[size-1]]) {
        array.push(YR.BattleFormation.defaultFormation[size-1]-1);
    } else array.push(-1);
    for (var i = 0; i < formations.length; i++) {
        if (formations[i].sizeForm === size && eval(formations[i].showForm)) {
            if (array.contains(i)) continue;
            array.push(i);
        }
    }
    return array;
}

Window_BattleFormationSelection.prototype.updateHelp = function() {
    this.setHelpWindowItem(this._data[this.index()]);
    this._helpWindow.refresh();
};

//=============================================================================
// Window_BattleFormationDescription
//=============================================================================

function Window_BattleFormationDescription() {
    this.initialize.apply(this, arguments);
}

Window_BattleFormationDescription.prototype = Object.create(Window_Base.prototype);
Window_BattleFormationDescription.prototype.constructor = Window_BattleFormationDescription;

Window_BattleFormationDescription.prototype.initialize = function (x, y, width, height) {
    this._windowWidth = width;
    this._windowHeight = height;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.centerX = eval(YR.BattleFormation.menuCenterX);
    this.centerX = Number(this.centerX);
    this.centerY = eval(YR.BattleFormation.menuCenterY);
    this.centerY = Number(this.centerY);
    this._item = $gameParty._battleFormation;
    this.refresh();
};

Window_BattleFormationDescription.prototype.windowWidth = function() {
    return this._windowWidth;
};

Window_BattleFormationDescription.prototype.windowHeight = function() {
    return this._windowHeight;
};

Window_BattleFormationDescription.prototype.refresh = function () {
    this.contents.clear();
    this._svActor = this._svActor || [];
    if (this._svActor.length > 0) {
        for (var i = 0; i < this._svActor.length; i++) this.removeChild(this._svActor[i]);
        this._svActor = [];
    }
    
    for (var i = 0; i < $gameParty.battleMembers().length; i++) {
        this._svActor[i] = new Sprite_BFActor($gameParty.battleMembers()[i]);
        var formPos = undefined;
        if (this.item() > -1) formPos = YR.BattleFormation.formation[this.item()].posForm[i];
        if (formPos !== undefined) {
            var x = this.centerX + formPos.xPos;
            var y = this.centerY + formPos.yPos;
        } else {
            var x = this.centerX + ((i - ($gameParty.battleMembers().length/2)) * 32);
            var y = this.centerY + ((i + 1 - ($gameParty.battleMembers().length/2)) * 64 - 22);
        }
        this._svActor[i].setHome(x, y);
    }
    
    this._svActor.sort(function(a, b){return a._homeY - b._homeY})
    
    for (var i = 0; i < this._svActor.length; i++) this.addChild(this._svActor[i]);
    
    if (this.item() > -1) {
        var formationText = eval(YR.BattleFormation.formation[this.item()].descForm);
    } else {
        var formationText = eval(YR.BattleFormation.emptyDesc);
    }
    this.drawTextEx(formationText, 0, 0);
}

Window_BattleFormationDescription.prototype.setItem = function(item) {
    this._item = item;
};

Window_BattleFormationDescription.prototype.item = function() {
    return this._item;
};

//=============================================================================
// Window_BattleFormationPartySetup
//=============================================================================

function Window_BattleFormationPartySetup() {
    this.initialize.apply(this, arguments);
}

Window_BattleFormationPartySetup.prototype = Object.create(Window_Selectable.prototype);
Window_BattleFormationPartySetup.prototype.constructor = Window_BattleFormationPartySetup;

Window_BattleFormationPartySetup.prototype.initialize = function (x, y, width, height) {
  this._hasChanged = false;
  this._selectedIndex = -1;
  Window_Selectable.prototype.initialize.call(this, x, y, width, height);
  this._characterHeight = height - (this.spacing() * 3);
  this._data = this.getActorsForData();
  this.refresh();
};

Window_BattleFormationPartySetup.prototype.getActorSlots = function (maxColItems) {
    var maxPlaceholders = ((!$gameParty.inBattle() || YR.BattleFormation.changePartyInBattle) && YR.BattleFormation.changeSize) ?
        $gameParty.allMembers().length + $gameParty.maxBattleMembers() - 1 :
        $gameParty.maxBattleMembers();
    if ((!$gameParty.inBattle() || YR.BattleFormation.changePartyInBattle) && YR.BattleFormation.changeSize) {
        maxPlaceholders += maxColItems - (maxPlaceholders % maxColItems);
    }
    return maxPlaceholders;
}

Window_BattleFormationPartySetup.prototype.getActorsForData = function () {
    var tmpActor = null;
    var result = [];
    var tmpCounter = 0;
    var nonBattleMembers = $gameParty.nonBattleMembers();
    for (var i = 0; i < this.getActorSlots(this.maxCols()); i++) {
        if (i < $gameParty.maxBattleMembers()) {
            if (Imported.YEP_PartySystem) {
                tmpActor = $gameActors.actor($gameParty._battleMembers[i]);
            }
            else tmpActor = $gameParty.battleMembers()[i];
        }
        else {
            tmpActor = nonBattleMembers[tmpCounter];
            tmpCounter++;
        }
        result.push(tmpActor ? tmpActor : 0);
    }
    return result;
}

Window_BattleFormationPartySetup.prototype.maxCols = function() {
    return Math.ceil(this.width / this.height);
};

Window_BattleFormationPartySetup.prototype.maxRows = function () {
    return Math.ceil(this.getActorSlots(this.maxCols()) / this.maxCols());
}

Window_BattleFormationPartySetup.prototype.maxItems = function() {
    return this.getActorSlots(this.maxCols());
};

Window_BattleFormationPartySetup.prototype.itemHeight = function() {
    return this._characterHeight;
};

Window_BattleFormationPartySetup.prototype.hasChanged = function () {
    return this._hasChanged;
};

Window_BattleFormationPartySetup.prototype.isBattleIndex = function (index) {
    return index < $gameParty.maxBattleMembers()
};

Window_BattleFormationPartySetup.prototype.isSelected = function (index) {
    return this._selectedIndex === index;
}

Window_BattleFormationPartySetup.prototype.deselect = function () {
    if (this._selectedIndex !== -1) {
        this._selectedIndex = -1;
        this.refresh();
    };
    Window_Selectable.prototype.deselect.call(this);
};

Window_BattleFormationPartySetup.prototype.drawItem = function(index) {
    var actor = this._data[index];
    var rect = this.itemRect(index);

    if (this.isSelected(index)) {
        var color = this.pendingColor();
        this.changePaintOpacity(false);
        this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
        this.changePaintOpacity(true);
    }

    rect.x += this.textPadding() / 2;
    rect.y += this.textPadding() / 2;
    rect.width -= this.textPadding();
    rect.height -= this.textPadding();
    
    var color = YR.BattleFormation.menuBackColor;
    this.changePaintOpacity(false);
    this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
    this.changePaintOpacity(true);
    if (actor) {
        this.drawActorFace(actor, rect.x, rect.y, rect.width, rect.height);
        this.drawActorName(actor, rect.x, (rect.y + rect.height - this.lineHeight()), rect.width);
    }
    this.drawPosition(index, rect);
}

Window_BattleFormationPartySetup.prototype.drawPosition = function (index, rect) {
    var color = this.isBattleIndex(index) ? YR.BattleFormation.menuBattlePartyColor : YR.BattleFormation.menuNotBattlePartyColor;
    var posX = rect.x + Math.floor(rect.width * 3 / 4);
    var posY = rect.y;
    var widthX = rect.width - Math.floor(rect.width * 3 / 4);
    var widthY = this.lineHeight() - this.textPadding() * 2;
    this.changePaintOpacity(false);
    this.contents.fillRect(posX, posY, widthX, widthY, color);
    this.changePaintOpacity(true);
    color = this.systemColor();
    var posText = this.isBattleIndex(index) ? index + 1 : YR.BattleFormation.menuNotBattlePartyText;
    this.drawText(" " + posText + " ", posX, posY - this.textPadding(), widthX, widthY, color);
    this.resetFontSettings();
}

Window_BattleFormationPartySetup.prototype.getActorIdArray = function () {
    var returnArray = [];
    for (var i = 0; i < this._data.length; i++) {
        var curItem = this._data[i];
        if (curItem !== 0) {
            returnArray.push(curItem.actorId())
        }
    }
    return returnArray;
}

Window_BattleFormationPartySetup.prototype.selectSlot = function () {
    this._hasChanged = false;
    if (this._selectedIndex === -1) {
        if (this.index() > $gameParty.maxBattleMembers() || 
            (!$gameParty._battleMembers[this.index()] || (!Imported.YEP_PartySystem || !$gameActors.actor($gameParty._battleMembers[this.index()])._locked))) {
            this._selectedIndex = this.index();
        }
    }
    else if (this._selectedIndex === this.index()) {
        this._selectedIndex = -1;
    }
    else {
        if (!$gameParty._battleMembers[this.index()] || (!Imported.YEP_PartySystem || !$gameActors.actor($gameParty._battleMembers[this.index()])._locked)) {
            if (this.index() < $gameParty.maxBattleMembers() && this._selectedIndex < $gameParty.maxBattleMembers()) {
                if (Imported.YEP_PartySystem || (this.index() < $gameParty.battleMembers().length && this._selectedIndex < $gameParty.battleMembers().length)) {
                    this._hasChanged = true;
                    $gameParty._actors.splice(1, $gameParty._actors.indexOf( $gameParty._battleMembers[this.index()]))
                    $gameParty._actors.splice(1, $gameParty._actors.indexOf( $gameParty._battleMembers[this._selectedIndex]))
                    var temp = $gameParty._battleMembers[this.index()];
                    $gameParty._battleMembers[this.index()] = $gameParty._battleMembers[this._selectedIndex];
                    $gameParty._battleMembers[this._selectedIndex] = temp;
                    $gameParty.rearrangeActors()
                    this._data = this.getActorsForData();
                    this._selectedIndex = -1;
                }
            } else {
                if ((this.index() >= $gameParty.maxBattleMembers()) && (this._selectedIndex >= $gameParty.maxBattleMembers())) {
                    var index1 = this.index() - ($gameParty.maxBattleMembers() - $gameParty.battleMembers().length);
                    var index2 = this._selectedIndex - ($gameParty.maxBattleMembers() - $gameParty.battleMembers().length);
                    var temp = $gameParty._actors[index1];
                    $gameParty._actors[index1] = $gameParty._actors[index2];
                    $gameParty._actors[index2] = temp;
                    $gameParty.rearrangeActors();
                    this._data = this.getActorsForData();
                    this._selectedIndex = -1;
                } else if ((this.index() >= $gameParty.maxBattleMembers() || (!$gameParty._battleMembers[this.index()] || (!Imported.YEP_PartySystem || !$gameActors.actor($gameParty._battleMembers[this.index()])._required))) &&
                (this._selectedIndex >= $gameParty.maxBattleMembers() || (!$gameParty._battleMembers[this._selectedIndex] || (!Imported.YEP_PartySystem || !$gameActors.actor($gameParty._battleMembers[this._selectedIndex])._required)))) {
                    this._hasChanged = true;
                    if (this.index() < $gameParty.maxBattleMembers()) {
                        var index1 = this.index();
                        var index2 = Math.min(this._selectedIndex - ($gameParty.maxBattleMembers() - $gameParty.battleMembers().length), $gameParty.members().length);
                    } else {
                        var index1 = this._selectedIndex;
                        var index2 = Math.min(this.index() - ($gameParty.maxBattleMembers() - $gameParty.battleMembers().length), $gameParty.members().length);
                    }
                    var temp1 = $gameParty._battleMembers[index1];
                    var temp2 = $gameParty._actors[index2];
                    if (!temp2) {
                        if (Imported.YEP_PartySystem) {
                            $gameParty._battleMembers[index1] = 0;
                        }
                        else {
                            $gameParty._battleMembers.splice($gameParty._battleMembers.indexOf(temp1), 1);
                            $gameParty._battleMembers.push(0);
                        }
                        $gameParty._actors.splice($gameParty._actors.indexOf(temp1), 1)
                        $gameParty._actors.push(temp1);
                    }
                    else {
                        $gameParty._battleMembers[index1] = temp2;
                        $gameParty._actors[$gameParty._actors.indexOf(temp2)] = temp1;
                        $gameParty._actors.splice($gameParty._actors.indexOf(temp1), 1)
                    }
                    $gameParty.rearrangeActors();
                    this._data = this.getActorsForData();
                    this._selectedIndex = -1;
                }
            }
        }
    };

    this.refresh();
    this.activate();
};

//=============================================================================
// YEP_PartySystem
//=============================================================================

if (Imported.YEP_PartySystem) {

    YR.BattleFormation.Scene_Party_initialize = Scene_Party.prototype.initialize;
    Scene_Party.prototype.initialize = function() {
        YR.BattleFormation.Scene_Party_initialize.call(this);
        this._originalBattleMembersLength = $gameParty.battleMembers().length;
    };
    
    YR.BattleFormation.Scene_Party_commandFinish = Scene_Party.prototype.commandFinish;
    Scene_Party.prototype.commandFinish = function() {
        if (this._originalBattleMembersLength !== $gameParty.battleMembers().length) {
            if (YR.BattleFormation.defaultFormation[$gameParty.battleMembers().length-1]) {
                $gameParty._battleFormation = YR.BattleFormation.defaultFormation[$gameParty.battleMembers().length-1] -1;
            } else $gameParty._battleFormation = -1;
        }
        YR.BattleFormation.Scene_Party_commandFinish.call(this);
    };

}