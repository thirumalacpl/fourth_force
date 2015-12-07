		$(document).on('pageshow', '#dashboard_sh', function(){  
      
alert("dashboard shh");

  sh_regionarray =  JSON.parse(sessionStorage.getItem("sh_regionarray"));
/*
		co_new_veri_list_count_array = 	JSON.parse(sessionStorage.getItem("co_new_veri_list_count_array"));*/
  
   sh_new_veri_list =  JSON.parse(sessionStorage.getItem("sh_new_veri_list"));
    sh_new_veri_list_count =  JSON.parse(sessionStorage.getItem("sh_new_veri_list_count"));
    sh_inprogress_list_count =  JSON.parse(sessionStorage.getItem("sh_inprogress_list_count"));
    sh_waiting_count =  JSON.parse(sessionStorage.getItem("sh_waiting_count"));
    to_approved_sh =  JSON.parse(sessionStorage.getItem("to_approved_sh"));
    completed_sh_count =  JSON.parse(sessionStorage.getItem("completed_sh_count"));
    sh_reject_list =  JSON.parse(sessionStorage.getItem("sh_reject_list"));





//alert(regionArray_array.region);
var region=sh_regionarray.co_region;
 //alert(region+'region');
var username=sh_regionarray.username;
 
 $('#state_name').text(sh_regionarray.username);
   


   $(document).off('click', '#dashlogoutlg').on('click', '#dashlogoutlg', function() {
  sessionStorage.getItem.clear;
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

 

        $(document).off('click', '#not_verified').on('click', '#not_verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});
  

 
  });
