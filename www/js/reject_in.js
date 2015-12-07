<!--super  sh inside start-->
<div data-role="page" id="sh_reject_inside">
 <script src="js/sh_reject_inside.js"></script>


<style type="text/css">

#sliderrqw {
  position: relative;
  overflow: hidden;
  margin: 20px auto 0 auto;
  border-radius: 4px;
}

#sliderrqw ul {
  position: relative;
  margin: 0;
  padding: 0;
  height: 200px;
  list-style: none;
}

#sliderrqw ul li {
  position: relative;
  display: block;
  float: left;
  margin: 0;
  padding: 0;
  width: 500px;
  height: 300px;
  background: #ccc;
  text-align: center;
  line-height: 300px;
}

a.control_prev, a.control_next {
  position: absolute;
  top: 40%;
  z-index: 999;
  display: block;
  padding: 4% 3%;
  width: auto;
  height: auto;
  background: #54566B;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  opacity: 0.8;
  cursor: pointer;
}

a.control_prev:hover, a.control_next:hover {
  opacity: 1;
  -webkit-transition: all 0.2s ease;
      background-color: #54566B;
}

a.control_prev {
  border-radius: 0 2px 2px 0;
}

a.control_next {
  right: 0;
  border-radius: 2px 0 0 2px;
}

.slider_option {
  position: relative;
  margin: 10px auto;
  width: 160px;
  font-size: 18px;
}

</style>
<script type="text/javascript">
  jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    //http://bit.ly/1LRZGaY
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
  var slideCount = $('#sliderrqw ul li').length;
  var slideWidth = $('#sliderrqw ul li').width();
  var slideHeight = $('#sliderrqw ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#sliderrqw').css({ width: slideWidth, height: slideHeight });
  
  $('#sliderrqw ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#sliderrqw ul li:last-child').prependTo('#sliderrqw ul');

$("#sliderrqw").on("swipeleft",function(){
  $('#sliderrqw ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#sliderrqw ul li:last-child').prependTo('#sliderrqw ul');
            $('#sliderrqw ul').css('left', '');
        });
});

$("#sliderrqw").on("swiperight",function(){

   $('#sliderrqw ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#sliderrqw ul li:first-child').appendTo('#sliderrqw ul');
            $('#sliderrqw ul').css('left', '');
        });
});
    function moveLeft() {
        $('#sliderrqw ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#sliderrqw ul li:last-child').prependTo('#sliderrqw ul');
            $('#sliderrqw ul').css('left', '');
        });
    };

    function moveRight() {
        $('#sliderrqw ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#sliderrqw ul li:first-child').appendTo('#sliderrqw ul');
            $('#sliderrqw ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });



});    

</script>

<style type="text/css">
.iGallery   {list-style:none; padding:0px; margin:0px}
.iGallery li  {list-style:none; padding:2px; margin:2px; border:1px solid #999; float:left}

/* imageflip CSS. Copy & Paste this to your CSS file */
#imageflippage  {background-color:#000; margin:0px; padding:0px; border:none; height:100%; width:100%}
#tadcontent   {padding:0px; margin:0px; position:relative; background:#000; height:100%; width:100%;}
#imageflipimg {vertical-align:middle; height:100%; width:100%; z-index:98; background-position:center; background-size:100% 100%; text-align:center; background-repeat:no-repeat }
#imagefliper  {width:100%; top:45px; bottom:0px; position:absolute; z-index:99}
#tadnavi    {position:fixed; top:0px; z-index:100; width:100%; opacity:0.7; display:block }
#tadinfo    {position:fixed; display:none; bottom:0px; width:100%; padding:5px; background-color:#333333; opacity:0.7; color:#FFFFFF; text-align:center; font-size:small; font-family:Verdana, Geneva, sans-serif}

</style>
<script type="text/javascript">
$(document).on('pageshow', '#sh_reject_inside', function(){  
  $('.iGallery').imageflip()
  //alert('8');
})
</script>



      <div data-role="panel" id="bottomsheet" data-animate="false" data-position='bottom' data-display="overlay">
        <nd2-include data-src="examples/fragments/bottom.sheet.html"></nd2-include>
      </div>

<div data-role="panel" id="overlayPanelasteruui" data-display="push" data-position="left" data-dismissible="false" data-swipe-close="false"> 

  <div class='nd2-sidepanel-profile wow fadeInDown'>
          <img class='profile-background' src="images/slide/slide-bg.png" />
          <div class="row">
            <div class='col-xs-12 center-xs'>
              <div class='box box1'>
                <img class="profile-thumbnail" src="images/slide/profile.png"  />
             </div>
            </div>
             </div>
              <div class="row">
            <div class='col-xs-12 center-xs'>
              <div class='box profile-text box1'>
                  <strong id="userlistinh"></strong>
      <!--           <span class='subline' id='city_name_newlistq'>Super Power User</span> -->
              
          </div>
        </div>
        </div>

            </div>


<ul data-role="listview" data-inset="true">
      
      <li id="dashcooiuo"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right "><span class="ww">Dashboard</span></a></li>
      <!-- <li id="newsh"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right "><span class="ww">New Verification</span></a></li> -->
      <li id="inprogresscooiuo"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right "><span class="ww">Inprogress Verification</span></a></li>
       <li id="waitinguo"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right "  ><span class="ww">Waiting For Approval </span></a></li>
      <li id="shapproveduo"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right "  ><span class="ww">To Be Approved </span></a></li>
      <li id="completedshuo"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right "  ><span class="ww">Verified-True</span></a></li>

      <li id="rejectieiuo"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right " ><span class="ww">Rejected </span></a></li> 
       <li id="verifaluo"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right " ><span class="ww">Verified-False </span></a></li> 
    <!--   <li id="reportcooi"><a href="#" class="ui-btn ui-icon-carat-r ui-btn-icon-right " ><span class="ww">Help Desk </span></a></li>  -->
      
       <li><a href="#" id="signoutcooiuo" class="ui-btn sio a_mar">
      <span class="ww si">Sign Out <img src="images/signout.png" alt="" class="img_sign"></span></a></li>

</ul>

    <!--<a href="#" id="super_view_inside_signout" class="ui-btn sio ui-icon-power ui-btn-icon-right">
      <span class="ww si">Sign Out</span></a>-->
</div> 
<!--panel end-->

      <div data-role="header" data-position="fixed" class="wow fadeInDown" data-wow-delay="0.2s">
        <a href="#" class="ui-btn ui-btn-right wow fadeIn" data-wow-delay='1.2s' id="before_new_listr"><img src="images/arrow.png" alt="" class="img_sign"></a>
        <a href="#overlayPanelasteruui" class="ui-btn ui-btn-left wow fadeIn" data-wow-delay='0.8s'>
          <i class="zmdi zmdi-menu"></i></a>
        <h1 class="wow fadeIn" data-wow-delay='0.4s' style="text-align:center;">New Verification</h1>
         </div>

<div data-role="main" class="ui-content">

<div class="ui-grid-solo">
  <div class="ui-block-a">

<div id="sliderrqw" style="width: 500px; height: 300px;">
  <a href="#" class="control_next">></a>
  <a href="#" class="control_prev"><</a>
 <ul class="iGallery ssnewinpcq" style="width: 2000px; margin-left: -500px;" >


<!--   <li >slide 1</li>
     <li style="background: #aaa;" > slide 2</li>
    <li >slide 3</li>
     <li style="background: #aaa;" > slide 4</li>  -->
 
  </ul>

</div>
</div>
</div>



<div class="proof">

 <div class="ui-grid-b pri_grid_2" id="sda_newcw">
     <!--        <div class="ui-block-a pri_grid_1 pri_grid_bor">
              <i class="zmdi zmdi-graduation-cap zmdi-hc-2x " style="color: #4CCCD3;"></i>
              <p class="pri_p">B.SC</p>
              <span class="pri_span">Degree</span>

            </div>
            <div class="ui-block-b pri_grid_1 pri_grid_bor">
                <i class="zmdi zmdi-time zmdi-hc-2x " style="color: #4CCCD3;"></i>
              <p class="pri_p">2014</p>
              <span class="pri_span">Degree</span>
            </div>
            
            <div class="ui-block-c pri_grid_1">
              <img src="images/primary/percentage.png" alt="">
     
              <p class="pri_p">75</p>
              <span class="pri_span">Degree</span>
            </div> -->
            
        </div>
</div>
 
  <div class="ui-grid-solo pri_list">
    <div class="ui-block-a">

   <ul id="lii_newcw">

</ul>

   </div>

   </div>


                      



<div class="ui-grid-solo" style="padding:0.7em !important;">
<div class="ui-block-a ">
     <form action="" id="update_to_hari">

<!--   <div id='select'></div>   -->
  <select id="first">
 
    
  </select>  


<br>


<div class="ui-grid-solo" style="background-color:#54566B !important; padding:0px !important; color:#fff !important;">
<div class="ui-block-a">
<a href="#" class="ui-btn ui-corner-all ui-shadow" id="haribut">Submit</a>
<!--  <a href="#mpopup" data-rel="popup" data-position-to="window" data-transition="flip" class="ui-btn fed" >Feedback</a> -->
</div>
</div>
</form>
</div>
</div>

<!--  <div data-role="popup" id="mpopup" class="bam">
     <form method="post" name="feedback_form" id="feedback_form" action="#">
<label for="feedback" class="yel">Share your feedback</label>
<textarea name="feedback" id="feedback" class="wi" placeholder="How can we help you?"></textarea>
<div class="cena">
<a href="#" class="ui-btn butms" id="feedback_submit" data-rel="back">Submit</a>
</div>
 </form>
    </div> -->



</div>

</div>

<!--sh new inside end-->