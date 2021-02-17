import React from 'react'

import styled from 'styled-components/native'

const Image = styled.Image<{width : string, height : string}>`
	width : ${props => props.width};
	height : ${props => props.height};
	resizeMode : stretch;
	border-top-left-radius : 10px;
	border-bottom-left-radius : 10px;
`
const NoneBox = styled.View<{width : string, height : string}>`
	width : ${props => props.width};
	height : ${props => props.height};
	border-radius : 10px;
	background-color: white;
`
export const None = (width : string, height : string) => 
<NoneBox width={width} height={height}/>
export const Adriana = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/adriana/adriana_2d.png")} width={width} height={height}/>
export const Aya = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/aya/aya_2d.png")} width={width} height={height}/>
export const Chiara = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/chiara/chiara_2d.png")} width={width} height={height}/>
export const Emma = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/emma/emma_2d.png")} width={width} height={height}/>
export const Fiora = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/fiora/fiora_2d.png")} width={width} height={height}/>
export const Hart = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/hart/hart_2d.png")} width={width} height={height}/>
export const Hyejin = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/hyejin/hyejin_2d.png")} width={width} height={height}/>
export const Hyunwoo = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/hyunwoo/hyunwoo_2d.png")} width={width} height={height}/>
export const Isol = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/isol/isol_2d.png")} width={width} height={height}/>
export const Jackie = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/jackie/jackie_2d.png")} width={width} height={height}/>
export const Lenox = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/lenox/lenox_2d.png")} width={width} height={height}/>
export const Lidailin = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/lidailin/lidailin_2d.png")} width={width} height={height}/>
export const Luke = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/luke/luke_2d.png")} width={width} height={height}/>
export const Magunus = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/magnus/magnus_2d.png")} width={width} height={height}/>
export const Nadine = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/nadine/nadine_2d.png")} width={width} height={height}/>
export const Rozzi = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/rozzi/rozzi_2d.png")} width={width} height={height}/>
export const Shoichi = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/shoichi/shoichi_2d.png")} width={width} height={height}/>
export const Silvia = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/silvia/silvia_2d.png")} width={width} height={height}/>
export const Sissela = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/sissela/sissela_2d.png")} width={width} height={height}/>
export const Xiukai = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/xiukai/xiukai_2d.png")} width={width} height={height}/>
export const Yuki = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/yuki/yuki_2d.png")} width={width} height={height}/>
export const Zahir = (width : string, height : string) =>
<Image source={require("../../../Public/charactor/zahir/zahir_2d.png")} width={width} height={height}/>

export const getImg = (code : number) => {
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