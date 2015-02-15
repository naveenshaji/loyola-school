<?php require_once( 'pixelblenders/cms.php' ); ?>
<cms:template title='Home'>
	<cms:editable name='home_img' type='image' label="Background image" />
	<cms:editable name='home_logo' type='image' label="Logo (PNG with TrueTransparency only)" desc="Use PNG image of dimension 488x488" />
	<cms:editable name='home_overview' label="Overview text" />
	<cms:editable name='home_academic_text' label="Academic Excellence text" />
	<cms:editable name='home_isc' type='text' label="ISC Distinction Percentage" desc="Enter just the number without a percent symbol" />
	<cms:editable name='home_cbse' type='text' label="CBSE Distinction Percentage" desc="Enter just the number without a percent symbol" />
	<cms:editable name='home_hsc' type='text' label="HSC Distinction Percentage" desc="Enter just the number without a percent symbol" />
	<cms:editable name='home_icse' type='text' label="ICSE Distinction Percentage" desc="Enter just the number without a percent symbol" />
	<cms:repeatable name='mgmt' label="Management Staff images">
		<cms:editable name='mgmt_img' type='image' width='400' height='300' quality='50' crop='1' label="Image" />
		<cms:editable name='mgmt_name' type='text' label="Name" />
		<cms:editable name='mgmt_short' type='text' label="Designation" />
		<cms:editable name='mgmt_desc' type='text' label="Short description (Optional)" />
	</cms:repeatable>
</cms:template>
<cms:embed 'header.pxb' />
      <section class="demo-2">
        <div id="slider" style="display:none;" class="sl-slider-wrapper">
          <div class="sl-slider">
            <div data-orientation="horizontal" data-slice1-rotation="-25" data-slice2-rotation="-25" data-slice1-scale="2" data-slice2-scale="2" class="sl-slide">
              <div style="background-image: url(<cms:show home_img />); background-attachment: fixed;" class="sl-slide-inner">
                <div class="slide-container" style="background: rgba(241,159,30,0.3);">
                  <div class="slide-content text-center"><img src="<cms:show home_logo />" alt="LOYOLA" class="deco wow fadeInLeft" data-wow-delay="1.7s" data-wow-duration="1s">
                    <h2 class="main-title wow fadeInDown" data-wow-delay="0.5s" data-wow-duration="1s" style="text-align: center">LOYOLA SCHOOL<br><span class="text-primary" style="font-size:0.7em">TRIVANDRUM</span></h2>
                    <blockquote class="wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s">
                      <p></p>
					  <a href="http://www.loyolaschooltrivandrum.com/cbse/" target="_blank" class="btn btn-light btn-bordered btn-lg">Visit Loyola CBSE</a>
					  <a class="btn btn-primary btn-lg" href="notif.php">Announcements</a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="overview" class="sep-top-2x sep-bottom-2x">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2">
              <div data-wow-delay="0.5s" class="text-center wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
                <h3 class="upper" style="padding-bottom:15px">Overview</h3>
                <p class="lead" style="text-align:justify">
					<cms:show home_overview />
				</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-gray sep-top-2x sep-bottom-2x">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div data-wow-delay="0.5s" class="sep-top-xs wow fadeInLeft" data-wow-delay="1s" data-wow-duration="2.5s"><img src="<cms:show home_logo />" alt="" class="img-responsive"></div>
            </div>
            <div class="col-md-8">
              <div data-wow-delay="0.5s" class="wow fadeInRight" data-wow-delay="1s" data-wow-duration="1.5s">
                <h3 class="upper">Academic Excellence</h3>
                <p>
                  <cms:show home_academic_text />
                </p>
                <div class="sep-top-xs">
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="<cms:show home_isc />" aria-valuemin="0" aria-valuemax="100" style="width: <cms:show home_isc />%;" class="progress-bar">ISC Distinction</div>
                  </div>
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="<cms:show home_cbse />" aria-valuemin="0" aria-valuemax="100" style="width: <cms:show home_cbse />%;" class="progress-bar">CBSE Distinction</div>
                  </div>
                  <div class="progress">
                    <div role="progressbar" aria-valuenow="<cms:show home_hsc />" aria-valuemin="0" aria-valuemax="100" style="width: <cms:show home_hsc />%;" class="progress-bar">HSC Distinction</div>
                  </div>
				  <div class="progress">
                    <div role="progressbar" aria-valuenow="<cms:show home_icse />" aria-valuemin="0" aria-valuemax="100" style="width: <cms:show home_icse />%;" class="progress-bar">ICSE Distinction</div>
                  </div>
                  <div class="indicator"><span class="indicator-line"></span><span class="pull-left">0</span><span class="middle">50</span><span class="pull-right">100</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="sep-top-2x sep-bottom-2x">
        <div class="container">
          <h4 class="upper">Management</h4>
          <div class="row">
		  <cms:show_repeatable 'mgmt'>
            <div class="col-md-3 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
              <div class="sep-top-xs sep-bottom-sm">
                <div class="team-photo"><img src="<cms:show mgmt_img />" alt="<cms:show mgmt_name />" class="img-responsive">
                  <div class="team-connection">
                  </div>
                </div>
              </div>
              <div class="team-name">
                <h5 class="upper"><cms:show mgmt_name /></h5><span><cms:show mgmt_short /></span>
              </div>
              <p>
			  <cms:show mgmt_desc />
			  </p>
            </div>
		  </cms:show_repeatable>
          </div>
        </div>
      </section>
<cms:embed 'footer.pxb' />
<?php COUCH::invoke(); ?>