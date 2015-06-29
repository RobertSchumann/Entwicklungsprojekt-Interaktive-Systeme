// Userlist data array for filling in info box
var userListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Go to Home button click
    $('#btnHome').on('click', goHome);

    // Go to Search button click
    $('#btnSearch').on('click', goSearch);

    // Go to Browse button click
    $('#btnBrowse').on('click', goBrowse);

    // Go to Trade Offers button click
    $('#btnTradeOffers').on('click', goTradeOffers);

    // Go to Trade History button click
    $('#btnTradeHistory').on('click', goTradeHistory);

    // Go to My Account button click
    $('#btnMyAccount').on('click', goAccount);

    // Change Visibility of Add to Library button click
    $('#btnAddToLibraryVisibility').on('click', addToLibraryVisibility);

    // Add to Library button click
    $('#btnAddToLibrary').on('click', addToLibrary);

    // Change Visibility of Add to Wish List button click
    $('#btnAddToWishListVisibility').on('click', addToWishListVisibility);

    // Add to WishList button click
    $('#btnAddToWishList').on('click', addToWishList);

    // Change Account button click
    $('#btnChangeAccount').on('click', changeAccount);


    // Delete from library click
    $('#library table tbody').on('click', 'td a.linkdeletefromlibrary', deleteFromLibrary);

    // Delete from wishlist click
    $('#wishList table tbody').on('click', 'td a.linkdeletefromwishlist', deleteFromWishList);

    // Add to Wish List click
    $('#browse table tbody').on('click', 'td a.linkaddtowishlist', linkAddToWishList);

    // Offer Trade click
    $('#tradeOffers table tbody').on('click', 'td a.linkoffertrade', offerTrade);

    // Accept Trade click
    $('#tradeOffers table tbody').on('click', 'td a.linkaccepttrade', acceptTrade);

    // Rate Trade click
    $('#tradeHistory table tbody').on('click', 'td a.linkratetrade', rateTrade);

    

    // Populate the tables on initial page load
    populateLibraryTable();
    populateWishListTable();
    populateBrowseTable();
    populateTradeOffersTable();
    populateTradeHistoryTable();
});

// Functions =============================================================

// Fill Library table with data
function populateLibraryTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/library', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td><a href="#" class="linkdeletefromlibrary" rel="' + this._id + '">Delete from Library</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#library table tbody').html(tableContent);
    });
};

// Fill Wish List table with data
function populateWishListTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/wishlist', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td><a href="#" class="linkdeletefromwishlist" rel="' + this._id + '">Delete from Wish List</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#wishList table tbody').html(tableContent);
    });
};

// Fill Browse table with data
function populateBrowseTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/browse', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td><a href="#" class="linkaddtowishlist" rel="' + this._id + '">Add to Wish List</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#browse table tbody').html(tableContent);
    });
};

// Fill Trade Offers table with data
function populateTradeOffersTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/tradeoffers', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.status + '</td>';
            tableContent += '<td>' + this.bookID + '</td>';
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td> <--> </td>';
            tableContent += '<td>' + this.trader + '</td>';
            tableContent += '<td>' + this.bookIDTrader + '</td>';
            tableContent += '<td>' + this.authorTrader + '</td>';
            tableContent += '<td>' + this.titelTrader + '</td>';
            tableContent += '<td>' + this.editionTrader + '</td>';
            tableContent += '<td>' + this.publisherTrader + '</td>';
            tableContent += '<td>' + this.isbn10Trader + '</td>';
            tableContent += '<td>' + this.isbn13Trader + '</td>';
            tableContent += '<td><a href="#" class="linkoffertrade" rel="' + this._id + '">Offer Trade</a></td>';
            tableContent += '<td><a href="#" class="linkaccepttrade" rel="' + this._id + '">Accept Trade</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#tradeOffers table tbody').html(tableContent);
    });
};

// Fill Trade History table with data
function populateTradeHistoryTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/tradehistory', function( data ) {

        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td>' + this.status + '</td>';
            tableContent += '<td>' + this.bookID + '</td>';            
            tableContent += '<td>' + this.author + '</td>';
            tableContent += '<td>' + this.titel + '</td>';
            tableContent += '<td>' + this.edition + '</td>';
            tableContent += '<td>' + this.publisher + '</td>';
            tableContent += '<td>' + this.isbn10 + '</td>';
            tableContent += '<td>' + this.isbn13 + '</td>';
            tableContent += '<td> <--> </td>';
            tableContent += '<td>' + this.trader + '</td>';
            tableContent += '<td>' + this.bookIDTrader + '</td>';
            tableContent += '<td>' + this.authorTrader + '</td>';
            tableContent += '<td>' + this.titelTrader + '</td>';
            tableContent += '<td>' + this.editionTrader + '</td>';
            tableContent += '<td>' + this.publisherTrader + '</td>';
            tableContent += '<td>' + this.isbn10Trader + '</td>';
            tableContent += '<td>' + this.isbn13Trader + '</td>';
tableContent += '<td><a href="#" class="linkratetrade" rel="' + this._id + '">Rate Trade</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#tradeHistory table tbody').html(tableContent);
    });
};




// Add to Library
function addToLibrary(event) {
    event.preventDefault();

    // increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addToLibrary input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newEntry = {
            'bookID': $('#addToLibrary fieldset input#inputBookID').val(),
            'author': $('#addToLibrary fieldset input#inputAuthor').val(),
            'titel': $('#addToLibrary fieldset input#inputTitel').val(),
            'edition': $('#addToLibrary fieldset input#inputEdition').val(),
            'publisher': $('#addToLibrary fieldset input#inputPublisher').val(),
            'isbn10': $('#addToLibrary fieldset input#inputISBN10').val(),
            'isbn13': $('#addToLibrary fieldset input#inputISBN13').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newEntry,
            url: '/users/addtolibrary',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addToLibrary fieldset input').val('');

                // Update the table
                populateLibraryTable();

            }
            else {

                // alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
}

// Add to WishList
function addToWishList(event) {
    event.preventDefault();

    // increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addToWishList input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newEntry = {
            'bookID': $('#addToWishList fieldset input#inputBookID').val(),
            'author': $('#addToWishList fieldset input#inputAuthor').val(),
            'titel': $('#addToWishList fieldset input#inputTitel').val(),
            'edition': $('#addToWishList fieldset input#inputEdition').val(),
            'publisher': $('#addToWishList fieldset input#inputPublisher').val(),
            'isbn10': $('#addToWishList fieldset input#inputISBN10').val(),
            'isbn13': $('#addToWishList fieldset input#inputISBN13').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newEntry,
            url: '/users/addtowishlist',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addToWishList fieldset input').val('');

                // Update the table
                populateWishListTable();

            }
            else {

                // alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
}

// Delete From Library
function deleteFromLibrary(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this entry?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deletefromlibrary/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateLibraryTable();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};

// Delete User From WishList
function deleteFromWishList(event) {

    event.preventDefault();

    // Pop up a confirmation dialog
    var confirmation = confirm('Are you sure you want to delete this entry?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        // If they did, do our delete
        $.ajax({
            type: 'DELETE',
            url: '/users/deletefromwishlist/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateWishListTable();

        });

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

};


// Go to Home
function goHome(event) {

    event.preventDefault();


        $('#btnHome').hide();
        $('#btnSearch').show();
        $('#btnBrowse').show();
        $('#btnTradeOffers').show();
        $('#btnTradeHistory').show();
        $('#btnMyAccount').show();

        $('#library').show();
        $('#libraryH').show();
        $('#btnAddToLibraryVisibility').show();

        $('#wishList').show();
        $('#wishListH').show();
        $('#btnAddToWishListVisibility').show();

        $('#addToLibrary').hide();
        $('#addToLibraryH').hide();

        $('#addToWishList').hide();
        $('#addToWishListH').hide();        

        $('#browse').hide();
        $('#browseH').hide();

        $('#tradeOffers').hide();
        $('#tradeOffersH').hide();

        $('#tradeHistory').hide();
        $('#tradeHistoryH').hide();

        $('#myAccount').hide();
        $('#myAccountH').hide();

};    

// Go to Search
function goSearch(event) {

    event.preventDefault();


        $('#btnHome').show();
        $('#btnSearch').hide();
        $('#btnBrowse').show();
        $('#btnTradeOffers').show();
        $('#btnTradeHistory').show();
        $('#btnMyAccount').show();

        $('#library').hide();
        $('#libraryH').hide();
        $('#btnAddToLibraryVisibility').hide();

        $('#wishList').hide();
        $('#wishListH').hide();
        $('#btnAddToWishListVisibility').hide();

        $('#addToLibrary').show();
        $('#addToLibraryH').show();

        $('#addToWishListH').css('margin-top',200);
        $('#addToWishList').show();
        $('#addToWishListH').show();

        $('#browse').hide();
        $('#browseH').hide();

        $('#tradeOffers').hide();
        $('#tradeOffersH').hide();

        $('#tradeHistory').hide();
        $('#tradeHistoryH').hide();

        $('#myAccount').hide();
        $('#myAccountH').hide();



};

// Go to Browse
function goBrowse(event) {

    event.preventDefault();


        $('#btnHome').show();
        $('#btnSearch').show();
        $('#btnBrowse').hide();
        $('#btnTradeOffers').show();
        $('#btnTradeHistory').show();
        $('#btnMyAccount').show();

        $('#library').hide();
        $('#libraryH').hide();
        $('#btnAddToLibraryVisibility').hide();

        $('#wishList').hide();
        $('#wishListH').hide();
        $('#btnAddToWishListVisibility').hide();

        $('#addToLibrary').hide();
        $('#addToLibraryH').hide();

        $('#addToWishList').hide();
        $('#addToWishListH').hide();

        $('#browse').show();
        $('#browseH').show();

        $('#tradeOffers').hide();
        $('#tradeOffersH').hide();

        $('#tradeHistory').hide();
        $('#tradeHistoryH').hide();

        $('#myAccount').hide();
        $('#myAccountH').hide();


};

// Go to Trade Offers
function goTradeOffers(event) {

    event.preventDefault();


        $('#btnHome').show();
        $('#btnSearch').show();
        $('#btnBrowse').show();
        $('#btnTradeOffers').hide();
        $('#btnTradeHistory').show();
        $('#btnMyAccount').show();

        $('#library').hide();
        $('#libraryH').hide();
        $('#btnAddToLibraryVisibility').hide();

        $('#wishList').hide();
        $('#wishListH').hide();
        $('#btnAddToWishListVisibility').hide();

        $('#addToLibrary').hide();
        $('#addToLibraryH').hide();

        $('#addToWishList').hide();
        $('#addToWishListH').hide();

        $('#browse').hide();
        $('#browseH').hide();

        $('#tradeOffers').show();
        $('#tradeOffersH').show();

        $('#tradeHistory').hide();
        $('#tradeHistoryH').hide();

        $('#myAccount').hide();
        $('#myAccountH').hide();



};

// Go to Trade History
function goTradeHistory(event) {

    event.preventDefault();


        $('#btnHome').show();
        $('#btnSearch').show();
        $('#btnBrowse').show();
        $('#btnTradeOffers').show();
        $('#btnTradeHistory').hide();
        $('#btnMyAccount').show();

        $('#library').hide();
        $('#libraryH').hide();
        $('#btnAddToLibraryVisibility').hide();

        $('#wishList').hide();
        $('#wishListH').hide();
        $('#btnAddToWishListVisibility').hide();

        $('#addToLibrary').hide();
        $('#addToLibraryH').hide();

        $('#addToWishList').hide();
        $('#addToWishListH').hide();

        $('#browse').hide();
        $('#browseH').hide();

        $('#tradeOffers').hide();
        $('#tradeOffersH').hide();

        $('#tradeHistory').show();
        $('#tradeHistoryH').show();

        $('#myAccount').hide();
        $('#myAccountH').hide();



};

// Go to My Account
function goAccount(event) {

    event.preventDefault();


        $('#btnHome').show();
        $('#btnSearch').show();
        $('#btnBrowse').show();
        $('#btnTradeOffers').show();
        $('#btnTradeHistory').show();
        $('#btnMyAccount').hide();

        $('#library').hide();
        $('#libraryH').hide();
        $('#btnAddToLibraryVisibility').hide();

        $('#wishList').hide();
        $('#wishListH').hide();
        $('#btnAddToWishListVisibility').hide();

        $('#addToLibrary').hide();
        $('#addToLibraryH').hide();

        $('#addToWishList').hide();
        $('#addToWishListH').hide();

        $('#browse').hide();
        $('#browseH').hide();

        $('#tradeOffers').hide();
        $('#tradeOffersH').hide();

        $('#tradeHistory').hide();
        $('#tradeHistoryH').hide();

        $('#myAccount').show();
        $('#myAccountH').show();



};

// Change visibility of Add to Library
function addToLibraryVisibility(event) {

    event.preventDefault();

        $('#btnHome').show();
        $('#btnSearch').show();
        $('#btnBrowse').show();
        $('#btnTradeOffers').show();
        $('#btnTradeHistory').show();
        $('#btnMyAccount').show();

        $('#library').hide();
        $('#libraryH').hide();
        $('#btnAddToLibraryVisibility').hide();

        $('#wishList').hide();
        $('#wishListH').hide();
        $('#btnAddToWishListVisibility').hide();

        $('#addToLibrary').show();
        $('#addToLibraryH').show();

        $('#addToWishList').hide();
        $('#addToWishListH').hide();

        $('#browse').hide();
        $('#browseH').hide();

        $('#tradeOffers').hide();
        $('#tradeOffersH').hide();

        $('#tradeHistory').hide();
        $('#tradeHistoryH').hide();

        $('#myAccount').hide();
        $('#myAccountH').hide();



};

// Change Visibility of Add to Wish List
function addToWishListVisibility(event) {

    event.preventDefault();

        $('#btnHome').show();
        $('#btnSearch').show();
        $('#btnBrowse').show();
        $('#btnTradeOffers').show();
        $('#btnTradeHistory').show();
        $('#btnMyAccount').show();

        $('#library').hide();
        $('#libraryH').hide();
        $('#btnAddToLibraryVisibility').hide();

        $('#wishList').hide();
        $('#wishListH').hide();
        $('#btnAddToWishListVisibility').hide();

        $('#addToLibrary').hide();
        $('#addToLibraryH').hide();

        $('#addToWishListH').css('margin-top',40);
        $('#addToWishList').show();
        $('#addToWishListH').show();

        $('#browse').hide();
        $('#browseH').hide();

        $('#tradeOffers').hide();
        $('#tradeOffersH').hide();

        $('#tradeHistory').hide();
        $('#tradeHistoryH').hide();

        $('#myAccount').hide();
        $('#myAccountH').hide();



};

// Change Visibility of My Account
function changeAccount(event) {

    event.preventDefault();

};

// Offer Trade
function offerTrade(event) {

    event.preventDefault();

// jQuery AJAX call for JSON
    $.getJSON( '/users/tradeoffers', function( data ) {

        // compile all user info into one object
        var newEntry = 
            { "status": "angeboten",
            "bookID": data[0].bookID,
            "author": data[0].author,
            "titel": data[0].titel,
            "edition": data[0].edition,
            "publisher": data[0].publisher,
            "isbn10": data[0].isbn10,
            "isbn13": data[0].isbn13,
            "trader": data[0].trader,
            "bookIDTrader": data[0].bookIDTrader,
            "authorTrader": data[0].authorTrader,
            "titelTrader": data[0].titelTrader,
            "editionTrader": data[0].editionTrader,
            "publisherTrader": data[0].publisherTrader,
            "isbn10Trader": data[0].isbn10Trader,
            "isbn13Trader": data[0].isbn13Trader };

        // delete old entry
        $.ajax({
            type: 'DELETE',
            url: '/users/deletefromtradeoffers/' + $(this).attr('rel')
        }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {

        // Use AJAX to post the object to service
        $.ajax({
            type: 'POST',
            data: newEntry,
            url: '/users/addtotradeoffers',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                populateTradeOffersTable();

            }
            else {

                // alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
            }
            else {
                alert('Error: ' + response.msg);
            }
        });


   
    });
};


// Accept Trade
function acceptTrade(event) {

    event.preventDefault();

};

// Rate Trade
function rateTrade(event) {

    event.preventDefault();

};

// Add to Wish List link
function linkAddToWishList(event) {

    event.preventDefault();


// jQuery AJAX call for JSON
    $.getJSON( '/users/browse/' + $(this).attr('rel'), function( data ) {

        // compile all user info into one object
        var newEntry = 
            { "bookID": data[0].bookID,
            "author": data[0].author,
            "titel": data[0].titel,
            "edition": data[0].edition,
            "publisher": data[0].publisher,
            "isbn10": data[0].isbn10,
            "isbn13": data[0].isbn13 };

        // Use AJAX to post the object to service
        $.ajax({
            type: 'POST',
            data: newEntry,
            url: '/users/addtowishlist',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

    // Pop up a confirmation dialog
    var confirmation = confirm('You have moved this entry to your Wish List. Go there now?');

    // Check and make sure the user confirmed
    if (confirmation === true) {

        $('#btnHome').hide();
        $('#btnSearch').show();
        $('#btnBrowse').show();
        $('#btnTradeOffers').show();
        $('#btnTradeHistory').show();
        $('#btnMyAccount').show();

        $('#library').show();
        $('#libraryH').show();
        $('#btnAddToLibraryVisibility').show();

        $('#wishList').show();
        $('#wishListH').show();
        $('#btnAddToWishListVisibility').show();

        $('#addToLibrary').hide();
        $('#addToLibraryH').hide();

        $('#addToWishList').hide();
        $('#addToWishListH').hide();        

        $('#browse').hide();
        $('#browseH').hide();

        $('#tradeOffers').hide();
        $('#tradeOffersH').hide();

        $('#tradeHistory').hide();
        $('#tradeHistoryH').hide();

        $('#myAccount').hide();
        $('#myAccountH').hide();

    }
    else {

        // If they said no to the confirm, do nothing
        return false;

    }

                // Update the table
                populateWishListTable();

            }
            else {

                // alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
   
    });
};





