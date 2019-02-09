function changeText() {

  const scrollSize = $(document).scrollTop();
  // console.log(scrollSize);

  const s1Height = $('.sekction1').height();
  const s2Height = $('.sekction2').height();
  const s3Height = $('.sekction3').height();
  const s4Height = $('.sekction4').height();
  // console.log(s1Height);

  // .innerHeight() - obejmuje padding ale nie obejmuje marginesu i bordera
  // .outerHeight() - obejmuje border, padding i height samo w sobie
  // .outerHeight(true) - obejmuje wszystko

  const fromBeginingS1 = $('.sekction1').offset().top.toFixed();
  const fromBeginingS2 = $('.sekction2').offset().top;
  const fromBeginingS3 = $('.sekction3').offset().top;
  const fromBeginingS4 = $('.sekction4').offset().top;

  // console.log(fromBeginingS3);

  if (scrollSize < s1Height) {
    $('div.info').text('section 1')
  } else if (scrollSize < s2Height + fromBeginingS2) {
    $('div.info').text('section 2')
  } else if (scrollSize < s3Height + fromBeginingS3) {
    $('div.info').text('section 3')
  } else {
    $('div.info').text('section 4')
  }
}
$(document).on('scroll', changeText)
