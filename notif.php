<?php require_once( 'pixelblenders/cms.php' ); ?>
<cms:template title='Notifications' clonable='0'>
	<cms:editable name='notif_title' type='text' label="Title text" />
	<cms:editable name='notif_subtitle' type='text' label="Subtitle text" />
	<cms:editable name='notif_img' type='image' label="Image" />
	<cms:editable name='notif_data' type='richtext' label="Content" />
</cms:template>
<cms:embed 'header.pxb' />
      <section style="background-image: url('<cms:show notif_img />');" class="header-section fading-title parallax">
        <div class="section-shade sep-top-4x sep-bottom-2x">
          <div class="container">
            <div class="section-title text-center light">
              <h2 class="upper small-space"><cms:show notif_title /></h2>
              <p class="lead upper"><cms:show notif_subtitle /></p>
            </div>
          </div>
        </div>
      </section>
      <section class="sep-top-2x sep-bottom-2x">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s">
              <div data-wow-delay="0.5s" class="text-center wow bounceInLeft">
				<cms:show notif_data />
              </div>
            </div>
          </div>
		 </div>
      </section>
<cms:embed 'footer.pxb' />
<?php COUCH::invoke(); ?>