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

function verifpv(){
	if (pvmonstre <= 0);
		texte.innerHTML = "Vous avez gagné, vous êtes un boss";
	if (pvperso <= 0);
		texte.innerHTML = "Vous avez perdu, vous etes une grosse merde";
}

function tour(){

	atk.onclick = function(){
		texte.innerHTML = "Vous attaquez, <br> Quellle est votre prochaine action?";
		pvmonstre = pvmonstre-atkperso;
		document.getElementById("pvmon").innerHTML=pvmonstre;
		pvperso = pvperso-atkmonstre;
		document.getElementById("affichagepv").innerHTML=pvperso;
	}

	def.onclick = function(){
		texte.innerHTML = "Vous defendez, <br> Quellle est votre prochaine action?";
		pvperso = pvperso-(atkmonstre*defperso);
		document.getElementById("affichagepv").innerHTML=pvperso;
	}

	heal.onclick = function(){
		if (manaperso >= 10){
			pvperso = pvperso+(valeurheal-atkmonstre);
			manaperso = manaperso-10;
			document.getElementById("affichagepv").innerHTML=pvperso;
			document.getElementById("affichagemana").innerHTML=manaperso;
			texte.innerHTML = "Vous vous soignez, <br> Quellle est votre prochaine action?";
		}
		else{
			texte.innerHTML = "Vous n'avez pas assez de mana";
		}
	}

tour();
verifpv();

}


