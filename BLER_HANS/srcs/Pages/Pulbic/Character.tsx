import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

const Image = styled.Image`
	width : 25%;
`
const None = (<Text>None</Text>)
const Adriana = <Image source={require("../../Public/charactor/adriana/adriana_2d.png")}/>
const Aya = <Image source={require("../../Public/charactor/aya/aya_2d.png")}/>
const Chiara = <Image source={require("../../Public/charactor/chiara/chiara_2d.png")}/>
const Emma = <Image source={require("../../Public/charactor/emma/emma_2d.png")}/>
const Fiora = <Image source={require("../../Public/charactor/fiora/fiora_2d.png")}/>
const Hart = <Image source={require("../../Public/charactor/hart/hart_2d.png")}/>
const Hyejin = <Image source={require("../../Public/charactor/hyejin/hyejin_2d.png")}/>
const Hyunwoo = <Image source={require("../../Public/charactor/hyunwoo/hyunwoo_2d.png")}/>
const Isol = <Image source={require("../../Public/charactor/isol/isol_2d.png")}/>
const Jackie = <Image source={require("../../Public/charactor/jackie/jackie_2d.png")}/>
const Lenox = <Image source={require("../../Public/charactor/lenox/lenox_2d.png")}/>
const Lidailin = <Image source={require("../../Public/charactor/lidailin/lidailin_2d.png")}/>
const Luke = <Image source={require("../../Public/charactor/luke/luke_2d.png")}/>
const Magunus = <Image source={require("../../Public/charactor/magnus/magnus_2d.png")}/>
const Nadine = <Image source={require("../../Public/charactor/nadine/nadine_2d.png")}/>
const Rozzi = <Image source={require("../../Public/charactor/rozzi/rozzi_2d.png")}/>
const Shoichi = <Image source={require("../../Public/charactor/shoichi/shoichi_2d.png")}/>
const Silvia = <Image source={require("../../Public/charactor/silvia/silvia_2d.png")}/>
const Sissela = <Image source={require("../../Public/charactor/sissela/sissela_2d.png")}/>
const Xiukai = <Image source={require("../../Public/charactor/xiukai/xiukai_2d.png")}/>
const Yuki = <Image source={require("../../Public/charactor/yuki/yuki_2d.png")}/>
const Zahir = <Image source={require("../../Public/charactor/zahir/zahir_2d.png")}/>

const Character = ({ code } : { code : number}) => {
	const check = () => {
		if (code == -1)
			return None;
		if (code == 1)
			return Jackie;
		if (code == 2)
			return Aya;
		if (code == 3)
			return Fiora;
		if (code == 4)
			return Magunus;
		if (code == 5)
			return Zahir;
		if (code == 6)
			return Nadine;
		if (code == 7)
			return Hyunwoo;
		if (code == 8)
			return Hart;
		if (code == 9)
			return Isol;
		if (code == 10)
			return Lidailin;
		if (code == 11)
			return Yuki;
		if (code == 12)
			return Hyejin;
		if (code == 13)
			return Xiukai;
		if (code == 14)
			return Chiara;
		if (code == 15)
			return Sissela;
		if (code == 16)
			return Silvia;
		if (code == 17)
			return Adriana;
		if (code == 18)
			return Shoichi;
		if (code == 19)
			return Emma;
		if (code == 20)
			return Lenox;
		if (code == 21)
			return Rozzi;
		if (code == 22)
			return Luke;
	}

	return (
		<>
			{check()}
		</>
	)
}

export default Character;