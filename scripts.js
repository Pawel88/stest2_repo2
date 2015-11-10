/*$(document).ready(function() {
	$("#rndbutton, #video").on('hover', function() {
    	if($("#video img").attr('src') == '/img/video.png') {
    		$("#video img").attr('src', '/img/videoHover.png');
    	}
    	if($("#rndbutton img").attr('src') == '/img/rnd-button.png') {
    		$("#rndbutton img").attr('src', '/img/rnd-button-click.png');
    	}
    },

    function()
    {
    	if($('#rndbutton img').attr('src') == '/img/rnd-button-click.png'){
    		$('#rndbutton img').attr('src', '/img/rnd-button.png')
    	}
    	if($("#video img").attr('src') == '/img/videoHover.png'){
    		$("#video img").attr('src', '/img/video.png')
    	}
    });
});*/

// the one above doesn't work. Can't figure out why...


$(document).ready(function() {
	$("#rndbutton, #video").on('mouseover', function() {
    	if($("#video img").attr('src') == '/img/video.png') {
    		$("#video img").attr('src', '/img/videoHover.png');
    	}
    	if($("#rndbutton img").attr('src') == '/img/rnd-button.png') {
    		$("#rndbutton img").attr('src', '/img/rnd-button-click.png');
    	}
    });

    $("#rndbutton, #video").on('mouseout', function()
    {
    	if($('#rndbutton img').attr('src') == '/img/rnd-button-click.png'){
    		$('#rndbutton img').attr('src', '/img/rnd-button.png')
    	}
    	if($("#video img").attr('src') == '/img/videoHover.png'){
    		$("#video img").attr('src', '/img/video.png')
    	}
    });
});