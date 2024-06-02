$(document).ready(function() {
  const selectedAmenities = {};

  $('input[type="checkbox"]').change(function() {
    if ($(this).is(':checked')) {
      selectedAmenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete selectedAmenities[$(this).attr('data-id')];
    }
    updateAmenitiesH4();
  });

  function updateAmenitiesH4() {
    const amenities = Object.values(selectedAmenities);
    if (amenities.length > 0) {
      $('.amenities h4').text(amenities.join(', '));
    } else {
      $('.amenities h4').html('&nbsp;');
    }
  }
});

