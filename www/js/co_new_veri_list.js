$(document).on('pageshow', '#co_new_veri_list', function(){  
alert("co_new_veri_list one");
$('#list_align_co_new_veri').empty();
//alert("supervisor_list_view");

 $(document).off('click', '#dashcoo').on('click', '#dashcoo', function() {

  $.mobile.changePage($('#dashboardco'), { transition: "none", changeHash: true, reverse: false });
return false;
});

   
 $(document).off('click', '#inprogresscoo').on('click', '#inprogresscoo', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#finalcoo').on('click', '#finalcoo ', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

            $(document).off('click', '#reportcoo').on('click', '#reportcoo ', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#signoutcoo').on('click', '#signoutcoo', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

co_new_veri_list_count_array =  JSON.parse(sessionStorage.getItem("co_new_veri_list_count_array"));
  
    co_new_veri_list =  JSON.parse(sessionStorage.getItem("co_new_veri_list"));

	   employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
    co_addressid_records_array =  JSON.parse(sessionStorage.getItem("co_addressid_records_array"));
    co_educational_records_array =  JSON.parse(sessionStorage.getItem("co_educational_records_array"));
     co_basic_profile_records_array =  JSON.parse(sessionStorage.getItem("co_basic_profile_records_array"));
  /*  view_assigned_address_download_array =  JSON.parse(sessionStorage.getItem("view_assigned_address_download_array"));*/



var superempty=co_new_veri_list;

if(superempty == ""){
  alert(superempty+'No record Found');
  $.mobile.changePage($('#co_dashboard'), { transition: "none", changeHash: true, reverse: false });
}

		for(a=0;a<co_new_veri_list.length;a++){
			co_new = co_new_veri_list[a];
     alert(co_new.First_Name+'');
var sup=co_new.First_Name;
//qualification_id=superr_objj.type;

var date_new=co_new.Doc;
//alert(date_new);
var s = date_new;
var bits = s.split(/\D/);
var date = new Date(bits[0], --bits[1], bits[2], bits[3], bits[4]);



//alert(date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear());

var date=date.getDate()+'/'+parseInt(date.getMonth() + 1)+'/'+date.getFullYear();


if( typeof sup !== 'undefined'){

var lis='<li class="ui-li-has-thumb ui-first-child li_list"><a href="#" onclick="callnextco_new('+a+')" class="waves-effect waves-button ui-btn ui-btn-icon-right ui-icon-carat-r  waves-button waves-effect waves-button"><img src="images/mobile/company-icon.png" class="li_imgs_1"><h2 class="li_h2">'+co_new.First_Name+''+co_new.Last_Name+'</h2 class="li_h2"><p class="li_p">'+co_new.Verification_Category+'</p><p class="li_p">'+co_new.posted_f+''+co_new.posted_l+'</p><p class="li_p">'+co_new.posted_f+''+co_new.posted_l+'</p><span class="li_span">'+date+'</span><b class="li_b_1">'+co_new.Verification_Master_Id+'</b></a></li>'
$('#list_align_co_new_veri').append(lis);


}
   
}

});



function callnextco_new(index){

  superr_objj = co_new_veri_list[index];
  qualification_id =superr_objj.Verification_Master_Id;
  alert(qualification_id);


//alert('function address id 12 to 15');
        for(a=0;a<co_addressid_records_array.length;a++){
      address_obj = co_addressid_records_array[a];
   
superr_objj = co_new_veri_list[index];
      h =address_obj.user_id;
     hadd=address_obj.proof_type_id;
    proof=address_obj.proof_type_id
      g =superr_objj.Verification_Master_Id;
  
if( h == g && proof == '12' ){
address_obja = co_addressid_records_array[a];
alert(address_obja.user_id+'one addrreeedss idddd');
}

    }

 for(a=0;a<co_addressid_records_array.length;a++){
      address_obj = co_addressid_records_array[a];
   
superr_objj = co_new_veri_list[index];
      h =address_obj.user_id;
     hadd=address_obj.proof_type_id;
  proof=address_obj.proof_type_id
  //alert(proof);
      g =superr_objj.Verification_Master_Id;
  
if( h == g && proof == '13' ){
address_id = co_addressid_records_array[a];
alert(address_id.user_id+'one pan card id proof idddd');
}

    }


  for(a=0;a<co_basic_profile_records_array.length;a++){
      basic_profile_obj = co_basic_profile_records_array[a];
   
superr_objj = co_new_veri_list[index];
      h =basic_profile_obj.user_id;
  
      g =superr_objj.Verification_Master_Id;
  
if( h == g  ){
basic_profile_obja = co_basic_profile_records_array[a];
alert(basic_profile_obja.user_id+'one basic_profile_obja idddd');
}

    }

  for(a=0;a<co_educational_records_array.length;a++){
      edu_obj = co_educational_records_array[a];
   
superr_objj = co_new_veri_list[index];
      h =edu_obj.user_id;
  //alert(h+'dasf');
      g =superr_objj.Verification_Master_Id;
  education_type=edu_obj.education_type;
  //alert(education_type+'ooo');
if( h == g && education_type == '1' ){
education_co1 = co_educational_records_array[a];
alert(education_co1.user_id+'one education 11111');
}

if( h == g && education_type == '2' ){
education_co2 = co_educational_records_array[a];
alert(education_co2.user_id+'one education 2222');
}

if( h == g && education_type == '3' ){
education_co3 = co_educational_records_array[a];
alert(education_co3.user_id+'one education 333');
}

if( h == g && education_type == '4' ){
education_co4 = co_educational_records_array[a];
alert(education_co4.user_id+'one education 44');
}

if( h == g && education_type == '5' ){
education_co5 = co_educational_records_array[a];
alert(education_co5.user_id+'one education 55555');
}

    }


var address_obja=address_obja;
var basic_profile_obja=basic_profile_obja;
var address_id=address_id;
var education_co1=education_co1;
var education_co2=education_co2;
var education_co3=education_co3;
var education_co4=education_co4;
var education_co5=education_co5;

if(address_obja !== undefined){
  sessionStorage.setItem("address_id",JSON.stringify(address_id));
  $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
}

if(address_obja !== undefined){
   sessionStorage.setItem("basic_profile_obja",JSON.stringify(basic_profile_obja));
  $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
}

if(address_obja !== undefined){
 sessionStorage.setItem("currentobj_address_co",JSON.stringify(address_obja));}
  $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });

if(address_obja !== undefined){
 sessionStorage.setItem("education_co1",JSON.stringify(education_co1));
  $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
}

if(address_obja !== undefined){
 sessionStorage.setItem("education_co2",JSON.stringify(education_co2));
  $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
}

if(address_obja !== undefined){
 sessionStorage.setItem("education_co3",JSON.stringify(education_co3));
  $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
}

if(address_obja !== undefined){
 sessionStorage.setItem("education_co4",JSON.stringify(education_co4));
  $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
}

if(address_obja !== undefined){
 sessionStorage.setItem("education_co5",JSON.stringify(education_co5));
  $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
}


 sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
   $.mobile.changePage($('#tabpage'), { transition: "none", changeHash: true, reverse: false });
   return false;

/*var eductional_objq=eductional_objq;
var employment_objad=employment_objad;
var address_obja=address_obja;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
 //alert('currentob education succes');
 sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
sessionStorage.setItem("currentobj_educational_records_veri",JSON.stringify(eductional_objq));
   $.mobile.changePage($('#supervisor_verified_view_inside'), { transition: "none", changeHash: true, reverse: false });
       return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
 //alert('currentob address succes');
  sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
         sessionStorage.setItem("currentobja_addressid_veri",JSON.stringify(address_obja ));
   $.mobile.changePage($('#supervisor_verified_view_inside'), { transition: "none", changeHash: true, reverse: false });
       return false;
}
         
 if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
 //alert('currentob employment succes');
 sessionStorage.setItem("currentobj_veri",JSON.stringify(superr_objj));
         sessionStorage.setItem("currentobja_emnployment_veri",JSON.stringify(employment_objad ));
   $.mobile.changePage($('#supervisor_verified_view_inside'), { transition: "none", changeHash: true, reverse: false });
       return false;
}*/
   
         
         


    
        }