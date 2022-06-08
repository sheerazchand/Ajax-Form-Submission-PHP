  <form class="d-flex flex-column mt-hero-form mt-form" method="post" role="form">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/mt-form.png">
    <h2>Professional Website Development Services with <strong>50% Off</strong></h2>
    <input type="hidden" id="tag" value="Home Hero" />
    <input class="mt-border" id="name" type="text" placeholder="Enter Your name" required/>
    <input class="mt-border" id="email" type="email" placeholder="Enter Your Email" required/>
    <input class="mt-border" id="phone" type="number" placeholder="Phone Number" required/>
    <textarea placeholder="Message" id="message" required></textarea>

    <p id="result"></p>

    <input type="submit" id="submit" />
  </form>
