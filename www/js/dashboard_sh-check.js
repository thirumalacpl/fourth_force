		$(document).on('pageshow', '#dashboard_sh', function(){  
      
//alert("dashboard shh");

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
   
 $(document).off('click', '#sh_new_verification').on('click', '#sh_new_verification', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#sh_new_veri_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#reject_shsh').on('click', '#reject_shsh', function() {
            alert('reject_shsh');

  $.mobile.changePage($('#sh_reject_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

    $(document).off('click', '#dashlogoutlg').on('click', '#dashlogoutlg', function() {
  sessionStorage.clear(); 
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

for(a=0;a<sh_new_veri_list_count.length;a++){
      new_count = sh_new_veri_list_count[a];
//alert(new_count.sh_new_veri_Count);
     $("#sh_new_veri_list_count").html(new_count.sh_new_veri_Count);
}


  for(a=0;a<sh_inprogress_list_count.length;a++){
      inprogress_count = sh_inprogress_list_count[a];
     //alert(inprogress_count.supervisor_inprogress_count+'supervisor_inprogress_count');
     $("#sh_inprogress_list_count").html(inprogress_count.sh_inprogress_list_count);

}

  for(a=0;a<sh_reject_list.length;a++){
      verified_count = sh_reject_list[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#sh_reject_list").html(verified_count.sh_reject_list);

}

  for(a=0;a<to_approved_sh.length;a++){
      verified_count = to_approved_sh[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#to_approved_sh").html(verified_count.to_approved_sh);

}

  for(a=0;a<completed_sh_count.length;a++){
      verified_count = completed_sh_count[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#completed_sh_count").html(verified_count.completed_sh_count);

}

 for(a=0;a<sh_waiting_count.length;a++){
      verified_count = sh_waiting_count[a];
    // alert(verified_count.supervisor_verified_count+'new_verification_count');
     $("#waiting_count_sh").html(verified_count.waiting_count_sh);

}




$(document).off('click', '#inprogress_sh').on('click', '#inprogress_sh', function() { 

//alert(region+'region inprogress_sh');

$.ajax({url: "http://staging.eimpressive.com/slim-cor/dash_sh_inprogress.php?region="+region,
    data:$('#e').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        $("#popupsearchmade").popup("open");
        sessionStorage.setItem("Inprogress_sh",JSON.stringify(result[0]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});



    $(document).off('click', '#tobeapproved').on('click', '#tobeapproved', function() { 
//alert('tobeapproved');
//alert(region+'region tobeapproved');

$.ajax({url: "http://staging.eimpressive.com/slim-cor/dash_tobeapproved_sh.php?region="+region,
    data:$('#ee').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        $("#popupsearchmade").popup("open");
         sessionStorage.setItem("tobe_approved_sh",JSON.stringify(result[0]));
        sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[1]));
         sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[2]));
          //sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[2]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_tobe_approved_list'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});
    
      $(document).off('click', '#completed_sh').on('click', '#completed_sh', function() { 
//alert('completed');
//alert(region+'region completed_sh');

$.ajax({url: "http://staging.eimpressive.com/slim-cor/dash_completed_sh.php?region="+region,
    data:$('#ee').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        $("#popupsearchmade").popup("open");
         sessionStorage.setItem("completed_sh",JSON.stringify(result[0]));
        sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[1]));
         sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[2]));
          //sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[2]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_completed_list'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});

     $(document).off('click', '#waiting_sh').on('click', '#waiting_sh', function() { 
//alert('waiting');
//alert(region+'region waiting_sh');

$.ajax({url: "http://staging.eimpressive.com/slim-cor/dash_waiting_sh.php?region="+region,
    data:$('#ee').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        $("#popupsearchmade").popup("open");
         sessionStorage.setItem("waiting_sh",JSON.stringify(result[0]));
        sessionStorage.setItem("supervisor_final_command_array",JSON.stringify(result[1]));
         //sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[2]));
          //sessionStorage.setItem("coordinator_final_comment_array",JSON.stringify(result[2]));

        $.mobile.loading().hide();
        $.mobile.changePage($('#sh_waiting_list'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });

});


 

        $(document).off('click', '#not_verified').on('click', '#not_verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});
  

 
  });
