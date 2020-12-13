function calcular() {

    //Valores Informados 
    var QH= document.getElementById ("horas").value;
	var VH= document.getElementById ("valorHora").value;
    var DP= document.getElementById ("dependentes").value;
    var msg; 

    //INSS
	var SC8= 1751.81;
	var SC9= 2919.72;
    var SC11= 5839.45;
    var TT= 642.34;
    var INSS; 

    //IR
	var IR75=1903.99;
	var IR15=2826.66;
	var IR225=3751.05;
	var IR275=4664.68;
    var IR2752=4664.68;
    var IR;
    var BC; 

    //Dedução IR
	var D75=142.80;
	var D15=354.80;
	var D225=636.13;
    var D275=869.36;
    
    //Valor Dependente
    var VDPA= 189.59;
    var DPB;

    //Salario Bruto
    var SB= QH*VH;
    var SM=998.00;
    var SL;

    /* alert Salario mininmo */
    if (SB<SM){
    alert("Salário inferior ao salário Mínimo (R$998,00)");
        SB=0;
        SL=0;
        INSS=0;
        IR=0;
    }

    //Calculo INSS
	 if (SB<=SC8){
	 INSS= SB*(8/100);
	 }
	 else if (SB>SC8&&SB<=SC9) {
	 INSS= SB*(9/100);
	 }
	 else if (SB>SC9&&SB<=SC11) {
	 INSS= SB*(11/100);
     }
     else{
     INSS=TT;
     }
     
     //Calculo DP
	 if (DP<=0) {
	 DPB=0;
	 }
	 else if(DP>0) {
	 DPB=DP*VDPA;
     }
     
     //Calculo IR
	 BC=SB-INSS-DPB;
	 if (BC<=IR75) {
	 IR=0;
	 }
	 else if (BC>IR75&&BC<=IR15) {
	 IR= BC*(7.5/100)-D75;
	 }
	 else if (BC>IR15&&BC<=IR225) {
	 IR= BC*(15/100)-D15;
	 }
	 else if (BC>IR225&&BC<=IR275) {
	 IR= BC*(22.5/100)-D225;
	 }
	 else if (BC>IR2752) {
	 IR= BC*(27.5/100)-D275;
	 }
     SL=SB-INSS-IR;

     /* Remoção das casas decimais*/
    var a = SB.toFixed(2);
    var b = SL.toFixed(2);
    var c = INSS.toFixed(2);
    var d = IR.toFixed(2);

     //Resultados
     msg= a;
     document. getElementById ("SalarioBruto").innerHTML=msg;
	 msg= b;
     document. getElementById ("SalarioLiquido").innerHTML=msg;
     msg= c;
     document. getElementById ("Inss").innerHTML=msg;
     msg= d;
     document. getElementById ("IR").innerHTML=msg;

     /* Display Tabela */
     document.getElementById("tabela").style.display="table";
}

/*Funções Calcula enter*/
function calculaEnter(event) {
    if (event.keyCode == 13) {
        calcular();
    }
}
function calcularEnter(event) {
    if (event.keyCode == 13) {
        calcular();
    }
}