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

  // Check API status
  $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});

