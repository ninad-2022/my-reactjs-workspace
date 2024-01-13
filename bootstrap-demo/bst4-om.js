<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css"
    />
    <link
      rel="stylesheet"
      href="OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css"
    />
</head>
  <body>
    <div class="owl-carousel owl-theme">
      <div class="item"><h4>1</h4></div>
      <div class="item"><h4>2</h4></div>
      <div class="item"><h4>3</h4></div>
      <div class="item"><h4>4</h4></div>
      <div class="item"><h4>5</h4></div>
      <div class="item"><h4>6</h4></div>
      <div class="item"><h4>7</h4></div>
      <div class="item"><h4>8</h4></div>
      <div class="item"><h4>9</h4></div>
      <div class="item"><h4>10</h4></div>
      <div class="item"><h4>11</h4></div>
      <div class="item"><h4>12</h4></div>
    </div>

    <script
      src="https://code.jquery.com/jquery-3.6.0.min.js"
      integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
      crossorigin="anonymous"
    ></script>

    <script src="OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>

    <script>
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        },
      });
    </script>
  </body>
</html>