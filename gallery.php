<?php require_once( 'pixelblenders/cms.php' ); ?>
<cms:template title='Gallery' clonable='0'>
	<cms:editable name='content_title' type='text' label="Title text" />
	<cms:editable name='content_subtitle' type='text' label="Subtitle text" />
	<cms:editable name='content_img' type='image' label="Background image" />
	
	<cms:repeatable name='images'>
		<cms:editable name='img' type='image' width='800' height='600' crop='1' label="Image" />
		<cms:editable name="img_cat" label="Category" opt_values='Campus=campus | LA Fest=lafest | Golden Jubilee=gj | Infrastructure=infra | Events=events | Miscellaneous=misc' type='dropdown'/>
		<cms:editable name='img_title' type='text' label="Image title" />
		<cms:editable name='img_short' type='text' label="Short description (Optional)" />
	</cms:repeatable>
	
</cms:template>
<cms:embed 'header.pxb' />
      <section style="background-image: url('<cms:show content_img />');" class="header-section fading-title parallax">
        <div class="section-shade sep-top-4x sep-bottom-2x">
          <div class="container">
            <div class="section-title text-center light">
              <h2 class="upper small-space"><cms:show content_title /></h2>
              <p class="lead upper"><cms:show content_subtitle /></p>
            </div>
            <div id="filters" class="light text-center sep-top-lg wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="1s">
              <button data-filter="*" class="btn btn-xs btn-primary upper">Show All</button>
              <button data-filter=".campus" class="btn btn-xs upper">Our Campus</button>
              <button data-filter=".lafest" class="btn btn-xs upper">LA Fest</button>
              <button data-filter=".infra" class="btn btn-xs upper">Infrastructure</button>
              <button data-filter=".gj" class="btn btn-xs upper">Golden Jubilee</button>
			  <button data-filter=".events" class="btn btn-xs upper">Events</button>
			  <button data-filter=".misc" class="btn btn-xs upper">Miscellaneous</button>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio-gallery" data-folder="/portfolio">
        <div style="position:relative;" class="ajax-section section-gray">
          <div class="closeProject"><a href="#loader"><i class="fa fa-times"></i></a></div>
          <div class="loader"><i class="fa fa-circle-o-notch fa-spin fa-2x"></i></div>
          <div class="container">
            <div class="status-message"></div>
            <div class="ajax-content-outer">
              <div class="ajax-content-inner"></div>
              <div class="project-navigation nav-arrows"><a href="#" class="nextProject"><span class="nav-arrow-next"></span></a><a href="#" class="prevProject"><span class="nav-arrow-prev"></span></a></div>
            </div>
          </div>
        </div>
        <div class="article-body-content">
          <ul id="isotope" class="portfolio isotope">
		  <cms:show_repeatable 'images'>
            <li class="item <cms:show img_cat />">
			<img src="<cms:show img />" alt="<cms:show img_title />" class="img-responsive">
              <div class="mask">
                <div class="mask-content">
                  <div class="mask-wrapper text-center"><a href="<cms:show img />" data-rel="prettyPhoto[pp_gal]" title="<cms:show img_title />" class="info"><i class="fa fa-expand fa-border"></i></a>
                    <h4 class="upper"><cms:show img_title /></h4><span><cms:show img_short /></span>
                  </div>
                </div>
              </div>
            </li>
           </cms:show_repeatable>
          </ul>
        </div>
      </section>
<cms:embed 'footer.pxb' />
<?php COUCH::invoke(); ?>