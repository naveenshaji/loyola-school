<?php require_once( 'pixelblenders/cms.php' ); ?>
<cms:template title='Content' clonable='1'>
	<cms:editable name='content_title' type='text' label="Title text" />
	<cms:editable name='content_subtitle' type='text' label="Subtitle text" />
	<cms:editable name='content_img' type='image' label="Image" />
	<cms:editable name='content_data' type='richtext' label="Content" />
	
	<cms:folder name='about' title="About Us" />
	<cms:folder name='milestones' title="Milestones" />
	<cms:folder name='lafest' title="LA Fest" />
	<cms:folder name='alumni' title="Alumni" />
	<cms:folder name='misc' title="Miscellaneous" />
</cms:template>
<cms:embed 'header.pxb' />
      <section style="background-image: url('<cms:show content_img />');" class="header-section fading-title parallax">
        <div class="section-shade sep-top-4x sep-bottom-2x">
          <div class="container">
            <div class="section-title text-center light">
              <h2 class="upper small-space"><cms:show content_title /></h2>
              <p class="lead upper"><cms:show content_subtitle /></p>
            </div>
          </div>
        </div>
      </section>
      <section class="sep-top-2x sep-bottom-2x">
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-md-offset-2 wow fadeInUp" data-wow-delay="1s" data-wow-duration="2s">
              <div data-wow-delay="0.5s" class="text-center wow bounceInLeft">
				<cms:show content_data />
              </div>
            </div>
          </div>
		 </div>
      </section>
<cms:embed 'footer.pxb' />
<?php COUCH::invoke(); ?>