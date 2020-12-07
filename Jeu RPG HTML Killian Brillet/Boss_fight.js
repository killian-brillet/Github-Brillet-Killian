
// -------- Stats perso -------- //
var Hp_perso1 = document.getElementById("Hp_perso1");
var Mana_perso1 = document.getElementById("Mana_perso1");
var Def_perso1= document.getElementById("Def_perso1");

// -------- Boutons -------- //

var bouton_atq = document.getElementById("atq");
var bouton_shield = document.getElementById("shield");
var bouton_spe = document.getElementById("spe");
var bouton_passer_tour = document.getElementById("passer_tour");

// -------- Boss interface -------- //
var Image_boss = document.getElementById("Image_boss");
var Nom_boss = document.getElementById("Nom_boss");
var Hp_boss = document.getElementById("Hp_boss");
var Info_boss = document.getElementById("Info_boss");

// -------- Boite dialogue -------- //
var textAction = document.getElementById("Boite_dialogue");


// Caractéristiques Personnage //    
 
Hp_perso1.value = 2483;
Hp_perso1.innerHTML = Hp_perso1.value;

Mana_perso1.value = 1427;
Mana_perso1.innerHTML = Mana_perso1.value;

Def_perso1.value = 10;
Def_perso1.innerHTML = Def_perso1.value;

var atq_perso1 = 428;
var spe_perso1 = 100;
var mana_spe = 100;
var mana_shield = 200;

// Caractéristiques Boss //

Nom_boss.innerHTML = "";

Hp_boss.value = 4800;


var dmg_boss = 300;

// Fonctions boutons //


function atq(){
		
	if (bouton_atq.disabled == false){
		
		Hp_boss.value -= atq_perso1;
		bouton_atq.style.opacity = "0.5";
		bouton_atq.value = "Indisponible";
		bouton_atq.disabled = true;
		textAction.innerHTML = "Vous avez infligé "+atq_perso1+" points de dégats";
		
		bouton_shield.disabled = true;
		bouton_spe.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_shield.style.opacity = "0.5";
		bouton_spe.style.opacity = "0.5";		
	}	
}

function shield (){
	
	if (bouton_shield.disabled == false && Mana_perso1.value >= mana_shield){
		
		dmg_boss = dmg_boss/2;
		bouton_shield.style.opacity = "0.5";
		bouton_shield.value = "Indisponible";
		
		Mana_perso1.value -= mana_shield;
		Mana_perso1.innerHTML = Mana_perso1.value;
		
		textAction.innerHTML = "Votre sort vous protège de 50% des attaques du monstre. Vous avez conssomé "+mana_shield+" points de Mana.";
		
		bouton_shield.disabled = true;
		bouton_atq.disabled = true;
		bouton_spe.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_atq.style.opacity = "0.5";
		bouton_spe.style.opacity = "0.5";}
	else{
		textAction.innerHTML = "Vous n'avez plus assez de Mana.";}
}


function Coup_Special (){
	
	if (bouton_spe.disabled == false && Mana_perso1.value >= mana_spe){
		
		Hp_perso1.value += spe_perso1;
		Hp_perso1.innerHTML = Hp_perso1.value;
		
		Mana_perso1.value -= mana_spe;
		Mana_perso1.innerHTML = Mana_perso1.value;
		
		bouton_spe.style.opacity = "0.5";
		bouton_spe.value = "Indisponible";
		bouton_spe.disabled = true;
		
		textAction.innerHTML = "Vos points de vie remontent de "+spe_perso1+" points. Vous avez consommé "+mana_spe+" points de Mana";
		
		
		bouton_atq.disabled = true;
		bouton_shield.disabled = true;
		bouton_passer_tour.disabled = false;
		
		bouton_atq.style.opacity = "0.5";
		bouton_shield.style.opacity = "0.5";}
		
	else{
		textAction.innerHTML = "Vous n'avez plus assez de Mana.";}
	
}


// Fonctions attaque boss //

function bossAtq (){
	
	Hp_perso1.value -= dmg_boss;
	Hp_perso1.innerHTML = Hp_perso1.value;
	textAction.innerHTML = "Jean-Mi vous inflige "+dmg_boss+" points de dégats dans la mouille";
}


// Fonction reinitialise bouton //

function enableButton (){
	
	bouton_atq.disabled = false;
	bouton_atq.value = "Attaquer";
	bouton_atq.style.opacity = "1";
	
	bouton_shield.disabled = false;
	bouton_shield.value = "Sort de protection";
	bouton_shield.style.opacity = "1";
	
	bouton_spe.disabled = false;
	bouton_spe.value = "Coup spéciale";
	bouton_spe.style.opacity = "1";	
	
	bouton_passer_tour.disabled = true;		
}


// Infobulle boss //

Image_boss.onmouseover = function(){
	Nom_boss.innerHTML = "Jean-Mi";
	Hp_boss.innerHTML="HP = "+Hp_boss.value;
	Info_boss.style.border ="2px solid black";
	Info_boss.style.backgroundColor="#6a2020";
	Info_boss.style.opacity="0.9";
		Image_boss.onmouseout = function(){
			Nom_boss.innerHTML = "";
			Hp_boss.innerHTML="";
			Info_boss.style.border ="";
			Info_boss.style.backgroundColor="";
			Info_boss.style.opacity="";
			
		}
}





bouton_atq.onclick = atq;
bouton_shield.onclick = shield;

bouton_passer_tour.addEventListener("click",bossAtq);
bouton_passer_tour.addEventListener("click",enableButton);
bouton_spe.onclick = Coup_special;	