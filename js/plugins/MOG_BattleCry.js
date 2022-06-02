//=============================================================================
// MOG_BattleCry.js
//=============================================================================

/*:
 * @plugindesc (v1.3) Adiciona vozes na batalha.
 * @author Moghunter
 *
 * @param Volume
 * @desc Definição do volume.
 * @default 120 
 * 
 * @help  
 * =============================================================================
 * +++ MOG - Battle Cry (v1.3) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Adiciona vozes na batalha (ação, dano, vitória,etc...)
 * Para definir as vozes é necessário editar o plugin manualmente.
 * A edição do plugin deve ser feita a partir da linha 70.
 *
 * =============================================================================
 * HISTÓRICO
 * =============================================================================
 * (v1.3) Compatibilidade com MOG Battle Result.  
 * (v1.2) Compatibilidade com MOG Battle Transitions. 
 * (v1.1) Corrigido o bug de não mover o personagem na hora da ação.
 */

//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================

    // Não modifique essa parte.
    // ☢CAUTION!!☢ Don't Touch.^_^ ----------------------------------------
　　var Imported = Imported || {};
　　Imported.MOG_BattleCry = true;
　　var Moghunter = Moghunter || {}; 	
	Moghunter.parameters = PluginManager.parameters('MOG_BattleCry');
	Moghunter.v_volume = Number(Moghunter.parameters['Volume'] || 100);
    Moghunter.v_actor_start = [];
	Moghunter.v_actor_turn = [];
	Moghunter.v_actor_default_action = [];
	Moghunter.v_actor_skill = [];
	Moghunter.v_actor_item = [];
	Moghunter.v_actor_damage = [];
	Moghunter.v_actor_evaded = [];
	Moghunter.v_actor_dead = [];
    Moghunter.v_actor_recover = [];
	Moghunter.v_actor_counter = [];
	Moghunter.v_actor_reflection = [];
	Moghunter.v_actor_victory = [];
	Moghunter.v_actor_levelup = [];
	Moghunter.v_actor_escape = [];
	Moghunter.v_enemy_default_action = [];
	Moghunter.v_enemy_damage = [];
	Moghunter.v_enemy_evaded = [];
	Moghunter.v_enemy_counter = [];
	Moghunter.v_enemy_reflection = [];	
	Moghunter.v_enemy_dead = [];
    Moghunter.v_enemy_recover = [];
	Moghunter.v_enemy_skill = [];
    // ☢CAUTION!!☢ Don't Touch.^_^ ----------------------------------------
	
	
	
	
	// SETUP ----------------------------------------------------------------
	// Exemplo de configuração geral, o modo de configurar é igual para todas 
	// ações.
	//
	// Moghunter.v_actor_start[A] = [B,B,B,B...]
	//
	// A - Actor ID 
	// B - File Name
	//
	// -----------------------------------------------------------------------
	
	// -----------------------------------------------------------------------
	// ACTOR - BATTLE START
	// -----------------------------------------------------------------------
	Moghunter.v_actor_start[1] = ["Voice_Zemi_02before","Voice_Zemi_03before","Voice_Zemi_05before","Voice_Zemi_06before"];
	Moghunter.v_actor_start[2] = ["Voice_B.W._01before","Voice_B.W._02before","Voice_B.W._03before","Voice_B.W._04before"];
	Moghunter.v_actor_start[3] = ["Voice_Aiq_02before","Voice_Aiq_03before","Voice_Aiq_05before","Voice_Aiq_06before"];
	Moghunter.v_actor_start[4] = ["Voice_Ani_01before","Voice_Ani_02before","Voice_Ani_03before","Voice_Ani_04before"];
	Moghunter.v_actor_start[5] = ["Voice_Uqi_01before","Voice_Uqi_03before","Voice_Uqi_05before"];
	Moghunter.v_actor_start[6] = ["Voice_Ina_01before","Voice_Ina_02before","Voice_Ina_03before"];
	Moghunter.v_actor_start[7] = ["Voice_Lear_01before","Voice_Lear_02before"];
	Moghunter.v_actor_start[9] = ["Voice_Uqi_01before","Voice_Uqi_03before","Voice_Uqi_05before"];
	// -----------------------------------------------------------------------
	// ACTOR - BATTLE TURN
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_turn[1] = ["Voice_Zemi_11attack","Voice_Zemi_20avoid","Voice_Zemi_22avoid"];
	Moghunter.v_actor_turn[2] = ["Voice_B.W._29win","Voice_B.W._22avoid"];
	Moghunter.v_actor_turn[3] = ["Voice_Aiq_12attack","Voice_Aiq_17damage","Voice_Aiq_21avoid"];
	Moghunter.v_actor_turn[4] = ["Voice_Ani_02before","Voice_Ani_03before","Voice_Ani_07attack"];
	Moghunter.v_actor_turn[5] = ["Voice_Uqi_20avoid","Voice_Uqi_21avoid","Voice_Uqi_28win"];
	Moghunter.v_actor_turn[6] = ["Voice_Ina_01before","Voice_Ina_03before"];
	Moghunter.v_actor_turn[7] = ["Voice_Lear_01before","Voice_Lear_02before"];
	Moghunter.v_actor_turn[9] = ["Voice_Uqi_20avoid","Voice_Uqi_21avoid","Voice_Uqi_28win"];
	// -----------------------------------------------------------------------
	// ACTOR - DEFAULT ACTION (Skill/ITEM)
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_default_action[1] = ["Voice_Zemi_07attack","Voice_Zemi_08attack"];
	Moghunter.v_actor_default_action[2] = ["Voice_B.W._07attack","Voice_B.W._08attack","Voice_B.W._09attack"];
	Moghunter.v_actor_default_action[3] = ["Voice_Aiq_07attack","Voice_Aiq_08attack"];
	Moghunter.v_actor_default_action[4] = ["Voice_Ani_05attack","Voice_Ani_06attack"];
	Moghunter.v_actor_default_action[5] = ["Voice_Uqi_06attack","Voice_Uqi_07attack","Voice_Uqi_08attack"];
	Moghunter.v_actor_default_action[6] = ["Voice_Ina_04attack","Voice_Ina_05attack"];
	Moghunter.v_actor_default_action[7] = ["Voice_Lear_04attack","Voice_Lear_05attack","Voice_Lear_06attack", "Voice_Lear_03before"];
	Moghunter.v_actor_default_action[9] = ["Voice_Uqi_06attack","Voice_Uqi_07attack","Voice_Uqi_08attack"];
	// -----------------------------------------------------------------------
	// ACTOR - SKILL
	// -----------------------------------------------------------------------	
	// Moghunter.v_actor_skill[A] = {B:[C,C,C,C,...] }
	// 
	// A - Actor ID
	// B - Skill ID
	// C - File Name
	// -----------------------------------------------------------------------	
    Moghunter.v_actor_skill[1] = {
		 70:["13_priest_attack"] // 
	};
	Moghunter.v_actor_skill[2] = {
		 71:["V_ACT4_SKILL_2"]
    	};
	Moghunter.v_actor_skill[3] = {
		 72:["V_ACT2_SKILL_1"]
	};
	Moghunter.v_actor_skill[4] = {
		 73:["V_ACT3_SKILL_3","V_ACT3_SKILL_9"]
	};
	Moghunter.v_actor_skill[5] = {
		 74:["V_ACT2_SKILL_8"]
	};
	Moghunter.v_actor_skill[6] = {
		 75:["V_ACT3_SKILL_3","V_ACT3_SKILL_9"]
	};
	// -----------------------------------------------------------------------
	// ACTOR - DAMAGE
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_damage[1] = ["Voice_Zemi_14damage","Voice_Zemi_15damage"];
	Moghunter.v_actor_damage[2] = ["Voice_B.W._14damage","Voice_B.W._15damage","Voice_B.W._16damage","Voice_B.W._17damage"];
	Moghunter.v_actor_damage[3] = ["Voice_Aiq_19damage","Voice_Aiq_14damage","Voice_Aiq_15damage","Voice_Aiq_16damage"];
	Moghunter.v_actor_damage[4] = ["Voice_Ani_11damage","Voice_Ani_12damage"];
	Moghunter.v_actor_damage[5] = ["Voice_Uqi_13damage","Voice_Uqi_14damage","Voice_Uqi_15damage"];
	Moghunter.v_actor_damage[6] = ["Voice_Ina_11damage","Voice_Ina_10damage"];
	Moghunter.v_actor_damage[7] = ["Voice_Lear_11damage","Voice_Lear_10damage"];
	Moghunter.v_actor_damage[9] = ["Voice_Uqi_13damage","Voice_Uqi_14damage","Voice_Uqi_15damage"];
	// -----------------------------------------------------------------------
	// ACTOR - RECOVER
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_recover[1] = ["Voice_Zemi_32win"];
	Moghunter.v_actor_recover[2] = ["Voice_B.W._32win","Voice_B.W._27down"];
	Moghunter.v_actor_recover[3] = ["Voice_Aiq_31win","Voice_Aiq_13attack"];
	Moghunter.v_actor_recover[4] = ["Voice_Ani_01before","Voice_Ani_03before"];
	Moghunter.v_actor_recover[5] = ["Voice_Uqi_31win","Voice_Uqi_25down"];
	Moghunter.v_actor_recover[6] = ["Voice_Ina_12avoid","Voice_Ina_01before"];
	Moghunter.v_actor_recover[6] = ["Voice_Lear_01before"];
	Moghunter.v_actor_recover[9] = ["Voice_Uqi_31win","Voice_Uqi_25down"];
	// -----------------------------------------------------------------------
	// ACTOR - DEAD
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_dead[1] = ["Voice_Zemi_27down","Voice_Zemi_24down","Voice_Zemi_26down"];
	Moghunter.v_actor_dead[2] = ["Voice_B.W._23down","Voice_B.W._24down"];
	Moghunter.v_actor_dead[3] = ["Voice_Aiq_23down","Voice_Aiq_27down"];
	Moghunter.v_actor_dead[4] = ["Voice_Ani_15down","Voice_Ani_16down"];
	Moghunter.v_actor_dead[5] = ["Voice_Uqi_22down","Voice_Uqi_26down"];
	Moghunter.v_actor_dead[6] = ["Voice_Ina_15down","Voice_Ina_16down"];
	Moghunter.v_actor_dead[7] = ["Voice_Lear_14down"];
	Moghunter.v_actor_dead[9] = ["Voice_Uqi_22down","Voice_Uqi_26down"];
	// -----------------------------------------------------------------------
	// ACTOR - VICTORY
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_victory[1] = ["Voice_Zemi_28win","Voice_Zemi_29win","Voice_Zemi_31win"];
	Moghunter.v_actor_victory[2] = ["Voice_B.W._29win","Voice_B.W._28win"];
	Moghunter.v_actor_victory[3] = ["Voice_Aiq_28win","Voice_Aiq_31win"];
	Moghunter.v_actor_victory[4] = ["Voice_Ani_17win"];
	Moghunter.v_actor_victory[5] = ["Voice_Uqi_30win","Voice_Uqi_27win"];
	Moghunter.v_actor_victory[6] = ["Voice_Ina_17win","Voice_Ina_06attack"];
	Moghunter.v_actor_victory[7] = ["Voice_Lear_15win"];
	Moghunter.v_actor_victory[9] = ["Voice_Uqi_30win","Voice_Uqi_27win"];
	// -----------------------------------------------------------------------
	// ACTOR - LEVEL UP
	// -----------------------------------------------------------------------		
	Moghunter.v_actor_levelup[1] = ["Voice_Zemi_06before","Voice_Zemi_13attack"];
	Moghunter.v_actor_levelup[2] = ["Voice_B.W._04before","Voice_B.W._30win"];
	Moghunter.v_actor_levelup[3] = ["Voice_Aiq_29win"];
	Moghunter.v_actor_levelup[4] = ["Voice_Ani_01before"];
	Moghunter.v_actor_levelup[5] = ["Voice_Uqi_29win"];
	Moghunter.v_actor_levelup[6] = ["Voice_Ina_03before"];	
	Moghunter.v_actor_levelup[7] = ["Voice_Lear_15win"];	
	Moghunter.v_actor_levelup[9] = ["Voice_Uqi_29win"];
	// -----------------------------------------------------------------------
	// ENEMY - DEFAULT ACTION
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_default_action[900] = ["P1_Action_01","P1_Action_02","P1_Action_03"];
	Moghunter.v_enemy_default_action[901] = ["P2_Action_01","P2_Action_02","P2_Action_03"];
	// -----------------------------------------------------------------------
	// ENEMY - SKILL
	// -----------------------------------------------------------------------	
    Moghunter.v_enemy_skill[7] = {
		 90:["Cel_Attack_02","Cel_Attack_08"],
		 91:["Cel_Attack_01"],
	     92:["Cel_Attack_03"],
		 93:["Cel_Attack_04"]		 
	};
	Moghunter.v_enemy_skill[901] = {1:["P2_Action_04","P2_Action_05","P2_Action_06"]};	
	// -----------------------------------------------------------------------
	// ENEMY - DAMAGE
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_damage[903] = ["Cel_Damage1","Cel_Damage2"];
	Moghunter.v_enemy_damage[901] = ["P2_Damage_01","P2_Damage_02","P2_Damage_03"];
	// -----------------------------------------------------------------------
	// ENEMY - EVADED  &   MISS
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_evaded[900] = ["P1_Evade_01"];	
	Moghunter.v_enemy_evaded[901] = ["P1_Evade_01"];
	// -----------------------------------------------------------------------
	// ENEMY - COUNTER
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_counter[900] = ["P1_Counter_01"];
	Moghunter.v_enemy_counter[901] = ["P2_Counter_01"];
	// -----------------------------------------------------------------------
	// ENEMY - REFLECTION
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_reflection[900] = ["P1_Reflection_01"];
	Moghunter.v_enemy_reflection[901] = ["P2_Reflection_01"];
	// -----------------------------------------------------------------------
	// ENEMY - RECOVER
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_recover[900] = ["P1_Recover_01","P1_Recover_02"];
	Moghunter.v_enemy_recover[901] = ["P2_Recover_01","P2_Recover_02"];
	// -----------------------------------------------------------------------
	// ENEMY - DEAD
	// -----------------------------------------------------------------------		
	Moghunter.v_enemy_dead[900] = ["P1_Dead_01","P1_Dead_02"];
	Moghunter.v_enemy_dead[901] = ["P2_Dead_01"];	
  
  
  
  
  
//=============================================================================
// ** Sound Manager
//=============================================================================	

//==============================
// * select Voice
//==============================
SoundManager.selectVoice = function(voices){ 
   if (!voices) {return};
   if (voices.length === 0) {return};
   var voiceIndex = Math.randomInt(voices.length);
   var fileName = voices[voiceIndex];
   this.playVoice(fileName);
};

//==============================
// * Play Voice
//==============================
SoundManager.playVoice = function(fileName){
   var se = {};
   se.name = fileName;
   se.pitch = 100;
   se.volume = Moghunter.v_volume;
   AudioManager.playSe(se);
};   
  
//=============================================================================
// ** BattleManager
//=============================================================================	

//================================
// ** Random Actor
//================================
BattleManager.randomActor = function() {
    var actorIndex = Math.randomInt($gameParty.aliveMembers().length);
    return $gameParty.aliveMembers()[actorIndex];
};

//==================================
// ** Start Battle
//==================================
var _alias_mog_bmngr_startBattle = BattleManager.startBattle;
BattleManager.startBattle = function() {
     _alias_mog_bmngr_startBattle.call(this);
	 if (!Imported.MOG_BattleTransitions || 
	      (Imported.MOG_BattleTransitions && $gameSystem._treType[1] === -1)) {
	     var actor = this.randomActor();
        if (actor) {SoundManager.selectVoice(actor._v_start)};
     };
};

//==================================
// ** Process Victory
//==================================
var _alias_mog_bcry_processVictory = BattleManager.processVictory;
BattleManager.processVictory = function() {
	 var actor = this.randomActor();
     if (actor) {SoundManager.selectVoice(actor._v_victory)};	
     _alias_mog_bcry_processVictory.call(this);	 
};

//==================================
// ** Process Escape
//==================================
var _alias_mog_bcry_processEscape = BattleManager.processEscape;
BattleManager.processEscape = function() {
	 var actor = this.randomActor();
     if (actor) {SoundManager.selectVoice(actor._v_escape)};		
	 _alias_mog_bcry_processEscape.call(this);	 
};

//=============================================================================
// ** Game Battler
//=============================================================================

//==============================
// * InitMembers
//==============================
var _alias_mog_batcry_gbattler_initMembers = Game_Battler.prototype.initMembers;
Game_Battler.prototype.initMembers = function() {
    _alias_mog_batcry_gbattler_initMembers.call(this);
    this.battleCrySetup();
};

//==============================
// * Battle Cry Setup
//==============================
Game_Battler.prototype.battleCrySetup = function() {
	this._v_start = [];
	this._v_turn = [];
	this._v_default_action = [];
	this._v_damage = [];
	this._v_evaded = [];
	this._v_counter = [];
	this._v_reflection = [];
	this._v_dead = [];
	this._v_recover = [];
	this._v_escape = [];
	this._v_victory = [];
	this._v_levelup = [];
};

//==============================
// * Battle Cry Setup Actor
//==============================
Game_Battler.prototype.battleCrySetupActor = function() {
	if (Moghunter.v_actor_start[this._actorId]) {this._v_start = Moghunter.v_actor_start[this._actorId]}; 
	if (Moghunter.v_actor_turn[this._actorId]) {this._v_turn = Moghunter.v_actor_turn[this._actorId]};
	if (Moghunter.v_actor_default_action[this._actorId]) {
		this._v_default_action = Moghunter.v_actor_default_action[this._actorId]};
	if (Moghunter.v_actor_damage[this._actorId]) {this._v_damage = Moghunter.v_actor_damage[this._actorId]};
	if (Moghunter.v_actor_evaded[this._actorId]) {this._v_evaded = Moghunter.v_actor_evaded[this._actorId]};
	if (Moghunter.v_actor_counter[this._actorId]) {this._v_counter = Moghunter.v_actor_counter[this._actorId]};
	if (Moghunter.v_actor_reflection[this._actorId]) {this._v_reflection = Moghunter.v_actor_reflection[this._actorId]};
	if (Moghunter.v_actor_dead[this._actorId]) {this._v_dead = Moghunter.v_actor_dead[this._actorId]};
	if (Moghunter.v_actor_recover[this._actorId]) {this._v_recover = Moghunter.v_actor_recover[this._actorId]};
	if (Moghunter.v_actor_escape[this._actorId]) {this._v_escape = Moghunter.v_actor_escape[this._actorId]};
	if (Moghunter.v_actor_victory[this._actorId]) {this._v_victory = Moghunter.v_actor_victory[this._actorId]};
	if (Moghunter.v_actor_levelup[this._actorId]) {this._v_levelup = Moghunter.v_actor_levelup[this._actorId]};
};

//==============================
// * Battle Cry Setup Enemy
//==============================
Game_Battler.prototype.battleCrySetupEnemy = function() {
	if (Moghunter.v_enemy_default_action[this._enemyId]) {
		this._v_default_action = Moghunter.v_enemy_default_action[this._enemyId]};
	if (Moghunter.v_enemy_damage[this._enemyId]) {this._v_damage = Moghunter.v_enemy_damage[this._enemyId]};
	if (Moghunter.v_enemy_evaded[this._enemyId]) {this._v_evaded = Moghunter.v_enemy_evaded[this._enemyId]};
	if (Moghunter.v_enemy_counter[this._enemyId]) {this._v_counter = Moghunter.v_enemy_counter[this._enemyId]};
	if (Moghunter.v_enemy_reflection[this._enemyId]) {this._v_reflection = Moghunter.v_enemy_reflection[this._enemyId]};
	if (Moghunter.v_enemy_dead[this._enemyId]) {this._v_dead = Moghunter.v_enemy_dead[this._enemyId]};
	if (Moghunter.v_enemy_recover[this._enemyId]) {this._v_recover = Moghunter.v_enemy_recover[this._enemyId]};
};

//===============================
// ** PerfotmAction
//===============================
var _alias_mog_bcry_performActionStart = Game_Battler.prototype.performActionStart;
Game_Battler.prototype.performActionStart = function(action) {
   if (action) {this.playVoiceAction(action)};
   _alias_mog_bcry_performActionStart.call(this, action);
};

//===============================
// ** play Voice Action
//===============================
Game_Battler.prototype.playVoiceAction = function(action) {
     var actionID = action.item().id
	 if (this.isActor()) {
		 if (action.isSkill() && Moghunter.v_actor_skill[this._actorId] && 
		     Moghunter.v_actor_skill[this._actorId][actionID]) {
    		 SoundManager.selectVoice(Moghunter.v_actor_skill[this._actorId][actionID]);
			 return;
		 } else if (action.isItem() && Moghunter.v_actor_item[this._actorId] &&
		     Moghunter.v_actor_item[this._actorId][actionID]) {
			 SoundManager.selectVoice(Moghunter.v_actor_item[this._actorId][actionID]); 
			 return;
		 };
	 } else if (this.isEnemy()) {
		 if (Moghunter.v_enemy_skill[this._enemyId] && Moghunter.v_enemy_skill[this._enemyId][actionID]) {
    		 SoundManager.selectVoice(Moghunter.v_enemy_skill[this._enemyId][actionID]);
			 return;
		 };		 
	 };
	  SoundManager.selectVoice(this._v_default_action);
};

//==============================
// ** perform Counter
//==============================
var _mog_btcry_gbat_performCounter = Game_Battler.prototype.performCounter;
Game_Battler.prototype.performCounter = function() {
    _mog_btcry_gbat_performCounter.call(this);
    SoundManager.selectVoice(this._v_counter);	
};


//==============================
// ** perform Reflection
//==============================
var _mog_btcry_gbat_performReflection = Game_Battler.prototype.performReflection;
Game_Battler.prototype.performReflection = function() {
	_mog_btcry_gbat_performReflection.call(this);
    SoundManager.selectVoice(this._v_reflection);
};

//=============================================================================
// ** Game Actor
//=============================================================================	

//==============================
// * Setup
//==============================
var _mog_bcry_gact_setup = Game_Actor.prototype.setup;
Game_Actor.prototype.setup = function(actorId) {
	_mog_bcry_gact_setup.call(this,actorId);
	this.battleCrySetupActor();
};

//=============================================================================
// ** Game Enemy
//=============================================================================	

//==============================
// * Setup
//==============================
var _mog_bcry_gemy_setup = Game_Enemy.prototype.setup; 
Game_Enemy.prototype.setup = function(enemyId, x, y) {
	_mog_bcry_gemy_setup.call(this,enemyId, x, y);
	this.battleCrySetupEnemy();
};

//=============================================================================
// ** Scene Battle
//=============================================================================	

//==============================
// * select Voice
//==============================
var _alias_mog_bcry_scbat_start = Scene_Battle.prototype.start;
Scene_Battle.prototype.start = function() {
	_alias_mog_bcry_scbat_start.call(this);
	this._actorvoice = null;  
};

//==============================
// * Update Battle Process
//==============================
var _alias_mog_bcry_updateBattleProcess = Scene_Battle.prototype.updateBattleProcess;
Scene_Battle.prototype.updateBattleProcess = function() {
	if (this._actorvoice != BattleManager.actor()) {this.playActorTurn()};
	_alias_mog_bcry_updateBattleProcess.call(this);	
};

//==============================
// * Play Actor Turn
//==============================
Scene_Battle.prototype.playActorTurn = function() {
	 this._actorvoice = BattleManager.actor();	 
     if (this._actorvoice) {AudioManager.stopSe(); 
		 SoundManager.selectVoice(this._actorvoice._v_turn)};
};

//=============================================================================
// ** Game Action
//=============================================================================

//==============================
// * Apply
//==============================
var _alias_mog_bcry_gaction_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
	 var old_hp = target.hp
	 _alias_mog_bcry_gaction_apply.call(this,target);
     if (old_hp != target.hp || this.item().damage.type === 3) {this.playVoiceHP(old_hp,target.hp,target)};
	 if (target.result().missed || target.result().evaded) {SoundManager.selectVoice(target._v_evaded)};
};

//==============================
// * Play Voice HP
//==============================
Game_Action.prototype.playVoiceHP = function(old_hp,now_hp,target) {
   if (target.isDead()) {
       SoundManager.selectVoice(target._v_dead);
   } else if (old_hp < now_hp || this.item().damage.type === 3) {
	   SoundManager.selectVoice(target._v_recover);
   } else if (old_hp > now_hp) {
       SoundManager.selectVoice(target._v_damage);
   };
};

//==============================
// * Item Effect Recover HP
//==============================
var _alias_mog_btcry_gact_itemEffectRecoverHp = Game_Action.prototype.itemEffectRecoverHp;
Game_Action.prototype.itemEffectRecoverHp = function(target, effect) {
	var old_hp = target.hp;
	_alias_mog_btcry_gact_itemEffectRecoverHp.call(this,target, effect)
	if (old_hp <= target.hp) {SoundManager.selectVoice(target._v_recover)};
};
