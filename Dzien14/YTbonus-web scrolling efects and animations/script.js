const $doc = $(document);
  const $header = $('header');
  const $main = $('main');

  $doc.on("scroll", function () {
   //aktualna wartość scrolla
   const scrollPos = $doc.scrollTop();

   //gdzie (ile pikseli) jest dany element od początku strony.
   const sectionOffset = $main.offset().top;
   
   // Jaka jest wysokość elementu
   const headerHeight = $header.outerHeight();

   if (scrollPos < sectionOffset) {
    console.log("zmiana")
    $header.css({
     'opacity': 1 - scrollPos / headerHeight,
     'filter': 'grayscale(' + 2 * scrollPos / headerHeight + ')'
    })
   }

   // console.log(1 - scrollPos / headerHeight)

  })