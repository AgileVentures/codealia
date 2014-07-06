/*
 * This is part of the Codealia Project - http://codealia.org
 * Workshop 1 js library
 * Version: Alpha
 *
 * Copyright (c) 2014 AgileVentures Ltd
 *
 * All software produced within the Codealia Project is subject to the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

// Global
var ibObj;
var customSettings;
var baseUrl = "http://subtlepatterns.com/patterns/";
var apiUrl = "https://api.instagram.com/v1/";


/* Instagram Popular Fetch
------------------------------*/
function instagramFetch(settings){
	var access_token = settings.accessToken;
	var client_id = settings.clientId;
  	var param = {client_id:client_id};
    if( settings.call != 'usersearch' ) {
        fetchCMD(param, settings);
    }
    setBackground(settings);
}

function fetchCMD(param, settings){

	var cmdURL = "";

	if( settings.mode == 'user' ){
		// User Mode
		cmdURL = apiUrl + 'users/' + settings.userID + '/media/recent/?callback=?';
	} else {
		// Hashtag Mode
        cmdURL = apiUrl + "tags/" + settings.hashtag + "/media/recent?callback=?";
	}

   	$.getJSON(cmdURL, param, function(data){
		onPhotoLoaded(data, settings);
	});

}
/* Set Background image
 List of valid keywords:
 congruent_pentagon, sativa, skulls, food, lined_paper, giftly
 ------------------------------*/
function setBackground(settings){

    if(settings.bg == "congruent_pentagon"){
        $('html body').css('background-image', 'url(\'' + baseUrl + '/congruent_pentagon.png\')');
    } else if (settings.bg == "photography"){
        $('html body').css('background-image', 'url(\'' + baseUrl + '/photography.png\')');
    } else if (settings.bg == "skulls"){
        $('html body').css('background-image', 'url(\'' + baseUrl + '/skulls.png\')');
    } else if (settings.bg == "food"){
        $('html body').css('background-image', 'url(\'' + baseUrl + '/food.png\')');
    } else if (settings.bg == "lined_paper"){
        $('html body').css('background-image', 'url(\'' + baseUrl + '/lined_paper.png\')');
    } else if (settings.bg == "giftly"){
        $('html body').css('background-image', 'url(\'' + baseUrl + '/giftly.png\')');
    } else {
        //alert('No valid keyword');
        $('html body').css('background-image', 'url(\'' + baseUrl + '/giftly.png\')');
    }
    // $document.body.style.background
}

/* Instagram Tag Search
------------------------------*/
function instagramSearch(settings){
	var access_token = settings.accessToken;
	var client_id = settings.clientId;
  	var param = {client_id:client_id};

	var searchQuery = $(".searchBox").val().replace(/ /g,'');

    $('#searchMessage').text('Search results for:' + searchQuery);

    searchCMD(param, settings, searchQuery);
}

function searchCMD(param, settings, searchQuery){


	// Tag Search
	var cmdURL = 'https://api.instagram.com/v1/tags/' + searchQuery + '/media/recent?callback=?';

   	$.getJSON(cmdURL, param, function(data){
		onPhotoLoaded(data, settings);
	});

}

/* Instagram User Search
 ------------------------------*/
function instagramUserSearch(settings){
    var access_token = settings.accessToken;
    var searchQuery = $(".searchBox").val().replace(/ /g,'');
    var param = {access_token:access_token,q:searchQuery};

    userSearchCMD(param, settings);
}

function userSearchCMD(param, settings){
    var cmdURL = 'https://api.instagram.com/v1/users/search?callback=?';

    $.getJSON(cmdURL, param, function(data){
        onUserLoaded(data, settings);
    });
}

function onUserLoaded(data, settings){
    if( data.meta.code == 200 ){
        var users = data.data;
         console.log(data);

        if( users.length > 0 ){
            for( var key in users ){
                // Build UI
                var user = users[key];
                var instagramUser = '';

                instagramUser = '<div class="container"';
                instagramUser +=    '<div class="media" id="p' + user.id + '" title="' + user.username + '" rel="' + user.id + '">' ;
                instagramUser += 	    '<a class="pull-left" href="#" style="margin-right: 20px;"><img class="media-object thumbnail" src="' + user.profile_picture + '" style="width: 100px;" /></a>';
                instagramUser +=    '<div class="media-body">';
                instagramUser += 	    '<h3 class="media-heading">' + user.username + '</h3>';
                instagramUser += 	    '<p>' + user.full_name + '</p>';
                instagramUser += 	    '<h3 class="media-heading">User ID: ' + user.id + '</h3>';
                instagramUser +=    '</div>';
                instagramUser += '</div>';

                $(instagramUser).appendTo($('#results'));

            }
        } else {
            $(instagramUser).appendTo('No results :-(');
        }
    }
}





/* Response - Photo Handler
------------------------------*/
function onPhotoLoaded(data, settings){

	// Store Next Page of Results... // next_url
	if( data.pagination ){
		if( data.pagination.next_max_id ){
			instagramBrowserNextMax = data.pagination.next_max_id;
		} else {
			instagramBrowserNextMax = "Empty";
		}
	} else {
		instagramBrowserNextMax = "Empty";
	}

    if( data.meta.code == 200 ){

        var photos = data.data;

		if( ibObj.html() != "" ){
			var addingToList = true;
		} else {
			var addingToList = false;
		}

        if( photos.length > 0 ){

            // Set background image on jumbotron
            $('.jumbotron').css('background-image', 'url(' + photos[1].images.standard_resolution.url + ')');

            for( var key in photos ){

				// Get Photo Data
				var photo = photos[key];

				// Build DOM
				var instagramPhoto = '';
				var photoCaption = '';

				if( photo.caption ){
					photoCaption = photo.caption.text;
				} else {
					photoCaption = "Instagram Photo";
				}

				instagramPhoto = '<div class="col-md-3" style="height:400px;overflow:hidden;"><span class="instagram-photo" rel="' + photo.user.full_name + '" id="p' + photo.id + '" title="' + photoCaption + ' (' + photo.likes.count + ' Likes)" data-created="' + photo.created_time + '">';
				instagramPhoto += '<img src="' + photo.images.standard_resolution.url + '" width="100%"></span>';
				instagramPhoto += '<h4>' + photo.user.full_name +  '</h4>'
				instagramPhoto += '</div>';

	            $(instagramPhoto).appendTo(ibObj);
            }

			// Count photos
			var photoCount = $('.instagram-photo').size() - 1;

			if( addingToList == false ){
				$('.instagram-photo').hide();
			}

			$('.instagram-photo').each(function(index){

				// Store Current Photo
				currentPhoto = $(this);

				// Render Effect
				currentPhoto.delay( settings.delayInterval * index ).fadeIn(settings.speed);



			});

        } else {
            alert('No search results');
        }

    } else {
        alert(data.meta.error_message);
    }
}

$.fn.workshopOne = function ( options ) {

	/* Setting Up Variables
	------------------------------*/
	var settings = {
		accessToken : '251982636.ca88ba0.7e73b21637d84660a3744e2f4e3b7cbd', // This a mandatory setting that allows you to specify a user token.
        clientId:'ca88ba01af9b4b80acdb0d926cf2347c',
		userID : '1239267164', // Set to Codealias User ID as default. Used only in 'user' mode
		speed: 500, // Speed of the images fade in effect
		delayInterval : 80, // The interval of the delay between photos appearing.
        searchBox : ".searchContainer .searchBox"
	};

	ibObj = $(this);

	// Combine your options with our settings...
	$.extend(settings, options);

	/* Plugin Logic
	------------------------------*/
	return this.each(function() {

		// Powers Activate...
		$(document).ready(function(){
			instagramFetch(settings);
		});

		// Events
		$(".searchInstagram").click(function(){
			// Clear UI
			ibObj.html("");

			// Detect if the input has user rel or tag rel and use different methods for each...
			if( $('.searchInstagram').attr("rel") == "user" ){
				instagramUserSearch(settings);
			} else {
				instagramSearch(settings);
			}

		});


		$('.searchBox').keypress(function (e) {
			if (e.which == 13) {
				jQuery(this).blur();
				jQuery('.searchInstagram').focus().click();
			}
		});

		$(document).on({
			mouseenter: function() {
				var thisPhoto = $(this);
				var obHeight = thisPhoto.height();
				var obWidth = thisPhoto.width();

				// Date Conversion
				var obDate = parseInt(thisPhoto.attr("data-created"));
				obDate = new Date( obDate * 1000 );
				//obDate = dateFormat(obDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
				obDate = obDate.getUTCDay() + '/' + obDate.getUTCMonth() + '/' + obDate.getYear();

				var photoDesc = '<div class="instagram-hover-cover">';
				photoDesc +=        '<h3>' + thisPhoto.attr("rel") + '</h3>';
				photoDesc +=        '<em>' + obDate + '</em>';
				photoDesc +=        '<p>' + thisPhoto.attr("title").substring(0,196) + '</p>';
				photoDesc +=    '</div>';

				// Add Hover UI
				thisPhoto.append(photoDesc);

				// Size Hover UI
				$('.instagram-hover-cover').hide().css({
					"height" : "114px", // obHeight,
					"width" : obWidth
				}).slideDown("fast");
			},
			mouseleave: function(){
				var thisPhoto = $(this);

				thisPhoto.find(".instagram-hover-cover").delay(500).slideUp("fast", function(){
					$(this).remove();
				});
			}
		},".instagram-photo");

	});


}
