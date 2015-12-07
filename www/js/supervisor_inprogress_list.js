$(document).on('pageshow', '#supervisor_inprogress_list', function(){  
//alert("supervisor_inprogress_list");
$('#lis_align_inpro').empty();
//alert("supervisor_list_view");

$(document).off('click', '#dashin').on('click', '#dashin', function() {

$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogressin').on('click', '#inprogressin', function() {

$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verifiedin').on('click', '#verifiedin', function() {

$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#not_verifiedin').on('click', '#not_verifiedin', function() {

$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#completedin').on('click', '#completedin', function() {

  $.mobile.changePage($('#supervisor_completed_list'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

$(document).off('click', '#signoutin').on('click', '#signoutin', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});


superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
//superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array_array"));
inprogressArray_array =  JSON.parse(sessionStorage.getItem("supervisor_inprogress_array"));

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));
educational_records_array =  JSON.parse(sessionStorage.getItem("educational_records_array"));
/*activity_log_details_array =  JSON.parse(sessionStorage.getItem("activity_log_supervisor_details_array"));*/
image_log_array =  JSON.parse(sessionStorage.getItem("image_log_array"));

employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
supervisor_activity_log_array =  JSON.parse(sessionStorage.getItem("supervisor_activity_log_array"));
supervisor_final_command_array =  JSON.parse(sessionStorage.getItem("supervisor_final_command_array"));

assests_verification_array =  JSON.parse(sessionStorage.getItem("assests_verification_array"));
bankguarantee_verification_array =  JSON.parse(sessionStorage.getItem("bankguarantee_verification_array"));
address_verification_array =  JSON.parse(sessionStorage.getItem("address_verification_array"));
reference_verification_array =  JSON.parse(sessionStorage.getItem("reference_verification_array"));

distributor_verification_array =  JSON.parse(sessionStorage.getItem("distributor_verification_array"));
distributor_details_array =  JSON.parse(sessionStorage.getItem("distributor_details_array"));

web_verification_array =  JSON.parse(sessionStorage.getItem("web_verification_array"));
supplier_details_array =  JSON.parse(sessionStorage.getItem("supplier_details_array"));
warehouse_verification_array =  JSON.parse(sessionStorage.getItem("warehouse_verification_array"));
verification_master_array =  JSON.parse(sessionStorage.getItem("verification_master_array"));

driving_details_array =  JSON.parse(sessionStorage.getItem("driving_details_array"));
credential_verification_array =  JSON.parse(sessionStorage.getItem("credential_verification_array"));
identity_verification_array =  JSON.parse(sessionStorage.getItem("identity_verification_array"));
bankruptcy_verification_array =  JSON.parse(sessionStorage.getItem("bankruptcy_verification_array"));
professional_details_array =  JSON.parse(sessionStorage.getItem("professional_details_array"));

//alert(inprogressArray_array);

var inpro_veri=inprogressArray_array;


if(inpro_veri == ""){
  alert('No record Found');
  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}

if(inpro_veri == null){
//alert('ppp');
 $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
}

//alert('if inside');
for(a=0;a<inprogressArray_array.length;a++){
  inpro_obj = inprogressArray_array[a];

  qualification_id =inpro_obj.qualification_id;
 //alert(qualification_id+'t');
var sup_inprogress=inpro_obj.name;
var date_new=inpro_obj.assigned_on;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();

if( typeof sup_inprogress !== 'undefined'){

/*education*/
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs"><h2 class="li_h2">'+inpro_obj.name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><span class="li_span">'+inpro_obj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/education-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('employment list');
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs"><h2 class="li_h2">'+inpro_obj.name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><span class="li_span">'+inpro_obj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/employment-new.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs"><h2 class="li_h2">'+inpro_obj.name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><span class="li_span">'+inpro_obj.qualification_name+'</span><b class="li_b">11/2/2015</b></a></li>'
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/id-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);
}

/*assest*/
/*if(qualification_id == '16' || qualification_id == '17' || qualification_id == '18' || qualification_id == '19' || qualification_id == '20' || qualification_id == '21' ||qualification_id == '22' || qualification_id == '23' || qualification_id == '24' || qualification_id == '25' || qualification_id == '26'){
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/asset-verification.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.task_name+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);
}*/

if(qualification_id == '63' ){
  
  var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/asset-verification.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);
}



/*address*/
if(qualification_id == '29' || qualification_id == '31' ){
  //alert('address');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}

/*reference*/
if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35' ){
  //alert('referencre');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/REFFERENCE-ICON.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);
}

/*distributor residential address verification*/
/*if(qualification_id == '40' ){
  //alert('distributor residentisl address');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.task_name+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}*/

/*distributor details*/
if(qualification_id == '41' ){
  //alert('distributor details');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Distributor-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}

/*address details*/
if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40'){
 //alert('common web ware supplier');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/address-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}

/*web verification of antecedents*/
if(qualification_id == '43' ){
 // alert('web verification');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/web-verification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}
/*supplier vendor details*/
if(qualification_id == '47' ){
 // alert('supplier vendor');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/supplier-verification-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}
/*ware house leasing*/
if(qualification_id == '45' ){
  //alert('ware housing');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Warehouseverification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}

/*bank*/
if(qualification_id == '64' ){
 // alert('bank 64');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/BANK.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}

/*driving licence*/
if(qualification_id == '56' ){
  //alert('driving licence 56');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/DrivingLicence-verification_icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}

/*identity */
if(qualification_id == '65' ){
  //alert('identity 65');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/identity-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}
/*credential */
if(qualification_id == '39' ){
  //alert('credential  39');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Credential-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}
/*bankrupcy */
if(qualification_id == '66' ){
  //alert('bankrupcy 66');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/bankkruptcy-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}

/*professional licence*/
if(qualification_id == '69' ){
  //alert('professional licence 69');
var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextinprogress('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/Proffessinoal-icon.png" class="li_imgs_1"><h2 class="li_h2">'+inpro_obj.First_Name+''+inpro_obj.Last_Name+'</h2 class="li_h2"><p class="li_p">'+inpro_obj.verification_for+'</p><p class="li_p">'+inpro_obj.taskname+'</p><p class="li_p">'+inpro_obj.qualification_name+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+inpro_obj.verification_user_id+'</b></a></li>'

$('#lis_align_inpro').append(lis);

}

}



}

var superempty=inprogressArray_array;

if(superempty == ""){
  alert(superempty+'No record Found');
  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}




});




function callnextinprogress(index){

  inpro_obj = inprogressArray_array[index];
  qualification_id =inpro_obj.qualification_id;

  //alert(inpro_obj.verification_user_id+'superArray');
  user_ida=inpro_obj.verification_user_id;
  //alert(qualification_id +'hw');


  if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){

    for(a=0;a<addressid_records_array.length;a++){
      address_inpro_obj = addressid_records_array[a];
//alert(employ_obj.user_id+'addressid_records_array');
super_inpro_obj = inprogressArray_array[index];
h =address_inpro_obj.user_id;
//alert(h+'super_inpro_obj');
hainpro=address_inpro_obj.proof_type_id;     
//alert(proff_type_id+'proff_type_id');
g =super_inpro_obj.verification_user_id;
// alert(g+'super_inpro_obj');
if( h == g && hainpro == qualification_id ){

  address_inpro_obja = addressid_records_array[a];
//alert(address_inpro_obja.user_id+'emppppppppp last address passed'+address_inpro_obja.proof_type_id);
}

}
}
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5' || qualification_id == '6'){

  for(a=0;a<educational_records_array.length;a++){
    eductional_inpro_obj = educational_records_array[a];
//alert(employ_obj.user_id+'addressid_records_array');
super_inpro_obj = inprogressArray_array[index];
hh =eductional_inpro_obj.user_id;
//alert(h+'hh');
hl=eductional_inpro_obj.education_type;
gg =super_inpro_obj.verification_user_id;
//alert(g+'gg');
if( hh == gg && hl == qualification_id ){
//alert(gg+'super_inpro_obj education'+hh);
eductional_inpro_objay = educational_records_array[a];
//alert(eductional_inpro_objay.user_id+'emppppppppp last educational'+eductional_inpro_objay.education_type);
}

}
}
if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');

for(a=0;a<employment_records_array.length;a++){
  employment_obja_inpo = employment_records_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =employment_obja_inpo.user_id;
  huemploy=employment_obja_inpo.employment_type;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  employment_obja_inpod = employment_records_array[a];
//alert(employment_obja_inpod.user_id);
}

}
}





//alert(supervisor_activity_log_array+'loggggggg');
var loggg=supervisor_activity_log_array;
//alert(loggg);
if(loggg == ''){
}else{
  for(a=0;a<supervisor_activity_log_array.length;a++){
    log_inpro_obj = supervisor_activity_log_array[a];

    super_inpro_obj = inprogressArray_array[index];
    hh =log_inpro_obj.verification_id;

    gg =super_inpro_obj.verification_user_id;

    if( hh == gg ){

      log_inpro_objg = supervisor_activity_log_array[a];
//alert(log_inpro_objg.verification_id+'llllllllllog');
}

}
}

if(qualification_id == '63' ){
//alert('function assest id 16 to 26');

for(a=0;a<assests_verification_array.length;a++){
  assest_ver = assests_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =assest_ver.user_id;
  huemploy=assest_ver.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'gg'+gj+''+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  assest_inproa = assests_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '64' ){
//alert('function bank id 64');
for(a=0;a<bankguarantee_verification_array.length;a++){
  bank_guar = bankguarantee_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =bank_guar.user_id;
  huemploy=bank_guar.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bank_inproa = bankguarantee_verification_array[a];
//alert(bank_inproa.user_id);
}
}
}

if(qualification_id == '29' || qualification_id == '31'){
//alert('function address id 29 to 31');
for(a=0;a<address_verification_array.length;a++){
  address_verii = address_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =address_verii.user_id;
  huemploy=address_verii.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  address_veriia = address_verification_array[a];
  //alert(address_veriia);
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
//alert('function reference id 32 to 35');
for(a=0;a<reference_verification_array.length;a++){
  reference = reference_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =reference.user_id;
  huemploy=reference.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(g+'gg');
if( hj == gj && huemploy == qualification_id){
  referencea = reference_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}



if(qualification_id == '40' ){
//alert('function distributor residential id 40');
for(a=0;a<distributor_verification_array.length;a++){
  distr_residential = distributor_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =distr_residential.user_id;
  huemploy=distr_residential.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  distr_residentiala = distributor_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '41' ){
//alert('function distributor residential id 41');
for(a=0;a<distributor_details_array.length;a++){
  dist_details = distributor_details_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =dist_details.user_id;
  huemploy=dist_details.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  dist_detailsa = distributor_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '43' ){
//alert('function web verifi  id 43');
for(a=0;a<web_verification_array.length;a++){
  web_veri = web_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =web_veri.user_id;
  huemploy=web_veri.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  web_veria = web_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '47' ){
//alert('function supplier details id 47');
for(a=0;a<supplier_details_array.length;a++){
  supplier_vend = supplier_details_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =supplier_vend.user_id;
  huemploy=supplier_vend.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  supplier_venda = supplier_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '45' ){
//alert('function ware housing 45');
for(a=0;a<warehouse_verification_array.length;a++){
  ware_hous = warehouse_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =ware_hous.user_id;
  huemploy=ware_hous.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  ware_housa = warehouse_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40'){
//alert('function distributor residential id 40');
for(a=0;a<verification_master_array.length;a++){
  common_address = verification_master_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =common_address.Verification_Master_Id;
  huemploy=common_address.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  common_addressa = verification_master_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}

}

if(qualification_id == '56' ){
//alert('function driving id 56');
for(a=0;a<driving_details_array.length;a++){
  driving_lic = driving_details_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =driving_lic.user_id;
  huemploy=driving_lic.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  driving_lica = driving_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}


if(qualification_id == '39' ){
//alert('function driving id 39');
for(a=0;a<credential_verification_array.length;a++){
  credential_det = credential_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =credential_det.user_id;
  huemploy=credential_det.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  credential_deta = credential_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}



if(qualification_id == '65' ){
//alert('function driving id 56');
for(a=0;a<identity_verification_array.length;a++){
  identity_det = identity_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =identity_det.user_id;
  huemploy=identity_det.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  identity_deta = identity_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '66' ){
//alert('function driving id 56');
for(a=0;a<bankruptcy_verification_array.length;a++){
  bankruptcy_det = bankruptcy_verification_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =bankruptcy_det.user_id;
  huemploy=bankruptcy_det.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  bankruptcy_deta = bankruptcy_verification_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}

if(qualification_id == '69' ){
//alert('function driving id 56');
for(a=0;a<professional_details_array.length;a++){
  professional_det = professional_details_array[a];

  super_inpro_obj = inprogressArray_array[index];
  hj =professional_det.user_id;
  huemploy=professional_det.address_group;
//alert(h+'hh');
gj =super_inpro_obj.verification_user_id;
//alert(hj+'hj'+gj+'gg'+huemploy+'qualification_id'+qualification_id);
if( hj == gj && huemploy == qualification_id){
  professional_deta = professional_details_array[a];
//alert(employment_obja_inpod.user_id+'employment_records_array'+gj);
}
}
}


var bankruptcy_deta=bankruptcy_deta;
var identity_deta=identity_deta;
var professional_deta=professional_deta;
var credential_deta=credential_deta;
var driving_lic=driving_lic;

var bank_inproa=bank_inproa;
var assest_inproa=assest_inproa;
var address_veriia=address_veriia;
var referencea=referencea;
var bank_inpro=bank_inpro;
var assest_inpro=assest_inpro;


var distr_residentiala=distr_residentiala;
var dist_detailsa=dist_detailsa;

var web_veria=web_veria;
var supplier_venda=supplier_venda;
var ware_housa=ware_housa;
var common_addressa=common_addressa;

var supervisor_final_commanda=supervisor_final_commanda;
var image_obj_logd=image_obj_logd;
var log_inpro_objg=log_inpro_objg;
//alert(log_inpro_objg);
var address_inpro_obja=address_inpro_obja;
var employment_obja_inpod=employment_obja_inpod;
var eductional_inpro_objay=eductional_inpro_objay;
/*var education_array= JSON.parse(sessionStorage.getItem("education_array"));
var address_array=JSON.parse(sessionStorage.getItem("address_array"));
var employment_array=JSON.parse(sessionStorage.getItem("employment_array"));
*/
if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes');
if(eductional_inpro_objay !== undefined){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
//alert('log current');
sessionStorage.setItem("currentobj_educational_inpro",JSON.stringify(eductional_inpro_objay));
sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
//sessionStorage.setItem("looog",JSON.stringify(image_obj_logd));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg)); 
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//sessionStorage.setItem("looog",JSON.stringify(image_obj_logd));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
//sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_educational_inpro",JSON.stringify(eductional_inpro_objay));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
if(address_inpro_obja !== undefined){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
//alert('log current');
//sessionStorage.setItem("looog",JSON.stringify(image_obj_logd));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg)); 
sessionStorage.setItem("currentobja_addressid_inpro",JSON.stringify(address_inpro_obja));
//sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//sessionStorage.setItem("looog",JSON.stringify(image_obj_logd));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
//sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobja_addressid_inpro",JSON.stringify(address_inpro_obja));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
if(employment_obja_inpod !== undefined){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){

sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg)); 


sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
sessionStorage.setItem("currentobj_employment_records_inpo",JSON.stringify(employment_obja_inpod));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}

sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
sessionStorage.setItem("currentobj_employment_records_inpo",JSON.stringify(employment_obja_inpod));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}

}



if(qualification_id == '32' || qualification_id == '33' || qualification_id == '34' || qualification_id == '35'){
  if(referencea !== undefined){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("referencea",JSON.stringify(referencea));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("referencea",JSON.stringify(referencea));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '29' ||  qualification_id == '31'){
    if(address_veriia !== undefined){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
sessionStorage.setItem("address_veriia",JSON.stringify(address_veriia));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '64' ){
      if(bank_inproa !== undefined){
       // alert('sessionStorage');
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("bank_inpro",JSON.stringify(bank_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '63' ){
 if(assest_inproa !== undefined){
if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob assest succes');
sessionStorage.setItem("assest_inpro",JSON.stringify(assest_inproa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '40' ){
   if(distr_residentiala !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("distr_residentiala",JSON.stringify(distr_residentiala));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}


if(qualification_id == '41' ){
  if(dist_detailsa !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("dist_detailsa",JSON.stringify(dist_detailsa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}


if(qualification_id == '43' ){
  if(web_veria !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("web_veria",JSON.stringify(web_veria));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("web_veria",JSON.stringify(web_veria));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '47' ){
   if(supplier_venda !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("supplier_venda",JSON.stringify(supplier_venda));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("supplier_venda",JSON.stringify(supplier_venda));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '45' ){
   if(ware_housa !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("ware_housa",JSON.stringify(ware_housa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("ware_housa",JSON.stringify(ware_housa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '42' || qualification_id == '46' || qualification_id == '44' || qualification_id == '48' || qualification_id == '30' || qualification_id == '40'){
  if(common_addressa !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("common_addressa",JSON.stringify(common_addressa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("common_addressa",JSON.stringify(common_addressa));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '56' ){
      if(driving_lica !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("driving_lica",JSON.stringify(driving_lica));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("driving_lica",JSON.stringify(driving_lica));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '39' ){
      if(credential_deta !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("credential_deta",JSON.stringify(credential_deta));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("credential_deta",JSON.stringify(credential_deta));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '65' ){
      if(identity_deta !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("identity_deta",JSON.stringify(identity_deta));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("identity_deta",JSON.stringify(identity_deta));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '69' ){
      if(professional_deta !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("professional_deta",JSON.stringify(professional_deta));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("professional_deta",JSON.stringify(professional_deta));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}

if(qualification_id == '66' ){
      if(bankruptcy_deta !== undefined){
  if(log_inpro_objg !== undefined && supervisor_final_commanda !== undefined){
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg));
sessionStorage.setItem("bankruptcy_deta",JSON.stringify(bankruptcy_deta));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
  sessionStorage.setItem("supervisor_final_commanda",JSON.stringify(supervisor_final_commanda));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
//alert('currentob bank succes');
sessionStorage.setItem("bankruptcy_deta",JSON.stringify(bankruptcy_deta));
sessionStorage.setItem("currentobj_inpro",JSON.stringify(super_inpro_obj));
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}
}


if(log_inpro_objg !== undefined ){
//alert('log current');
//sessionStorage.setItem("looog",JSON.stringify(image_obj_logd));
sessionStorage.setItem("supervisor_activity_log_array",JSON.stringify(log_inpro_objg)); 
$.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
}


}