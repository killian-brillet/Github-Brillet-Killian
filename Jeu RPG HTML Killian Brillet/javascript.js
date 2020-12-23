var atk = document.getElementById("attaque") ;
var def = document.getElementById("defense") ;
var heal = document.getElementById("soin") ;
var texte = document.getElementById("combattext") ;
var pvperso = 50 ;
var manaperso = 20
var pvmonstre = 50 ;
var atkperso = 20 ;
var defperso = 0.5 ;
var valeurheal = 20 ;
var atkmonstre = 10 ;
var boutonutilise = 0 ;
var finpartie = 0 ;

function verifpv(){
	if (pvmonstre <= 0){
		texte.innerHTML = "Vous avez gagné";
		finpartie = 1;
	}
	if (pvperso <= 0){
		texte.innerHTML = "Vous avez perdu";
		finpartie = 1;
	}
}

atk.onclick = function(){
	if (finpartie != 1 ){
		atk.style.backgroundColor = "#C0C0C0"
		def.style.backgroundColor = "#FFFF00"
		heal.style.backgroundColor = "#FFFF00"
		if (pvperso > 0, pvmonstre > 0, boutonutilise != 1){
			texte.innerHTML = "Vous attaquez, <br> Quellle est votre prochaine action?";
			if (pvmonstre  <= atkperso){
				pvmonstre = 0;
			}
			else{
				pvmonstre = pvmonstre-atkperso;
			}
			document.getElementById("pvmon").innerHTML=pvmonstre;
			if (pvperso <= atkmonstre){
				pvperso = 0;
			}
			else{
				pvperso = pvperso-atkmonstre;	
			}
			document.getElementById("affichagepv").innerHTML=pvperso;
		}
		verifpv()
		boutonutilise = 1
	}
}

def.onclick = function(){
	if (finpartie != 1 ){
		atk.style.backgroundColor = "#FFFF00"
		def.style.backgroundColor = "#C0C0C0"
		heal.style.backgroundColor = "#FFFF00"
		if (pvperso > 0, pvmonstre > 0, boutonutilise != 2){
			texte.innerHTML = "Vous defendez, <br> Quellle est votre prochaine action?";
			if (pvperso <= (atkmonstre*defperso)){
				pvperso = 0
			}
			else{
				pvperso = pvperso-(atkmonstre*defperso);
			}
			document.getElementById("affichagepv").innerHTML=pvperso;
		}
		verifpv()
		boutonutilise = 2
	}
}

heal.onclick = function(){
	if (finpartie != 1 ){
		if (pvperso > 0, pvmonstre > 0, boutonutilise != 3){
			if (manaperso >= 10){
				atk.style.backgroundColor = "#FFFF00"
				def.style.backgroundColor = "#FFFF00"
				heal.style.backgroundColor = "#C0C0C0"
				if (pvperso >= 40){
					pvperso = 50
				}
				else{
					pvperso = pvperso+(valeurheal-atkmonstre);
				}
				manaperso = manaperso-10;
				document.getElementById("affichagepv").innerHTML=pvperso;
				document.getElementById("affichagemana").innerHTML=manaperso;
				texte.innerHTML = "Vous vous soignez, <br> Quellle est votre prochaine action?";
			}
			else{
				texte.innerHTML = "Vous n'avez pas assez de mana";
			}
		}
		verifpv()
		boutonutilise = 3
	}
}
