import axios from 'axios'
import key from '../../../secret'

export type tGamesAPI = {
    code:      number;
    message:   string;
    userGames: tUserGame[];
    next?:     number;
}

export type tUserGame = {
    userNum:                   number;
    nickname:                  string;
    gameId:                    number;
    seasonId:                  number;
    matchingMode:              number;
    matchingTeamMode:          number;
    characterNum:              number;
    characterLevel:            number;
    gameRank:                  number;
    playerKill:                number;
    playerAssistant:           number;
    monsterKill:               number;
    bestWeapon:                number;
    bestWeaponLevel:           number;
    masteryLevel:              { [key: string]: number };
    equipment:                 { [key: string]: number };
    versionMajor:              number;
    versionMinor:              number;
    skillLevelInfo:            { [key: string]: number };
    skillOrderInfo:            { [key: string]: number };
    serverName:                string;
    maxHp:                     number;
    maxSp:                     number;
    attackPower:               number;
    defense:                   number;
    hpRegen:                   number;
    spRegen:                   number;
    attackSpeed:               number;
    moveSpeed:                 number;
    outOfCombatMoveSpeed:      number;
    sightRange:                number;
    attackRange:               number;
    criticalStrikeChance:      number;
    criticalStrikeDamage:      number;
    coolDownReduction:         number;
    lifeSteal:                 number;
    amplifierToMonster:        number;
    trapDamage:                number;
    gainExp:                   number;
    startDtm:                  string;
    duration:                  number;
    mmrBefore:                 number;
    damageToPlayer:            number;
    damageToMonster:           number;
    killerUserNum:             number;
    playTime:                  number;
    watchTime:                 number;
    totalTime:                 number;
    botAdded:                  number;
    botRemain:                 number;
    restrictedAreaAccelerated: number;
    safeAreas:                 number;
    killer:                    string;
    killDetail:                string;
    causeOfDeath:              string;
    teamNumber:                number;
    preMade:                   number;
    gainedNormalMmrKFactor:    number;
    victory:                   number;
    craftUncommon:             number;
    craftRare:                 number;
    craftEpic:                 number;
    craftLegend:               number;
    trapDamageToPlayer:        number;
    basicAttackDamageToPlayer: number;
    skillDamageToPlayer:       number;
}

export const getAPI = async (userNum : number) => {
	const response = await axios({
		url : `https://open-api.bser.io/v1/user/games/${userNum}`,
		method : 'get',
		headers : {
			'accept' : 'application/json',
			'x-api-key' : key
		}
	})
	return response.data;
}

